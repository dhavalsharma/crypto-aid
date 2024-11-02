const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        FundRaiser: {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "shortUrl",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "goal",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "enum FundRaiser.Category",
                  name: "category",
                  type: "uint8",
                },
              ],
              name: "CampaignCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "shortUrl",
                  type: "string",
                },
              ],
              name: "CampaignStopped",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "string",
                  name: "shortUrl",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "donor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "identity",
                  type: "string",
                },
              ],
              name: "DonationReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "campaignUrls",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "campaigns",
              outputs: [
                {
                  internalType: "string",
                  name: "title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "goal",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amountRaised",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isActive",
                  type: "bool",
                },
                {
                  internalType: "enum FundRaiser.Category",
                  name: "category",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "shortUrl",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_title",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_goal",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_durationInDays",
                  type: "uint256",
                },
                {
                  internalType: "enum FundRaiser.Category",
                  name: "_category",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
              ],
              name: "createCampaign",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_identity",
                  type: "string",
                },
              ],
              name: "donate",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllCampaignUrls",
              outputs: [
                {
                  internalType: "string[]",
                  name: "",
                  type: "string[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllCampaigns",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "creator",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "goal",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountRaised",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "isActive",
                      type: "bool",
                    },
                    {
                      internalType: "enum FundRaiser.Category",
                      name: "category",
                      type: "uint8",
                    },
                    {
                      internalType: "string",
                      name: "shortUrl",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "donorAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "amount",
                          type: "uint256",
                        },
                        {
                          internalType: "string",
                          name: "identity",
                          type: "string",
                        },
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct FundRaiser.Donor[]",
                      name: "donors",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct FundRaiser.Campaign[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
              ],
              name: "getCampaignDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "title",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "creator",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "goal",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "deadline",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "amountRaised",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "isActive",
                      type: "bool",
                    },
                    {
                      internalType: "enum FundRaiser.Category",
                      name: "category",
                      type: "uint8",
                    },
                    {
                      internalType: "string",
                      name: "shortUrl",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "donorAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "amount",
                          type: "uint256",
                        },
                        {
                          internalType: "string",
                          name: "identity",
                          type: "string",
                        },
                        {
                          internalType: "uint256",
                          name: "timestamp",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct FundRaiser.Donor[]",
                      name: "donors",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct FundRaiser.Campaign",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
              ],
              name: "getCampaignDonors",
              outputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "donorAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "identity",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct FundRaiser.Donor[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
              ],
              name: "stopCampaign",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_shortUrl",
                  type: "string",
                },
              ],
              name: "withdrawFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        SplitExpenses: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "expenseId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "ExpenseCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "expenseId",
                  type: "uint256",
                },
              ],
              name: "ExpenseSettled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "payer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "commission",
                  type: "uint256",
                },
              ],
              name: "ExpenseSettledLog",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              name: "FriendAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_walletAddress",
                  type: "address",
                },
              ],
              name: "addFriend",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "_participants",
                  type: "address[]",
                },
              ],
              name: "createExpense",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "expenses",
              outputs: [
                {
                  internalType: "uint256",
                  name: "expenseId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "payer",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "settled",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "friendList",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "friends",
              outputs: [
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "exists",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_expenseId",
                  type: "uint256",
                },
              ],
              name: "getExpense",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "expenseId",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "payer",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "participants",
                      type: "address[]",
                    },
                    {
                      internalType: "bool",
                      name: "settled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct SplitExpenses.Expense",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getExpenses",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "expenseId",
                      type: "uint256",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "amount",
                      type: "uint256",
                    },
                    {
                      internalType: "address",
                      name: "payer",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "participants",
                      type: "address[]",
                    },
                    {
                      internalType: "bool",
                      name: "settled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct SplitExpenses.Expense[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_walletAddress",
                  type: "address",
                },
              ],
              name: "getFriend",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "walletAddress",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "exists",
                      type: "bool",
                    },
                  ],
                  internalType: "struct SplitExpenses.Friend",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFriends",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_expenseId",
                  type: "uint256",
                },
              ],
              name: "settleExpense",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
