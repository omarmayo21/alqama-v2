import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import Logo from '../ui/Logo';
import { WHATSAPP_URL, ACADEMY_PHONE, ACADEMY_PHONE_DISPLAY } from '../../utils/constants';
import { useLanguage } from '../../context/LanguageContext';
import { useSanityData } from '../../context/SanityDataContext';
import { translations } from '../../data/translations';

const Header: React.FC = () => {
  const { language, isRTL, toggleLanguage } = useLanguage();
  const { siteSettings, loc } = useSanityData();
  const t = translations[language];
  const addressDisplay = loc(siteSettings?.addressAr, siteSettings?.addressEn, t.footer.locationText);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  const basePath = language === 'en' ? '/en' : '';

  const navItems = [
    { label: t.nav.home, path: basePath === '' ? '/' : basePath },
    { label: t.nav.about, path: `${basePath}/about` },
    {
      label: t.nav.sports,
      path: `${basePath}/sports`,
      children: [
        { label: language === 'en' ? 'Football' : 'كرة القدم', path: `${basePath}/sports/football` },
        { label: language === 'en' ? 'Basketball' : 'كرة السلة', path: `${basePath}/sports/basketball` },
        { label: language === 'en' ? 'Swimming' : 'السباحة', path: `${basePath}/sports/swimming` },
        { label: language === 'en' ? 'Karate' : 'الكاراتيه', path: `${basePath}/sports/karate` },
        { label: language === 'en' ? 'Kickboxing' : 'الكيك بوكسينغ', path: `${basePath}/sports/kickboxing` },
        { label: language === 'en' ? 'Gymnastics' : 'الجمباز', path: `${basePath}/sports/gymnastics` },
        { label: language === 'en' ? 'Skating' : 'سكيتنج', path: `${basePath}/sports/roller-skating` },
      ],
    },
    { label: t.nav.offers, path: `${basePath}/offers` },
    { label: t.nav.gallery, path: `${basePath}/gallery` },
    { label: t.nav.blog, path: `${basePath}/blog` },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/' || path === '/en') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Fixed header wrapper */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md shadow-slate-900/5' : ''
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#18213F] text-white text-xs md:text-sm py-2 hidden md:block">
          <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${ACADEMY_PHONE}`}
                className="flex items-center gap-2 hover:text-[#FFC400] transition-colors tabular-nums"
              >
                <Phone size={13} />
                <span className="font-semibold">{ACADEMY_PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={13} />
                <span>
                  {addressDisplay}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <span className="tabular-nums">
                {language === 'en'
                  ? 'Sat - Thu: 2:00 PM - 10:00 PM'
                  : 'السبت - الخميس: ٢:٠٠ م - ١٠:٠٠ م'}
              </span>
              <span className="text-[#FFC400]">|</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC400] font-bold hover:text-white transition-colors flex items-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>
                  {language === 'en' ? 'Chat on WhatsApp' : 'تواصل معنا عبر واتساب'}
                </span>
                <span>{isRTL ? '←' : '→'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-white/98 backdrop-blur-md border-b border-gray-100'
              : 'bg-white border-b border-gray-100'
          }`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Logo size="md" />

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => item.children && setActiveDropdown(item.path)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <button
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                          isActive(item.path)
                            ? 'text-[#D90429] bg-red-50'
                            : 'text-[#18213F] hover:text-[#D90429] hover:bg-red-50/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.path ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-2 rounded-xl font-bold text-sm transition-all duration-200 ${
                          isActive(item.path)
                            ? 'text-[#D90429] bg-red-50'
                            : 'text-[#18213F] hover:text-[#D90429] hover:bg-red-50/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Dropdown */}
                    {item.children && activeDropdown === item.path && (
                      <div
                        className={`absolute top-full ${
                          isRTL ? 'right-0' : 'left-0'
                        } mt-1 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-dropdown`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm font-bold transition-colors ${
                              location.pathname === child.path
                                ? 'text-[#D90429] bg-red-50'
                                : 'text-[#18213F] hover:text-[#D90429] hover:bg-red-50/50'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Actions: Language Switcher & WhatsApp CTA */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Language Switcher Button */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold text-[#18213F] hover:bg-gray-100 border border-gray-200 transition-all duration-200 cursor-pointer"
                  title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
                  aria-label="Language Switcher"
                >
                  <Globe size={15} className="text-[#D90429]" />
                  <span>{language === 'ar' ? 'English' : 'العربية'}</span>
                </button>

                {/* Primary CTA Button -> WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#D90429] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-red-200"
                >
                  <MessageCircle size={17} />
                  <span>{t.nav.contact}</span>
                </a>
              </div>

              {/* Mobile Menu & Language Toggle */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#18213F] border border-gray-200"
                  aria-label="Toggle language"
                >
                  <Globe size={13} className="text-[#D90429]" />
                  <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
                </button>

                <button
                  className="p-2.5 rounded-xl text-[#18213F] hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer - compensate for fixed header */}
      <div className="h-[80px] md:h-[116px]" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute top-0 ${
              isRTL ? 'right-0 animate-slide-right' : 'left-0 animate-slide-left'
            } bottom-0 w-80 max-w-full bg-white shadow-2xl flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#18213F]">
              <Logo variant="white" size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Language Switcher in Mobile Drawer */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500">
                {language === 'en' ? 'Language' : 'اللغة'}
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-[#18213F] bg-white border border-gray-200"
              >
                <Globe size={13} className="text-[#D90429]" />
                <span>{language === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.path ? null : item.path
                          )
                        }
                        className={`w-full flex items-center justify-between px-5 py-3.5 font-bold text-base transition-colors ${
                          isActive(item.path)
                            ? 'text-[#D90429] bg-red-50'
                            : 'text-[#18213F] hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.path ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.path && (
                        <div
                          className={`bg-gray-50/90 ${
                            isRTL
                              ? 'border-r-2 border-[#D90429] mr-5'
                              : 'border-l-2 border-[#D90429] ml-5'
                          }`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-6 py-3 text-sm font-bold transition-colors ${
                                location.pathname === child.path
                                  ? 'text-[#D90429]'
                                  : 'text-[#18213F]/80 hover:text-[#D90429]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-5 py-3.5 font-bold text-base transition-colors ${
                        isActive(item.path)
                          ? 'text-[#D90429] bg-red-50'
                          : 'text-[#18213F] hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-gray-100 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center bg-[#D90429] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[#B0021F] transition-colors shadow-md shadow-red-200"
              >
                <MessageCircle size={18} />
                <span>{t.nav.contact}</span>
              </a>
              <a
                href={`tel:${ACADEMY_PHONE}`}
                className="flex items-center justify-center gap-2 w-full border-2 border-[#18213F] text-[#18213F] py-3 rounded-xl font-bold text-sm hover:bg-[#18213F] hover:text-white transition-colors tabular-nums"
              >
                <Phone size={16} />
                <span>{language === 'en' ? 'Call Us' : 'اتصل بنا'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
