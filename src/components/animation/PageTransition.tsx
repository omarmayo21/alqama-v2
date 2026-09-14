import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'entering' | 'active'>('active');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Begin new page entrance
      setDisplayLocation(location);
      setTransitionStage('entering');
      
      // Scroll to top instantly before revealing
      window.scrollTo({ top: 0, behavior: 'instant' });

      const timer = requestAnimationFrame(() => {
        setTransitionStage('active');
      });

      return () => cancelAnimationFrame(timer);
    }
  }, [location, displayLocation]);

  return (
    <div
      key={displayLocation.pathname}
      className={`page-transition-wrapper ${transitionStage === 'active' ? 'page-enter-active' : 'page-enter'}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
