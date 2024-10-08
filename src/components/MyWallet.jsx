import React, { useEffect } from "react";
import metask from "../assets/metask.png";
import { useGlobalState } from "../store";
import { IoCopySharp } from "react-icons/io5";
import { Shield, Globe, Wallet } from "lucide-react";
import { FaEthereum } from "react-icons/fa";
const MyWallet = () => {
  const [connectedAccount ] = useGlobalState("connectedAccount");
  const [balance] = useGlobalState("balance")


  useEffect(() =>{
       console.log( "your account balance is  : " , balance)
  } , [])

  return (
    <div className=" flex flex-col justify-center items-center  mx-auto gap-[1rem] w-full text-white/60  ">
      <h2 className=" text-2xl font-bold">Connect your wallet</h2>
      <p>Connect with our available wallet providers.</p>
      <div className=" flex  md:flex-row flex-col gap-8">
        <div>
          <div className=" w-[100px] h-[100px] border-4 mx-auto border-[#e329708f] rounded-full flex justify-center items-center">
            <img src={metask} alt="metmask" className=" w-[50px] h-[50px]" />
          </div>
          <div>
            {connectedAccount == null ? (
              <button
                className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-md md:w-[400px] w-[90%] mx-auto cursor-pointer  "
              >
                Connect Wallet
              </button>
            ) : (
              <p className=" text-[14px]  text-center ">
                {" "}
                your wallet address{" "}
                <span className=" text-[#e329708f]  flex items-center gap-2 cursor-pointer mt-2  ">
                  {" "}
                  {connectedAccount} <IoCopySharp />
                </span>{" "}
              </p>
            )}
          </div>
          <p className=" text-[14px]  text-center  ">
                {" "}
                your wallet balance{" "}
              
              </p>
              <p className=" text-[#e329708f] flex items-center justify-center  text-center  gap-2 cursor-pointer  "> 
                 
                  {balance} <FaEthereum /> ETH
                </p>
        </div>

        {/* metmask intro card is here */}
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-black/80 backdrop-blur-xl to-[#e329708f] text-white">
          <div className="relative h-40 bg-black bg-opacity-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={metask} alt="MetaMask Logo" className="w-20 h-20" />
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">MetaMask</h2>
            <p className="text-center mb-4 text-xs">
              Your gateway to Web3. MetaMask is a crypto wallet & browser
              extension that lets you interact with decentralized applications.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-2">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Secure</h3>
                <p className="text-xs text-gray-200">
                  Industry-leading security
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-2">
                <Globe className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Universal</h3>
                <p className="text-xs text-gray-200">
                  Works across browsers & devices
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-2">
                <Wallet className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Multi-Chain</h3>
                <p className="text-xs text-gray-200">
                  Supports various networks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
