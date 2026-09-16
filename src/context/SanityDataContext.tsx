import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  getSiteSettings,
  getUiLabels,
  getHomepageData,
  getAboutPageData,
  getSports,
  getOffers,
  getBlogPosts,
  getTestimonials,
  getGalleryImages,
  getHeroSlides,
  getNavigation,
  getFooter,
  getAnalyticsSettings,
  getPaymentProviders,
} from '../lib/sanity/api';
import type {
  SanitySiteSettings,
  SanityUiLabels,
  SanityHomepage,
  SanityAboutPage,
  SanitySport,
  SanityOffer,
  SanityBlogPost,
  SanityTestimonial,
  SanityGalleryImage,
  SanityHeroSlide,
  SanityNavigation,
  SanityFooter,
  SanityAnalyticsSettings,
  SanityPaymentProviders,
  SanityLocalized,
} from '../lib/sanity/types';
import { initAnalytics } from '../lib/analytics/tracker';

interface SanityDataContextType {
  siteSettings: SanitySiteSettings | null;
  uiLabels: SanityUiLabels | null;
  homepage: SanityHomepage | null;
  aboutPage: SanityAboutPage | null;
  sports: SanitySport[];
  offers: SanityOffer[];
  blogPosts: SanityBlogPost[];
  testimonials: SanityTestimonial[];
  galleryImages: SanityGalleryImage[];
  heroSlides: SanityHeroSlide[];
  navigation: SanityNavigation | null;
  footer: SanityFooter | null;
  analyticsSettings: SanityAnalyticsSettings | null;
  paymentProviders: SanityPaymentProviders | null;
  isLoading: boolean;
  error: Error | null;
  /**
   * Localizes a bilingual object (e.g. `{ ar: '...', en: '...' }`) or string based on current language
   */
  t: (localized?: SanityLocalized | string | null, fallback?: string) => string;
  /**
   * Localizes individual Arabic and English strings based on current language
   */
  loc: (arText?: string | null, enText?: string | null, fallback?: string) => string;
}

const SanityDataContext = createContext<SanityDataContextType | undefined>(undefined);

export const SanityDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [siteSettings, setSiteSettings] = useState<SanitySiteSettings | null>(null);
  const [uiLabels, setUiLabels] = useState<SanityUiLabels | null>(null);
  const [homepage, setHomepage] = useState<SanityHomepage | null>(null);
  const [aboutPage, setAboutPage] = useState<SanityAboutPage | null>(null);
  const [sports, setSports] = useState<SanitySport[]>([]);
  const [offers, setOffers] = useState<SanityOffer[]>([]);
  const [blogPosts, setBlogPosts] = useState<SanityBlogPost[]>([]);
  const [testimonials, setTestimonials] = useState<SanityTestimonial[]>([]);
  const [galleryImages, setGalleryImages] = useState<SanityGalleryImage[]>([]);
  const [heroSlides, setHeroSlides] = useState<SanityHeroSlide[]>([]);
  const [navigation, setNavigation] = useState<SanityNavigation | null>(null);
  const [footer, setFooter] = useState<SanityFooter | null>(null);
  const [analyticsSettings, setAnalyticsSettings] = useState<SanityAnalyticsSettings | null>(null);
  const [paymentProviders, setPaymentProviders] = useState<SanityPaymentProviders | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadGlobalSanityData() {
      try {
        setIsLoading(true);
        const [
          settings,
          labels,
          home,
          about,
          sportsData,
          offersData,
          blogsData,
          reviewsData,
          galleryData,
          heroSlidesData,
          nav,
          foot,
          analytics,
          payments,
        ] = await Promise.all([
          getSiteSettings(),
          getUiLabels(),
          getHomepageData(),
          getAboutPageData(),
          getSports(),
          getOffers(),
          getBlogPosts(),
          getTestimonials(),
          getGalleryImages(),
          getHeroSlides(),
          getNavigation(),
          getFooter(),
          getAnalyticsSettings(),
          getPaymentProviders(),
        ]);

        if (isMounted) {
          setSiteSettings(settings);
          setUiLabels(labels);
          setHomepage(home);
          setAboutPage(about);
          setSports(sportsData || []);
          setOffers(offersData || []);
          setBlogPosts(blogsData || []);
          setTestimonials(reviewsData || []);
          setGalleryImages(galleryData || []);
          setHeroSlides(heroSlidesData || []);
          setNavigation(nav);
          setFooter(foot);
          setAnalyticsSettings(analytics);
          setPaymentProviders(payments);
          setIsLoading(false);

          // Safely initialize analytics scripts from CMS configuration
          if (analytics) {
            initAnalytics(analytics);
          }
        }
      } catch (err: any) {
        if (isMounted) {
          console.error('[SanityDataContext] Failed to load CMS data:', err);
          setError(err);
          setIsLoading(false);
        }
      }
    }

    loadGlobalSanityData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Update dynamic SEO title & meta tags when siteSettings or language changes
  useEffect(() => {
    if (siteSettings) {
      const defaultTitle = language === 'ar'
        ? (siteSettings.defaultSeo?.metaTitle?.ar || siteSettings.defaultSeoTitleAr || 'ALQIMA | أكاديمية القمة الرياضية')
        : (siteSettings.defaultSeo?.metaTitle?.en || siteSettings.defaultSeoTitleEn || 'ALQIMA Sports Academy | Jeddah');
      
      const defaultDesc = language === 'ar'
        ? (siteSettings.defaultSeo?.metaDescription?.ar || siteSettings.defaultSeoDescriptionAr)
        : (siteSettings.defaultSeo?.metaDescription?.en || siteSettings.defaultSeoDescriptionEn);

      if (!document.title || document.title === 'Vite + React + TS') {
        document.title = defaultTitle;
      }

      if (defaultDesc) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', defaultDesc);
      }
    }
  }, [siteSettings, language]);

  const t = useMemo(() => {
    return (localized?: SanityLocalized | string | null, fallback = ''): string => {
      if (!localized) return fallback;
      if (typeof localized === 'string') return localized;
      if (language === 'ar') {
        return localized.ar || localized.en || fallback;
      }
      return localized.en || localized.ar || fallback;
    };
  }, [language]);

  const loc = useMemo(() => {
    return (arText?: string | null, enText?: string | null, fallback = ''): string => {
      if (language === 'ar') {
        return arText || enText || fallback;
      }
      return enText || arText || fallback;
    };
  }, [language]);

  return (
    <SanityDataContext.Provider
      value={{
        siteSettings,
        uiLabels,
        homepage,
        aboutPage,
        sports,
        offers,
        blogPosts,
        testimonials,
        galleryImages,
        heroSlides,
        navigation,
        footer,
        analyticsSettings,
        paymentProviders,
        isLoading,
        error,
        t,
        loc,
      }}
    >
      {children}
    </SanityDataContext.Provider>
  );
};

export const useSanityData = (): SanityDataContextType => {
  const context = useContext(SanityDataContext);
  if (!context) {
    throw new Error('useSanityData must be used within a SanityDataProvider');
  }
  return context;
};
