import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected , connectWallet } from '../Blockchain.Services'
import Alert from '../components/Alert'
import Artworks from '../components/Artworks'
import CreateNFT from '../components/CreateNFT'
// import Footer from '../layout/Footer/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Loading from '../components/Loading'
import ShowNFT from '../components/ShowNFT'
import Transactions from '../components/Transactions'
import UpdateNFT from '../components/UpdateNFT'
import CardSlider from '../components/CardSlider'
import TeamPage from '../components/Team'
import Footer from '../components/Footer'
import Subscribe from '../components/Subscribe'
import Create_sell_nfts from '../components/Create_sell_nfts'
import NftGifs from '../components/NftGifs'
import ParticlesComponent from "../components/Particles.js";


const Home = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
    await connectWallet()
   
  }, [])

  return (
    <div className="min-h-screen">
    <div className=' -z-50 absolute min-h-screen'>
    <ParticlesComponent id="particle" />
    </div>
      <div className="g z-50">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <TeamPage />
      <Alert />
      <Loading />
      <NftGifs />
      <Create_sell_nfts />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home
