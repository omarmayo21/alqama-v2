import type { SanityAnalyticsSettings } from '../sanity/types';

// Declare global types for third-party tracking scripts
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    clarity?: (...args: any[]) => void;
  }
}

// Track active initialized IDs to prevent duplicate script injection & handle dynamic updates
let activeGaId: string | null = null;
let activeMetaId: string | null = null;
let activeClarityId: string | null = null;
let activeGtmId: string | null = null;
let activeGoogleAdsId: string | null = null;

/**
 * Safely removes a script tag by ID
 */
function removeScript(elementId: string) {
  try {
    const el = document.getElementById(elementId);
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  } catch (err) {
    console.warn(`[Analytics] Failed to remove script ${elementId}:`, err);
  }
}

/**
 * Initialize or update third-party analytics safely based on Sanity configuration.
 * Avoids duplicate scripts, detects existing tags, and safely handles toggles/ID changes.
 */
export function initAnalytics(settings: SanityAnalyticsSettings | null | undefined): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. GOOGLE ANALYTICS 4 (GA4)
    const gaEnabled = Boolean(settings?.googleAnalyticsEnabled && settings?.googleAnalyticsMeasurementId?.trim());
    const gaId = settings?.googleAnalyticsMeasurementId?.trim() || null;

    if (gaEnabled && gaId) {
      if (activeGaId !== gaId) {
        // Initialize or update GA4
        window.dataLayer = window.dataLayer || [];
        if (!window.gtag) {
          window.gtag = function () {
            window.dataLayer?.push(arguments);
          };
          window.gtag('js', new Date());
        }

        // Check if script already exists
        const scriptId = 'sanity-ga4-script';
        if (!document.getElementById(scriptId)) {
          const script = document.createElement('script');
          script.id = scriptId;
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
          document.head.appendChild(script);
        }

        window.gtag('config', gaId, {
          send_page_view: false, // Page views handled via React Router hook
        });

        activeGaId = gaId;
      }
    } else if (!gaEnabled && activeGaId) {
      removeScript('sanity-ga4-script');
      activeGaId = null;
    }

    // 2. META PIXEL (Facebook / Instagram)
    const metaEnabled = Boolean(settings?.metaPixelEnabled && settings?.metaPixelId?.trim());
    const metaId = settings?.metaPixelId?.trim() || null;

    if (metaEnabled && metaId) {
      if (activeMetaId !== metaId) {
        const scriptId = 'sanity-meta-pixel-script';
        if (!window.fbq) {
          (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
            if (f.fbq) return;
            n = f.fbq = function () {
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.id = scriptId;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
          })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        }

        if (window.fbq) {
          window.fbq('init', metaId);
          window.fbq('track', 'PageView');
        }
        activeMetaId = metaId;
      }
    } else if (!metaEnabled && activeMetaId) {
      removeScript('sanity-meta-pixel-script');
      activeMetaId = null;
    }

    // 3. MICROSOFT CLARITY
    const clarityEnabled = Boolean(settings?.microsoftClarityEnabled && settings?.microsoftClarityProjectId?.trim());
    const clarityId = settings?.microsoftClarityProjectId?.trim() || null;

    if (clarityEnabled && clarityId) {
      if (activeClarityId !== clarityId) {
        const scriptId = 'sanity-clarity-script';
        if (!document.getElementById(scriptId)) {
          (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
            c[a] = c[a] || function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
            t = l.createElement(r);
            t.async = 1;
            t.id = scriptId;
            t.src = 'https://www.clarity.ms/tag/' + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
          })(window, document, 'clarity', 'script', clarityId);
        }
        activeClarityId = clarityId;
      }
    } else if (!clarityEnabled && activeClarityId) {
      removeScript('sanity-clarity-script');
      activeClarityId = null;
    }

    // 4. GOOGLE ADS
    const googleAdsEnabled = Boolean(settings?.googleAdsEnabled && settings?.googleAdsId?.trim());
    const gAdsId = settings?.googleAdsId?.trim() || null;

    if (googleAdsEnabled && gAdsId) {
      if (activeGoogleAdsId !== gAdsId) {
        window.dataLayer = window.dataLayer || [];
        if (!window.gtag) {
          window.gtag = function () {
            window.dataLayer?.push(arguments);
          };
          window.gtag('js', new Date());
        }

        const scriptId = 'sanity-google-ads-script';
        if (!document.getElementById(scriptId) && !document.getElementById('sanity-ga4-script')) {
          const script = document.createElement('script');
          script.id = scriptId;
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gAdsId)}`;
          document.head.appendChild(script);
        }

        window.gtag('config', gAdsId);
        activeGoogleAdsId = gAdsId;
      }
    } else if (!googleAdsEnabled && activeGoogleAdsId) {
      removeScript('sanity-google-ads-script');
      activeGoogleAdsId = null;
    }

    // 5. GOOGLE TAG MANAGER (GTM)
    const gtmEnabled = Boolean(settings?.googleTagManagerEnabled && settings?.googleTagManagerId?.trim());
    const gtmId = settings?.googleTagManagerId?.trim() || null;

    if (gtmEnabled && gtmId) {
      if (activeGtmId !== gtmId) {
        const scriptId = 'sanity-gtm-script';
        if (!document.getElementById(scriptId)) {
          (function (w: any, d: any, s: any, l: any, i: any) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            const f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.id = scriptId;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', gtmId);
        }
        activeGtmId = gtmId;
      }
    } else if (!gtmEnabled && activeGtmId) {
      removeScript('sanity-gtm-script');
      activeGtmId = null;
    }
  } catch (error) {
    console.error('[Analytics] Error initializing trackers:', error);
  }
}

/**
 * Universal safe event dispatcher across all active providers
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;

  try {
    // GA4 / Google Ads event
    if (typeof window.gtag === 'function' && (activeGaId || activeGoogleAdsId)) {
      window.gtag('event', eventName, params);
    }

    // Meta Pixel event
    if (typeof window.fbq === 'function' && activeMetaId) {
      const standardEvents = ['PageView', 'Contact', 'Lead', 'ViewContent', 'Search'];
      if (standardEvents.includes(eventName)) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    }

    // Microsoft Clarity custom event
    if (typeof window.clarity === 'function' && activeClarityId) {
      window.clarity('event', eventName);
    }
  } catch (err) {
    console.warn(`[Analytics] Failed to track event "${eventName}":`, err);
  }
}

/**
 * Track Page View event
 */
export function trackPageView(url: string, pageTitle?: string): void {
  try {
    if (typeof window.gtag === 'function' && activeGaId) {
      window.gtag('event', 'page_view', {
        page_path: url,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
      });
    }
    if (typeof window.fbq === 'function' && activeMetaId) {
      window.fbq('track', 'PageView');
    }
  } catch (err) {
    console.warn('[Analytics] PageView tracking failed:', err);
  }
}

/**
 * High-value conversion helper: WhatsApp CTA Click
 */
export function trackWhatsAppClick(source: string, details?: Record<string, any>): void {
  trackEvent('whatsapp_click', {
    source,
    ...details,
  });
  // Also track as Contact / Lead on Meta Pixel
  if (typeof window.fbq === 'function' && activeMetaId) {
    window.fbq('track', 'Contact', { content_name: source });
  }
}

/**
 * Track Sport view
 */
export function trackSportView(sportName: string, slug: string): void {
  trackEvent('sport_view', {
    sport_name: sportName,
    sport_slug: slug,
  });
  if (typeof window.fbq === 'function' && activeMetaId) {
    window.fbq('track', 'ViewContent', {
      content_name: sportName,
      content_category: 'Sport',
      content_ids: [slug],
    });
  }
}

/**
 * Track Offer view
 */
export function trackOfferView(offerTitle: string, price?: number): void {
  trackEvent('offer_view', {
    offer_title: offerTitle,
    price,
  });
}

/**
 * Track Blog article view
 */
export function trackBlogView(articleTitle: string, slug: string): void {
  trackEvent('blog_view', {
    article_title: articleTitle,
    article_slug: slug,
  });
}

/**
 * Track User Search query
 */
export function trackSearchQuery(query: string, resultsCount: number): void {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  });
  if (typeof window.fbq === 'function' && activeMetaId) {
    window.fbq('track', 'Search', { search_string: query });
  }
}

/**
 * Track Language Switch
 */
export function trackLanguageSwitch(toLanguage: string): void {
  trackEvent('language_switch', {
    target_language: toLanguage,
  });
}
