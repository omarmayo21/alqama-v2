import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics/tracker';

/**
 * Hook to automatically track page views on route transitions
 */
export function useAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Slight delay to allow document.title and meta updates to settle
    const timeout = setTimeout(() => {
      trackPageView(location.pathname + location.search, document.title);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.search]);
}
