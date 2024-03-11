const referralAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CannotRenewReferralCodesYet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidReferralCode',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotRegistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OnlyTrendsMarketAllowed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referee',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'referrer',
        type: 'address',
      },
    ],
    name: 'RefereeAlreadyHasReferrer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReferralCodeAlreadyUsed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'referee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrer',
        type: 'address',
      },
    ],
    name: 'RegisteredReferer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'generateCodes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'generateCodes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFullReferralData',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amountOfReferee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'canRenewCodesAt',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'startDate',
                type: 'uint256',
              },
              {
                internalType: 'address',
                name: 'referrer',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'referee',
                type: 'address',
              },
            ],
            internalType: 'struct IReferrals.ReferralData',
            name: 'referralData',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'code',
                type: 'string',
              },
              {
                internalType: 'bool',
                name: 'used',
                type: 'bool',
              },
            ],
            internalType: 'struct IReferrals.UsedCodes[]',
            name: 'codes',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IReferrals.FullReferralData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getReferral',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'referrer',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'referee',
            type: 'address',
          },
        ],
        internalType: 'struct IReferrals.ReferralData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'getReferrer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'lastRenewal',
    outputs: [
      {
        internalType: 'uint256',
        name: 'lastCodeRenewal',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'refereeAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amountOfReferee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'code',
        type: 'string',
      },
    ],
    name: 'referralCodes',
    outputs: [
      {
        internalType: 'enum IReferrals.CodeState',
        name: 'state',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'referrals',
    outputs: [
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'referrer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'referee',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referee',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'code',
        type: 'string',
      },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export default referralAbi;
