import React from 'react';

interface SportIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sportId: string;
  size?: number | string;
  className?: string;
}

const SPORT_SVG_MAP: Record<string, string> = {
  football: '/images/football.svg',
  basketball: '/images/basketball.svg',
  swimming: '/images/swimming.svg',
  karate: '/images/karate.svg',
  kickboxing: '/images/kickboxing.svg',
  gymnastics: '/images/gymnastics.svg',
  'roller-skating': '/images/roller-skating.svg',
  skating: '/images/roller-skating.svg',
};

export const SportIcon: React.FC<SportIconProps> = ({
  sportId,
  size = 24,
  className = '',
  style,
  ...props
}) => {
  const normalizedId = (sportId || '').toLowerCase().replace(/^sport-/, '');
  const iconSrc = SPORT_SVG_MAP[normalizedId] || `/images/${normalizedId}.svg`;
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={iconSrc}
      alt={sportId}
      className={`inline-block object-contain ${className}`}
      style={{
        width: dimension,
        height: dimension,
        minWidth: dimension,
        minHeight: dimension,
        ...style,
      }}
      loading="lazy"
      {...props}
    />
  );
};

export default SportIcon;
