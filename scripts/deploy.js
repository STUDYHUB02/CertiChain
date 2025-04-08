// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";
import fs from "fs"


// async function main() {

//   const Token = await ethers.getContractFactory("CertificateStore")
//   const token = await Token.deploy();
  

//   console.log(`Certichain Contract deployed to `, token.address);
//   fs.writeFileSync(
//     "./config.js",
//     `export const certichainAddress = "${certichain.address}"`
//   );
// }
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


async function main() {
  const [deployer] = await hre.ethers.getSigners(); // Use `hre.ethers`
  console.log(`Deploying contracts with account: ${deployer.address}`);

  // Check balance
  let balance = await deployer.getBalance();
  console.log(`Account balance: ${hre.ethers.utils.formatEther(balance)} ETH`);

  // Get contract factory
  const Token = await hre.ethers.getContractFactory("CertificateStore");

  // Deploy contract with custom gas settings
  const token = await Token.deploy({
    gasLimit: 5000000, // Adjust based on estimation
    gasPrice: hre.ethers.utils.parseUnits("10", "gwei"), // Adjust gas price if needed
  });

  await token.deployed();
  console.log(`Certichain Contract deployed to: ${token.address}`);

  // Save contract address to a file
  fs.writeFileSync(
    "./config.js",
    `export const certichainAddress = "${token.address}";\n`
  );
}

// Execute script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
