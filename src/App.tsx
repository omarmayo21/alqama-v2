import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import SportDetail from './pages/SportDetail';
import Offers from './pages/Offers';
import Gallery from './pages/Gallery';
import GalleryAlbum from './pages/GalleryAlbum';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { WHATSAPP_URL } from './utils/constants';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SanityDataProvider } from './context/SanityDataContext';

const StudioPage = lazy(() => import('./pages/StudioPage'));

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

import PageTransition from './components/animation/PageTransition';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const whatsappLabel = language === 'en' ? 'Chat on WhatsApp' : 'تواصل عبر واتساب';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      {/* WhatsApp Float Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn"
        aria-label={whatsappLabel}
        title={whatsappLabel}
      >
        💬
      </a>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Arabic Routes (Default) */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/sports" element={<Layout><Sports /></Layout>} />
        <Route path="/sports/:sportId" element={<Layout><SportDetail /></Layout>} />
        <Route path="/offers" element={<Layout><Offers /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/gallery/:slug" element={<Layout><GalleryAlbum /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:id" element={<Layout><Article /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />

        {/* English Routes (/en/...) */}
        <Route path="/en" element={<Layout><Home /></Layout>} />
        <Route path="/en/about" element={<Layout><About /></Layout>} />
        <Route path="/en/sports" element={<Layout><Sports /></Layout>} />
        <Route path="/en/sports/:sportId" element={<Layout><SportDetail /></Layout>} />
        <Route path="/en/offers" element={<Layout><Offers /></Layout>} />
        <Route path="/en/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/en/gallery/:slug" element={<Layout><GalleryAlbum /></Layout>} />
        <Route path="/en/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/en/blog/:id" element={<Layout><Article /></Layout>} />
        <Route path="/en/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/en/terms" element={<Layout><Terms /></Layout>} />

        {/* Sanity Studio Embedded Route */}
        <Route
          path="/studio/*"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-bold">جاري تحميل لوحة التحكم Sanity Studio...</div>}>
              <StudioPage />
            </Suspense>
          }
        />
        <Route
          path="/studio"
          element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-bold">جاري تحميل لوحة التحكم Sanity Studio...</div>}>
              <StudioPage />
            </Suspense>
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <SanityDataProvider>
          <AppRoutes />
        </SanityDataProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
