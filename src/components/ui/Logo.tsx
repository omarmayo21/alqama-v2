import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'default', showText = true }) => {
  const { language } = useLanguage();
  const homePath = language === 'en' ? '/en' : '/';

  // Responsive height classes maintaining original aspect ratio
  const sizeClasses = {
    sm: 'h-10 md:h-11',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20',
  };

  const isWhite = variant === 'white';

  return (
    <Link to={homePath} className="inline-flex items-center gap-3 no-underline group focus-visible:outline-none">
      <img
        src="/images/logo.png"
        alt={language === 'en' ? 'ALQIMA Sports Academy' : 'أكاديمية القمة الرياضية'}
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none`}
        loading="eager"
      />
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-black tracking-tight leading-tight transition-colors ${
              isWhite ? 'text-white' : 'text-[#18213F] group-hover:text-[#D90429]'
            } ${size === 'sm' ? 'text-sm md:text-base' : size === 'lg' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}
          >
            {language === 'en' ? 'ALQIMA Sports Academy' : 'أكاديمية القمة الرياضية'}
          </span>
          <span
            className={`text-[10px] md:text-xs font-bold tracking-wider ${
              isWhite ? 'text-white/70' : 'text-[#5A6E85]'
            }`}
          >
            {language === 'en' ? 'Sports Academy for Kids • Jeddah' : 'جدة • رعاية وتطوير مهارات الأطفال'}
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
