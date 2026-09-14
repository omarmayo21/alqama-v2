import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs, badge }) => {
  const { language, isRTL } = useLanguage();
  const homePath = language === 'en' ? '/en' : '/';
  const homeLabel = language === 'en' ? 'Home' : 'الرئيسية';
  const SeparatorIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className="page-header">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D90429, transparent)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FFC400, transparent)', transform: 'translate(-30%, 30%)' }}
        />
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 mb-6 text-sm text-white/60 animate-fade-up">
            <Link to={homePath} className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={14} />
              <span>{homeLabel}</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <SeparatorIcon size={14} className="text-white/40" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-4 animate-fade-up delay-75">
            <div className="w-6 h-0.5 bg-[#FFC400]" />
            <span className="text-[#FFC400] font-bold text-sm tracking-widest uppercase">{badge}</span>
            <div className="w-6 h-0.5 bg-[#FFC400]" />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight animate-fade-up delay-150">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed animate-fade-up delay-200">{subtitle}</p>
        )}

        {/* Bottom border accent */}
        <div className="flex items-center gap-3 mt-8 animate-fade-up delay-250">
          <div className="w-12 h-1 bg-[#D90429] rounded-full" />
          <div className="w-6 h-1 bg-[#FFC400] rounded-full" />
          <div className="w-3 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
