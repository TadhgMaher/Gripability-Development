import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getAssetPath } from "../utils/assets";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${getAssetPath("/herobg.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo Animation */}
          <div
            className={`mb-8 transition-all duration-1200 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src={getAssetPath("/Logo.jpg")}
                alt="GripAbility Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t("hero.headline")}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t("hero.subheadline")}
          </p>

          {/* Call to Actions */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={scrollToProducts}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <span>{t("hero.cta1")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={scrollToConsultation}
              className="group bg-white hover:bg-gray-50 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <span>{t("hero.cta2")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProducts}
            className="animate-bounce p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors duration-200"
          >
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
