import React, { useState } from "react";
import { Sparkles, DollarSign } from "lucide-react";
import { useGlobalState, setGlobalState, setLoadingMsg, setAlert } from "../store";
import { updateNFT } from "../Blockchain.Services";
import { FaTimes } from "react-icons/fa";

const MyCollections = () => {
  const [nfts] = useGlobalState("nfts");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);
  const [price, setPrice] = useState('');

  const onChangePrice = (nft) => {
    setSelectedNft(nft);
    setModalVisible(true); // Open the update modal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!price || price <= 0) return;

    setLoadingMsg('Price updating...');
    setGlobalState('loading', { show: true, msg: 'Updating NFT price...' });

    try {
      await updateNFT({ ...selectedNft, cost: price });
      setAlert('Price updated successfully!', 'green');
      window.location.reload();
    } catch (error) {
      console.log('Error updating NFT price: ', error);
      setAlert('Update failed...', 'red');
    } finally {
      setModalVisible(false); // Close the modal
    }
  };

  return (
    <section>
      <div className="py-4 mb-2">
        <h2 className="text-3xl text-center font-bold">Your Collections</h2>
      </div>

      <div className="flex flex-wrap gap-8">
        {nfts.map((nft, index) => {
          return (
            <div key={index}>
              {connectedAccount === nft.owner && (
                <div className="w-[250px] shadow-lg bg-gradient-to-br from-black/80 backdrop-blur-xl to-[#e329708f] rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-fit"
                      src={nft?.metadataURI}
                      alt={nft?.title}
                    />
                    <div className="absolute top-0 left-0 m-3 px-2 py-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Rare
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold text-sm mb-2 text-white truncate">
                      {nft?.title}
                    </h2>
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {nft?.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-white">
                        <DollarSign className="w-4 h-4 inline-block mr-1" />
                        {nft?.cost}
                      </span>
                      <button
                        className="bg-white hover:bg-gray-100 text-indigo-600 text-xs font-bold py-2 px-3 rounded-full shadow transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => onChangePrice(nft)}
                      >
                        Change Price
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {modalVisible && (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300`}>
          <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-gray-400">{selectedNft?.title}</p>
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="border-0 bg-transparent focus:outline-none"
                >
                  <FaTimes className="text-gray-400" />
                </button>
              </div>

              <div className="flex flex-row justify-center items-center rounded-xl mt-5">
                <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
                  <img
                    alt={selectedNft?.title}
                    src={selectedNft?.metadataURI}
                    className="h-full w-full object-cover cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
                <input
                  className="block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0"
                  type="number"
                  step={0.01}
                  min={0.01}
                  placeholder="New Price (ETH)"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="flex flex-row justify-center items-center w-full text-white text-md bg-[#e32970] hover:bg-[#bd255f] py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:bg-transparent hover:text-[#e32970] hover:border hover:border-[#bd255f] focus:outline-none focus:ring mt-5"
              >
                Update Now
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyCollections;
