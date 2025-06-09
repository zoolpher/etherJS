const { ethers, formatEther, parseEther } = require("ethers");

const provider = new ethers.JsonRpcProvider(                // v6
// const provider = new ethers.providers.JsonRpcProvider(   // v5
  `Enter You INFURA mainnet endpoint`
);

const querryBlockchain = async () => {
  //   const block = await provider.getBlockNumber();
  //   console.log("Current Block Number:", block);

  const balance = await provider.getBalance(
    "0xf8238a3dd9a67b8419412eDE613A06D73Ffc2D93"
  );
  console.log("Account Balance In BN:", balance);

  const balanceEther = formatEther(balance);                  // v6
  // const balanceEther = ethers.utils.formatEther(balance);  // v5
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = parseEther(balanceEther);                  // v6
  // const balanceWei = ethers.utils.parseEther(balanceEther);  // v5
  console.log(balanceWei);
};
querryBlockchain();
