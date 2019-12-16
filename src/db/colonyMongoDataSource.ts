import { Db, ObjectID } from 'mongodb'
import { MongoDataSource } from 'apollo-datasource-mongo'
import { CachedCollection } from 'apollo-datasource-mongo/dist/cache'
import { DataSource, DataSourceConfig } from 'apollo-datasource'

import {
  ColonyDoc,
  DomainDoc,
  EventDoc,
  NotificationDoc,
  TaskDoc,
  TokenDoc,
  UserDoc,
} from './types'
import { CollectionNames } from './collections'

// TODO re-enable cache
// const DEFAULT_TTL = { ttl: 10000 }
const DEFAULT_TTL = { ttl: undefined }

interface Collections {
  colonies: CachedCollection<ColonyDoc>
  domains: CachedCollection<DomainDoc>
  events: CachedCollection<EventDoc<any>>
  notifications: CachedCollection<NotificationDoc>
  tasks: CachedCollection<TaskDoc>
  tokens: CachedCollection<TokenDoc>
  users: CachedCollection<UserDoc>
}

export class ColonyMongoDataSource extends MongoDataSource<Collections, {}>
  implements DataSource<any> {
  public readonly collections: Collections

  constructor(db: Db) {
    super([
      db.collection(CollectionNames.Colonies),
      db.collection(CollectionNames.Domains),
      db.collection(CollectionNames.Events),
      db.collection(CollectionNames.Notifications),
      db.collection(CollectionNames.Tasks),
      db.collection(CollectionNames.Tokens),
      db.collection(CollectionNames.Users),
    ])
  }

  // This shouldn't be necessary, but there were problems with the GraphQL types
  initialize(config: DataSourceConfig<{}>): void {
    super.initialize(config)
  }

  // TODO consider extending API of MongoDataSource for document transformation
  private static transformColony({
    _id,
    tokenRefs = [],
    taskIds = [],
    ...doc
  }: ColonyDoc) {
    return {
      ...doc,
      createdAt: _id.getTimestamp(),
      id: doc.colonyAddress,
      taskIds,
      tokenRefs,
      tasks: [],
      tokens: [],
      domains: [],
      subscribedUsers: [],
    }
  }

  private static transformUser({
    _id,
    colonyAddresses = [],
    taskIds = [],
    tokenAddresses = [],
    ...profile
  }: UserDoc) {
    return {
      id: profile.walletAddress,
      createdAt: _id.getTimestamp(),
      colonies: [],
      tasks: [],
      tokens: [],
      colonyAddresses,
      tokenAddresses,
      taskIds,
      profile,
    }
  }

  private static transformEvent<C extends object>({
    _id,
    context,
    type,
    ...doc
  }: EventDoc<C>) {
    const id = _id.toHexString()
    return {
      ...doc,
      id,
      createdAt: _id.getTimestamp(),
      sourceId: id,
      type,
      context: {
        ...context,
        type, // For the sake of discriminating the union type in gql
      },
    }
  }

  private static transformToken({ _id, ...doc }: TokenDoc) {
    return { ...doc, id: doc.address, createdAt: _id.getTimestamp() }
  }

  private static transformDomain({ _id, ...doc }: DomainDoc) {
    return {
      ...doc,
      tasks: [],
      id: _id.toHexString(),
      createdAt: _id.getTimestamp(),
    }
  }

  private static transformTask({
    workInviteAddresses = [],
    workRequestAddresses = [],
    _id,
    ...doc
  }: TaskDoc) {
    return {
      ...doc,
      id: _id.toHexString(),
      createdAt: _id.getTimestamp(),
      events: [],
      workInvites: [],
      workRequests: [],
      workRequestAddresses,
      workInviteAddresses,
    }
  }

  async getColonyByAddress(colonyAddress: string) {
    const [doc] = await this.collections.colonies.findManyByQuery(
      { colonyAddress },
      DEFAULT_TTL,
    )

    if (!doc) {
      throw new Error(`Colony with address '${colonyAddress}' not found`)
    }

    return ColonyMongoDataSource.transformColony(doc)
  }

  async getColoniesByAddress(colonyAddresses: string[]) {
    const docs = await this.collections.colonies.findManyByQuery(
      { colonyAddress: { $in: colonyAddresses } },
      DEFAULT_TTL,
    )
    return docs.map(ColonyMongoDataSource.transformColony)
  }

  async getTaskById(taskId: string) {
    const doc = await this.collections.tasks.findOneById(taskId, DEFAULT_TTL)

    if (!doc) throw new Error(`Task with id '${taskId}' not found`)

    return ColonyMongoDataSource.transformTask(doc)
  }

  async getTaskByEthId(colonyAddress: string, ethTaskId: number) {
    const [doc] = await this.collections.tasks.findManyByQuery(
      { colonyAddress, ethTaskId },
      DEFAULT_TTL,
    )

    if (!doc)
      throw new Error(
        `Task with ID '${ethTaskId}' for colony '${colonyAddress}' not found`,
      )

    return ColonyMongoDataSource.transformTask(doc)
  }

  async getTasksById(taskIds: string[]) {
    const docs = await this.collections.tasks.findManyByIds(
      taskIds,
      DEFAULT_TTL,
    )

    return docs.map(ColonyMongoDataSource.transformTask)
  }

  async getTasksByEthDomainId(colonyAddress: string, ethDomainId: number) {
    const docs = await this.collections.tasks.findManyByQuery(
      { colonyAddress, ethDomainId },
      DEFAULT_TTL,
    )

    return docs.map(ColonyMongoDataSource.transformTask)
  }

  async getDomainByEthId(colonyAddress: string, ethDomainId: number) {
    const [doc] = await this.collections.domains.findManyByQuery(
      { colonyAddress, ethDomainId },
      DEFAULT_TTL,
    )

    if (!doc)
      throw new Error(
        `Domain with ID '${ethDomainId}' for colony '${colonyAddress}' not found`,
      )

    return ColonyMongoDataSource.transformDomain(doc)
  }

  async getColonyDomains(colonyAddress: string) {
    const docs = await this.collections.domains.findManyByQuery(
      { colonyAddress },
      DEFAULT_TTL,
    )
    return docs.map(ColonyMongoDataSource.transformDomain)
  }

  async getUserByAddress(walletAddress: string) {
    const [doc] = await this.collections.users.findManyByQuery(
      { walletAddress },
      DEFAULT_TTL,
    )

    if (!doc) throw new Error(`User with address '${walletAddress}' not found`)

    return ColonyMongoDataSource.transformUser(doc)
  }

  async getUsersByAddress(walletAddresses: string[]) {
    const docs = await this.collections.users.findManyByQuery(
      { walletAddress: { $in: walletAddresses } },
      DEFAULT_TTL,
    )
    return docs.map(ColonyMongoDataSource.transformUser)
  }

  async getColonySubscribedUsers(colonyAddress: string) {
    const docs = await this.collections.users.findManyByQuery(
      { colonies: colonyAddress },
      DEFAULT_TTL,
    )
    return docs.map(ColonyMongoDataSource.transformUser)
  }

  private async getUserNotifications(address: string, query: object) {
    const docs = ((await this.collections.notifications['collection']
      .aggregate([
        { $match: query },
        { $unwind: '$users' },
        { $match: { 'users.address': address } },
        {
          $lookup: {
            from: this.collections.events['collection'].collectionName,
            localField: 'eventId',
            foreignField: '_id',
            as: 'events',
          },
        },
        {
          $project: {
            _id: '$_id',
            event: { $arrayElemAt: ['$events', 0] },
            read: { $ifNull: ['$users.read', false] },
          },
        },
      ])
      .toArray()) as unknown) as {
      _id: ObjectID
      read: boolean
      event: EventDoc<any>
    }[]
    return docs.map(({ event, read, _id }) => ({
      id: _id.toHexString(),
      read,
      event: ColonyMongoDataSource.transformEvent(event),
    }))
  }

  async getAllUserNotifications(address: string) {
    return this.getUserNotifications(address, {
      'users.address': address,
    })
  }

  async getReadUserNotifications(address: string) {
    return this.getUserNotifications(address, {
      users: { address, read: true },
    })
  }

  async getUnreadUserNotifications(address: string) {
    return this.getUserNotifications(address, {
      users: { address, read: false },
    })
  }

  async getTaskEvents(taskId: string) {
    const events = await this.collections.events.findManyByQuery(
      {
        'context.taskId': taskId,
      },
      DEFAULT_TTL,
    )
    return events.map(ColonyMongoDataSource.transformEvent)
  }

  async getTokenByAddress(tokenAddress: string) {
    const [token] = await this.collections.tokens.findManyByQuery(
      { address: tokenAddress },
      DEFAULT_TTL,
    )

    if (!token) {
      throw new Error(`Token with address '${tokenAddress}' not found`)
    }

    return ColonyMongoDataSource.transformToken(token)
  }

  async getTokensByAddress(tokenAddresses: string[]) {
    const tokens = await this.collections.tokens.findManyByQuery(
      { address: { $in: tokenAddresses } },
      DEFAULT_TTL,
    )
    return tokens.map(ColonyMongoDataSource.transformToken)
  }
}