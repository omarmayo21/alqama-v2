import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const { language } = useLanguage();
  const homePath = language === 'en' ? '/en' : '/';

  // Responsive height classes maintaining original aspect ratio
  const sizeClasses = {
    sm: 'h-10 md:h-11',
    md: 'h-13 md:h-15',
    lg: 'h-16 md:h-20',
  };

  return (
    <Link to={homePath} className="inline-flex items-center no-underline group focus-visible:outline-none">
      <img
        src="/images/logo.png"
        alt={language === 'en' ? 'ALQIMA Sports Academy' : 'أكاديمية القمة الرياضية'}
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none`}
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
