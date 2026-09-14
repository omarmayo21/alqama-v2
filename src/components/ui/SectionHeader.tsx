import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  description,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-start'}`}>
      <h2 className={`text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight ${light ? 'text-white' : 'text-[#18213F]'}`}>
        {title}
        {highlight && (
          <span className="text-[#D90429]"> {highlight}</span>
        )}
      </h2>
      {description && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-[#5A6E85]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
