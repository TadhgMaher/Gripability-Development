import React, { createContext, useContext, useState, ReactNode } from "react";
import { useSiteContent } from "../hooks/useSiteContent";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  content: any;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Fallback translations for navigation and other static content
const staticTranslations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.consultation": "Consultation",
    "nav.contact": "Contact",
    "nav.downloads": "Downloads",

    // CTA buttons
    "hero.cta1": "Explore Our Products",
    "hero.cta2": "Book a Consultation",

    // Why GripAbility
    "why.headline": "Why Gripability?",
    "why.excellence": "Over 20 years of engineering excellence",
    "why.german": "Proudly made in Germany",
    "why.modular": "Modular & customizable systems",
    "why.therapists": "Developed alongside therapists",
    "why.certified": "CE-certified medical-grade technology",
    "why.people": "Built with people—not just for them",
    "why.tagline":
      '"Die Kunst Dinge zu be.greifen" — The Art of Handling Things.',

    // Form labels
    "consultation.name": "Name",
    "consultation.email": "Email",
    "consultation.country": "Country",
    "consultation.message": "How can we help you?",
    "consultation.mobility":
      "I have limited mobility and would like to speak with a product advisor.",
    "consultation.send": "Send Message",

    // Contact details
    "contact.offer1": "Personalized quotes",
    "contact.offer2": "Demo sessions with therapists",
    "contact.offer3":
      "Support in applying for insurance/medical aid coverage (Germany)",

    // Downloads
    "downloads.headline": "Download Center",
    "downloads.description":
      "Download detailed technical specifications and user guides for all our products.",
    "downloads.pdf": "Download PDF",

    // Product actions
    "products.viewProduct": "View Product",
  },
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.consultation": "Beratung",
    "nav.contact": "Kontakt",
    "nav.downloads": "Downloads",

    // CTA buttons
    "hero.cta1": "Unsere Produkte erkunden",
    "hero.cta2": "Beratung buchen",

    // Why GripAbility
    "why.headline": "Warum Gripability?",
    "why.excellence": "Über 20 Jahre Ingenieursexzellenz",
    "why.german": "Stolz hergestellt in Deutschland",
    "why.modular": "Modulare & anpassbare Systeme",
    "why.therapists": "Entwickelt zusammen mit Therapeuten",
    "why.certified": "CE-zertifizierte medizinische Technologie",
    "why.people": "Mit Menschen gebaut—nicht nur für sie",
    "why.tagline":
      '"Die Kunst Dinge zu be.greifen" — The Art of Handling Things.',

    // Form labels
    "consultation.name": "Name",
    "consultation.email": "E-Mail",
    "consultation.country": "Land",
    "consultation.message": "Wie können wir Ihnen helfen?",
    "consultation.mobility":
      "Ich habe eingeschränkte Mobilität und möchte mit einem Produktberater sprechen.",
    "consultation.send": "Nachricht senden",

    // Contact details
    "contact.offer1": "Persönliche Angebote",
    "contact.offer2": "Demo-Sitzungen mit Therapeuten",
    "contact.offer3":
      "Unterstützung bei der Beantragung von Kranken-/Pflegeversicherungsleistungen (Deutschland)",

    // Downloads
    "downloads.headline": "Download-Center",
    "downloads.description":
      "Laden Sie detaillierte technische Spezifikationen und Benutzerhandbücher für alle unsere Produkte herunter.",
    "downloads.pdf": "PDF herunterladen",

    // Product actions
    "products.viewProduct": "Produkt ansehen",
  },
} as const;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const { content, loading, error } = useSiteContent();

  const t = (key: string): string => {
    // First try to get from CMS content
    if (content) {
      const keys = key.split(".");
      if (keys.length === 2) {
        const [section, field] = keys;
        const fieldKey = `${field}_${language}`;

        if (content[section] && content[section][fieldKey]) {
          return content[section][fieldKey];
        }

        // For nested product content
        if (section === "products" && field !== "headline") {
          const productKey = field.split(".")[0];
          const productField = field.split(".")[1];
          const productFieldKey = `${productField}_${language}`;

          if (
            content.products[productKey] &&
            content.products[productKey][productFieldKey]
          ) {
            return content.products[productKey][productFieldKey];
          }
        }
      }
    }

    // Fall back to static translations
    const translation =
      staticTranslations[language][
        key as keyof (typeof staticTranslations)["en"]
      ];
    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, content, isLoading: loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
