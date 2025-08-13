import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";
import DownloadsSection from "../components/DownloadsSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <DownloadsSection />
    </div>
  );
};

export default Home;
