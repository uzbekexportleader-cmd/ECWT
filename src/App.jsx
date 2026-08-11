import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";

import MarketplaceDetail from "./Pages/MarketplaceDetail";
import Auth from "./Pages/Auth";

function HomePage() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/auth";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace/:slug" element={<MarketplaceDetail />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
