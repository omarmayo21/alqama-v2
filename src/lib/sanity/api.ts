import { sanityClient } from './client';
import {
  SITE_SETTINGS_QUERY,
  UI_LABELS_QUERY,
  HOMEPAGE_QUERY,
  ABOUT_PAGE_QUERY,
  SPORTS_QUERY,
  SPORT_BY_SLUG_QUERY,
  OFFERS_QUERY,
  BLOG_POSTS_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_CATEGORIES_QUERY,
  TESTIMONIALS_QUERY,
  NAVIGATION_QUERY,
  FOOTER_QUERY,
  LEGAL_PAGE_QUERY,
  ANALYTICS_SETTINGS_QUERY,
  PAYMENT_PROVIDERS_QUERY,
} from './queries';
import type {
  SanitySiteSettings,
  SanityUiLabels,
  SanityHomepage,
  SanityAboutPage,
  SanitySport,
  SanityOffer,
  SanityBlogPost,
  SanityBlogCategory,
  SanityTestimonial,
  SanityNavigation,
  SanityFooter,
  SanityLegalPage,
  SanityAnalyticsSettings,
  SanityPaymentProviders,
} from './types';

// API Fetch functions with safe error handling

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    return await sanityClient.fetch<SanitySiteSettings>(SITE_SETTINGS_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching site settings:', error);
    return null;
  }
}

export async function getUiLabels(): Promise<SanityUiLabels | null> {
  try {
    return await sanityClient.fetch<SanityUiLabels>(UI_LABELS_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching UI labels:', error);
    return null;
  }
}

export async function getHomepageData(): Promise<SanityHomepage | null> {
  try {
    return await sanityClient.fetch<SanityHomepage>(HOMEPAGE_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching homepage data:', error);
    return null;
  }
}

export async function getAboutPageData(): Promise<SanityAboutPage | null> {
  try {
    return await sanityClient.fetch<SanityAboutPage>(ABOUT_PAGE_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching about page data:', error);
    return null;
  }
}

export async function getSports(): Promise<SanitySport[]> {
  try {
    return await sanityClient.fetch<SanitySport[]>(SPORTS_QUERY) || [];
  } catch (error) {
    console.error('[Sanity API] Error fetching sports:', error);
    return [];
  }
}

export async function getSportBySlug(slug: string): Promise<SanitySport | null> {
  try {
    return await sanityClient.fetch<SanitySport>(SPORT_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error(`[Sanity API] Error fetching sport by slug "${slug}":`, error);
    return null;
  }
}

export async function getOffers(): Promise<SanityOffer[]> {
  try {
    return await sanityClient.fetch<SanityOffer[]>(OFFERS_QUERY) || [];
  } catch (error) {
    console.error('[Sanity API] Error fetching offers:', error);
    return [];
  }
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  try {
    return await sanityClient.fetch<SanityBlogPost[]>(BLOG_POSTS_QUERY) || [];
  } catch (error) {
    console.error('[Sanity API] Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  try {
    return await sanityClient.fetch<SanityBlogPost>(BLOG_POST_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error(`[Sanity API] Error fetching blog post "${slug}":`, error);
    return null;
  }
}

export async function getBlogCategories(): Promise<SanityBlogCategory[]> {
  try {
    return await sanityClient.fetch<SanityBlogCategory[]>(BLOG_CATEGORIES_QUERY) || [];
  } catch (error) {
    console.error('[Sanity API] Error fetching blog categories:', error);
    return [];
  }
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  try {
    return await sanityClient.fetch<SanityTestimonial[]>(TESTIMONIALS_QUERY) || [];
  } catch (error) {
    console.error('[Sanity API] Error fetching testimonials:', error);
    return [];
  }
}

export async function getNavigation(): Promise<SanityNavigation | null> {
  try {
    return await sanityClient.fetch<SanityNavigation>(NAVIGATION_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching navigation:', error);
    return null;
  }
}

export async function getFooter(): Promise<SanityFooter | null> {
  try {
    return await sanityClient.fetch<SanityFooter>(FOOTER_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching footer:', error);
    return null;
  }
}

export async function getLegalPage(pageType: 'privacy' | 'terms'): Promise<SanityLegalPage | null> {
  try {
    return await sanityClient.fetch<SanityLegalPage>(LEGAL_PAGE_QUERY, { pageType });
  } catch (error) {
    console.error(`[Sanity API] Error fetching legal page "${pageType}":`, error);
    return null;
  }
}

export async function getAnalyticsSettings(): Promise<SanityAnalyticsSettings | null> {
  try {
    return await sanityClient.fetch<SanityAnalyticsSettings>(ANALYTICS_SETTINGS_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching analytics settings:', error);
    return null;
  }
}

export async function getPaymentProviders(): Promise<SanityPaymentProviders | null> {
  try {
    return await sanityClient.fetch<SanityPaymentProviders>(PAYMENT_PROVIDERS_QUERY);
  } catch (error) {
    console.error('[Sanity API] Error fetching payment providers:', error);
    return null;
  }
}
