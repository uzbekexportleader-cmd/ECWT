import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";

import MarketplaceDetail from "./Pages/MarketplaceDetail";

function HomePage() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace/:slug" element={<MarketplaceDetail />} />
      </Routes>
    </>
  );
}

export default App;