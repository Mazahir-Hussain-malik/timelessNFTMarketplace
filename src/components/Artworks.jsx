import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const Artworks = () => {
  const [nfts] = useGlobalState('nfts')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  return (
    <div className=" backdrop-blur-xl  ">
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-white mb-8">
          {collection.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>

        {collection.length > 0 && nfts.length > collection.length && (
          <div className="text-center mt-10">
            <button
              className="bg-[#e32970] text-white  rounded-full px-6 py-2 font-semibold transition-colors duration-200"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  return (
    <div className=" rounded-lg border border-[#e32970] overflow-hidden  shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={nft.metadataURI}
        alt={nft.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{nft.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{nft.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-xs">Current Price</p>
            <p className="text-primary font-semibold text-[#e32970]">{nft.cost} ETH</p>
          </div>
          <button
            className="bg-[#e32970] text-white hover:bg-primary/90 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
            onClick={setNFT}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Artworks