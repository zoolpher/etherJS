
// According to ethers v6
//0x417997417dd95f45bb4986abff5dfae5b5b0a34a

const { ethers, formatEther } = require("ethers");
/*
formatEther:
    a utility function used to convert a value in wei (the smallest unit of Ether) 
    into a human-readable string in ETH
    1 ETH = 1,000,000,000,000,000,000 wei (10¹⁸ wei)
*/

const provider = new ethers.JsonRpcProvider(`Add you infura key`);                // v6
// const provider = new ethers.providers.JsonRpcProvider(`Add you infura key`);   // v5

const walletAddress = "0x417997417dd95f45bb4986abff5dfae5b5b0a34a";
const walletAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
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
    name: "contractBalance",
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
    name: "getValue",
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
    name: "name",
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
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractIntreaction = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );

  
  const contractName = await walletContract.name();
  console.log("Contract Name:", contractName);

  
  const num = await walletContract.getValue();
  console.log("Number Value:", num.toString());     // v6   (convert BigInt to string)
  // console.log("Number Value:", Number(num));     // v6   (convert BigInt to number)
  // console.log("Number Value:", String(num));     // v5

  
  const contractBalance = await walletContract.contractBalance();
  const balethContract = formatEther(contractBalance);                   // v6  
  // const balethContract = Number(contractBalance) / 1e18;              // v6   (alternate method) 
  // const balethContract = ethers.utils.formatEther(contractBalance);   // v5

  
  const userBalance = await walletContract.accountBalance(
    "0xBE4024Fa7461933F930DD3CEf5D1a01363E9f284"
  );
  const balethUser = formatEther(userBalance);                     // v6  
  // const balethUser = Number(userBalance) / 1e18;                // v6   (alternate method)   
  // const balethUser = ethers.utils.formatEther(userBalance);     // v5
  console.log("User Balance:", balethUser);
};

contractIntreaction();
