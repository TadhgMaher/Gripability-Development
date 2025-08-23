import { useState, useEffect } from 'react';

interface SiteContent {
  hero: {
    headline_en: string;
    headline_de: string;
    subheadline_en: string;
    subheadline_de: string;
    background_image: string;
  };
  about: {
    headline_en: string;
    headline_de: string;
    text1_en: string;
    text1_de: string;
    text2_en: string;
    text2_de: string;
  };
  products: {
    headline_en: string;
    headline_de: string;
    xhand: {
      name_en: string;
      name_de: string;
      description_en: string;
      description_de: string;
      images: string[];
    };
    tbrush: {
      name_en: string;
      name_de: string;
      description_en: string;
      description_de: string;
      images: string[];
    };
    e3hand: {
      name_en: string;
      name_de: string;
      description_en: string;
      description_de: string;
      images: string[];
    };
    bhand: {
      name_en: string;
      name_de: string;
      description_en: string;
      description_de: string;
      images: string[];
    };
  };
  consultation: {
    headline_en: string;
    headline_de: string;
    text_en: string;
    text_de: string;
  };
  contact: {
    headline_en: string;
    headline_de: string;
    email: string;
    phone: string;
    direct_en: string;
    direct_de: string;
  };
}

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/site-content.json');
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
};
