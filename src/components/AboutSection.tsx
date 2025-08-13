import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
            {t("about.headline")}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.text1")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.text2")}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-600 mb-2">
                    20+
                  </div>
                  <div className="text-xl text-emerald-700 font-semibold">
                    Years of Innovation
                  </div>
                  <div className="text-sm text-emerald-600 mt-2">
                    Trusted Worldwide
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
