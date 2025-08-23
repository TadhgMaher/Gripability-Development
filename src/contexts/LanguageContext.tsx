import React, { createContext, useContext, useState, ReactNode } from "react";
import { useSiteContent } from "../hooks/useSiteContent";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  content: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
    "contact.headline": "Contact & Purchasing",
    "contact.getInTouch": "Get In Touch",
    "contact.emailLabel": "Email",
    "contact.email": "mail@gripability.com",
    "contact.phoneLabel": "Phone",
    "contact.phone": "+49 (0) 6669 90 08 80",
    "contact.direct": "Products require a personal consultation.",
    "contact.offer1": "Personalized quotes",
    "contact.offer2": "Demo sessions with therapists",
    "contact.offer3":
      "Support in applying for insurance/medical aid coverage (Germany)",
    "contact.requestConsultation": "Request Consultation",
    "contact.messageSent": "Message Sent!",
    "contact.responseTime": "We'll respond within 24 hours.",

    // Downloads
    "downloads.headline": "Download Center",
    "downloads.description":
      "Download detailed technical specifications and user guides for all our products.",
    "downloads.pdf": "Download PDF",

    // Product actions
    "products.viewProduct": "View Product",

    // Product descriptions - fallback to use from CMS
    "products.e3hand.name": "e.hand (e3)",
    "products.e3hand.desc": "A pneumatic-powered automatic gripping system",
    "products.xhand.name": "x.hand",
    "products.xhand.desc": "Modular workplace assistive system",
    "products.bhand.name": "b.hand",
    "products.bhand.desc": "A compact, mobile manual grip aid",
    "products.tbrush.name": "t.brush",
    "products.tbrush.desc":
      "A toothbrush adapter for people with reduced grip strength",

    // Footer
    "footer.description":
      "Empowering independence through advanced assistive technology. Engineered in Germany. Trusted for over 20 years.",
    "footer.quickLinks": "Quick Links",
    "footer.impressum": "Impressum",
    "footer.copyright": "© 2025 Gripability. All rights reserved.",

    // Product page general
    backToProducts: "Back to Products",
    "product.consultation": "Book Consultation",
    "product.download": "Download PDF",
    getInContactWithUs: "Get in Contact with Us",
    productGallery: "Product Gallery",
    keyFeatures: "Key Features",
    qualityCertification: "Quality Certification",
    qualityCertificationText:
      "CE-certified medical-grade technology meeting European standards.",
    operatingPressure: "Operating Pressure",
    inputPressure: "Input Pressure",
    scheduleConsultation: "Schedule Consultation",
    readyToOrder: "Ready to Order",
    consultationRequired: "Personal consultation required",
    availableImmediate: "Available immediately",
    bookConsultation: "Book Consultation",
    getQuote: "Get Quote",
    viewAllProducts: "View All Products",

    // X.Hand specific
    "xhand.whoUses": "Who Uses x.hand?",
    "xhand.howItWorks": "How It Works",
    "xhand.technicalSpecs": "Technical Specifications",
    "xhand.modularAssembly.title": "Modular Assembly",
    "xhand.modularAssembly.description":
      "Fully customizable components adapt to your specific workplace needs.",
    "xhand.bodyAdaptationSystems.title": "Body Adaptation Systems",
    "xhand.bodyAdaptationSystems.description":
      "Ergonomic interfaces designed for comfort and efficiency.",
    "xhand.intelligentControl.title": "Intelligent Control",
    "xhand.intelligentControl.description":
      "Intuitive operation systems that respond to your movements.",
    "xhand.pneumaticOperation.title": "Pneumatic Operation",
    "xhand.pneumaticOperation.description":
      "Reliable compressed air technology for consistent performance.",

    // X.Hand Technical Specifications
    grippingForce: "Gripping Force",
    workingPressure: "Working Pressure",
    weight: "Weight",
    dimensions: "Dimensions",
    powerSupply: "Power Supply",
    airConsumption: "Air Consumption",

    // E3.Hand Technical Specifications
    grippingOperations: "Gripping Operations",
    grippingForces: "Gripping Forces",
    grippingForceRange: "Gripping Force Range",
    batteryLife: "Battery Life",
    chargingTime: "Charging Time",
    gripperWeight: "Gripper Weight",
    powerSource: "Power Source",
    control: "Control",
    connectivity: "Connectivity",
    adaptations: "Adaptations",
    operatingTemp: "Operating Temperature",
    certification: "Certification",
    hilfsmittelNumber: "Medical Device Number",

    // E3.Hand Technical Specs with values
    "e3hand.specs.grippingOperations": "Gripping Operations",
    "e3hand.specs.grippingOperations.value": "Up to 1000 per charge",
    "e3hand.specs.grippingForces": "Gripping Forces",
    "e3hand.specs.grippingForces.value": "Adjustable force levels",
    "e3hand.specs.grippingForceRange": "Gripping Force Range",
    "e3hand.specs.grippingForceRange.value": "22N - 110N",
    "e3hand.specs.batteryLife": "Battery Life",
    "e3hand.specs.batteryLife.value": "8-12 hours continuous use",
    "e3hand.specs.chargingTime": "Charging Time",
    "e3hand.specs.chargingTime.value": "2-3 hours",
    "e3hand.specs.weight": "Total Weight",
    "e3hand.specs.weight.value": "2.8 kg (complete system)",
    "e3hand.specs.gripperWeight": "Gripper Weight",
    "e3hand.specs.gripperWeight.value": "53g",
    "e3hand.specs.workingPressure": "Working Pressure",
    "e3hand.specs.workingPressure.value": "2-8 bar",
    "e3hand.specs.powerSource": "Power Source",
    "e3hand.specs.powerSource.value": "Portable compressor + Battery",
    "e3hand.specs.control": "Control Method",
    "e3hand.specs.control.value": "Touch, voice, switch control",
    "e3hand.specs.connectivity": "Connectivity",
    "e3hand.specs.connectivity.value": "Bluetooth, USB",
    "e3hand.specs.adaptations": "Adaptations",
    "e3hand.specs.adaptations.value": "Custom body interfaces available",
    "e3hand.specs.operatingTemp": "Operating Temperature",
    "e3hand.specs.operatingTemp.value": "5°C to 40°C",
    "e3hand.specs.certification": "Certification",
    "e3hand.specs.certification.value": "CE-certified Class IIa medical device",
    "e3hand.specs.hilfsmittelNumber": "Medical Device Number",
    "e3hand.specs.hilfsmittelNumber.value": "DE-12345678",

    // Product features and descriptions
    "product.xhand.longDescription":
      "The x.hand represents the pinnacle of workplace assistive technology, offering modular components that adapt to your specific professional needs.",
    "product.xhand.features.0": "Modular design adapts to any workplace",
    "product.xhand.features.1": "High-quality pneumatic components",
    "product.xhand.features.2": "Ergonomic body adaptation systems",
    "product.xhand.features.3": "Intelligent control interfaces",
    "product.xhand.features.4": "CE-certified medical device",
    "product.xhand.features.5": "Professional installation and training",
    "product.xhand.features.6": "Ongoing technical support",

    "product.tbrush.longDescription":
      "The t.brush is a simple yet effective toothbrush adapter designed for people with reduced grip strength.",
    "product.tbrush.features.0": "Lightweight and easy to use",
    "product.tbrush.features.1": "Universal toothbrush compatibility",
    "product.tbrush.features.2": "Ergonomic grip design",
    "product.tbrush.features.3": "Dishwasher safe materials",
    "product.tbrush.features.4": "No assembly required",

    "product.e3hand.longDescription":
      "The e.hand (e3) is a pneumatic-powered automatic gripping system designed for home, school, and work environments.",
    "product.e3hand.features.0": "Pneumatic automatic gripping",
    "product.e3hand.features.1": "Customizable control options",
    "product.e3hand.features.2": "Portable compressor system",
    "product.e3hand.features.3": "Multiple grip patterns",
    "product.e3hand.features.4": "Voice control compatible",

    "product.bhand.longDescription":
      "The b.hand is a compact, mobile manual grip aid that brings immediate function and freedom to everyday life.",
    "product.bhand.features.0": "Compact and portable design",
    "product.bhand.features.1": "Manual operation - no power needed",
    "product.bhand.features.2": "Instant grip assistance",
    "product.bhand.features.3": "Lightweight construction",
    "product.bhand.features.4": "Multiple attachment options",

    // Applications
    "xhand.applications.education.title": "Education",
    "xhand.applications.education.description":
      "Supporting students and educators in learning environments.",
    "xhand.applications.therapy.title": "Therapy",
    "xhand.applications.therapy.description":
      "Professional rehabilitation and therapy applications.",
    "xhand.applications.workplace.title": "Workplace",
    "xhand.applications.workplace.description":
      "Enabling professional productivity and career development.",
    "xhand.applications.workshop.title": "Workshop",
    "xhand.applications.workshop.description":
      "Hands-on technical work and manufacturing applications.",

    // Medical indications for t.brush
    "tbrush.indications.tetraplegia": "Tetraplegia",
    "tbrush.indications.hemiparesis": "Hemiparesis",
    "tbrush.indications.postpolio": "Post-polio syndrome",
    "tbrush.indications.muscle": "Muscle weakness",
    "tbrush.applications.daily.title": "Daily Hygiene",
    "tbrush.applications.daily.description": "Independent oral care routines.",
    "tbrush.applications.therapy.title": "Therapy Support",
    "tbrush.applications.therapy.description":
      "Rehabilitation and therapy assistance.",
    "tbrush.applications.independence.title": "Independence",
    "tbrush.applications.independence.description":
      "Maintaining personal autonomy.",
    "tbrush.applications.care.title": "Care Assistance",
    "tbrush.applications.care.description":
      "Supporting caregivers and patients.",
    "tbrush.howItWorks": "How It Works",
    "tbrush.medicalIndications": "Medical Indications",
    "tbrush.indications.description":
      "Suitable for various conditions affecting grip strength.",
    "tbrush.applications": "Applications",
    "tbrush.grip.title": "Secure Grip",
    "tbrush.grip.description": "Provides stable grip for effective brushing.",
    "tbrush.rotation.title": "Natural Rotation",
    "tbrush.rotation.description": "Allows natural wrist movements during use.",
    "tbrush.independence.title": "Independence",
    "tbrush.independence.description":
      "Enables independent oral hygiene routines.",
    "tbrush.hygiene.title": "Oral Hygiene",
    "tbrush.hygiene.description": "Maintains proper dental care standards.",

    // E3 Hand content
    "e3hand.medicalIndications.title": "Medical Indications",
    "e3hand.medicalIndications.indication": "Recommended for:",
    "e3hand.medicalIndications.tetraplegia": "Tetraplegia (C5-C8)",
    "e3hand.medicalIndications.hemiparesis": "Hemiparesis",
    "e3hand.medicalIndications.postpolio": "Post-polio syndrome",
    "e3hand.medicalIndications.muscle": "Muscle weakness disorders",
    "e3hand.components.title": "System Components",
    "e3hand.components.description":
      "The e.hand system consists of four main components working together.",
    "e3hand.components.gripper.title": "Gripper Unit",
    "e3hand.components.gripper.description":
      "The mechanical gripping mechanism.",
    "e3hand.components.control.title": "Control Interface",
    "e3hand.components.control.description":
      "User control and feedback system.",
    "e3hand.components.backpack.title": "Portable Backpack",
    "e3hand.components.backpack.description": "Carrying system for mobility.",
    "e3hand.components.compressor.title": "Compressor Unit",
    "e3hand.components.compressor.description": "Pneumatic power source.",
    "e3hand.operation.title": "How It Operates",
    "e3hand.operation.description": "Simple three-step operation process.",
    "e3hand.operation.step1.title": "Activation",
    "e3hand.operation.step1.description":
      "Activate the system using your preferred control method.",
    "e3hand.operation.step2.title": "Positioning",
    "e3hand.operation.step2.description":
      "Position the gripper near the target object.",
    "e3hand.operation.step3.title": "Gripping",
    "e3hand.operation.step3.description":
      "The system automatically adjusts grip force.",
    "e3hand.features.touchSensitive": "Touch-sensitive control surfaces",
    "e3hand.features.rehaCompatible":
      "Compatible with rehabilitation protocols",
    "e3hand.features.voiceControl": "Voice command integration available",
    "e3hand.lifeApplications": "Life Applications",
    "e3hand.technicalSpecs": "Technical Specifications",
    "e3hand.applications.daily.title": "Daily Living",
    "e3hand.applications.daily.description":
      "Kitchen, dining, and household tasks.",
    "e3hand.applications.education.title": "Education & Learning",
    "e3hand.applications.education.description":
      "School and university environments.",
    "e3hand.applications.career.title": "Career Development",
    "e3hand.applications.career.description":
      "Professional and workplace integration.",
    "e3hand.applications.leisure.title": "Leisure Activities",
    "e3hand.applications.leisure.description":
      "Hobbies, sports, and recreational activities.",
    "e3hand.applications.creative.title": "Creative Work",
    "e3hand.applications.creative.description":
      "Arts, crafts, and creative expression.",
    "e3hand.insurance.title": "Insurance & Funding",
    "e3hand.insurance.recognizedDevice": "Recognized Medical Device",
    "e3hand.insurance.numberLabel": "Medical Device Number:",
    "e3hand.insurance.number": "DE-12345678",
    "e3hand.insurance.productLabel": "Product Classification:",
    "e3hand.insurance.product": "Class IIa Medical Device",
    "e3hand.insurance.certification":
      "CE certified according to EU MDR 2017/745",
    "e3hand.funding.title": "Funding Sources",
    "e3hand.funding.description": "Various funding options available:",
    "e3hand.funding.health": "Health insurance coverage",
    "e3hand.funding.accident": "Accident insurance benefits",
    "e3hand.funding.pension": "Pension fund support",
    "e3hand.funding.employment": "Employment agency assistance",
    "e3hand.funding.integration": "Integration office funding",

    // B.Hand content
    "bhand.howItWorks": "How It Works",
    "bhand.step1.title": "Attach",
    "bhand.step1.description": "Secure the b.hand to your wrist or forearm.",
    "bhand.step2.title": "Position",
    "bhand.step2.description": "Align with the object you want to grip.",
    "bhand.step3.title": "Activate",
    "bhand.step3.description": "Use simple movements to engage the grip.",
    "bhand.grip.title": "Reliable Grip",
    "bhand.grip.description":
      "Provides consistent gripping force for various objects.",
    "bhand.benefits": "Key Benefits",
    "bhand.benefits.compact.title": "Compact Design",
    "bhand.benefits.compact.description": "Easy to transport and store.",
    "bhand.benefits.simple.title": "Simple Operation",
    "bhand.benefits.simple.description":
      "No complex setup or training required.",
    "bhand.benefits.individual.title": "Individual Adaptation",
    "bhand.benefits.individual.description": "Customizable to personal needs.",
    "bhand.benefits.immediate.title": "Immediate Use",
    "bhand.benefits.immediate.description": "Ready to use out of the box.",
    "bhand.medicalIndications": "Medical Indications",
    "bhand.indications.description":
      "Suitable for various grip-related conditions.",
    "bhand.indications.muscle": "Muscle weakness",
    "bhand.indications.paresis": "Hand paresis",
    "bhand.indications.dystrophy": "Muscular dystrophy",
    "bhand.indications.bilateral": "Bilateral hand weakness",
    "bhand.applications": "Applications",
    "bhand.applications.daily.title": "Daily Activities",
    "bhand.applications.daily.description":
      "Eating, drinking, and personal care.",
    "bhand.applications.learning.title": "Learning Support",
    "bhand.applications.learning.description":
      "Educational activities and skill development.",
    "bhand.applications.work.title": "Work Tasks",
    "bhand.applications.work.description":
      "Professional activities and job tasks.",
    "bhand.applications.therapy.title": "Therapy Sessions",
    "bhand.applications.therapy.description":
      "Rehabilitation and therapeutic exercises.",
    "bhand.insurance.title": "Insurance & Funding",
    "bhand.insurance.recognizedDevice": "Recognized Medical Device",
    "bhand.insurance.numberLabel": "Medical Device Number:",
    "bhand.insurance.number": "DE-87654321",
    "bhand.insurance.productLabel": "Product Classification:",
    "bhand.insurance.product": "Class I Medical Device",
    "bhand.insurance.certification":
      "CE certified according to EU MDR 2017/745",
    "bhand.funding.title": "Funding Sources",
    "bhand.funding.description": "Multiple funding options available:",
    "bhand.funding.health": "Health insurance coverage",
    "bhand.funding.accident": "Accident insurance benefits",
    "bhand.funding.pension": "Pension fund support",
    "bhand.funding.employment": "Employment agency assistance",
    "bhand.funding.integration": "Integration office funding",
  },
  de: {
    // Header
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.consultation": "Beratung",
    "nav.contact": "Kontakt",
    "nav.downloads": "Herunterladen",

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
    "contact.headline": "Kontakt & Kauf",
    "contact.getInTouch": "Kontakt aufnehmen",
    "contact.emailLabel": "E-Mail",
    "contact.email": "mail@gripability.com",
    "contact.phoneLabel": "Telefon",
    "contact.phone": "+49 (0) 6669 90 08 80",
    "contact.direct": "Produkte erfordern eine persönliche Beratung.",
    "contact.offer1": "Persönliche Angebote",
    "contact.offer2": "Demo-Sitzungen mit Therapeuten",
    "contact.offer3":
      "Unterstützung bei der Beantragung von Kranken-/Pflegeversicherungsleistungen (Deutschland)",
    "contact.requestConsultation": "Beratung anfragen",
    "contact.messageSent": "Nachricht gesendet!",
    "contact.responseTime": "Wir antworten innerhalb von 24 Stunden.",

    // Downloads
    "downloads.headline": "Download-Center",
    "downloads.description":
      "Laden Sie detaillierte technische Spezifikationen und Benutzerhandbücher für alle unsere Produkte herunter.",
    "downloads.pdf": "PDF herunterladen",

    // Product actions
    "products.viewProduct": "Produkt ansehen",

    // Product descriptions - fallback to use from CMS
    "products.e3hand.name": "e.hand (e3)",
    "products.e3hand.desc":
      "Ein pneumatisch betriebenes automatisches Greifsystem",
    "products.xhand.name": "x.hand",
    "products.xhand.desc": "Modulares Arbeitsplatz-Hilfssystem",
    "products.bhand.name": "b.hand",
    "products.bhand.desc": "Eine kompakte, mobile manuelle Greifhilfe",
    "products.tbrush.name": "t.brush",
    "products.tbrush.desc":
      "Ein Zahnbürstenadapter für Menschen mit reduzierter Greifkraft",

    // Impressum
    "impressum.backToHome": "Zurück zur Startseite",
    "impressum.title": "Impressum",
    "impressum.companyInfo": "Firmeninformationen",
    "impressum.representedBy": "Vertreten durch",
    "impressum.contact": "Kontakt",
    "impressum.phone": "Telefon:",
    "impressum.fax": "Fax:",
    "impressum.email": "E-Mail:",
    "impressum.register": "Register",
    "impressum.registerEntry": "Registereintrag",
    "impressum.court": "Gericht:",
    "impressum.registerNumber": "Registernummer:",
    "impressum.webdesign": "Webdesign",
    "impressum.disclaimer": "Haftungsausschluss",
    "impressum.contentLiability": "Haftung für Inhalte",
    "impressum.contentText": "Haftungstext für Inhalte...",
    "impressum.linkLiability": "Haftung für Links",
    "impressum.linkText": "Haftungstext für Links...",
    "impressum.copyright": "Urheberrecht",
    "impressum.copyrightText": "Urheberrechtstext...",
    "impressum.dataProtection": "Datenschutz",
    "impressum.dataProtectionText": "Datenschutztext...",

    // Footer
    "footer.description":
      "Unabhängigkeit durch fortschrittliche Hilfstechnologie. Entwickelt in Deutschland. Seit über 20 Jahren vertraut.",
    "footer.quickLinks": "Schnellzugriff",
    "footer.impressum": "Impressum",
    "footer.copyright": "© 2025 Gripability. Alle Rechte vorbehalten.",

    // Product page general
    backToProducts: "Zurück zu Produkten",
    "product.consultation": "Beratung buchen",
    "product.download": "PDF herunterladen",
    getInContactWithUs: "Kontakt mit uns aufnehmen",
    productGallery: "Produktgalerie",
    keyFeatures: "Hauptmerkmale",
    qualityCertification: "Qualitätszertifizierung",
    qualityCertificationText:
      "CE-zertifizierte Medizintechnik nach europäischen Standards.",
    operatingPressure: "Betriebsdruck",
    inputPressure: "Eingangsdruck",
    scheduleConsultation: "Beratung vereinbaren",
    readyToOrder: "Bereit zu bestellen",
    consultationRequired: "Persönliche Beratung erforderlich",
    availableImmediate: "Sofort verfügbar",
    bookConsultation: "Beratung buchen",
    getQuote: "Angebot erhalten",
    viewAllProducts: "Alle Produkte ansehen",

    // X.Hand specific
    "xhand.whoUses": "Wer nutzt x.hand?",
    "xhand.howItWorks": "Wie es funktioniert",
    "xhand.technicalSpecs": "Technische Daten",
    "xhand.modularAssembly.title": "Modularer Aufbau",
    "xhand.modularAssembly.description":
      "Vollständig anpassbare Komponenten für Ihre spezifischen Arbeitsplatzanforderungen.",
    "xhand.bodyAdaptationSystems.title": "Körperanpassungssysteme",
    "xhand.bodyAdaptationSystems.description":
      "Ergonomische Schnittstellen für Komfort und Effizienz.",
    "xhand.intelligentControl.title": "Intelligente Steuerung",
    "xhand.intelligentControl.description":
      "Intuitive Bedienungssysteme, die auf Ihre Bewegungen reagieren.",
    "xhand.pneumaticOperation.title": "Pneumatischer Betrieb",
    "xhand.pneumaticOperation.description":
      "Zuverlässige Drucklufttechnik für konstante Leistung.",

    // X.Hand Technical Specifications
    grippingForce: "Greifkraft",
    workingPressure: "Arbeitsdruck",
    weight: "Gewicht",
    dimensions: "Abmessungen",
    powerSupply: "Stromversorgung",
    airConsumption: "Luftverbrauch",

    // E3.Hand Technical Specifications
    grippingOperations: "Greifoperationen",
    grippingForces: "Greifkräfte",
    grippingForceRange: "Greifkraftbereich",
    batteryLife: "Batterielaufzeit",
    chargingTime: "Ladezeit",
    gripperWeight: "Greifergewicht",
    powerSource: "Energiequelle",
    control: "Steuerung",
    connectivity: "Konnektivität",
    adaptations: "Anpassungen",
    operatingTemp: "Betriebstemperatur",
    certification: "Zertifizierung",
    hilfsmittelNumber: "Hilfsmittelnummer",

    // E3.Hand Technical Specs with values
    "e3hand.specs.grippingOperations": "Greifoperationen",
    "e3hand.specs.grippingOperations.value": "Bis zu 1000 pro Ladung",
    "e3hand.specs.grippingForces": "Greifkräfte",
    "e3hand.specs.grippingForces.value": "Einstellbare Kraftstufen",
    "e3hand.specs.grippingForceRange": "Greifkraftbereich",
    "e3hand.specs.grippingForceRange.value": "22N - 110N",
    "e3hand.specs.batteryLife": "Batterielaufzeit",
    "e3hand.specs.batteryLife.value": "8-12 Stunden Dauerbetrieb",
    "e3hand.specs.chargingTime": "Ladezeit",
    "e3hand.specs.chargingTime.value": "2-3 Stunden",
    "e3hand.specs.weight": "Gesamtgewicht",
    "e3hand.specs.weight.value": "2,8 kg (komplettes System)",
    "e3hand.specs.gripperWeight": "Greifergewicht",
    "e3hand.specs.gripperWeight.value": "53g",
    "e3hand.specs.workingPressure": "Arbeitsdruck",
    "e3hand.specs.workingPressure.value": "2-8 bar",
    "e3hand.specs.powerSource": "Energiequelle",
    "e3hand.specs.powerSource.value": "Tragbarer Kompressor + Batterie",
    "e3hand.specs.control": "Steuerungsmethode",
    "e3hand.specs.control.value": "Touch, Sprache, Schaltersteuerung",
    "e3hand.specs.connectivity": "Konnektivität",
    "e3hand.specs.connectivity.value": "Bluetooth, USB",
    "e3hand.specs.adaptations": "Anpassungen",
    "e3hand.specs.adaptations.value":
      "Individuelle Körperschnittstellen verfügbar",
    "e3hand.specs.operatingTemp": "Betriebstemperatur",
    "e3hand.specs.operatingTemp.value": "5°C bis 40°C",
    "e3hand.specs.certification": "Zertifizierung",
    "e3hand.specs.certification.value":
      "CE-zertifiziertes Klasse IIa Medizinprodukt",
    "e3hand.specs.hilfsmittelNumber": "Hilfsmittelnummer",
    "e3hand.specs.hilfsmittelNumber.value": "DE-12345678",

    // Product features and descriptions
    "product.xhand.longDescription":
      "Die x.hand stellt den Höhepunkt der Arbeitsplatz-Assistenztechnologie dar und bietet modulare Komponenten, die sich an Ihre spezifischen beruflichen Bedürfnisse anpassen.",
    "product.xhand.features.0":
      "Modulares Design passt sich jedem Arbeitsplatz an",
    "product.xhand.features.1": "Hochwertige pneumatische Komponenten",
    "product.xhand.features.2": "Ergonomische Körperanpassungssysteme",
    "product.xhand.features.3": "Intelligente Bedienoberflächen",
    "product.xhand.features.4": "CE-zertifiziertes Medizinprodukt",
    "product.xhand.features.5": "Professionelle Installation und Schulung",
    "product.xhand.features.6": "Laufender technischer Support",

    "product.tbrush.longDescription":
      "Die t.brush ist ein einfacher aber effektiver Zahnbürstenadapter für Menschen mit reduzierter Greifkraft.",
    "product.tbrush.features.0": "Leicht und einfach zu verwenden",
    "product.tbrush.features.1": "Universelle Zahnbürstenkompatibilität",
    "product.tbrush.features.2": "Ergonomisches Griffdesign",
    "product.tbrush.features.3": "Spülmaschinenfeste Materialien",
    "product.tbrush.features.4": "Keine Montage erforderlich",

    "product.e3hand.longDescription":
      "Die e.hand (e3) ist ein pneumatisch betriebenes automatisches Greifsystem für Zuhause, Schule und Arbeitsplatz.",
    "product.e3hand.features.0": "Pneumatisches automatisches Greifen",
    "product.e3hand.features.1": "Anpassbare Steuerungsoptionen",
    "product.e3hand.features.2": "Tragbares Kompressorsystem",
    "product.e3hand.features.3": "Mehrere Greifmuster",
    "product.e3hand.features.4": "Sprachsteuerung kompatibel",

    "product.bhand.longDescription":
      "Die b.hand ist eine kompakte, mobile manuelle Greifhilfe, die sofortige Funktion und Freiheit in den Alltag bringt.",
    "product.bhand.features.0": "Kompaktes und tragbares Design",
    "product.bhand.features.1":
      "Manueller Betrieb - keine Stromversorgung nötig",
    "product.bhand.features.2": "Sofortige Greifunterstützung",
    "product.bhand.features.3": "Leichte Konstruktion",
    "product.bhand.features.4": "Mehrere Befestigungsoptionen",

    // Applications
    "xhand.applications.education.title": "Bildung",
    "xhand.applications.education.description":
      "Unterstützung von Schülern und Lehrern in Lernumgebungen.",
    "xhand.applications.therapy.title": "Therapie",
    "xhand.applications.therapy.description":
      "Professionelle Rehabilitation und Therapieanwendungen.",
    "xhand.applications.workplace.title": "Arbeitsplatz",
    "xhand.applications.workplace.description":
      "Ermöglicht berufliche Produktivität und Karriereentwicklung.",
    "xhand.applications.workshop.title": "Werkstatt",
    "xhand.applications.workshop.description":
      "Praktische technische Arbeit und Fertigungsanwendungen.",

    // Medical indications for t.brush
    "tbrush.indications.tetraplegia": "Tetraplegie",
    "tbrush.indications.hemiparesis": "Hemiparese",
    "tbrush.indications.postpolio": "Post-Polio-Syndrom",
    "tbrush.indications.muscle": "Muskelschwäche",
    "tbrush.applications.daily.title": "Tägliche Hygiene",
    "tbrush.applications.daily.description":
      "Unabhängige Mundhygiene-Routinen.",
    "tbrush.applications.therapy.title": "Therapieunterstützung",
    "tbrush.applications.therapy.description":
      "Rehabilitation und Therapiehilfe.",
    "tbrush.applications.independence.title": "Unabhängigkeit",
    "tbrush.applications.independence.description":
      "Aufrechterhaltung der persönlichen Autonomie.",
    "tbrush.applications.care.title": "Pflegeunterstützung",
    "tbrush.applications.care.description":
      "Unterstützung von Pflegekräften und Patienten.",
    "tbrush.howItWorks": "Wie es funktioniert",
    "tbrush.medicalIndications": "Medizinische Indikationen",
    "tbrush.indications.description":
      "Geeignet für verschiedene Erkrankungen, die die Greifkraft beeinträchtigen.",
    "tbrush.applications": "Anwendungen",
    "tbrush.grip.title": "Sicherer Griff",
    "tbrush.grip.description": "Bietet stabilen Griff für effektives Putzen.",
    "tbrush.rotation.title": "Natürliche Rotation",
    "tbrush.rotation.description":
      "Ermöglicht natürliche Handgelenksbewegungen während der Nutzung.",
    "tbrush.independence.title": "Unabhängigkeit",
    "tbrush.independence.description":
      "Ermöglicht unabhängige Mundhygiene-Routinen.",
    "tbrush.hygiene.title": "Mundhygiene",
    "tbrush.hygiene.description":
      "Erhält ordnungsgemäße Zahnpflegestandards aufrecht.",

    // E3 Hand content
    "e3hand.medicalIndications.title": "Medizinische Indikationen",
    "e3hand.medicalIndications.indication": "Empfohlen für:",
    "e3hand.medicalIndications.tetraplegia": "Tetraplegie (C5-C8)",
    "e3hand.medicalIndications.hemiparesis": "Hemiparese",
    "e3hand.medicalIndications.postpolio": "Post-Polio-Syndrom",
    "e3hand.medicalIndications.muscle": "Muskelschwäche-Erkrankungen",
    "e3hand.components.title": "Systemkomponenten",
    "e3hand.components.description":
      "Das e.hand System besteht aus vier Hauptkomponenten, die zusammenarbeiten.",
    "e3hand.components.gripper.title": "Greifer-Einheit",
    "e3hand.components.gripper.description":
      "Der mechanische Greifmechanismus.",
    "e3hand.components.control.title": "Steuerungsschnittstelle",
    "e3hand.components.control.description":
      "Benutzersteuerung und Feedback-System.",
    "e3hand.components.backpack.title": "Tragbarer Rucksack",
    "e3hand.components.backpack.description": "Tragesystem für Mobilität.",
    "e3hand.components.compressor.title": "Kompressor-Einheit",
    "e3hand.components.compressor.description": "Pneumatische Energiequelle.",
    "e3hand.operation.title": "Wie es funktioniert",
    "e3hand.operation.description": "Einfacher dreistufiger Betriebsprozess.",
    "e3hand.operation.step1.title": "Aktivierung",
    "e3hand.operation.step1.description":
      "Aktivieren Sie das System mit Ihrer bevorzugten Steuerungsmethode.",
    "e3hand.operation.step2.title": "Positionierung",
    "e3hand.operation.step2.description":
      "Positionieren Sie den Greifer nahe dem Zielobjekt.",
    "e3hand.operation.step3.title": "Greifen",
    "e3hand.operation.step3.description":
      "Das System passt die Greifkraft automatisch an.",
    "e3hand.features.touchSensitive":
      "Berührungsempfindliche Steuerungsoberflächen",
    "e3hand.features.rehaCompatible":
      "Kompatibel mit Rehabilitationsprotokollen",
    "e3hand.features.voiceControl": "Sprachbefehlintegration verfügbar",
    "e3hand.lifeApplications": "Lebensanwendungen",
    "e3hand.technicalSpecs": "Technische Daten",
    "e3hand.applications.daily.title": "Alltägliches Leben",
    "e3hand.applications.daily.description":
      "Küche, Essen und Haushaltstätigkeiten.",
    "e3hand.applications.education.title": "Bildung & Lernen",
    "e3hand.applications.education.description":
      "Schul- und Universitätsumgebungen.",
    "e3hand.applications.career.title": "Karriereentwicklung",
    "e3hand.applications.career.description":
      "Berufliche und Arbeitsplatzintegration.",
    "e3hand.applications.leisure.title": "Freizeitaktivitäten",
    "e3hand.applications.leisure.description":
      "Hobbys, Sport und Freizeitaktivitäten.",
    "e3hand.applications.creative.title": "Kreative Arbeit",
    "e3hand.applications.creative.description":
      "Kunst, Handwerk und kreativer Ausdruck.",
    "e3hand.insurance.title": "Versicherung & Finanzierung",
    "e3hand.insurance.recognizedDevice": "Anerkanntes Medizinprodukt",
    "e3hand.insurance.numberLabel": "Medizinprodukt-Nummer:",
    "e3hand.insurance.number": "DE-12345678",
    "e3hand.insurance.productLabel": "Produktklassifizierung:",
    "e3hand.insurance.product": "Medizinprodukt Klasse IIa",
    "e3hand.insurance.certification": "CE-zertifiziert nach EU MDR 2017/745",
    "e3hand.funding.title": "Finanzierungsquellen",
    "e3hand.funding.description":
      "Verschiedene Finanzierungsoptionen verfügbar:",
    "e3hand.funding.health": "Krankenversicherungsabdeckung",
    "e3hand.funding.accident": "Unfallversicherungsleistungen",
    "e3hand.funding.pension": "Rentenfondsunterstützung",
    "e3hand.funding.employment": "Arbeitsagenturhilfe",
    "e3hand.funding.integration": "Integrationsamt-Finanzierung",

    // B.Hand content
    "bhand.howItWorks": "Wie es funktioniert",
    "bhand.step1.title": "Befestigen",
    "bhand.step1.description":
      "Befestigen Sie die b.hand an Ihrem Handgelenk oder Unterarm.",
    "bhand.step2.title": "Positionieren",
    "bhand.step2.description":
      "Richten Sie sie mit dem Objekt aus, das Sie greifen möchten.",
    "bhand.step3.title": "Aktivieren",
    "bhand.step3.description":
      "Verwenden Sie einfache Bewegungen, um den Griff zu aktivieren.",
    "bhand.grip.title": "Zuverlässiger Griff",
    "bhand.grip.description":
      "Bietet konstante Greifkraft für verschiedene Objekte.",
    "bhand.benefits": "Hauptvorteile",
    "bhand.benefits.compact.title": "Kompaktes Design",
    "bhand.benefits.compact.description":
      "Einfach zu transportieren und zu lagern.",
    "bhand.benefits.simple.title": "Einfache Bedienung",
    "bhand.benefits.simple.description":
      "Keine komplexe Einrichtung oder Schulung erforderlich.",
    "bhand.benefits.individual.title": "Individuelle Anpassung",
    "bhand.benefits.individual.description":
      "Anpassbar an persönliche Bedürfnisse.",
    "bhand.benefits.immediate.title": "Sofortige Nutzung",
    "bhand.benefits.immediate.description": "Sofort einsatzbereit.",
    "bhand.medicalIndications": "Medizinische Indikationen",
    "bhand.indications.description":
      "Geeignet für verschiedene greifbezogene Erkrankungen.",
    "bhand.indications.muscle": "Muskelschwäche",
    "bhand.indications.paresis": "Handparese",
    "bhand.indications.dystrophy": "Muskeldystrophie",
    "bhand.indications.bilateral": "Bilaterale Handschwäche",
    "bhand.applications": "Anwendungen",
    "bhand.applications.daily.title": "Tägliche Aktivitäten",
    "bhand.applications.daily.description": "Essen, Trinken und Körperpflege.",
    "bhand.applications.learning.title": "Lernunterstützung",
    "bhand.applications.learning.description":
      "Bildungsaktivitäten und Kompetenzentwicklung.",
    "bhand.applications.work.title": "Arbeitsaufgaben",
    "bhand.applications.work.description":
      "Berufliche Aktivitäten und Arbeitsaufgaben.",
    "bhand.applications.therapy.title": "Therapiesitzungen",
    "bhand.applications.therapy.description":
      "Rehabilitation und therapeutische Übungen.",
    "bhand.insurance.title": "Versicherung & Finanzierung",
    "bhand.insurance.recognizedDevice": "Anerkanntes Medizinprodukt",
    "bhand.insurance.numberLabel": "Medizinprodukt-Nummer:",
    "bhand.insurance.number": "DE-87654321",
    "bhand.insurance.productLabel": "Produktklassifizierung:",
    "bhand.insurance.product": "Medizinprodukt Klasse I",
    "bhand.insurance.certification": "CE-zertifiziert nach EU MDR 2017/745",
    "bhand.funding.title": "Finanzierungsquellen",
    "bhand.funding.description": "Mehrere Finanzierungsoptionen verfügbar:",
    "bhand.funding.health": "Krankenversicherungsabdeckung",
    "bhand.funding.accident": "Unfallversicherungsleistungen",
    "bhand.funding.pension": "Rentenfondsunterstützung",
    "bhand.funding.employment": "Arbeitsagenturhilfe",
    "bhand.funding.integration": "Integrationsamt-Finanzierung",
  } as const,
} as const;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const { content, loading } = useSiteContent();

  const t = (key: string): string => {
    // First try to get from CMS content
    if (content) {
      const keys = key.split(".");
      if (keys.length === 2) {
        const [section, field] = keys;

        // Handle special mappings for CMS content
        if (section === "contact") {
          switch (field) {
            case "headline":
              return (
                content.contact?.[`headline_${language}`] ||
                staticTranslations[language][
                  key as keyof (typeof staticTranslations)["en"]
                ] ||
                key
              );
            case "email":
              return (
                content.contact?.email ||
                staticTranslations[language][
                  key as keyof (typeof staticTranslations)["en"]
                ] ||
                key
              );
            case "phone":
              return (
                content.contact?.phone ||
                staticTranslations[language][
                  key as keyof (typeof staticTranslations)["en"]
                ] ||
                key
              );
            case "direct":
              return (
                content.contact?.[`direct_${language}`] ||
                staticTranslations[language][
                  key as keyof (typeof staticTranslations)["en"]
                ] ||
                key
              );
          }
        }

        // Handle other sections
        const fieldKey = `${field}_${language}`;
        if (
          content[section as keyof typeof content] &&
          (content[section as keyof typeof content] as any)[fieldKey]
        ) {
          return (content[section as keyof typeof content] as any)[fieldKey];
        }

        // For nested product content
        if (section === "products" && field !== "headline") {
          const productKey = field.split(".")[0];
          const productField = field.split(".")[1];
          const productFieldKey = `${productField}_${language}`;

          if (
            content.products &&
            (content.products as any)[productKey] &&
            (content.products as any)[productKey][productFieldKey]
          ) {
            return (content.products as any)[productKey][productFieldKey];
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
