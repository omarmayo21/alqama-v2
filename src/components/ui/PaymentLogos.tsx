import React from 'react';

interface PaymentLogoProps {
  className?: string;
  variant?: 'color' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Official Tabby Brand Vector Logo
 */
export const TabbyLogo: React.FC<PaymentLogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const bgFill = variant === 'color' ? '#3EEDB0' : variant === 'dark' ? '#18213F' : '#FFFFFF';
  const textFill = variant === 'color' ? '#000000' : variant === 'dark' ? '#3EEDB0' : '#000000';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl px-3.5 py-1.5 shadow-sm select-none transition-transform duration-200 hover:scale-105 ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: bgFill }}
      title="Tabby"
    >
      <svg
        viewBox="0 0 92 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Tabby"
      >
        {/* 't' */}
        <path
          d="M6 3v5h5v3.5H6v7.5c0 1.2.6 1.8 1.8 1.8h3.2V24H7c-3.2 0-5-1.6-5-4.8v-7.7H0V8h2V3h4z"
          fill={textFill}
        />
        {/* 'a' */}
        <path
          d="M26.5 8v16H22v-2.2c-1.4 1.7-3.4 2.5-5.6 2.5-4.2 0-7.4-3.1-7.4-7.8 0-4.6 3.2-7.8 7.4-7.8 2.2 0 4.1.8 5.5 2.4V8h4.6zm-4.6 8.5c0-2.4-1.6-4.1-3.8-4.1-2.2 0-3.8 1.7-3.8 4.1s1.6 4.1 3.8 4.1c2.2 0 3.8-1.7 3.8-4.1z"
          fill={textFill}
        />
        {/* 'b' (first) */}
        <path
          d="M32 0h4.5v9.8c1.4-1.6 3.3-2.4 5.5-2.4 4.3 0 7.5 3.3 7.5 7.8s-3.2 7.8-7.5 7.8c-2.2 0-4.1-.8-5.5-2.4V24H32V0zm7.5 19c2.2 0 3.8-1.7 3.8-4.1s-1.6-4.1-3.8-4.1c-2.2 0-3.8 1.7-3.8 4.1s1.6 4.1 3.8 4.1z"
          fill={textFill}
        />
        {/* 'b' (second) */}
        <path
          d="M53 0h4.5v9.8c1.4-1.6 3.3-2.4 5.5-2.4 4.3 0 7.5 3.3 7.5 7.8s-3.2 7.8-7.5 7.8c-2.2 0-4.1-.8-5.5-2.4V24H53V0zm7.5 19c2.2 0 3.8-1.7 3.8-4.1s-1.6-4.1-3.8-4.1c-2.2 0-3.8 1.7-3.8 4.1s1.6 4.1 3.8 4.1z"
          fill={textFill}
        />
        {/* 'y' */}
        <path
          d="M74.5 8.2l3.8 10.4 3.7-10.4h4.8l-6.4 16.2c-1.4 3.6-3.6 5.6-7.4 5.6h-2.5v-3.7h1.8c2 0 3-.9 3.8-2.8l.5-1.3-6.2-14h4.4z"
          fill={textFill}
        />
      </svg>
    </div>
  );
};

/**
 * Official Tamara Brand Vector Logo
 */
export const TamaraLogo: React.FC<PaymentLogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  const bgFill = variant === 'color' ? '#FEE7CF' : variant === 'dark' ? '#18213F' : '#FFFFFF';
  const textFill = variant === 'color' ? '#FF5B35' : variant === 'dark' ? '#FFA95A' : '#FF5B35';

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl px-3.5 py-1.5 shadow-sm select-none transition-transform duration-200 hover:scale-105 ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: bgFill }}
      title="Tamara"
    >
      <svg
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Tamara"
      >
        {/* 't' */}
        <path
          d="M5.5 3v5h4.5v3.2H5.5v7.2c0 1.1.5 1.6 1.6 1.6h2.9V23H6.4c-2.8 0-4.5-1.4-4.5-4.4v-7.3H0V8.2h1.9V3h3.6z"
          fill={textFill}
        />
        {/* 'a' (first) */}
        <path
          d="M24 8.2v14.8h-3.6v-1.9c-1.2 1.4-2.8 2.1-4.8 2.1-3.6 0-6.3-2.7-6.3-6.8 0-4 2.7-6.8 6.3-6.8 1.9 0 3.5.7 4.8 2.1V8.2H24zm-3.8 8.2c0-2.1-1.4-3.6-3.3-3.6-1.9 0-3.3 1.5-3.3 3.6 0 2.1 1.4 3.6 3.3 3.6 1.9 0 3.3-1.5 3.3-3.6z"
          fill={textFill}
        />
        {/* 'm' */}
        <path
          d="M27.5 8.2h3.6v1.9c1.2-1.4 2.7-2.1 4.5-2.1 2 0 3.6.9 4.3 2.5 1.2-1.6 2.9-2.5 4.8-2.5 3.2 0 5.3 2.1 5.3 5.6V23h-3.6v-8.8c0-1.8-.9-2.8-2.4-2.8-1.5 0-2.6 1.1-2.6 2.8V23h-3.6v-8.8c0-1.8-.9-2.8-2.4-2.8-1.5 0-2.6 1.1-2.6 2.8V23h-3.6V8.2z"
          fill={textFill}
        />
        {/* 'a' (second) */}
        <path
          d="M66.5 8.2v14.8h-3.6v-1.9c-1.2 1.4-2.8 2.1-4.8 2.1-3.6 0-6.3-2.7-6.3-6.8 0-4 2.7-6.8 6.3-6.8 1.9 0 3.5.7 4.8 2.1V8.2h3.6zm-3.8 8.2c0-2.1-1.4-3.6-3.3-3.6-1.9 0-3.3 1.5-3.3 3.6 0 2.1 1.4 3.6 3.3 3.6 1.9 0 3.3-1.5 3.3-3.6z"
          fill={textFill}
        />
        {/* 'r' */}
        <path
          d="M70.5 8.2h3.6v2.2c1-1.6 2.6-2.4 4.3-2.4.6 0 1.2.1 1.7.3V12c-.6-.2-1.3-.3-1.9-.3-2.1 0-4.1 1.4-4.1 4.2V23h-3.6V8.2z"
          fill={textFill}
        />
        {/* 'a' (third) */}
        <path
          d="M96 8.2v14.8h-3.6v-1.9c-1.2 1.4-2.8 2.1-4.8 2.1-3.6 0-6.3-2.7-6.3-6.8 0-4 2.7-6.8 6.3-6.8 1.9 0 3.5.7 4.8 2.1V8.2H96zm-3.8 8.2c0-2.1-1.4-3.6-3.3-3.6-1.9 0-3.3 1.5-3.3 3.6 0 2.1 1.4 3.6 3.3 3.6 1.9 0 3.3-1.5 3.3-3.6z"
          fill={textFill}
        />
      </svg>
    </div>
  );
};
