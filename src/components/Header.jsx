import timelessLogo from "../assets/timeless.png";
import { connectWallet } from "../Blockchain.Services";
import { useGlobalState, truncate } from "../store";
import { Link } from "react-router-dom";

const Header = () => {
  const [connectedAccount ] = useGlobalState("connectedAccount");
  return (
    <div className=" bg-[#e32970]/40">
    <nav className="w-4/5 z-50 flex md:justify-center  justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to={"/"}>
          <img
            className="w-32 cursor-pointer"
            src={timelessLogo}
            alt="Timeless Logo"
          />
        </Link>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-end 
        items-center flex-initial"
      >
        <Link to={"/contact"}>
          <li className="mx-4 cursor-pointer">Contact Us</li>
        </Link>

        <Link to={"/dashboard"}>
          <button
            className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-md cursor-pointer mx-4"
          >
            Dashboard
          </button>
        </Link>
        {connectedAccount ? (
          <button
            className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-md cursor-pointer"
          >
            {truncate(connectedAccount, 4, 4, 11)} 
          </button>
        ) : (
          <button
            className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-md cursor-pointer"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </ul>
    </nav>
    </div>
  );
};

export default Header;
