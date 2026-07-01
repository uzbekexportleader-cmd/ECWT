import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import HeroDashboard from "./components/sections/HeroDashboard";
import Marketplace from "./components/sections/Marketplace";
import WhyECWT from "./components/sections/WhyECWT";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import Stats from "./components/sections/Stats";
import Trust from "./components/sections/Trust";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroDashboard />
        <Marketplace />
        <WhyECWT />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Stats />
        <Trust />
        <CTA />
        <Footer />
      </main>
    </>
  );
}

export default App;