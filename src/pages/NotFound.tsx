import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const homePath = language === 'en' ? '/en' : '/';

  return (
    <div className="min-h-screen bg-[#F2F3F5] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg animate-fade-up">
        {/* 404 */}
        <div className="relative mb-8">
          <div className="text-[180px] md:text-[200px] font-black text-[#E8EAF0] leading-none select-none tabular-nums animate-scale-in">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl shadow-red-200 border border-gray-100 transform transition-transform duration-500 hover:scale-110">
              <img
                src="/images/logo.png"
                alt="ALQIMA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-[#18213F] mb-4">
          {t.common.pageNotFound}
        </h1>
        <p className="text-[#5A6E85] text-base md:text-lg mb-8 leading-relaxed font-medium">
          {t.common.pageNotFoundDesc}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={homePath}
            className="inline-flex items-center gap-2 bg-[#D90429] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-red-200"
          >
            <Home size={18} />
            <span>{t.common.backHome}</span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-6 py-3.5 rounded-xl font-bold hover:bg-[#18213F] hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            <span>{language === 'en' ? 'Chat on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
