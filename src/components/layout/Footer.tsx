import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import { WHATSAPP_URL, ACADEMY_PHONE, ACADEMY_PHONE_DISPLAY } from '../../utils/constants';
import { useLanguage } from '../../context/LanguageContext';
import { useSanityData } from '../../context/SanityDataContext';
import { translations } from '../../data/translations';
import ScrollReveal from '../animation/ScrollReveal';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { siteSettings, loc } = useSanityData();
  const t = translations[language];
  const addressDisplay = loc(siteSettings?.addressAr, siteSettings?.addressEn, t.footer.locationText);
  const basePath = language === 'en' ? '/en' : '';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const sportsLinks = [
    { label: language === 'en' ? 'Football' : 'كرة القدم', path: `${basePath}/sports/football` },
    { label: language === 'en' ? 'Basketball' : 'كرة السلة', path: `${basePath}/sports/basketball` },
    { label: language === 'en' ? 'Swimming' : 'السباحة', path: `${basePath}/sports/swimming` },
    { label: language === 'en' ? 'Karate' : 'الكاراتيه', path: `${basePath}/sports/karate` },
    { label: language === 'en' ? 'Kickboxing' : 'الكيك بوكسينغ', path: `${basePath}/sports/kickboxing` },
    { label: language === 'en' ? 'Gymnastics' : 'الجمباز', path: `${basePath}/sports/gymnastics` },
    { label: language === 'en' ? 'Skating' : 'سكيتنج', path: `${basePath}/sports/roller-skating` },
  ];

  const quickLinks = [
    { label: t.nav.home, path: basePath === '' ? '/' : basePath },
    { label: t.nav.about, path: `${basePath}/about` },
    { label: t.nav.sports, path: `${basePath}/sports` },
    { label: t.nav.offers, path: `${basePath}/offers` },
    { label: t.nav.gallery, path: `${basePath}/gallery` },
    { label: t.nav.blog, path: `${basePath}/blog` },
  ];

  return (
    <footer className="bg-[#18213F] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <ScrollReveal delay={0} className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="white" size="md" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: 'Instagram',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
                {
                  label: 'X (Twitter)',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: 'YouTube',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D90429] hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={80}>
            <h3 className="font-bold text-lg mb-4 text-white">{t.footer.quickLinksTitle}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Sports */}
          <ScrollReveal delay={160}>
            <h3 className="font-bold text-lg mb-4 text-white">{t.footer.sportsTitle}</h3>
            <ul className="space-y-2.5">
              {sportsLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={240}>
            <h3 className="font-bold text-lg mb-4 text-white">{t.footer.contactTitle}</h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle size={14} className="text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">
                      {language === 'en' ? 'Direct WhatsApp' : 'واتساب المباشر'}
                    </p>
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                      {language === 'en' ? 'Instant Chat' : 'محادثة فورية'}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${ACADEMY_PHONE}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D90429] transition-colors">
                    <Phone size={14} className="text-[#D90429] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">
                      {language === 'en' ? 'Phone' : 'الهاتف'}
                    </p>
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors tabular-nums">
                      {ACADEMY_PHONE_DISPLAY}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@alqima.sa" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D90429] transition-colors">
                    <Mail size={14} className="text-[#D90429] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">
                      {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                    </p>
                    <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">
                      info@alqima.sa
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#D90429]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">
                      {language === 'en' ? 'Address' : 'العنوان'}
                    </p>
                    <p className="text-white/90 text-sm">
                      {addressDisplay}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center">
            {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to={`${basePath}/privacy`}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to={`${basePath}/terms`}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {t.footer.terms}
            </Link>

          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-[#D90429] flex items-center justify-center hover:bg-[#B0021F] transition-colors"
            aria-label={language === 'en' ? 'Back to top' : 'العودة للأعلى'}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
