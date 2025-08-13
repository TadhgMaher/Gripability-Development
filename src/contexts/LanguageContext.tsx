import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: string | string[];
}

interface LanguageTranslations {
  en: Translations;
  de: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: LanguageTranslations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.consultation": "Consultation",
    "nav.contact": "Contact",
    "nav.downloads": "Downloads",

    // Hero
    "hero.headline": "The Art of Handling Things.",
    "hero.subheadline":
      "Empowering independence through advanced assistive technology.\nEngineered in Germany. Trusted for over 20 years.",
    "hero.cta1": "Explore Our Products",
    "hero.cta2": "Book a Consultation",

    // About
    "about.headline": "Where German Engineering Meets Human Empowerment",
    "about.text1":
      "For over two decades, Gripability has been at the forefront of assistive innovation. Our team of engineers, therapists, and designers work closely with users to create intelligent tools that restore freedom of movement—at home, at work, and beyond.",
    "about.text2":
      "Whether you're navigating your daily routine or reshaping your professional life, Gripability's award-winning technology is designed to adapt to you—not the other way around.",

    // Products
    "products.headline": "Smart Tools. Real Independence.",
    "products.xhand.name": "X-Hand",
    "products.xhand.desc":
      "Modular workplace assistive system built with high-quality pneumatics and adaptable components.",
    "products.tbrush.name": "T-Brush",
    "products.tbrush.desc":
      "A toothbrush adapter for people with reduced grip strength. Lightweight. Easy to use.",
    "products.e3hand.name": "E.Hand",
    "products.e3hand.desc":
      "A pneumatic-powered automatic gripping system for home, school, and work—customizable for hand, head, or alternative use points.",
    "products.bhand.name": "B-Hand",
    "products.bhand.desc":
      "A compact, mobile manual grip aid that brings immediate function and freedom to everyday life.",
    "products.viewProduct": "View Product",

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

    // Consultation
    "consultation.headline": "Let's Talk. We're Here to Help.",
    "consultation.text":
      "Some of our products require consultation to ensure the best fit for your needs. Use the form below to reach out.",
    "consultation.name": "Name",
    "consultation.email": "Email",
    "consultation.country": "Country",
    "consultation.message": "How can we help you?",
    "consultation.mobility":
      "I have limited mobility and would like to speak with a product advisor.",
    "consultation.send": "Send Message",

    // Contact
    "contact.headline": "Contact & Purchasing",
    "contact.direct": "Products require a personal consultation.",
    "contact.offer1": "Personalized quotes",
    "contact.offer2": "Demo sessions with therapists",
    "contact.offer3":
      "Support in applying for insurance/medical aid coverage (Germany)",
    "contact.email": "mail@gripability.com",
    "contact.phone": "+49 (0) 6669 90 08 80",

    // Downloads
    "downloads.headline": "Download Center",
    "downloads.pdf": "Download PDF",

    // Product Page
    "product.consultation": "Consultation Required",
    "product.available": "Available Out-of-Box",
    "product.download": "Download full technical sheet [PDF – German]",
    "product.message": "Message Us About This Product",

    // X-Hand specific content
    "xhand.whoUses": "Who Uses X-Hand?",
    "xhand.howItWorks": "How Does It Operate?",
    "xhand.technicalSpecs": "Technical Specifications",
    "xhand.applications": "Applications & Benefits",

    // X-Hand How It Works section
    "xhand.modularAssembly.title": "Modular Component Assembly",
    "xhand.modularAssembly.description":
      "The x.hand system features various gripping modules including pneumatic grippers and vacuum suction devices. These can be combined with the high-quality articulated arm construction kit for maximum 3D positioning flexibility.",

    "xhand.bodyAdaptationSystems.title": "Body Adaptation Systems",
    "xhand.bodyAdaptationSystems.description":
      "Grippers and vacuum suction devices can be provided through special body adaptations at the hand, or if needed, at the head or other body parts using our comprehensive adaptation sets.",

    "xhand.intelligentControl.title": "Intelligent Control System",
    "xhand.intelligentControl.description":
      "The 2-channel control module serves as the interface between compressed air supply and the gripping/operating modules. Various control modules are available with interfaces for 3.5mm jack sensors (rehabilitation standard).",

    "xhand.pneumaticOperation.title": "Pneumatic Operation",
    "xhand.pneumaticOperation.description":
      "Powered by compressed air for reliable, precise control. Compatible with existing compressed air networks or our whisper-quiet Air-Caddy compressor.",

    // Additional UI translations
    productGallery: "Product Gallery",
    keyFeatures: "Key Features",
    qualityCertification: "Quality & Certification",
    qualityCertificationText:
      "All Gripability products comply with EU Medical Device Directive 93/42/EEC and are CE certified. Engineered and manufactured in Germany with the highest quality standards.",
    operatingPressure: "Operating Pressure",
    inputPressure: "Input Pressure",
    scheduleConsultation: "Schedule a Consultation",
    readyToOrder: "Ready to Order?",
    consultationRequired:
      "This product requires a personal consultation to ensure the best fit for your needs. Our experts will guide you through the process and provide comprehensive training.",
    availableImmediate:
      "This product is available for immediate order. Contact us for pricing and delivery information.",
    bookConsultation: "Book Consultation",
    getQuote: "Get Quote",
    viewAllProducts: "View All Products",
    backToProducts: "Back to Products",
    getInContactWithUs: "Get in contact with us",

    // X-Hand Applications English
    "xhand.applications.education.title": "Educational Environments",
    "xhand.applications.education.description":
      "Perfect for special education schools and vocational training centers, helping students develop motor skills and technical competencies.",
    "xhand.applications.therapy.title": "Therapeutic Settings",
    "xhand.applications.therapy.description":
      "Enables therapists to quickly create customized workstations for clients within realistic therapy session timeframes.",
    "xhand.applications.workplace.title": "Industrial Workplaces",
    "xhand.applications.workplace.description":
      "Optimizes workstations for employees with physical limitations, enabling active participation in economic work processes.",
    "xhand.applications.workshop.title": "Workshop Environments",
    "xhand.applications.workshop.description":
      "Provides dynamic, adaptable workstations that can be reconfigured for different tasks and varying skill levels.",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.accessibility": "Accessibility",
    "footer.certification": "CE Certification",

    // Impressum
    "impressum.title": "Legal Notice",
    "impressum.companyInfo": "Company Information according to § 5 TMG:",
    "impressum.representedBy": "Represented by:",
    "impressum.contact": "Contact:",
    "impressum.phone": "Phone:",
    "impressum.fax": "Fax:",
    "impressum.email": "E-Mail:",
    "impressum.register": "Commercial Register:",
    "impressum.registerEntry": "Entry in the commercial register.",
    "impressum.court": "Register Court:",
    "impressum.registerNumber": "Register Number:",
    "impressum.webdesign": "Web Design:",
    "impressum.disclaimer": "Disclaimer:",
    "impressum.contentLiability": "Liability for Content",
    "impressum.contentText":
      "The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to Section 7 (1) TMG. However, pursuant to Sections 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon notification of corresponding violations, we will remove this content immediately.",
    "impressum.linkLiability": "Liability for Links",
    "impressum.linkText":
      "Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of legal violations, we will remove such links immediately.",
    "impressum.copyright": "Copyright",
    "impressum.copyrightText":
      "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of legal violations, we will remove such content immediately.",
    "impressum.dataProtection": "Data Protection",
    "impressum.dataProtectionText":
      "The use of our website is generally possible without providing personal data. Insofar as personal data (for example name, address or e-mail addresses) is collected on our pages, this is done on a voluntary basis wherever possible. This data will not be passed on to third parties without your express consent. We point out that data transmission on the Internet (e.g. when communicating via e-mail) can have security gaps. Complete protection of data against access by third parties is not possible. We hereby expressly object to the use of contact data published as part of the imprint obligation by third parties for sending unsolicited advertising and information materials. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, for example through spam e-mails.",
    "impressum.backToHome": "Back to Home",

    // Product Page - long descriptions (English)
    "product.e3hand.longDescription":
      "Gripability e3 is an automatic and extremely comfortable gripping system that allows you to gain a high degree of independence and activity in your personal daily life. This long-proven assistive device opens up new possibilities for shaping your life and accompanies you wherever you go. Take your life into your own hands with this innovative pneumatic-powered gripping technology.",
    "product.xhand.longDescription":
      "Gripability x.hand is a system construction kit for designing adaptive workplaces. It was developed to expand individual capabilities in educational, school, and professional environments. The multitude of its individual parts form a logical concept where each component fits perfectly with the others, creating endless possibilities for custom workplace solutions.",
    "product.bhand.longDescription":
      "Grasping is an elementary body function. Picking up and holding things, using and moving objects - this means 'grasping' the world for us. With the Gripability b.hand, you can significantly expand your range of actions. Many everyday and leisure activities become possible again. Compact and mobile - you always have your b.hand 'at hand' - exactly when you need it.",

    // B-Hand specific detailed content
    "bhand.howItWorks": "Simple to Use",
    "bhand.medicalIndications": "Medical Indications",
    "bhand.applications": "Applications",
    "bhand.benefits": "Benefits & Features",

    "bhand.grip.title": "Life Under Control",
    "bhand.grip.description":
      "The b.hand gripping aid serves for immediate disability compensation and is a new option for independent completion of basic daily living needs.",

    "bhand.flexibility.title": "Flexible Through Daily Life",
    "bhand.flexibility.description":
      "The Gripability b.hand was specially developed to complement your individual gripping ability. Compact and mobile - you always have your b.hand 'at hand' - exactly when you need it.",

    "bhand.learning.title": "Joy in Learning",
    "bhand.learning.description":
      "Learning means 'grasping'. This word already shows the special importance of gripping function in the learning process. With the Gripability b.hand you increase your independence, dynamism and productivity.",

    "bhand.workplace.title": "Competent and Productive at Work",
    "bhand.workplace.description":
      "With the Gripability b.hand you enrich your workplace with a powerful and adaptable gripping tool. This makes you more independent and opens access to more complex activities.",

    // B-Hand How to Use Steps
    "bhand.step1.title": "1. Opening the Gripping Fingers",
    "bhand.step1.description":
      "To open the gripping fingers, pull the clamping lever in the front direction until it engages. The gripping fingers now remain open.",

    "bhand.step2.title": "2. Position Object",
    "bhand.step2.description":
      "Target the object and place it between the gripping fingers.",

    "bhand.step3.title": "3. Close Gripping Fingers",
    "bhand.step3.description":
      "To close the gripping fingers, operate the release tongue or release pin. The gripper closes gently and you have the desired object securely and stably in your grip.",

    // B-Hand Medical Indications
    "bhand.indications.description":
      "The Gripability b.hand is indicated when the use of a compact and mobile gripping aid represents an expansion of action competencies:",
    "bhand.indications.muscle":
      "Functional failure of hand muscles due to nerve system or muscle diseases",
    "bhand.indications.paresis":
      "Paresis, Hemiparesis, Tetraplegia, Tetraspasticity",
    "bhand.indications.dystrophy": "Muscular Dystrophy, Post-Polio Syndrome",
    "bhand.indications.bilateral":
      "Unilateral or bilateral limitations of gripping function",

    // B-Hand Applications
    "bhand.applications.daily.title": "Daily and Leisure Activities",
    "bhand.applications.daily.description":
      "Many everyday and leisure activities become possible again. Independent completion of basic daily living needs.",

    "bhand.applications.learning.title": "Learning and Development",
    "bhand.applications.learning.description":
      "Through needs-oriented application, action sequences become more complex and demanding. Physical and mental activity is specifically trained and promoted.",

    "bhand.applications.work.title": "Workplace Integration",
    "bhand.applications.work.description":
      "Whether as holding or functional hand in bilateral activities or as free functional hand in unilateral work, the b.hand opens completely new therapy and support possibilities.",

    "bhand.applications.therapy.title": "Therapeutic Application",
    "bhand.applications.therapy.description":
      "Its functionality demands planned and clearly structured action sequences from the user - ideal for therapeutic purposes.",

    // B-Hand Benefits
    "bhand.benefits.compact.title": "Compact and Mobile",
    "bhand.benefits.compact.description":
      "Always 'at hand' - exactly when you need the b.hand.",

    "bhand.benefits.simple.title": "Simple Operation",
    "bhand.benefits.simple.description":
      "The operation is uncomplicated, practical and learnable for everyone.",

    "bhand.benefits.individual.title": "Individually Adaptable",
    "bhand.benefits.individual.description":
      "With an intelligent product construction kit, we ensure that you have everything under control with your b.hand.",

    "bhand.benefits.immediate.title": "Immediate Benefit",
    "bhand.benefits.immediate.description":
      "Immediate disability compensation without compromises in effort and benefit.",
    "product.tbrush.longDescription":
      "Daily tooth cleaning is an important part of personal hygiene. Toothbrush and brushing technique play a crucial role. With t.brush, you always have your electric toothbrush firmly under control. A grip bracket ensures that the toothbrush sits stable in your hand. And so you can reach everywhere with the brush head, you can rotate the handle around the toothbrush.",

    // T-Brush specific detailed content
    "tbrush.howItWorks": "How t.brush Works",
    "tbrush.medicalIndications": "Medical Indications",
    "tbrush.applications": "Applications",
    "tbrush.benefits": "Benefits & Features",

    "tbrush.grip.title": "Your Toothbrush Under Control",
    "tbrush.grip.description":
      "A grip bracket ensures that the toothbrush sits stable in your hand. So you can reach everywhere with the brush head, you can rotate the handle around the toothbrush.",

    "tbrush.hygiene.title": "Optimal Dental Hygiene",
    "tbrush.hygiene.description":
      "When you brush your teeth with an electric toothbrush, you see and feel the difference. You implement the best brushing technique perfectly with your t.brush.",

    "tbrush.independence.title": "Independent Dental Care",
    "tbrush.independence.description":
      "The t.brush serves for immediate disability compensation and is a new option when it comes to independent dental hygiene.",

    "tbrush.rotation.title": "Rotatable Grip Bracket",
    "tbrush.rotation.description":
      "The innovative rotatable grip bracket makes it possible to use the electric toothbrush at any angle and effectively reach all areas of the mouth.",

    // T-Brush Medical Indications
    "tbrush.indications.description":
      "With focus on missing or limited hand function, the t.brush supports various medical indications:",
    "tbrush.indications.tetraplegia":
      "Tetraplegia, Tetraspasticity, Tetraparesis",
    "tbrush.indications.hemiparesis": "Hemiparesis, Muscular Dystrophy",
    "tbrush.indications.postpolio": "Post-Polio Syndrome, Dysmelia",
    "tbrush.indications.muscle":
      "Functional failures of hand muscles due to nerve system or muscle diseases",

    // T-Brush Applications
    "tbrush.applications.daily.title": "Daily Personal Hygiene",
    "tbrush.applications.daily.description":
      "Enables independent and thorough tooth cleaning as an important part of daily personal hygiene.",

    "tbrush.applications.therapy.title": "Therapeutic Support",
    "tbrush.applications.therapy.description":
      "Supports doctors, therapists and support staff in helping their clients achieve more activity and independence and thus better quality of life.",

    "tbrush.applications.independence.title": "Promoting Independence",
    "tbrush.applications.independence.description":
      "Offers people with limited hand function the opportunity for independent dental care without external help.",

    "tbrush.applications.care.title": "Care Support",
    "tbrush.applications.care.description":
      "Reduces the care effort and enables affected persons to take over an important aspect of personal hygiene themselves.",

    // Product Page - features (array format for ProductPage compatibility)
    "product.xhand.features.0":
      "High-quality pneumatic system with precision components",
    "product.xhand.features.1": "Modular articulated arm construction kit",
    "product.xhand.features.2":
      "Multiple gripping modules including vacuum suction",
    "product.xhand.features.3":
      "Body adaptation sets for hand, head or other body parts",
    "product.xhand.features.4": "Professional 2-channel control module",
    "product.xhand.features.5":
      "Compatible with rehabilitation standard 3.5mm sensors",
    "product.xhand.features.6":
      "Quiet operation with whisper-silent air compressor option",

    "product.e3hand.features.0": "Automatic pneumatic-powered gripping system",
    "product.e3hand.features.1":
      "Mobile backpack module with intelligent control",
    "product.e3hand.features.2": "200-400 gripping operations per charge",
    "product.e3hand.features.3": "3 adjustable gripping force levels",
    "product.e3hand.features.4": "CE certified medical device",

    "product.bhand.features.0": "Compact and portable",
    "product.bhand.features.1": "Manual operation",
    "product.bhand.features.2": "Immediate functionality",
    "product.bhand.features.3": "Durable construction",
    "product.bhand.features.4": "No installation required",

    "product.tbrush.features.0": "Lightweight construction",
    "product.tbrush.features.1": "Ergonomic grip design",
    "product.tbrush.features.2": "Easy to clean and maintain",
    "product.tbrush.features.3": "Compatible with standard toothbrushes",
    "product.tbrush.features.4": "Ready to use out of the box",
  },
  de: {
    // Product Page - long descriptions
    "product.e3hand.longDescription":
      "Das automatische Greifsystem e.hand (e3) ist ein hochentwickeltes pneumatisch betriebenes Greifsystem für mehr Aktivität und Selbstständigkeit in Alltag, Beruf und Freizeit. Die innovative Konstruktion ermöglicht eine individuelle Anpassung und vielseitige Einsatzmöglichkeiten.",
    "product.xhand.longDescription":
      "Gripability x.hand ist ein Systembaukasten zur Gestaltung adaptiver Arbeitsplätze. Er wurde zur Erweiterung individueller Handlungsmöglichkeiten in Förder-, Schul- und Berufsumgebungen entwickelt. Die Vielzahl seiner Einzelteile bilden ein logisches Konzept, bei dem eins zum anderen passt. Bauteil für Bauteil. Erleben Sie, wie aus der Fülle unterschiedlicher Komponenten immer wieder neue Arbeitshilfen mit zahllosen Variationsmöglichkeiten entstehen.",
    "product.bhand.longDescription":
      "Greifen ist eine elementare Körperfunktion. Dinge aufnehmen und festhalten, Gegenstände benutzen und bewegen, dies bedeutet für uns die Welt zu »begreifen«. Mit der Gripability b.hand können Sie Ihr Handlungsspektrum deutlich erweitern. Viele Alltags- und Freizeitaktivitäten werden Ihnen wieder möglich. Kompakt und mobil – Ihre b.hand haben Sie stets »griffbereit« – genau dann, wenn Sie die b.hand brauchen.",

    // B-Hand specific detailed content
    "bhand.howItWorks": "Einfach in der Anwendung",
    "bhand.medicalIndications": "Medizinische Indikationen",
    "bhand.applications": "Anwendungsbereiche",
    "bhand.benefits": "Vorteile & Eigenschaften",

    "bhand.grip.title": "Das Leben im Griff",
    "bhand.grip.description":
      "Das Greif-Hilfsmittel b.hand dient dem unmittelbaren Behinderungsausgleich und ist eine neue Option, wenn es z.B. um die eigenständige Erledigung von Grundbedürfnissen des täglichen Lebens geht.",

    "bhand.flexibility.title": "Flexibel durch den Alltag",
    "bhand.flexibility.description":
      "Die Gripability b.hand wurde speziell zur Ergänzung Ihrer individuellen Greiffähigkeit entwickelt. Kompakt und mobil – Ihre b.hand haben Sie stets »griffbereit« – genau dann, wenn Sie die b.hand brauchen.",

    "bhand.learning.title": "Freude am Lernen",
    "bhand.learning.description":
      "Lernen heißt »begreifen«. Bereits aus diesem Wort geht hervor, welche besondere Bedeutung der Greiffunktion im Lernprozess zukommt. Mit der Gripability b.hand steigern Sie Ihre Selbstständigkeit, Ihre Dynamik und Ihre Produktivität.",

    "bhand.workplace.title": "Kompetent und produktiv bei der Arbeit",
    "bhand.workplace.description":
      "Mit der Gripability b.hand bereichern Sie Ihren Arbeitsplatz um ein kraftvolles und anpassungsfähiges Greif-Werkzeug. So werden Sie unabhängiger und eröffnen sich Zugang zu vielschichtigeren Tätigkeiten.",

    // B-Hand How to Use Steps
    "bhand.step1.title": "1. Öffnen der Greiffinger",
    "bhand.step1.description":
      "Zum Öffnen der Greiffinger wird der Spannhebel in Frontrichtung gezogen, bis dieser einrastet. Die Greiffinger bleiben nun geöffnet.",

    "bhand.step2.title": "2. Objekt platzieren",
    "bhand.step2.description":
      "Visieren Sie das Objekt an und platzieren Sie es zwischen den Greiffingern.",

    "bhand.step3.title": "3. Greiffinger schließen",
    "bhand.step3.description":
      "Zum Schließen der Greiffinger betätigen Sie die Auslösezunge oder den Auslösestift. Der Greifer schließt sich sanft und Sie haben den gewünschten Gegenstand sicher und stabil im Griff.",

    // B-Hand Medical Indications
    "bhand.indications.description":
      "Die Gripability b.hand ist indiziert, wenn der Einsatz eines kompakten und mobilen Greif-Hilfsmittels eine Erweiterung der Handlungskompetenzen darstellt:",
    "bhand.indications.muscle":
      "Funktionsausfall von Handmuskeln infolge Nerven(system)- oder Muskelerkrankungen",
    "bhand.indications.paresis":
      "Parese, Hemiparese, Tetraplegie, Tetraspastik",
    "bhand.indications.dystrophy": "Muskeldystrophie, Postpolio-Syndrom",
    "bhand.indications.bilateral":
      "Uni- oder bilaterale Einschränkungen der Greiffunktion",

    // B-Hand Applications
    "bhand.applications.daily.title": "Alltags- und Freizeitaktivitäten",
    "bhand.applications.daily.description":
      "Viele Alltags- und Freizeitaktivitäten werden Ihnen wieder möglich. Eigenständige Erledigung von Grundbedürfnissen des täglichen Lebens.",

    "bhand.applications.learning.title": "Lernen und Entwicklung",
    "bhand.applications.learning.description":
      "Durch die bedarfsorientierte Anwendung werden Handlungsabläufe komplexer und anspruchsvoller. Körperliche und geistige Aktivität wird gezielt geschult und gefördert.",

    "bhand.applications.work.title": "Arbeitsplatz-Integration",
    "bhand.applications.work.description":
      "Ob als Halte- oder Funktionshand bei bilateralen Tätigkeiten oder als freie Funktionshand bei unilateralen Arbeiten, die b.hand eröffnet ganz neue Therapie- und Fördermöglichkeiten.",

    "bhand.applications.therapy.title": "Therapeutische Anwendung",
    "bhand.applications.therapy.description":
      "Ihre Funktionsweise fordert dem Anwender geplante sowie klar strukturierte Handlungsabläufe und Handlungsfolgen ab - ideal für therapeutische Zwecke.",

    // B-Hand Benefits
    "bhand.benefits.compact.title": "Kompakt und mobil",
    "bhand.benefits.compact.description":
      "Stets »griffbereit« - genau dann, wenn Sie die b.hand brauchen.",

    "bhand.benefits.simple.title": "Einfache Handhabung",
    "bhand.benefits.simple.description":
      "Die Handhabung ist unkompliziert, praktisch und für jeden erlernbar.",

    "bhand.benefits.individual.title": "Individuell anpassbar",
    "bhand.benefits.individual.description":
      "Mit einem intelligenten Produktbaukasten stellen wir sicher, dass Sie mit Ihrer b.hand alles im Griff haben.",

    "bhand.benefits.immediate.title": "Sofortiger Nutzen",
    "bhand.benefits.immediate.description":
      "Unmittelbarer Behinderungsausgleich ohne Kompromisse bei Aufwand und Nutzen.",
    "product.tbrush.longDescription":
      "Das Reinigen der Zähne ist ein wichtiger Bestandteil der täglichen Körperhygiene. Zahnbürste und Putztechnik spielen dabei eine entscheidende Rolle. Mit t.brush haben Sie Ihre elektrische Zahnbürste immer fest im Griff. Ein Griffbügel stellt sicher, dass die Zahnbürste stabil in Ihrer Hand sitzt. Und damit Sie mit dem Bürstenkopf auch überall hinkommen, können Sie den Griff um die Zahnbürste drehen.",

    // T-Brush specific detailed content
    "tbrush.howItWorks": "So funktioniert t.brush",
    "tbrush.medicalIndications": "Medizinische Indikationen",
    "tbrush.applications": "Anwendungsbereiche",
    "tbrush.benefits": "Vorteile & Eigenschaften",

    "tbrush.grip.title": "Ihre Zahnbürste im Griff",
    "tbrush.grip.description":
      "Ein Griffbügel stellt sicher, dass die Zahnbürste stabil in Ihrer Hand sitzt. Damit Sie mit dem Bürstenkopf auch überall hinkommen, können Sie den Griff um die Zahnbürste drehen.",

    "tbrush.hygiene.title": "Optimale Zahnhygiene",
    "tbrush.hygiene.description":
      "Putzen Sie sich die Zähne mit einer elektrischen Zahnbürste, sehen und spüren Sie den Unterschied. Die beste Putztechnik setzen Sie mit Ihrer t.brush perfekt um.",

    "tbrush.independence.title": "Eigenständige Zahnpflege",
    "tbrush.independence.description":
      "Die t.brush dient dem unmittelbaren Behinderungsausgleich und ist eine neue Option, wenn es um die eigenständige Erledigung der Zahnhygiene geht.",

    "tbrush.rotation.title": "Rotationsfähiger Griffbügel",
    "tbrush.rotation.description":
      "Der innovative rotationsfähige Griffbügel ermöglicht es, die elektrische Zahnbürste in jedem Winkel zu verwenden und alle Bereiche des Mundes effektiv zu erreichen.",

    // T-Brush Medical Indications
    "tbrush.indications.description":
      "Mit Focus auf eine fehlende oder eingeschränkte Handfunktion unterstützt die t.brush bei verschiedenen medizinischen Indikationen:",
    "tbrush.indications.tetraplegia": "Tetraplegie, Tetraspastik, Tetraparese",
    "tbrush.indications.hemiparesis": "Hemiparese, Muskeldystrophie",
    "tbrush.indications.postpolio": "Postpolio-Syndrom, Dysmelie",
    "tbrush.indications.muscle":
      "Funktionsausfälle von Handmuskeln infolge Nerven(system)- oder Muskelerkrankungen",

    // T-Brush Applications
    "tbrush.applications.daily.title": "Tägliche Körperhygiene",
    "tbrush.applications.daily.description":
      "Ermöglicht eine eigenständige und gründliche Zahnreinigung als wichtigen Bestandteil der täglichen Körperhygiene.",

    "tbrush.applications.therapy.title": "Therapeutische Unterstützung",
    "tbrush.applications.therapy.description":
      "Unterstützt Ärzte, Therapeuten und Förderkräfte dabei, ihren Klienten zu mehr Aktivität und Selbstständigkeit und somit zu mehr Lebensqualität zu verhelfen.",

    "tbrush.applications.independence.title": "Selbstständigkeit fördern",
    "tbrush.applications.independence.description":
      "Bietet Menschen mit eingeschränkter Handfunktion die Möglichkeit zur eigenständigen Zahnpflege ohne fremde Hilfe.",

    "tbrush.applications.care.title": "Pflegeunterstützung",
    "tbrush.applications.care.description":
      "Reduziert den Pflegeaufwand und ermöglicht es Betroffenen, einen wichtigen Aspekt der Körperhygiene selbst zu übernehmen.",

    // X-Hand specific detailed content
    "xhand.modularConstruction.title": "Modularer Aufbau",
    "xhand.modularConstruction.description":
      "Der x.hand Systembaukasten enthält verschiedene Greifmodule. Neben Greifzangen können auch Vakuum Sauger und andere druckluftbetriebene Aktoren ausgewählt werden. Der Gelenkarm Baukasten ist qualitativ sehr hochwertig und bietet maximale 3D Anpassungsmöglichkeiten. Die Bedarfsgerechte Positionierung von Greif- und Bedienmodulen sowie anderer Arbeitsplatzausstattung ist unkompliziert und schnell erledigt.",

    "xhand.bodyAdaptation.title": "Körperadaptationen",
    "xhand.bodyAdaptation.description":
      "Greifzangen und Vakuum Sauger können mittels spezieller Körperadaptionen an der Hand, bei entsprechendem Bedarf auch am Kopf oder einem anderen Körperteil, zur Verfügung gestellt werden.",

    "xhand.controlSystem.title": "Steuerungssystem",
    "xhand.controlSystem.description":
      "Zur Steuerung der aktiven Elemente stehen unterschiedlichste Bedienmodule zur Verfügung. Schnittstellen für 3,5 mm Klinkenstecker Sensoren (Reha Standard) sind vorhanden. Das x.hand 2-Kanal-Steuerungsmodul bildet die Schnittstelle zwischen der Druckluftversorgung auf der einen sowie den Greif- und Bedienmodulen auf der anderen Seite.",

    "xhand.airSupply.title": "Druckluftversorgung",
    "xhand.airSupply.description":
      "Zum Betreiben eines x.hand Systems bedarf es einer Druckluftversorgung. Häufig ist dies ein vorhandenes Druckluftnetz. Bei Bedarf stellt der Gripability Air-Caddy eine hochwertige, bequeme und flüsterleise Alternative dar.",

    // X-Hand Applications
    "xhand.applications.education.title": "Schulische Anwendung",
    "xhand.applications.education.description":
      "Ein Ziel der Förderschule ist es, die Schüler zum Umgang mit technischen Hilfen zu befähigen. Dies kann unter Verwendung der Gripability x.hand Bauteile ideal erreicht werden. Zudem eignet sich der vielseitige Hilfsmittel-Baukasten hervorragend zur Förderung kontrollierter Bewegungsabläufe, zum Training der Koordinationsfähigkeit sowie zur Schulung struktureller Handlungsabläufe.",

    "xhand.applications.therapy.title": "Therapeutische Anwendung",
    "xhand.applications.therapy.description":
      "Der Einsatz des Gripability x.hand Baukastensystems versetzt, z.B. einen Therapeuten, in die Lage einem Klienten, innerhalb eines für eine Therapieeinheit realistischen Zeitrahmens, eine bedarfsgerechte Substitution für seine eingeschränkte Greif- bzw. Koordinationsfähigkeit, sowie seinen begrenzten Aktionsradius, zu schaffen.",

    "xhand.applications.workplace.title": "Arbeitsplatz-Integration",
    "xhand.applications.workplace.description":
      "Für Menschen mit körperlichen Einschränkungen ist ein auf die individuellen Bedürfnisse optimierter Arbeitsplatz die Voraussetzung aktiv an wirtschaftlichen Arbeitsprozessen mitarbeiten zu können. Kompetenzen und Potenziale des Einzelnen sind erst durch eine auf seine Fähigkeiten abgestimmte Arbeitsplatzgestaltung und den Einsatz von technischen Hilfsmitteln optimal zu entfalten.",

    "xhand.applications.workshop.title": "Werkstatt-Umgebung",
    "xhand.applications.workshop.description":
      "Durch die variable Adaptierbarkeit eines x.hand Arbeitsplatzes können beispielsweise Werkstatt-Gruppenleiter Eigenständigkeit und damit Selbstwert und Motivation ihrer Gruppenteilnehmer maßgeblich erhöhen. Zusätzlich werden Fähigkeiten, wie Ausdauer, Konzentration, strukturiertes Handeln, Organisation, etc. trainiert.",

    // X-Hand Benefits
    "xhand.benefits.motivation.title": "Durch Erfolg motivieren",
    "xhand.benefits.motivation.description":
      "Die erfolgreiche Bewältigung von arbeitsalltäglichen Aufgaben, sowie das Wachsen an neuen und anspruchsvollen Aufgabengebieten im Beruf sind elementar für das individuelle Selbstwertempfinden in unserer Gesellschaft.",

    "xhand.benefits.variety.title": "Arbeit abwechslungsreich gestalten",
    "xhand.benefits.variety.description":
      "Mit dem x.hand Baukasten gestalten Sie dynamische Arbeitsplätze. Das bedeutet, Sie können im Handumdrehen eine Arbeitshilfe verändern und damit immer wieder neue Situationen und Herausforderungen für den Nutzer schaffen.",

    "xhand.benefits.versatility.title": "Vielseitigkeit erleben",
    "xhand.benefits.versatility.description":
      "Halten, Fixieren, Platzieren und Positionieren sind am Arbeitsplatz wesentliche Handlungen. Und genau hier liegt auch der Schwerpunkt des x.hand Systembaukastens, in der Kompensation einer eingeschränkten oder fehlenden Handfunktion.",

    "xhand.benefits.investment.title": "Nachhaltig investieren",
    "xhand.benefits.investment.description":
      "Der Gripability x.hand Baukasten ist extrem anpassungsfähig. Er wurde für den ständigen Wandel konzipiert und kann zu jeder Zeit an veränderte persönliche Bedürfnisse oder für eine andere Person adaptiert werden. Darüber hinaus ermöglicht die hohe Modularität des Systems eine mit wechselnden Arbeitsaufgaben erforderliche Neuanpassung des Arbeitsplatzes.",

    // X-Hand Kits
    "xhand.kits.basis.title": "x.hand Basis-Kits",
    "xhand.kits.basis.description":
      "x.hand Basis-Kits enthalten, je nach Schwerpunkt, alle wichtigen Komponenten für einen erfolgreichen Einstieg in die Welt des adaptiven Arbeitsplatzes und der innovativen Gripability Greif-Hilfsmittel. Sie sind zum Anschluss an ein vorhandenes Druckluftnetz vorbereitet und können an zwei Arbeitsplätzen gleichzeitig zum Einsatz kommen.",

    "xhand.kits.didactic.title": "x.hand Didaktik- und Bildungs-Kits",
    "xhand.kits.didactic.description":
      "x.hand Didaktik- und Bildungs-Kits sind auf die Anforderungen in Förderschulen und Berufsbildungsbereichen ausgelegt. Zum einen stellen sie eine optimale Grundlage zur Realisierung adaptiver Arbeitsplätze in Lern- und Ausbildungsumgebungen dar. Zum anderen bieten sie ein breites Spektrum an Möglichkeiten zur Erweiterung persönlicher Handlungskompetenzen in allen Lebensbereichen.",

    "xhand.kits.workshop.title": "x.hand Werkstatt-Kits",
    "xhand.kits.workshop.description":
      "x.hand Werkstatt-Kits beinhalten ein breites Spektrum an Komponenten zur Gestaltung adaptiver Arbeitsplätze. Sie sind für den Werkstatt-Alltag zusammengestellt und machen die Anpassung von Arbeitshilfen einfach, effektiv und wirtschaftlich.",

    "xhand.kits.personal.title": "x.hand personenbezogenes Arbeitsplatz-Kit",
    "xhand.kits.personal.description":
      "Dieser Baukasten wird nach einer Begutachtung individuell auf die Bedürfnisse einer Person konfiguriert.",

    // X-Hand Financing
    "xhand.financing.title": "Technische Arbeitshilfen finanzieren",
    "xhand.financing.description":
      "Der Gripability x.hand Systembaukasten ist eine technische Arbeitshilfe. Nach § 33 Abs. 8 Nr. 5 SGB IX sind technische Arbeitshilfen Vorrichtungen und Geräte, die behinderungsbedingte Nachteile bei der Ausübung der Arbeit ausgleichen.",
    "xhand.financing.providers":
      "Mögliche Leistungsträger: Integrationsamt, gesetzliche Unfallversicherung, Rentenversicherungsträger und Arbeitsagentur.",

    // Product Page - features (array format for ProductPage compatibility)
    "product.xhand.features.0":
      "Hochwertige Pneumatik mit Präzisionskomponenten",
    "product.xhand.features.1": "Modularer Gelenkarm-Baukasten",
    "product.xhand.features.2": "Verschiedene Greifmodule inkl. Vakuum-Sauger",
    "product.xhand.features.3":
      "Körperadaptions-Sets für Hand, Kopf oder andere Körperteile",
    "product.xhand.features.4": "Professionelles 2-Kanal-Steuerungsmodul",
    "product.xhand.features.5": "Kompatibel mit Reha-Standard 3,5mm Sensoren",
    "product.xhand.features.6":
      "Flüsterleiser Betrieb mit Air-Caddy Kompressor-Option",

    "product.e3hand.features.0": "Pneumatisch betrieben",
    "product.e3hand.features.1": "Individuell anpassbar",
    "product.e3hand.features.2": "Für Alltag, Beruf und Freizeit",
    "product.e3hand.features.3": "Vielseitige Steuerungsoptionen",
    "product.e3hand.features.4": "Professionelle Einrichtung erforderlich",

    "product.bhand.features.0": "Kompakt und mobil",
    "product.bhand.features.1": "Manuelle Bedienung",
    "product.bhand.features.2": "Sofortige Funktion",
    "product.bhand.features.3": "Robuste Konstruktion",
    "product.bhand.features.4": "Keine Installation erforderlich",

    "product.tbrush.features.0": "Rotationsfähiger Griffbügel",
    "product.tbrush.features.1": "Ergonomisches Design",
    "product.tbrush.features.2": "Leicht zu reinigen",
    "product.tbrush.features.3": "Kompatibel mit Standardzahnbürsten",
    "product.tbrush.features.4": "Sofort einsatzbereit",

    // Product Page - features
    "product.e3hand.features": [
      "Pneumatisch betrieben",
      "Individuell anpassbar",
      "Für Alltag, Beruf und Freizeit",
      "Vielseitige Steuerungsoptionen",
      "Professionelle Einrichtung erforderlich",
    ],
    "product.xhand.features": [
      "Hochwertige Pneumatik mit Präzisionskomponenten",
      "Modularer Gelenkarm-Baukasten",
      "Verschiedene Greifmodule inkl. Vakuum-Sauger",
      "Körperadaptions-Sets für Hand, Kopf oder andere Körperteile",
      "Professionelles 2-Kanal-Steuerungsmodul",
      "Kompatibel mit Reha-Standard 3,5mm Sensoren",
      "Flüsterleiser Betrieb mit Air-Caddy Kompressor-Option",
    ],
    "product.bhand.features": [
      "Kompakt und mobil",
      "Manuelle Bedienung",
      "Sofortige Funktion",
      "Robuste Konstruktion",
      "Keine Installation erforderlich",
    ],
    "product.tbrush.features": [
      "Rotationsfähiger Griffbügel",
      "Ergonomisches Design",
      "Leicht zu reinigen",
      "Kompatibel mit Standardzahnbürsten",
      "Sofort einsatzbereit",
    ],
    // Header
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.consultation": "Beratung",
    "nav.contact": "Kontakt",
    "nav.downloads": "Downloads",

    // Hero
    "hero.headline": "Die Kunst Dinge zu be.greifen.",
    "hero.subheadline":
      "Innovative Greif-Hilfsmittel - Adaptive Arbeitsplatzgestaltung",
    "hero.cta1": "Unsere Produkte erkunden",
    "hero.cta2": "Telefonische Beratung vereinbaren",

    // About
    "about.headline":
      "Neue Perspektiven auf dem Weg zu mehr Aktivität, Selbstständigkeit und Lebensfreude",
    "about.text1":
      "Seit über 20 Jahren steht Gripability für technische Innovationen auf dem Gebiet der Kompensation einer eingeschränkten Greif- und Haltefunktion.",
    "about.text2":
      "Auf Grundlage dieser Expertise finden Sie gemeinsam mit uns die Balance im Spannungsfeld zwischen einer wirtschaftlichen »out of the box« Lösung und einem auf individuelle Bedürfnisse angepassten Entwicklungsprojekt. Ob in Alltag oder Beruf - Gripability begleit auf dem Weg zu mehr Aktivität und Selbstständigkeit.",

    // Products
    "products.headline":
      "Innovative Greif-Hilfsmittel - Adaptive Arbeitsplatzgestaltung",
    "products.e3hand.name": "E.Hand",
    "products.e3hand.desc":
      "Das automatische Greifsystem für mehr Aktivität und Selbstständigkeit in Alltag, Beruf und Freizeit",
    "products.xhand.name": "X-Hand",
    "products.xhand.desc":
      "Systembaukasten zur adaptiven Arbeitsplatzgestaltung",
    "products.bhand.name": "B-Hand",
    "products.bhand.desc":
      "Aktive Greifhilfe für mehr Unabhängigkeit in Alltag, Schule und Beruf",
    "products.tbrush.name": "T-Brush",
    "products.tbrush.desc":
      "Die elektrische Zahnbürste mit rotationsfähigem Griffbügel",
    "products.viewProduct": "Produkt ansehen",

    // Consultation
    "consultation.headline": "Sprechen Sie uns an, wir sind gerne für Sie da",
    "consultation.text":
      "Was kann Gripability, für wen sind die Hilfsmittel geeignet, welche Unterstützung ist auf dem Weg zu einer Lösung zu bekommen…?",
    "consultation.name": "Name",
    "consultation.email": "E-Mail",
    "consultation.country": "Land",
    "consultation.message": "Ihr Text…",
    "consultation.mobility":
      "Ich interessiere mich für Gripability Hilfsmittel…",
    "consultation.send": "Nachricht senden",

    // Contact
    "contact.headline": "Kontakt",
    "contact.direct":
      "Einige Produkte können direkt bestellt werden. Andere erfordern eine persönliche Beratung.",
    "contact.email": "mail@gripability.com",
    "contact.phone": "+49 (0) 6669 90 08 80",

    // Downloads
    "downloads.headline": "Download-Center",
    "downloads.pdf": "PDF herunterladen",

    // Product Page
    "product.consultation": "Produktberatung",
    // "product.available": "Sofort verfügbar", // removed as requested
    "product.download": "Produktbroschüre herunterladen [PDF – Deutsch]",
    "product.message": "Nehmen Sie Kontakt mit uns auf",

    // X-Hand specific content
    "xhand.whoUses": "Wer nutzt x.hand?",
    "xhand.howItWorks": "Wie funktioniert es?",
    "xhand.technicalSpecs": "Technische Daten",
    "xhand.applications": "Anwendungen & Vorteile",

    // X-Hand How It Works section
    "xhand.modularAssembly.title": "Modularer Bauteilaufbau",
    "xhand.modularAssembly.description":
      "Das x.hand System verfügt über verschiedene Greifmodule einschließlich pneumatischer Greifer und Vakuum-Sauger. Diese können mit dem hochwertigen Gelenkarm-Baukasten für maximale 3D-Positionierungsflexibilität kombiniert werden.",

    "xhand.bodyAdaptationSystems.title": "Körperadaptationssysteme",
    "xhand.bodyAdaptationSystems.description":
      "Greifer und Vakuum-Sauger können durch spezielle Körperadaptationen an der Hand oder bei Bedarf am Kopf oder anderen Körperteilen mit unseren umfassenden Adaptations-Sets zur Verfügung gestellt werden.",

    "xhand.intelligentControl.title": "Intelligentes Steuerungssystem",
    "xhand.intelligentControl.description":
      "Das 2-Kanal-Steuerungsmodul dient als Schnittstelle zwischen Druckluftversorgung einerseits und den Greif-/Bedienmodulen andererseits. Verschiedene Bedienmodule stehen mit Schnittstellen für 3,5mm Klinkenstecker-Sensoren (Reha-Standard) zur Verfügung.",

    "xhand.pneumaticOperation.title": "Pneumatischer Betrieb",
    "xhand.pneumaticOperation.description":
      "Angetrieben durch Druckluft für zuverlässige, präzise Steuerung. Kompatibel mit vorhandenen Druckluftnetzen oder unserem flüsterleisen Air-Caddy Kompressor.",

    // Additional UI translations
    productGallery: "Produktgalerie",
    keyFeatures: "Wichtige Eigenschaften",
    qualityCertification: "Qualität & Zertifizierung",
    qualityCertificationText:
      "Alle Gripability Produkte entsprechen der EU-Medizinprodukte-Richtlinie 93/42/EWG und sind CE-zertifiziert. Entwickelt und hergestellt in Deutschland nach höchsten Qualitätsstandards.",
    operatingPressure: "Betriebsdruck",
    inputPressure: "Eingangsdruck",
    scheduleConsultation: "Beratungstermin vereinbaren",
    readyToOrder: "Bereit zur Bestellung?",
    consultationRequired:
      "Dieses Produkt erfordert eine persönliche Beratung, um die beste Lösung für Ihre Bedürfnisse zu gewährleisten. Unsere Experten führen Sie durch den Prozess und bieten umfassende Schulungen.",
    availableImmediate:
      "Dieses Produkt ist sofort bestellbar. Kontaktieren Sie uns für Preis- und Lieferinformationen.",
    bookConsultation: "Beratung vereinbaren",
    getQuote: "Angebot anfordern",
    viewAllProducts: "Alle Produkte ansehen",
    backToProducts: "Zurück zu den Produkten",
    getInContactWithUs: "Nehmen Sie Kontakt mit uns auf",

    // Footer
    "footer.privacy": "Datenschutz",
    "footer.accessibility": "Barrierefreiheit",
    "footer.certification": "Impressum",

    // Impressum
    "impressum.title": "Impressum",
    "impressum.companyInfo": "Angaben gemäß § 5 TMG:",
    "impressum.representedBy": "Vertreten durch:",
    "impressum.contact": "Kontakt:",
    "impressum.phone": "Telefon:",
    "impressum.fax": "Telefax:",
    "impressum.email": "E-Mail:",
    "impressum.register": "Registereintrag:",
    "impressum.registerEntry": "Eintragung im Handelsregister.",
    "impressum.court": "Registergericht:",
    "impressum.registerNumber": "Registernummer:",
    "impressum.webdesign": "Webdesign:",
    "impressum.disclaimer": "Haftungsausschluss:",
    "impressum.contentLiability": "Haftung für Inhalte",
    "impressum.contentText":
      "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    "impressum.linkLiability": "Haftung für Links",
    "impressum.linkText":
      "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    "impressum.copyright": "Urheberrecht",
    "impressum.copyrightText":
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    "impressum.dataProtection": "Datenschutz",
    "impressum.dataProtectionText":
      "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.",
    "impressum.backToHome": "Zurück zur Startseite",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (translations[language][key] as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
