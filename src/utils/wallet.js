import { ethers } from "ethers"


const WalletAddress = ""
const WalletABI = [];


async function getProvider(){
    if(!window.ethereum){
        throw new Error("MetaMask is not installed")
    }
    return new ethers.BrowserProvider(window.ethereum);
}

export const readContract = async()=>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    return new ethers.Contract(WalletAddress,WalletABI,provider)
}

export const InteractContract = async()=>{
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(WalletAddress,WalletABI,signer);
}
