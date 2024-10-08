import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyWallet from "../components/MyWallet";
import { FaWallet } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import MyCollections from "../components/MyCollections";
import Notification from "../components/Notification";
import Settings from "../components/Settings";
import { useGlobalState } from "../store";

const Dashboard = () => {
    const [tab  , setTab] = useState(0);
    const [balance] = useGlobalState("balance")
  const DashboardLinks = [
    {
      id: 1,
      icon: <FaWallet />,
      text: "My Wallet",
    },
    {
      id: 2,
      icon: <BsFillCollectionFill />,
      text: "My Collections",
    },
    {
      id: 2,
      icon: <IoMdNotifications />,
      text: "Notifications",
    },
    {
      id: 2,
      icon: <CiSettings />,
      text: "Settings",
    },
  ];

  return (
    <div className=" gradient-bg-hero h-auto text-white">
      {/* nav is here */}
      <nav className="   bg-black/20 backdrop-blur-lg shadow shadow-[#e329708f] flex justify-between py-[1rem] items-center">
        <div className=" px-[2rem] flex gap-10">
          <h2 className=" text-2xl font-bold">Logo</h2>
          <input
            placeholder="search..."
            className=" bg-black/70 px-4 rounded-lg outline-none text-xs "
          />
        </div>
        <div className=" px-4 flex gap-10 items-center">
          <p className=" text-xs"> you have : <span className=" text-green-600"> {balance} ETH </span>  </p>
          <Link to={"/"}>
            <button
              className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-md md:w-[100px] cursor-pointer mx-4"
            >
              Home
            </button>
          </Link>
        </div>
      </nav>
      {/* dashboard data is here */}
      <aside className=" flex w-full  ">
        <div className=" md:w-[250px] rounded-tr-xl rounded-br-xl  h-screen shadow shadow-[#e329708f] bg-black/20 backdrop-blur-xl relative overflow-hidden flex flex-col gap-[2rem] py-[2rem] basis-[20%]">
          {DashboardLinks.map((items, index) => {
            return (
              <button
                key={index}
                onClick={() => setTab(index)}
                className={`" "  ${index == tab ? "rounded-lg bg-gradient-to-r from-red-700 to-[#e32970] hover:from-purple-700 hover:to-red-700 flex items-center w-[150px] mx-auto gap-2 px-4     py-2 text-white transition-colors duration-300 text-[12px] " : " flex items-center w-[150px] mx-auto gap-2 text-xs px-4"}`}
              >
                <span className=" text-lg">{items.icon}</span>{" "}
                <span>{items.text}</span>
              </button>
            );
          })}
        </div>
        <div className=" basis-[80%]">
          <div className={`${tab ==0 ? "block" : " hidden" } p-[2rem]`} >
            <MyWallet />
          </div>
          <div className={`${tab ==1 ? "block" : " hidden" } p-[2rem]`}>
            <MyCollections />
          </div>
          <div className={`${tab ==2 ? "block" : " hidden" } p-[2rem]`}>
           <Notification />
          </div>
          <div className={`${tab ==3 ? "block" : " hidden" } p-[2rem]`}>
                <Settings />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
