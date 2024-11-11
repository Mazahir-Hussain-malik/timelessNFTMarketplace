import React from 'react'
import { FaWallet } from "react-icons/fa";
// import { PiWindowsLogoFill } from "react-icons/pi";
import { ImBoxAdd } from "react-icons/im";

import { RiShoppingBag4Fill } from "react-icons/ri";
import { AiFillShopping } from "react-icons/ai";
import { IoIosCreate } from "react-icons/io";

const InfoData = [
    {
        icon: <FaWallet />,
        heading: "Set up your wallet",
        paragraph: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support."
    },
    {
        icon: <IoIosCreate />,
        heading: "Create your collection",
        paragraph: "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
    },
    {
        icon: <ImBoxAdd/>,
        heading: "Add your NFTs",
        paragraph: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
    },
    {
        icon: <AiFillShopping />,
        heading: "List them for sale",
        paragraph: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!"
    },
]
const Create_sell_nfts = () => {

    return (
        <div>
            <div className="  text-[#fff]">
                <section id="features"
                    className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30">

                    <div className="relative mx-auto max-w-5xl text-center">
                        <span style={{ color: "var(--primary-t-color)" }} className=" md:text-md text-center text-sm my-3 flex justify-center font-light uppercase tracking-wider">
                        How It Works 
                        </span>
                        <h2 style={{ color: "var(--primary-t-color)" }}
                            className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text  text-transparent md:text-4xl text-2xl font-bold mb-4 ">
                            Create and sell your NFTs

                        </h2>
                        <p style={{ color: "var(--primary-t-color)" }}
                            className="mx-auto my-4 w-full max-w-xl bg-transparent font-medium leading-relaxed tracking-wide">
                           Deploy an NFT collection with just a few clicks and retain the ownership of your files. Your NFT data is safely stored on multiple IPFS nodes and with up to 50 replicas globally.
                        </p>
                    </div>


                    <div className="relative mx-auto max-w-7xl grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {InfoData.map((items, index) => (
                            <div key={index} className="rounded-md border border-neutral-600 p-8 text-center shadow transition-all duration-300 hover:scale-105 hover:border-neutral-600 hover:shadow-[0_0_30px_rgba(92,79,240,0.15)] group"
                                style={{ backgroundColor: "var(--dark-scheme-color)" }}>
                                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border transition-all duration-300 group-hover:border-neutral-600 group-hover:shadow-[0_0_20px_rgba(92,79,240,0.2)]"
                                    style={{
                                        backgroundImage: "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                                        borderColor: "rgba(92, 79, 240, 0.2)"
                                    }}>
                                    <div href="#"
                                        className='text-4xl transition-all duration-300 hover:scale-110 cursor-pointer group-hover:rotate-12 group-hover:transform group-hover:brightness-125'
                                        style={{ color: "var(--primary-color)" }}>
                                        {items.icon}
                                    </div>
                                </div>
                                <h3 className="mt-6  transition-colors duration-300 group-hover:text-gray-200 text-2xl my-3" style={{ color: "var(--primary-t-color)" }}>
                                    {items.heading}
                                </h3>
                                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide transition-colors duration-300 group-hover:text-gray-300 text-base" style={{ color: "var(--primary-p-color)" }}>
                                    {items.paragraph}
                                </p>
                            </div>
                        ))}
                    </div>

                   

                </section>
            </div>
        </div>
    )
}

export default Create_sell_nfts