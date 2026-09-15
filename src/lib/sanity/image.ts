import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';
import type { SanityImage } from './types';

// Build image builder from the sanity client
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate a responsive, optimized CDN URL for a Sanity image asset.
 * Handles crop, hotspot, formats (webp), quality, width, and height.
 */
export function urlForImage(source?: SanityImage | any) {
  if (!source || (!source.asset && !source._ref)) {
    return {
      url: () => '',
      width: () => ({ url: () => '', height: () => ({ url: () => '' }) }),
      height: () => ({ url: () => '', width: () => ({ url: () => '' }) }),
      format: () => ({ url: () => '' }),
      quality: () => ({ url: () => '' }),
      fit: () => ({ url: () => '' }),
      auto: () => ({ url: () => '' }),
    };
  }
  return builder.image(source).auto('format').fit('max');
}

/**
 * Safe helper to return an image URL string with default WebP & optimization options
 */
export function getSanityImageUrl(
  source?: SanityImage | any,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    fallback?: string;
  }
): string {
  if (!source) return options?.fallback || '';

  // If source is already a direct string URL (e.g. /images/logo.png or http URL)
  if (typeof source === 'string') return source;

  // If source has a direct asset url from GROQ projection
  if (source.asset?.url) {
    return source.asset.url;
  }

  // If source has asset reference
  if (source.asset?._ref || source._ref) {
    try {
      let img = builder.image(source).auto('format');
      if (options?.width) img = img.width(options.width);
      if (options?.height) img = img.height(options.height);
      if (options?.quality) img = img.quality(options.quality);
      return img.url();
    } catch {
      return options?.fallback || '';
    }
  }

  return options?.fallback || '';
}
