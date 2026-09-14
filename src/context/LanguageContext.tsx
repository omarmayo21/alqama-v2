import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  dir: 'rtl' | 'ltr';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  getLocalizedPath: (targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language based on current URL path
  const isEnglishPath = location.pathname.startsWith('/en');
  const [language, setLanguageState] = useState<Language>(isEnglishPath ? 'en' : 'ar');

  useEffect(() => {
    const isEn = location.pathname.startsWith('/en');
    const newLang = isEn ? 'en' : 'ar';
    setLanguageState(newLang);
    
    // Update HTML dir and lang attributes
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    // Update Document Title
    if (newLang === 'en') {
      document.title = 'ALQIMA Sports Academy | Jeddah';
    } else {
      document.title = 'ALQIMA | أكاديمية القمة الرياضية';
    }
  }, [location.pathname]);

  const getLocalizedPath = (targetLang?: Language): string => {
    const currentPath = location.pathname;
    const isCurrentEn = currentPath.startsWith('/en');
    const target = targetLang || (language === 'ar' ? 'en' : 'ar');

    if (target === 'en') {
      if (isCurrentEn) return currentPath;
      return currentPath === '/' ? '/en' : `/en${currentPath}`;
    } else {
      if (!isCurrentEn) return currentPath;
      const stripped = currentPath.replace(/^\/en/, '');
      return stripped === '' ? '/' : stripped;
    }
  };

  const setLanguage = (lang: Language) => {
    const targetPath = getLocalizedPath(lang);
    navigate(targetPath);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRTL,
        dir,
        setLanguage,
        toggleLanguage,
        getLocalizedPath,
      }}
    >
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
