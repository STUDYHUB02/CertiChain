require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers"); // Ensure this line is present


/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "l9RE1o0lYqvteKlwXDrhrCrkYHcTmh1-"
const SEPOLIA_PRIVATE_KEY = "4977e3887adb879389259c70e4a4afba54b83632322bc9082afe0149917cab5b";

module.exports = {
  solidity: "0.8.17",
  networks:{
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
