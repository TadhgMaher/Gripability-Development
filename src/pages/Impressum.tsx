import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Impressum: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>{t("impressum.backToHome")}</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("impressum.title")}
            </h1>

            {/* Company Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {t("impressum.companyInfo")}
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Gripability GmbH</p>
                <p>Am Wiesengrund 3</p>
                <p>36399 Freiensteinau</p>
              </div>
            </section>

            {/* Representative */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t("impressum.representedBy")}
              </h3>
              <p className="text-gray-700">Herr Patrick Oeffner</p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t("impressum.contact")}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">{t("impressum.phone")}</span>{" "}
                  +49 (0) 6669 900 880
                </p>
                <p>
                  <span className="font-medium">{t("impressum.fax")}</span> +49
                  (0) 6669 900 881
                </p>
                <p>
                  <span className="font-medium">{t("impressum.email")}</span>{" "}
                  mail@gripability.de
                </p>
              </div>
            </section>

            {/* Register Entry */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t("impressum.register")}
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>{t("impressum.registerEntry")}</p>
                <p>
                  <span className="font-medium">{t("impressum.court")}</span>{" "}
                  Gießen
                </p>
                <p>
                  <span className="font-medium">
                    {t("impressum.registerNumber")}
                  </span>{" "}
                  HRB 6436
                </p>
              </div>
            </section>

            {/* Web Design */}
            <section className="mb-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t("impressum.webdesign")}
              </h3>
              <p className="text-gray-700">jegumedia, Bremen</p>
            </section>

            {/* Disclaimer */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("impressum.disclaimer")}
              </h2>

              {/* Content Liability */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t("impressum.contentLiability")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("impressum.contentText")}
                </p>
              </div>

              {/* Link Liability */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t("impressum.linkLiability")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("impressum.linkText")}
                </p>
              </div>

              {/* Copyright */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t("impressum.copyright")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("impressum.copyrightText")}
                </p>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t("impressum.dataProtection")}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t("impressum.dataProtectionText")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
