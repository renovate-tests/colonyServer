/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from 'ethers'
import { Provider } from 'ethers/providers'

import { IColonyNetwork } from './IColonyNetwork'

export class IColonyNetworkFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IColonyNetwork {
    return new Contract(address, _abi, signerOrProvider) as IColonyNetwork
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: 'approveExitRecovery',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'exitRecoveryMode',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'numRecoveryRoles',
    outputs: [
      {
        name: 'numRoles',
        type: 'uint64',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_slot',
        type: 'uint256',
      },
      {
        name: '_value',
        type: 'bytes32',
      },
    ],
    name: 'setStorageSlotRecovery',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isInRecoveryMode',
    outputs: [
      {
        name: 'inRecoveryMode',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_slot',
        type: 'uint256',
      },
    ],
    name: 'checkNotAdditionalProtectedVariable',
    outputs: [],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
    ],
    name: 'removeRecoveryRole',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
    ],
    name: 'setRecoveryRole',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'enterRecoveryMode',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'setTo',
        type: 'bool',
      },
    ],
    name: 'RecoveryRoleSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'resolver',
        type: 'address',
      },
    ],
    name: 'ColonyNetworkInitialised',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'tokenLocking',
        type: 'address',
      },
    ],
    name: 'TokenLockingAddressSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'miningCycleResolver',
        type: 'address',
      },
    ],
    name: 'MiningCycleResolverSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'feeInverse',
        type: 'uint256',
      },
    ],
    name: 'NetworkFeeInverseSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'version',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'resolver',
        type: 'address',
      },
    ],
    name: 'ColonyVersionAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'metaColony',
        type: 'address',
      },
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'rootSkillId',
        type: 'uint256',
      },
    ],
    name: 'MetaColonyCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'colonyId',
        type: 'uint256',
      },
      {
        indexed: true,
        name: 'colonyAddress',
        type: 'address',
      },
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
    ],
    name: 'ColonyAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'skillId',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'parentSkillId',
        type: 'uint256',
      },
    ],
    name: 'SkillAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'auction',
        type: 'address',
      },
      {
        indexed: false,
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        name: 'quantity',
        type: 'uint256',
      },
    ],
    name: 'AuctionCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'inactiveReputationMiningCycle',
        type: 'address',
      },
    ],
    name: 'ReputationMiningInitialised',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'hash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'nNodes',
        type: 'uint256',
      },
    ],
    name: 'ReputationMiningCycleComplete',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'newHash',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'newNNodes',
        type: 'uint256',
      },
      {
        indexed: false,
        name: 'stakers',
        type: 'address[]',
      },
      {
        indexed: false,
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'ReputationRootHashSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'label',
        type: 'bytes32',
      },
    ],
    name: 'UserLabelRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'colony',
        type: 'address',
      },
      {
        indexed: false,
        name: 'label',
        type: 'bytes32',
      },
    ],
    name: 'ColonyLabelRegistered',
    type: 'event',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'interfaceID',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        name: 'status',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_reputationMiningCycle',
        type: 'address',
      },
      {
        name: '_id',
        type: 'uint256',
      },
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'int256',
      },
      {
        name: '_skillId',
        type: 'uint256',
      },
      {
        name: '_colony',
        type: 'address',
      },
      {
        name: '_nUpdates',
        type: 'uint128',
      },
      {
        name: '_nPreviousUpdates',
        type: 'uint128',
      },
    ],
    name: 'setReplacementReputationUpdateLogEntry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_reputationMiningCycle',
        type: 'address',
      },
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getReplacementReputationUpdateLogEntry',
    outputs: [
      {
        components: [
          {
            name: 'user',
            type: 'address',
          },
          {
            name: 'amount',
            type: 'int256',
          },
          {
            name: 'skillId',
            type: 'uint256',
          },
          {
            name: 'colony',
            type: 'address',
          },
          {
            name: 'nUpdates',
            type: 'uint128',
          },
          {
            name: 'nPreviousUpdates',
            type: 'uint128',
          },
        ],
        name: 'reputationLogEntry',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_reputationMiningCycle',
        type: 'address',
      },
    ],
    name: 'getReplacementReputationUpdateLogsExist',
    outputs: [
      {
        name: 'exists',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getMetaColony',
    outputs: [
      {
        name: 'colonyAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getColonyCount',
    outputs: [
      {
        name: 'count',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_colony',
        type: 'address',
      },
    ],
    name: 'isColony',
    outputs: [
      {
        name: 'addressIsColony',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_parentSkillId',
        type: 'uint256',
      },
    ],
    name: 'addSkill',
    outputs: [
      {
        name: 'skillId',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_skillId',
        type: 'uint256',
      },
    ],
    name: 'getSkill',
    outputs: [
      {
        components: [
          {
            name: 'nParents',
            type: 'uint128',
          },
          {
            name: 'nChildren',
            type: 'uint128',
          },
          {
            name: 'parents',
            type: 'uint256[]',
          },
          {
            name: 'children',
            type: 'uint256[]',
          },
          {
            name: 'globalSkill',
            type: 'bool',
          },
          {
            name: 'deprecated',
            type: 'bool',
          },
        ],
        name: 'skill',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_skillId',
        type: 'uint256',
      },
    ],
    name: 'deprecateSkill',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_user',
        type: 'address',
      },
      {
        name: '_amount',
        type: 'int256',
      },
      {
        name: '_skillId',
        type: 'uint256',
      },
    ],
    name: 'appendReputationUpdateLog',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getSkillCount',
    outputs: [
      {
        name: 'count',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReputationMiningSkillId',
    outputs: [
      {
        name: 'skillId',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_tokenLockingAddress',
        type: 'address',
      },
    ],
    name: 'setTokenLocking',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getTokenLocking',
    outputs: [
      {
        name: 'lockingAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_tokenAddress',
        type: 'address',
      },
    ],
    name: 'createMetaColony',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_tokenAddress',
        type: 'address',
      },
    ],
    name: 'createColony',
    outputs: [
      {
        name: 'colonyAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_version',
        type: 'uint256',
      },
      {
        name: '_resolver',
        type: 'address',
      },
    ],
    name: 'addColonyVersion',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_resolver',
        type: 'address',
      },
      {
        name: '_version',
        type: 'uint256',
      },
    ],
    name: 'initialise',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'getColony',
    outputs: [
      {
        name: 'colonyAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getCurrentColonyVersion',
    outputs: [
      {
        name: 'version',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_skillId',
        type: 'uint256',
      },
      {
        name: '_parentSkillIndex',
        type: 'uint256',
      },
    ],
    name: 'getParentSkillId',
    outputs: [
      {
        name: 'skillId',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_skillId',
        type: 'uint256',
      },
      {
        name: '_childSkillIndex',
        type: 'uint256',
      },
    ],
    name: 'getChildSkillId',
    outputs: [
      {
        name: 'skillId',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_active',
        type: 'bool',
      },
    ],
    name: 'getReputationMiningCycle',
    outputs: [
      {
        name: 'repMiningCycleAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_timeStaked',
        type: 'uint256',
      },
      {
        name: '_submissonIndex',
        type: 'uint256',
      },
    ],
    name: 'calculateMinerWeight',
    outputs: [
      {
        name: 'minerWeight',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '_version',
        type: 'uint256',
      },
    ],
    name: 'getColonyVersionResolver',
    outputs: [
      {
        name: 'resolverAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'newHash',
        type: 'bytes32',
      },
      {
        name: 'newNNodes',
        type: 'uint256',
      },
      {
        name: 'stakers',
        type: 'address[]',
      },
      {
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'setReputationRootHash',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'startNextCycle',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'initialiseReputationMining',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReputationRootHash',
    outputs: [
      {
        name: 'rootHash',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReputationRootHashNNodes',
    outputs: [
      {
        name: 'nNodes',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
    ],
    name: 'startTokenAuction',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_ens',
        type: 'address',
      },
      {
        name: '_rootNode',
        type: 'bytes32',
      },
    ],
    name: 'setupRegistrar',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'username',
        type: 'string',
      },
      {
        name: 'orbitdb',
        type: 'string',
      },
    ],
    name: 'registerUserLabel',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'colonyName',
        type: 'string',
      },
      {
        name: 'orbitdb',
        type: 'string',
      },
    ],
    name: 'registerColonyLabel',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'orbitdb',
        type: 'string',
      },
    ],
    name: 'updateColonyOrbitDB',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'orbitdb',
        type: 'string',
      },
    ],
    name: 'updateUserOrbitDB',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'node',
        type: 'bytes32',
      },
    ],
    name: 'getProfileDBAddress',
    outputs: [
      {
        name: 'orbitDB',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'lookupRegisteredENSDomain',
    outputs: [
      {
        name: 'domain',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'node',
        type: 'bytes32',
      },
    ],
    name: 'addr',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getENSRegistrar',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'miningResolverAddress',
        type: 'address',
      },
    ],
    name: 'setMiningResolver',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getMiningResolver',
    outputs: [
      {
        name: 'miningResolverAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getFeeInverse',
    outputs: [
      {
        name: '_feeInverse',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_feeInverse',
        type: 'uint256',
      },
    ],
    name: 'setFeeInverse',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
