import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'fade' | 'scale';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 500,
  direction = 'up',
  className = '',
  as: Component = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal();

  const getTransformStyle = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 24px, 0)';
      case 'down':
        return 'translate3d(0, -24px, 0)';
      case 'scale':
        return 'scale(0.96)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  const Element = Component as any;

  return (
    <Element ref={ref} style={style} className={className}>
      {children}
    </Element>
  );
};

export default ScrollReveal;
