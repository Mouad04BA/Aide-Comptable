import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check for a language preference in local storage
    const storedLang = localStorage.getItem('language');
    if (storedLang === 'ar' || storedLang === 'fr' || storedLang === 'en') {
      return storedLang;
    }

    // 2. If not found, check the browser's language
    const browserLang = navigator.language.split('-')[0]; // e.g., 'fr-FR' becomes 'fr'
    if (browserLang === 'fr' || browserLang === 'en') {
        return browserLang;
    }
    
    // 3. Default to Arabic
    return 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};