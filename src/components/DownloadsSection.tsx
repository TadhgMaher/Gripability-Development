import React, { useEffect, useRef, useState } from "react";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const DownloadsSection: React.FC = () => {
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

  const downloads = [
    {
      name: t("products.e3hand.name"),
      id: "e3-hand",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: t("products.xhand.name"),
      id: "x-hand",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: t("products.bhand.name"),
      id: "b-hand",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: t("products.tbrush.name"),
      id: "t-brush",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const handleDownload = (productId: string) => {
    // Map product IDs to actual PDF filenames
    const pdfMap: { [key: string]: string } = {
      "x-hand": "Gripability_x_hand.pdf",
      "t-brush": "Gripability_t_brush.pdf",
      "e3-hand": "Gripability_e_hand.pdf",
      "b-hand": "Gripability_b_hand-.pdf",
    };

    const pdfFileName = pdfMap[productId];
    if (!pdfFileName) {
      console.error(`PDF not found for product: ${productId}`);
      return;
    }

    // Create download link for the PDF
    const pdfPath = `/pdfs/${pdfFileName}`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} id="downloads" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("downloads.headline")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download detailed technical specifications and user guides for all
            our products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((download, index) => (
            <div
              key={download.id}
              className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${download.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {download.name}
              </h3>

              <button
                onClick={() => handleDownload(download.id)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{t("downloads.pdf")}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
