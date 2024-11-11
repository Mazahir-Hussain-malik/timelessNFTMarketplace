import { useEffect } from "react";
import { getAllNFTs, isWallectConnected } from "./Blockchain.Services";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  useEffect(async () => {
    await isWallectConnected();
    await getAllNFTs();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
