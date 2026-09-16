// GROQ Queries for Alqima Sports Academy Sanity Data

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    ...,
    "logoUrl": logo.asset->url,
    "defaultOgImageUrl": defaultSeo.ogImage.asset->url
  }
`;

export const UI_LABELS_QUERY = `
  *[_type == "uiLabels"][0]
`;

export const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0]{
    ...,
    "heroImageUrl": heroImage.asset->url,
    "whyUsImageUrl": whyUsImage.asset->url,
    "seoOgImageUrl": seoOgImage.asset->url
  }
`;

export const ABOUT_PAGE_QUERY = `
  *[_type == "aboutPage"][0]{
    ...,
    "storyImageUrl": storyImage.asset->url,
    "teamImageUrl": teamImage.asset->url,
    "seoOgImageUrl": seoOgImage.asset->url
  }
`;

export const SPORTS_QUERY = `
  *[_type == "sport" && isActive != false] | order(displayOrder asc, _createdAt asc){
    ...,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "heroImageUrl": heroImage.asset->url,
    "galleryUrls": gallery[].asset->url
  }
`;

export const SPORT_BY_SLUG_QUERY = `
  *[_type == "sport" && (slug.current == $slug || slug == $slug)][0]{
    ...,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "heroImageUrl": heroImage.asset->url,
    "galleryUrls": gallery[].asset->url,
    "seoOgImageUrl": seoOgImage.asset->url
  }
`;

export const OFFERS_QUERY = `
  *[_type == "offer" && isActive != false] | order(displayOrder asc, _createdAt asc){
    ...,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`;

export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && isActive != false] | order(publishedAt desc, _createdAt desc){
    ...,
    "slug": slug.current,
    "imageUrl": coalesce(image.asset->url, mainImage.asset->url, coverImage.asset->url),
    "category": coalesce(categoryText, category->title)
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && (slug.current == $slug || slug == $slug || _id == $slug || _id == "blogPost-" + $slug)][0]{
    ...,
    "slug": slug.current,
    "imageUrl": coalesce(image.asset->url, mainImage.asset->url, coverImage.asset->url),
    "category": coalesce(categoryText, category->title)
  }
`;

export const BLOG_CATEGORIES_QUERY = `
  *[_type == "blogCategory"] | order(displayOrder asc, title.ar asc){
    ...,
    "slug": slug.current
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && isActive != false] | order(displayOrder asc, _createdAt asc){
    ...,
    "avatarUrl": avatarImage.asset->url
  }
`;

export const GALLERY_QUERY = `
  *[_type == "galleryImage" && isActive != false] | order(displayOrder asc, _createdAt desc){
    ...,
    "imageUrl": image.asset->url
  }
`;

export const NAVIGATION_QUERY = `
  *[_type == "navigation"][0]{
    ...
  }
`;

export const FOOTER_QUERY = `
  *[_type == "footer"][0]{
    ...
  }
`;

export const LEGAL_PAGE_QUERY = `
  *[_type == "legalPage" && pageType == $pageType][0]{
    ...
  }
`;

export const ANALYTICS_SETTINGS_QUERY = `
  *[_type == "analyticsSettings"][0]{
    ...
  }
`;

export const PAYMENT_PROVIDERS_QUERY = `
  *[_type == "paymentProviders"][0]{
    ...
  }
`;

