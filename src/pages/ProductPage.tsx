import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Users,
  Briefcase,
  GraduationCap,
  Hammer,
  Cog,
  Hand,
  Wind,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getAssetPath } from "../utils/assets";

interface Application {
  title: string;
  description: string;
}

interface Module {
  name: string;
  description: string;
}

interface TechnicalSpecs {
  [key: string]: string;
}

interface Product {
  name: string;
  description: string;
  longDescription: string;
  requiresConsultation: boolean;
  images: string[];
  features: string[];
  color: string;
  technicalSpecs?: TechnicalSpecs | string[];
  applications?: Application[];
  medicalIndications?: string[];
  modules?: Module[];
}

interface ProductData {
  [key: string]: Product;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    setCurrentImageIndex(0); // Reset carousel when product changes
    window.scrollTo(0, 0);
  }, [productId]);

  const handleBackToProducts = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to products section
    setTimeout(() => {
      const productsElement = document.getElementById("products");
      if (productsElement) {
        productsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleContactScroll = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to contact section
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleContactNavigation = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll to contact section
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const getProductData = (id: string): Product | null => {
    const products: ProductData = {
      "x-hand": {
        name: t("products.xhand.name"),
        description: t("products.xhand.desc"),
        longDescription: t("product.xhand.longDescription"),
        requiresConsultation: true,
        images: [
          getAssetPath("/XHand.jpg"),
          getAssetPath("/XHand2.jpg"),
          getAssetPath("/XHand3.jpg"),
        ],
        features: [
          t("product.xhand.features.0"),
          t("product.xhand.features.1"),
          t("product.xhand.features.2"),
          t("product.xhand.features.3"),
          t("product.xhand.features.4"),
          t("product.xhand.features.5"),
          t("product.xhand.features.6"),
        ],
        color: "from-emerald-400 via-emerald-500 to-emerald-700",
        technicalSpecs: {
          grippingForce: "22N - 110N",
          workingPressure: "2-8 bar",
          inputPressure: "8-12 bar",
          weight: "53g (gripper module)",
          dimensions: "95 x 53 x 15 mm",
          powerSupply: "24V DC",
          airConsumption: "Low consumption pneumatic operation",
        },
        applications: [
          {
            title: t("xhand.applications.education.title"),
            description: t("xhand.applications.education.description"),
          },
          {
            title: t("xhand.applications.therapy.title"),
            description: t("xhand.applications.therapy.description"),
          },
          {
            title: t("xhand.applications.workplace.title"),
            description: t("xhand.applications.workplace.description"),
          },
          {
            title: t("xhand.applications.workshop.title"),
            description: t("xhand.applications.workshop.description"),
          },
        ],
      },
      "t-brush": {
        name: t("products.tbrush.name"),
        description: t("products.tbrush.desc"),
        longDescription: t("product.tbrush.longDescription"),
        requiresConsultation: true,
        images: [getAssetPath("/TBrush.jpg")],
        features: [
          t("product.tbrush.features.0"),
          t("product.tbrush.features.1"),
          t("product.tbrush.features.2"),
          t("product.tbrush.features.3"),
          t("product.tbrush.features.4"),
        ],
        color: "from-emerald-400 via-emerald-500 to-emerald-700",
        medicalIndications: [
          t("tbrush.indications.tetraplegia"),
          t("tbrush.indications.hemiparesis"),
          t("tbrush.indications.postpolio"),
          t("tbrush.indications.muscle"),
        ],
        applications: [
          {
            title: t("tbrush.applications.daily.title"),
            description: t("tbrush.applications.daily.description"),
          },
          {
            title: t("tbrush.applications.therapy.title"),
            description: t("tbrush.applications.therapy.description"),
          },
          {
            title: t("tbrush.applications.independence.title"),
            description: t("tbrush.applications.independence.description"),
          },
          {
            title: t("tbrush.applications.care.title"),
            description: t("tbrush.applications.care.description"),
          },
        ],
      },
      "e3-hand": {
        name: t("products.e3hand.name"),
        description: t("products.e3hand.desc"),
        longDescription: t("product.e3hand.longDescription"),
        requiresConsultation: true,
        images: [
          getAssetPath("/E3Photo1.jpg"),
          getAssetPath("/E3Photo2.jpg"),
          getAssetPath("/E3Photo3.jpg"),
          getAssetPath("/E3Photo4.jpg"),
        ],
        features: [
          t("product.e3hand.features.0"),
          t("product.e3hand.features.1"),
          t("product.e3hand.features.2"),
          t("product.e3hand.features.3"),
          t("product.e3hand.features.4"),
        ],
        color: "from-emerald-400 via-emerald-500 to-emerald-700",
        technicalSpecs: [
          "grippingOperations",
          "grippingForces",
          "grippingForceRange",
          "batteryLife",
          "chargingTime",
          "weight",
          "gripperWeight",
          "workingPressure",
          "powerSource",
          "control",
          "connectivity",
          "adaptations",
          "operatingTemp",
          "certification",
          "hilfsmittelNumber",
        ],
        medicalIndications: [
          t("e3hand.medicalIndications.tetraplegia"),
          t("e3hand.medicalIndications.hemiparesis"),
          t("e3hand.medicalIndications.postpolio"),
          t("e3hand.medicalIndications.muscle"),
        ],
        applications: [
          {
            title: t("e3hand.applications.daily.title"),
            description: t("e3hand.applications.daily.description"),
          },
          {
            title: t("e3hand.applications.education.title"),
            description: t("e3hand.applications.education.description"),
          },
          {
            title: t("e3hand.applications.career.title"),
            description: t("e3hand.applications.career.description"),
          },
          {
            title: t("e3hand.applications.leisure.title"),
            description: t("e3hand.applications.leisure.description"),
          },
          {
            title: t("e3hand.applications.creative.title"),
            description: t("e3hand.applications.creative.description"),
          },
        ],
        modules: [
          {
            name: t("e3hand.components.gripper.title"),
            description: t("e3hand.components.gripper.description"),
          },
          {
            name: t("e3hand.components.control.title"),
            description: t("e3hand.components.control.description"),
          },
          {
            name: t("e3hand.components.backpack.title"),
            description: t("e3hand.components.backpack.description"),
          },
          {
            name: t("e3hand.components.compressor.title"),
            description: t("e3hand.components.compressor.description"),
          },
        ],
      },
      "b-hand": {
        name: t("products.bhand.name"),
        description: t("products.bhand.desc"),
        longDescription: t("product.bhand.longDescription"),
        requiresConsultation: true,
        images: [getAssetPath("/BHand1.jpg"), getAssetPath("/BHand2.jpg")],
        features: [
          t("product.bhand.features.0"),
          t("product.bhand.features.1"),
          t("product.bhand.features.2"),
          t("product.bhand.features.3"),
          t("product.bhand.features.4"),
        ],
        color: "from-emerald-400 via-emerald-500 to-emerald-700",
        medicalIndications: [
          t("bhand.indications.muscle"),
          t("bhand.indications.paresis"),
          t("bhand.indications.dystrophy"),
          t("bhand.indications.bilateral"),
        ],
        applications: [
          {
            title: t("bhand.applications.daily.title"),
            description: t("bhand.applications.daily.description"),
          },
          {
            title: t("bhand.applications.learning.title"),
            description: t("bhand.applications.learning.description"),
          },
          {
            title: t("bhand.applications.work.title"),
            description: t("bhand.applications.work.description"),
          },
          {
            title: t("bhand.applications.therapy.title"),
            description: t("bhand.applications.therapy.description"),
          },
        ],
      },
    };

    return products[id] || null;
  };

  const product = productId ? getProductData(productId) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={handleBackToProducts}
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t("backToProducts")}</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 bg-emerald-100 text-emerald-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>{t("product.consultation")}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {product.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleContactNavigation}
                    className={`bg-gradient-to-r ${product.color} text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t("getInContactWithUs")}</span>
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <a
                      href={
                        productId === "x-hand"
                          ? getAssetPath("/pdfs/Gripability_x_hand.pdf")
                          : productId === "e3-hand"
                          ? getAssetPath("/pdfs/Gripability_e_hand.pdf")
                          : productId === "b-hand"
                          ? getAssetPath("/pdfs/Gripability_b_hand.pdf")
                          : productId === "t-brush"
                          ? getAssetPath("/pdfs/Gripability_t_brush.pdf")
                          : "#"
                      }
                      download
                      className="block"
                    >
                      {t("product.download")}
                    </a>
                  </button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("productGallery")}
            </h2>
            {product.images.length <= 3 ? (
              // Regular grid for 3 or fewer images
              <div className="grid md:grid-cols-3 gap-6">
                {product.images.map((image: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              // Carousel for more than 3 images
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 33.333}%)`,
                    }}
                  >
                    {product.images.map((image: string, index: number) => (
                      <div key={index} className="flex-shrink-0 w-1/3 px-3">
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation arrows */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {currentImageIndex < product.images.length - 3 && (
                  <button
                    onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* Dots indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: product.images.length - 2 }).map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          currentImageIndex === index
                            ? "bg-gray-700"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("keyFeatures")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    {index === 0 && <Gauge className="w-6 h-6 text-white" />}
                    {index === 1 && <Settings className="w-6 h-6 text-white" />}
                    {index === 2 && <Hand className="w-6 h-6 text-white" />}
                    {index === 3 && <Users className="w-6 h-6 text-white" />}
                    {index === 4 && <Cog className="w-6 h-6 text-white" />}
                    {index === 5 && <Zap className="w-6 h-6 text-white" />}
                    {index === 6 && <Wind className="w-6 h-6 text-white" />}
                    {index >= 7 && (
                      <CheckCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* X-Hand Specific Sections */}
      {productId === "x-hand" && (
        <>
          {/* Who Uses Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-300 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("xhand.whoUses")}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {product.applications?.map(
                    (application: Application, index: number) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                        >
                          {index === 0 && (
                            <GraduationCap className="w-6 h-6 text-white" />
                          )}
                          {index === 1 && (
                            <Hand className="w-6 h-6 text-white" />
                          )}
                          {index === 2 && (
                            <Briefcase className="w-6 h-6 text-white" />
                          )}
                          {index === 3 && (
                            <Hammer className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {application.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("xhand.howItWorks")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <Settings className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("xhand.modularAssembly.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("xhand.modularAssembly.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <Hand className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("xhand.bodyAdaptationSystems.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("xhand.bodyAdaptationSystems.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("xhand.intelligentControl.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("xhand.intelligentControl.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">
                          <Wind className="w-6 h-6 inline mr-2" />
                          {t("xhand.pneumaticOperation.title")}
                        </h3>
                        <p className="text-emerald-700 mb-6">
                          {t("xhand.pneumaticOperation.description")}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white rounded-lg p-3">
                            <div className="font-semibold text-gray-900">
                              {t("operatingPressure")}
                            </div>
                            <div className="text-emerald-600">2-8 bar</div>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <div className="font-semibold text-gray-900">
                              {t("inputPressure")}
                            </div>
                            <div className="text-emerald-600">8-12 bar</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("xhand.technicalSpecs")}
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.technicalSpecs &&
                      Object.entries(product.technicalSpecs).map(
                        ([key, value]: [string, string], index: number) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                              {t(key) ||
                                key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                            </div>
                            <div className="text-lg font-semibold text-gray-900">
                              {value}
                            </div>
                          </div>
                        )
                      )}
                  </div>

                  <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                      {t("qualityCertification")}
                    </h3>
                    <p className="text-emerald-700">
                      {t("qualityCertificationText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* E3-Hand Specific Sections */}
      {productId === "e3-hand" && (
        <>
          {/* Medical Indications Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-300 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.medicalIndications.title")}
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t("e3hand.medicalIndications.indication")}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.medicalIndications?.map(
                      (indication: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-br ${product.color} rounded-full mt-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{indication}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Four Strong Modules Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.components.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                  {t("e3hand.components.description")}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {product.modules?.map((module: Module, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                      >
                        {index === 0 && <Hand className="w-8 h-8 text-white" />}
                        {index === 1 && (
                          <Settings className="w-8 h-8 text-white" />
                        )}
                        {index === 2 && (
                          <Briefcase className="w-8 h-8 text-white" />
                        )}
                        {index === 3 && <Zap className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                        {module.name}
                      </h3>
                      <p className="text-gray-600 text-sm text-center leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.operation.title")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {t("e3hand.operation.description")}
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("e3hand.operation.step1.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("e3hand.operation.step1.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("e3hand.operation.step2.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("e3hand.operation.step2.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("e3hand.operation.step3.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("e3hand.operation.step3.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                      {t("keyFeatures")}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("product.e3hand.features.3")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("e3hand.features.touchSensitive")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("e3hand.features.rehaCompatible")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("product.e3hand.features.2")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">
                          {t("e3hand.features.voiceControl")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-900 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.lifeApplications")}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {product.applications
                    ?.slice(0, 5)
                    .map((application: Application, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                        >
                          {index === 0 && (
                            <Users className="w-6 h-6 text-white" />
                          )}
                          {index === 1 && (
                            <GraduationCap className="w-6 h-6 text-white" />
                          )}
                          {index === 2 && (
                            <Briefcase className="w-6 h-6 text-white" />
                          )}
                          {index === 3 && (
                            <Zap className="w-6 h-6 text-white" />
                          )}
                          {index === 4 && (
                            <Hand className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {application.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.technicalSpecs")}
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.technicalSpecs &&
                      (Array.isArray(product.technicalSpecs)
                        ? product.technicalSpecs.map(
                            (specKey: string, index: number) => (
                              <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4"
                              >
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                                  {t(`e3hand.specs.${specKey}`)}
                                </div>
                                <div className="text-lg font-semibold text-gray-900">
                                  {t(`e3hand.specs.${specKey}.value`)}
                                </div>
                              </div>
                            )
                          )
                        : Object.entries(product.technicalSpecs).map(
                            ([key, value]: [string, string], index: number) => (
                              <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4"
                              >
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                                  {key
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                </div>
                                <div className="text-lg font-semibold text-gray-900">
                                  {value}
                                </div>
                              </div>
                            )
                          ))}
                  </div>

                  <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                      {t("qualityCertification")}
                    </h3>
                    <p className="text-emerald-700">
                      {t("qualityCertificationText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Insurance & Certification Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-1100 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("e3hand.insurance.title")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t("e3hand.insurance.recognizedDevice")}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          {t("e3hand.insurance.numberLabel")}
                        </span>
                        <span className="ml-2 text-emerald-600 font-mono">
                          {t("e3hand.insurance.number")}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {t("e3hand.insurance.productLabel")}
                        </span>
                        <span className="ml-2">
                          {t("e3hand.insurance.product")}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Certification:
                        </span>
                        <span className="ml-2">
                          {t("e3hand.insurance.certification")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t("e3hand.funding.title")}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t("e3hand.funding.description")}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• {t("e3hand.funding.health")}</div>
                      <div>• {t("e3hand.funding.accident")}</div>
                      <div>• {t("e3hand.funding.pension")}</div>
                      <div>• {t("e3hand.funding.employment")}</div>
                      <div>• {t("e3hand.funding.integration")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* T-Brush Specific Sections */}
      {productId === "t-brush" && (
        <>
          {/* How It Works Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-300 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("tbrush.howItWorks")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <Hand className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("tbrush.grip.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("tbrush.grip.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <Settings className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("tbrush.rotation.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("tbrush.rotation.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("tbrush.independence.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("tbrush.independence.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">
                          <Users className="w-6 h-6 inline mr-2" />
                          {t("tbrush.hygiene.title")}
                        </h3>
                        <p className="text-emerald-700 mb-6">
                          {t("tbrush.hygiene.description")}
                        </p>
                        <div className="bg-white rounded-lg p-4">
                          <div className="font-semibold text-gray-900 mb-2">
                            t.brush - so geht Zähneputzen
                          </div>
                          <div className="text-emerald-600 text-sm">
                            Innovative dental care solution
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medical Indications Section */}
          <section className="py-16 bg-emerald-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("tbrush.medicalIndications")}
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t("tbrush.indications.description")}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.medicalIndications?.map(
                      (indication: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-br ${product.color} rounded-full mt-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{indication}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("tbrush.applications")}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {product.applications?.map(
                    (application: Application, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                        >
                          {index === 0 && (
                            <Users className="w-6 h-6 text-white" />
                          )}
                          {index === 1 && (
                            <Hand className="w-6 h-6 text-white" />
                          )}
                          {index === 2 && (
                            <CheckCircle className="w-6 h-6 text-white" />
                          )}
                          {index === 3 && (
                            <Settings className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {application.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* B-Hand Specific Sections */}
      {productId === "b-hand" && (
        <>
          {/* How It Works Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-300 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("bhand.howItWorks")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white font-bold text-sm">
                            1
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("bhand.step1.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("bhand.step1.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white font-bold text-sm">
                            2
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("bhand.step2.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("bhand.step2.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className="text-white font-bold text-sm">
                            3
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("bhand.step3.title")}
                          </h3>
                          <p className="text-gray-600">
                            {t("bhand.step3.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">
                          <Hand className="w-6 h-6 inline mr-2" />
                          {t("bhand.grip.title")}
                        </h3>
                        <p className="text-emerald-700 mb-6">
                          {t("bhand.grip.description")}
                        </p>
                        <div className="bg-white rounded-lg p-4">
                          <div className="font-semibold text-gray-900 mb-2">
                            "Die Kunst Dinge zu be.greifen"
                          </div>
                          <div className="text-emerald-600 text-sm">
                            The Art of Handling Things
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("bhand.benefits")}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Hand className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("bhand.benefits.compact.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("bhand.benefits.compact.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("bhand.benefits.simple.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("bhand.benefits.simple.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("bhand.benefits.individual.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("bhand.benefits.individual.description")}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("bhand.benefits.immediate.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t("bhand.benefits.immediate.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medical Indications Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("bhand.medicalIndications")}
                </h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t("bhand.indications.description")}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.medicalIndications?.map(
                      (indication: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 bg-gradient-to-br ${product.color} rounded-full mt-3 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-700">{indication}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-900 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("bhand.applications")}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {product.applications?.map(
                    (application: Application, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center mb-4`}
                        >
                          {index === 0 && (
                            <Users className="w-6 h-6 text-white" />
                          )}
                          {index === 1 && (
                            <GraduationCap className="w-6 h-6 text-white" />
                          )}
                          {index === 2 && (
                            <Briefcase className="w-6 h-6 text-white" />
                          )}
                          {index === 3 && (
                            <Hand className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {application.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Insurance & Certification Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`transition-all duration-1000 delay-1100 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("bhand.insurance.title")}
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t("bhand.insurance.recognizedDevice")}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          {t("bhand.insurance.numberLabel")}
                        </span>
                        <span className="ml-2 text-emerald-600 font-mono">
                          {t("bhand.insurance.number")}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          {t("bhand.insurance.productLabel")}
                        </span>
                        <span className="ml-2">
                          {t("bhand.insurance.product")}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Certification:
                        </span>
                        <span className="ml-2">
                          {t("bhand.insurance.certification")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t("bhand.funding.title")}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t("bhand.funding.description")}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• {t("bhand.funding.health")}</div>
                      <div>• {t("bhand.funding.accident")}</div>
                      <div>• {t("bhand.funding.pension")}</div>
                      <div>• {t("bhand.funding.employment")}</div>
                      <div>• {t("bhand.funding.integration")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {product.requiresConsultation
                ? t("scheduleConsultation")
                : t("readyToOrder")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {product.requiresConsultation
                ? t("consultationRequired")
                : t("availableImmediate")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactScroll}
                className={`bg-gradient-to-r ${product.color} text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
              >
                {product.requiresConsultation
                  ? t("bookConsultation")
                  : t("getQuote")}
              </button>
              <button
                onClick={handleBackToProducts}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                {t("viewAllProducts")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
