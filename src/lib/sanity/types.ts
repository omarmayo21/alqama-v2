export interface SanityLocalized<T = string> {
  ar?: T;
  en?: T;
}

export interface SanityImage {
  _type?: 'image' | 'localizedImage';
  asset?: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
  altAr?: string;
  altEn?: string;
  captionAr?: string;
  captionEn?: string;
}

export interface SanityNavItem {
  _key?: string;
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  path: string;
  isExternal?: boolean;
  order?: number;
  children?: SanityNavItem[];
}

export interface SanityScheduleSession {
  _key?: string;
  dayAr?: string;
  dayEn?: string;
  startTimeAr?: string;
  startTimeEn?: string;
  endTimeAr?: string;
  endTimeEn?: string;
  ageGroupAr?: string;
  ageGroupEn?: string;
  levelAr?: string;
  levelEn?: string;
  coachAr?: string;
  coachEn?: string;
  locationAr?: string;
  locationEn?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export interface SanitySiteSettings {
  _id: string;
  _type: 'siteSettings';
  academyName?: SanityLocalized;
  academyNameAr?: string;
  academyNameEn?: string;
  slogan?: SanityLocalized;
  logo?: SanityImage;
  logoUrl?: string;
  phone?: string;
  phoneDisplay?: string;
  whatsappNumber?: string;
  whatsappUrl?: string;
  whatsappMessageAr?: string;
  whatsappMessageEn?: string;
  email?: string;
  address?: SanityLocalized;
  addressAr?: string;
  addressEn?: string;
  googleMapsUrl?: string;
  workingHours?: SanityLocalized;
  workingHoursAr?: string;
  workingHoursEn?: string;
  dailyScheduleTitle?: SanityLocalized;
  dailyScheduleDays?: SanityLocalized;
  dailyScheduleHours?: SanityLocalized;
  socialLinks?: Array<{
    _key?: string;
    platform: string;
    url: string;
  }>;
  defaultSeo?: {
    metaTitle?: SanityLocalized;
    metaDescription?: SanityLocalized;
    ogImage?: SanityImage;
  };
  defaultSeoTitleAr?: string;
  defaultSeoTitleEn?: string;
  defaultSeoDescriptionAr?: string;
  defaultSeoDescriptionEn?: string;
  defaultOgImageUrl?: string;
}

export interface SanityUiLabels {
  _id: string;
  _type: 'uiLabels';
  [key: string]: any;
}

export interface SanityHomepage {
  _id: string;
  _type: 'homepage';
  heroBadge?: SanityLocalized;
  heroHeadline?: SanityLocalized;
  heroTitle?: SanityLocalized;
  heroHighlight?: SanityLocalized;
  heroHighlightText?: SanityLocalized;
  heroSubtitle?: SanityLocalized;
  heroDescription?: SanityLocalized;
  heroPrimaryCta?: SanityLocalized;
  heroPrimaryCtaText?: SanityLocalized;
  heroSecondaryCta?: SanityLocalized;
  heroSecondaryCtaText?: SanityLocalized;
  heroTags?: Array<SanityLocalized | string>;
  heroImage?: SanityImage;
  heroImageUrl?: string;

  // Features Section
  featuresBadge?: SanityLocalized;
  featuresTitle?: SanityLocalized;
  featuresSubtitle?: SanityLocalized;
  featuresList?: Array<{
    _key?: string;
    icon?: string;
    title?: SanityLocalized | string;
    desc?: SanityLocalized | string;
    description?: SanityLocalized | string;
  }>;

  // Sports Section
  sportsSectionTitle?: SanityLocalized;
  sportsSectionHighlight?: SanityLocalized;
  sportsSectionDesc?: SanityLocalized;
  sportsBadge?: SanityLocalized;
  sportsTitle?: SanityLocalized;
  sportsSubtitle?: SanityLocalized;

  // Offers Section
  offersSectionTitle?: SanityLocalized;
  offersSectionHighlight?: SanityLocalized;
  offersSectionDesc?: SanityLocalized;
  offersBadge?: SanityLocalized;
  offersTitle?: SanityLocalized;
  offersSubtitle?: SanityLocalized;

  // Why Choose Us
  whyUsTitle?: SanityLocalized;
  whyUsHighlight?: SanityLocalized;
  whyUsDesc?: SanityLocalized;
  whyUsBadge?: SanityLocalized;
  whyUsSubtitle?: SanityLocalized;
  whyUsImage?: SanityImage;
  whyUsImageUrl?: string;
  whyUsPoints?: Array<{
    _key?: string;
    title?: SanityLocalized;
    description?: SanityLocalized;
  }>;

  // Reviews Section
  reviewsSectionTitle?: SanityLocalized;
  reviewsSectionHighlight?: SanityLocalized;
  reviewsSectionDesc?: SanityLocalized;
  reviewsBadge?: SanityLocalized;
  reviewsTitle?: SanityLocalized;
  reviewsSubtitle?: SanityLocalized;

  // CTA Section
  ctaBannerTitle?: SanityLocalized;
  ctaBannerDesc?: SanityLocalized;
  ctaBannerSubtitle?: SanityLocalized;
  ctaBannerButton?: SanityLocalized;
  ctaTitle?: SanityLocalized;
  ctaDescription?: SanityLocalized;
  ctaPrimaryBtnText?: SanityLocalized;
  ctaSecondaryBtnText?: SanityLocalized;

  // Blog Section
  blogBadge?: SanityLocalized;
  blogTitle?: SanityLocalized;
  blogSubtitle?: SanityLocalized;

  seoTitle?: SanityLocalized;
  seoDescription?: SanityLocalized;
  seoOgImage?: SanityImage;
  seoOgImageUrl?: string;
}

export interface SanityAboutPage {
  _id: string;
  _type: 'aboutPage';
  badge?: SanityLocalized;
  title?: SanityLocalized;
  subtitle?: SanityLocalized;
  pageHeaderTitle?: SanityLocalized;
  pageHeaderSubtitle?: SanityLocalized;
  heroBadge?: SanityLocalized;
  heroTitle?: SanityLocalized;
  heroSubtitle?: SanityLocalized;
  storyHeadline?: SanityLocalized;
  storyTitle?: SanityLocalized;
  storyHighlight?: SanityLocalized;
  storyContent?: SanityLocalized;
  storyParagraph1?: SanityLocalized;
  storyParagraph2?: SanityLocalized;
  badgeCardTitle?: SanityLocalized;
  badgeCardSubtitle?: SanityLocalized;
  storyImage?: SanityImage;
  storyImageUrl?: string;
  teamImage?: SanityImage;
  teamImageUrl?: string;
  valuesTitle?: SanityLocalized;
  valuesHighlight?: SanityLocalized;
  valuesSubtitle?: SanityLocalized;
  visionTitle?: SanityLocalized;
  visionDesc?: SanityLocalized;
  visionText?: SanityLocalized;
  missionTitle?: SanityLocalized;
  missionDesc?: SanityLocalized;
  missionText?: SanityLocalized;
  valuesList?: Array<{
    _key?: string;
    icon?: string;
    title?: SanityLocalized;
    desc?: SanityLocalized;
    description?: SanityLocalized;
  }>;
  coachesTitle?: SanityLocalized;
  coachesHighlight?: SanityLocalized;
  coachesDesc?: SanityLocalized;
  milestonesTitle?: SanityLocalized;
  milestonesHighlight?: SanityLocalized;
  milestonesDesc?: SanityLocalized;
  achievementsTitle?: SanityLocalized;
  achievementsHighlight?: SanityLocalized;
  achievementsDesc?: SanityLocalized;
  ctaTitle?: SanityLocalized;
  ctaSubtitle?: SanityLocalized;
  ctaButtonText?: SanityLocalized;
  statsList?: Array<{
    _key?: string;
    number?: string;
    label?: SanityLocalized;
  }>;
  seoTitle?: SanityLocalized;
  seoDescription?: SanityLocalized;
  seoOgImage?: SanityImage;
}

export interface SanitySport {
  _id: string;
  _type: 'sport';
  name?: SanityLocalized;
  nameAr?: string;
  nameEn?: string;
  slug: string;
  tagline?: SanityLocalized;
  taglineAr?: string;
  taglineEn?: string;
  shortDescription?: SanityLocalized;
  shortDescriptionAr?: string;
  shortDescriptionEn?: string;
  description?: SanityLocalized;
  fullDescriptionAr?: string;
  fullDescriptionEn?: string;
  icon?: string;
  iconName?: string;
  color?: string;
  accentColor?: string;
  badge?: SanityLocalized;
  badgeAr?: string;
  badgeEn?: string;
  ageRange?: SanityLocalized;
  ageRangeAr?: string;
  ageRangeEn?: string;
  sessionsPerWeekAr?: string;
  sessionsPerWeekEn?: string;
  sessionDurationAr?: string;
  sessionDurationEn?: string;
  targetGenderAr?: string;
  targetGenderEn?: string;
  keyFeaturesAr?: string[];
  keyFeaturesEn?: string[];
  features?: Array<SanityLocalized | string | { _key?: string; ar?: string; en?: string }>;
  levels?: Array<{
    _key?: string;
    ar?: string;
    en?: string;
    nameAr?: string;
    nameEn?: string;
    descriptionAr?: string;
    descriptionEn?: string;
  }>;
  schedule?: SanityScheduleSession[];
  scheduleSessions?: SanityScheduleSession[];
  image?: SanityImage;
  imageUrl?: string;
  heroImage?: SanityImage;
  heroImageUrl?: string;
  gallery?: SanityImage[];
  galleryUrls?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  displayOrder?: number;
}

export interface SanityOffer {
  _id: string;
  _type: 'offer';
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  slug?: string;
  badge?: SanityLocalized;
  badgeAr?: string;
  badgeEn?: string;
  tagline?: SanityLocalized;
  taglineAr?: string;
  taglineEn?: string;
  description?: SanityLocalized;
  descriptionAr?: string;
  descriptionEn?: string;
  price?: SanityLocalized | number | string;
  originalPrice?: number | string;
  currencyAr?: string;
  currencyEn?: string;
  durationAr?: string;
  durationEn?: string;
  sessionsCount?: SanityLocalized | string;
  sportsIncluded?: SanityLocalized | string;
  sessionsCountAr?: string;
  sessionsCountEn?: string;
  features?: Array<SanityLocalized | string | { _key?: string; ar?: string; en?: string }>;
  featuresAr?: string[];
  featuresEn?: string[];
  targetAudienceAr?: string;
  targetAudienceEn?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  tabbyAvailable?: boolean;
  tamaraAvailable?: boolean;
  ctaTextAr?: string;
  ctaTextEn?: string;
  displayOrder?: number;
  isActive?: boolean;
  imageUrl?: string;
}

export interface SanityBlogCategory {
  _id: string;
  _type: 'blogCategory';
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  slug?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  displayOrder?: number;
}

export interface SanityBlogPost {
  _id: string;
  _type: 'blogPost';
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  slug: string;
  excerpt?: SanityLocalized;
  excerptAr?: string;
  excerptEn?: string;
  content?: SanityLocalized | any;
  contentAr?: any;
  contentEn?: any;
  mainImage?: SanityImage;
  coverImage?: SanityImage;
  imageUrl?: string;
  coverImageUrl?: string;
  category?: SanityLocalized | string;
  author?: SanityLocalized | string;
  authorNameAr?: string;
  authorNameEn?: string;
  readTime?: SanityLocalized | string;
  readTimeAr?: string;
  readTimeEn?: string;
  publishedAt?: string;
  date?: SanityLocalized | string;
  tags?: Array<SanityLocalized | string>;
  tagsAr?: string[];
  tagsEn?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
}

export interface SanityTestimonial {
  _id: string;
  _type: 'testimonial';
  name?: SanityLocalized;
  authorNameAr?: string;
  authorNameEn?: string;
  initials?: string;
  authorInitials?: string;
  rating?: number;
  date?: SanityLocalized;
  reviewDate?: string;
  text?: SanityLocalized;
  reviewTextAr?: string;
  reviewTextEn?: string;
  sportAr?: string;
  sportEn?: string;
  source?: string;
  verified?: boolean;
  avatarImage?: SanityImage;
  avatarUrl?: string;
  displayOrder?: number;
  isFeatured?: boolean;
  isActive?: boolean;
}

export interface SanityGalleryImage {
  _id: string;
  _type: 'galleryImage';
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  description?: SanityLocalized;
  descriptionAr?: string;
  descriptionEn?: string;
  coverImage?: SanityImage;
  coverImageUrl?: string;
  image?: SanityImage;
  imageUrl?: string;
  images?: SanityImage[];
  imagesUrls?: string[];
  category?: 'tournaments' | 'events' | 'training' | 'other' | string;
  categoryTitle?: SanityLocalized;
  displayOrder?: number;
  isFeatured?: boolean;
  isActive?: boolean;
}

export interface SanityHeroSlide {
  _id: string;
  _type: 'heroSlide';
  title?: SanityLocalized;
  titleAr?: string;
  titleEn?: string;
  badge?: SanityLocalized;
  badgeAr?: string;
  badgeEn?: string;
  description?: SanityLocalized;
  descriptionAr?: string;
  descriptionEn?: string;
  primaryCtaText?: SanityLocalized;
  primaryCtaTextAr?: string;
  primaryCtaTextEn?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: SanityLocalized;
  secondaryCtaTextAr?: string;
  secondaryCtaTextEn?: string;
  secondaryCtaLink?: string;
  reassuranceText?: SanityLocalized;
  reassuranceTextAr?: string;
  reassuranceTextEn?: string;
  image?: SanityImage;
  imageUrl?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export interface SanityNavigation {
  _id: string;
  _type: 'navigation';
  title: string;
  items: SanityNavItem[];
}

export interface SanityFooter {
  _id: string;
  _type: 'footer';
  aboutDescriptionAr?: string;
  aboutDescriptionEn?: string;
  column1TitleAr?: string;
  column1TitleEn?: string;
  column2TitleAr?: string;
  column2TitleEn?: string;
  column3TitleAr?: string;
  column3TitleEn?: string;
  vatNoticeAr?: string;
  vatNoticeEn?: string;
  copyrightAr?: string;
  copyrightEn?: string;
}

export interface SanityLegalPage {
  _id: string;
  _type: 'legalPage';
  pageType: 'privacy' | 'terms';
  titleAr: string;
  titleEn: string;
  lastUpdatedAr?: string;
  lastUpdatedEn?: string;
  introAr?: string;
  introEn?: string;
  sections?: Array<{
    _key?: string;
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
  }>;
  seoTitle?: SanityLocalized;
  seoDescription?: SanityLocalized;
}

export interface SanityAnalyticsSettings {
  _id: string;
  _type: 'analyticsSettings';
  googleAnalyticsEnabled?: boolean;
  googleAnalyticsMeasurementId?: string;
  metaPixelEnabled?: boolean;
  metaPixelId?: string;
  microsoftClarityEnabled?: boolean;
  microsoftClarityProjectId?: string;
  googleAdsEnabled?: boolean;
  googleAdsId?: string;
  googleTagManagerEnabled?: boolean;
  googleTagManagerId?: string;
}

export interface SanityPaymentProviders {
  _id: string;
  _type: 'paymentProviders';
  tabbyEnabled?: boolean;
  tabbyTitleAr?: string;
  tabbyTitleEn?: string;
  tabbyDescriptionAr?: string;
  tabbyDescriptionEn?: string;
  tamaraEnabled?: boolean;
  tamaraTitleAr?: string;
  tamaraTitleEn?: string;
  tamaraDescriptionAr?: string;
  tamaraDescriptionEn?: string;
  splitCount?: number;
}
