import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { RiTelegramFill, RiYoutubeFill, RiLinkedinBoxFill } from "react-icons/ri";

const MY_ACCOUNT = [
    { display: "NFT", url: '/seller-profile' },
    { display: "Create Item", url: '/#' },
    { display: "Collection", url: '/market' },
    { display: "Edit", url: '#' },
];

const RESOURCES = [
    { display: "Help Center", url: '#' },
    { display: "Partner", url: '#' },
    { display: "Community", url: '#' },
    { display: "Activity", url: '#' },
];

const COMPANY = [
    { display: "About", url: '#' },
    { display: "Career", url: '#' },
    { display: "Ranking", url: '#' },
    { display: "Contact Us", url: '/contact' },
];

const Footer = () => {
    return (
        <footer className=" text-gray-400 py-8 bg-[#000] border-t border-[#e32970]" >
            <div className="max-w-7xl w-[90%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="mb-8">
                        <div className="logo">
                            <h2 className="flex items-center gap-2 text-2xl font-bold">
                                <span><i className="ri-fire-fill"></i>  K. Crypto NFT</span>

                            </h2>
                            <p className="mt-4 text-sm opacity-85">
                                Buy and Sell
                                Digital Arts,
                                NFTs Collections
                                Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Mint, collect, Buy, Sell, And Discover Exclusive Digital Assets.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-4">My Account</h5>
                        <ul className="space-y-2">
                            {MY_ACCOUNT.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.url} className="text-sm opacity-85 hover:opacity-100 transition-opacity">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-4">Resources</h5>
                        <ul className="space-y-2">
                            {RESOURCES.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.url} className="text-sm opacity-85 hover:opacity-100 transition-opacity">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-4">Company</h5>
                        <ul className="space-y-2">
                            {COMPANY.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.url} className="text-sm opacity-85 hover:opacity-100 transition-opacity">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
                        <input
                            type="text"
                            className="w-full bg-[var(--card-background)] text-[var(--text-color)] rounded-full py-2 px-6 text-sm placeholder-[var(--text-color)] placeholder-opacity-85"
                            placeholder="Email"
                        />
                        <div className="flex gap-4 mt-4 text-xl opacity-85 ">
                            <a href="#" className='hover:text-[#e250e5] transition-colors'><GrFacebookOption /></a>
                            <a href="#" className='hover:text-[#e250e5] transition-colors'><RiTelegramFill /></a>
                            <a href="#" className='hover:text-[#e250e5] transition-colors'><GrInstagram /></a>
                            <a href="#" className='hover:text-[#e250e5] transition-colors'><RiYoutubeFill /></a>
                            <a href="#" className='hover:text-[#e250e5] transition-colors'><RiLinkedinBoxFill /></a>

                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-xs opacity-85">
                        Copyrights 2024, Developed by @KarakoramCypto Gallery
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;