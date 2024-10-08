import React, { useState, useEffect } from 'react'
import img1 from "../assets/01.jpeg"
import { ChevronLeft, ChevronRight } from 'lucide-react'


const cardData = [
  {
    id: 1,
    imageUrl: img1,
    title: "Beautiful Landscape",
    description: "A serene view of mountains and lakes."
  },
  {
    id: 2,
    imageUrl: img1,
    title: "City Nightlife",
    description: "Vibrant city lights illuminating the night sky."
  },
  {
    id: 3,
    imageUrl: img1,
    title: "Tropical Paradise",
    description: "Crystal clear waters and white sandy beaches."
  },
  {
    id: 4,
    imageUrl: img1,
    title: "Mountain Adventure",
    description: "Thrilling hiking trails with breathtaking views."
  },
  {
    id: 5,
    imageUrl: img1,
    title: "Desert Oasis",
    description: "Stunning sand dunes and hidden water sources."
  },
  {
    id: 6,
    imageUrl: img1,
    title: "Forest Retreat",
    description: "Lush greenery and peaceful woodland scenes."
  }
]

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <img className="w-full 2xl:h-48 h-auto rounded-t-lg  object-cover object-center" src={imageUrl} alt={title} />
      <div className="px-6 py-2 flex-grow">
        <h2 className="text-lg font-semibold text-gray-400 mb-2">{title}</h2>
        <p className=" text-gray-400 text-base">{description}</p>
      </div>
    </div>
  )
}

// CardSlider component
const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + cardsToShow >= cardData.length) ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex === 0) ? Math.max(0, cardData.length - cardsToShow) : prevIndex - 1
    )
  }

  return (
    <div className='bg-gray-800'>    
    <div className="mx-w-7xl w-[90%] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-400 mb-8">Our Gallery</h1>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              width: `${(cardData.length / cardsToShow) * 100}%`
            }}
          >
            {cardData.map((card) => (
              <div
                key={card.id}
                className="px-2 py-8"
                style={{ width: `${100 / cardsToShow}% `}}>
                <Card
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default CardSlider