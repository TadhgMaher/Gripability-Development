import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getAssetPath } from "../utils/assets";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={getAssetPath("/Logo.jpg")}
                alt="Gripability Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-xl font-bold">Gripability</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-6 gap-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                {t("nav.products")}
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                {t("nav.consultation")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                {t("nav.contact")}
              </button>
              <button
                onClick={() => scrollToSection("downloads")}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-left"
              >
                {t("nav.downloads")}
              </button>
              <Link
                to="/impressum"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {t("footer.impressum")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t("footer.copyright")}
          </p>
          <p className="text-gray-500 text-xs italic">
            "Die Kunst Dinge zu be.greifen" — The Art of Handling Things.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
