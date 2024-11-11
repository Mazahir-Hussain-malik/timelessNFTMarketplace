import React, { useState, useEffect } from 'react'
import nft1 from "../assets/images/gallery/gif1.gif";
import nft2 from "../assets/images/gallery/gif2.gif";
import nft3 from "../assets/images/gallery/gif3.gif";
import nft4 from "../assets/images/gallery/gif4.gif";
import nft5 from "../assets/images/gallery/nft1.jpg";
import nft6 from "../assets/images/gallery/nft2.jpg";
import nft7 from "../assets/images/gallery/webp1.webp";
import nft8 from "../assets/images/gallery/webp2.webp";


const galleryData = [
  {
    id: 1,
    imageUrl: nft1,
    title: "Beautiful Landscape",
    description: "A serene view of mountains and lakes."
  },
  {
    id: 2,
    imageUrl: nft2,
    title: "City Nightlife",
    description: "Vibrant city lights illuminating the night sky."
  },
  {
    id: 3,
    imageUrl: nft3,
    title: "Tropical Paradise",
    description: "Crystal clear waters and white sandy beaches."
  },
  {
    id: 4,
    imageUrl: nft4,
    title: "Mountain Adventure",
    description: "Thrilling hiking trails with breathtaking views."
  },
  
  {
    id: 7,
    imageUrl: nft7,
    title: "Forest Retreat",
    description: "Lush greenery and peaceful woodland scenes."
  },
  {
    id: 8,
    imageUrl: nft8,
    title: "Forest Retreat",
    description: "Lush greenery and peaceful woodland scenes."
  }
]

const NftGifs = () => {
  return (
    <div className=" py-12 " >
      <h2 className="font-heading font-bold text-white text-4xl text-center py-6">
        NFTs Gallery
      </h2>
      <div className="max-w-7xl mx-auto w-[90%] grid grid-cols-2 md:grid-cols-4 gap-5" >
        {galleryData.map((item, id) => (
          <div key={id} className='border border-[#e32970] rounded-[15px] flex flex-center justify-center p-6'>
            <img className="h-auto max-w-full rounded-lg" src={item.imageUrl} alt="Gallery image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NftGifs