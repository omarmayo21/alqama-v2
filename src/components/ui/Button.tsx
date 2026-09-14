import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  href,
  target,
}) => {
  const base = `inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-250 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D90429] focus-visible:outline-offset-2 ${fullWidth ? 'w-full' : ''}`;

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const variants = {
    primary: 'bg-[#D90429] text-white border-2 border-[#D90429] hover:bg-[#B0021F] hover:border-[#B0021F] hover:-translate-y-0.5 shadow-md shadow-red-500/20 active:translate-y-0',
    secondary: 'bg-[#18213F] text-white border-2 border-[#18213F] hover:bg-[#2A3660] hover:border-[#2A3660] hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-[#18213F] border-2 border-[#18213F] hover:bg-[#18213F] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'bg-transparent text-[#18213F] hover:bg-[#F2F3F5] border-2 border-transparent',
    white: 'bg-white text-[#18213F] border-2 border-white hover:bg-white/90 hover:-translate-y-0.5 shadow-md active:translate-y-0',
    gold: 'bg-[#FFC400] text-[#18213F] border-2 border-[#FFC400] hover:bg-[#E6B000] hover:border-[#E6B000] hover:-translate-y-0.5 active:translate-y-0',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed !transform-none !shadow-none' : '';
  const combinedClass = `${base} ${sizes[size]} ${variants[variant]} ${disabledClasses} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={combinedClass}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} target={target} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {children}
    </button>
  );
};

export default Button;
