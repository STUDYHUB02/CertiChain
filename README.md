# CertiChain

CertiChain is a blockchain-based certificate verification system that allows organizations to issue and validate certificates securely. Certificates are stored in a structured format within smart contracts and can only be added by authorized certifiers. End users can retrieve all their certificates or share a certificate hash with employers for verification via the frontend.

## Features
- **Decentralized Certificate Storage**: Ensures secure and tamper-proof certificate management.
- **Smart Contract Authorization**: Only authorized certifiers can issue certificates.
- **User-Friendly Verification**: End users can share certificate hashes for easy validation.
- **React-PDF Integration**: Enables users to generate and download certificates.

## Technologies Used
- **Blockchain**
- **Solidity**
- **React**
- **React-PDF**
- **Hardhat**

---

## Getting Started
Follow these steps to set up and run the project on your local system:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (for running the frontend and blockchain scripts)
- **Git** (for cloning the repository)
- **Metamask** (for interacting with the blockchain)

### Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/STUDYHUB02/CertiChain.git
   ```
2. Navigate to the project directory:
   ```sh
   cd CertiChain
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start a local blockchain node using Hardhat:
   ```sh
   npx hardhat node
   ```
5. Open another terminal and compile the smart contract:
   ```sh
   npx hardhat compile
   ```
6. Deploy the smart contract to the local blockchain:
   ```sh
   npx hardhat run scripts/deploy.js --network localhost
   ```
7. In a new terminal, start the frontend application:
   ```sh
   npm run dev
   ```

### Connecting to Metamask
- Open Metamask in your browser.
- Import the private key of the first Hardhat address (this is the owner account).
- Once connected, you can authorize new certifiers and issue certificates to users.

---

## Usage Guide
1. **Authorize Certifiers**: The contract owner can add authorized certifiers.
2. **Issue Certificates**: Certifiers can create and store certificates on the blockchain.
3. **Retrieve Certificates**: Users can access their issued certificates.
4. **Verification**: Employers or third parties can verify certificates using their unique hash.

---
