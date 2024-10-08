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

const Home = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
    await connectWallet()
   
  }, [])

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <CardSlider />
      <TeamPage />
      {/* <Footer /> */}
      <Alert />
      <Loading />
    </div>
  )
}

export default Home
