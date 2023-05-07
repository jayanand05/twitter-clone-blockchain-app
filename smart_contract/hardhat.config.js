require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      allowUnlimitedContractSize: true,
      url: "https://eth-sepolia.g.alchemy.com/v2/B0DTN8D4AvvxSgSqv5m1N6jWWOSr_2iC",
      accounts: [
        "5756453c00115130118cab1cb74f0cf330736d6bd47c5609d8f4b0a479297f2f",
      ],
      chainId: 11155111,
    },
  },
};

//0xbdAc85A3809D9187E75644bF07D278182581392e
