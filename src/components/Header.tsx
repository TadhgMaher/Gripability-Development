import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getAssetPath } from "../utils/assets";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    // Ensure we scroll to top when clicking logo
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-200">
              <img
                src={getAssetPath("/Logo.jpg")}
                alt="GripAbility Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-red-600">GRIP</span>
              <span className="text-emerald-600">ABILITY</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("nav.products")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={() => scrollToSection("downloads")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {t("nav.downloads")}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 transition-colors duration-200"
            >
              <span className="text-lg">{language === "en" ? "" : ""}</span>
              <span className="text-sm font-medium text-emerald-700">
                {language === "en" ? "Deutsch" : "English"}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors duration-200"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors duration-200"
            >
              {t("nav.products")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors duration-200"
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={() => scrollToSection("downloads")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors duration-200"
            >
              {t("nav.downloads")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
