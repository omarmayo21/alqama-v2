import { createClient } from '@sanity/client';
import { sports } from '../src/data/sports.js';
import { offers } from '../src/data/offers.js';
import { blogPosts, blogPostsEn } from '../src/data/blog.js';
import { googleReviews, googleReviewsEn } from '../src/data/reviews.js';
import { translations } from '../src/data/translations.js';
import { WHATSAPP_URL } from '../src/utils/constants.js';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const tAr = translations.ar;
const tEn = translations.en;

async function syncAllContent() {
  console.log('🚀 Starting Full Content Synchronization into Sanity CMS...');

  const transaction = client.transaction();
  let docCount = 0;

  // 1. Site Settings
  console.log('📦 Syncing Site Settings...');
  const siteSettingsDoc = {
    _id: 'siteSettings-main',
    _type: 'siteSettings',
    academyName: {
      _type: 'localizedString',
      ar: 'أكاديمية القمة الرياضية',
      en: 'Alqima Sports Academy',
    },
    slogan: {
      _type: 'localizedString',
      ar: 'الأكاديمية الاكثر تطورا في جدة',
      en: 'The Most Advanced Sports Academy in Jeddah',
    },
    phone: '0500000000',
    phoneDisplay: '٠٥٠ ٠٠٠ ٠٠٠٠',
    whatsappNumber: '966500000000',
    whatsappUrl: WHATSAPP_URL,
    email: 'info@alqimasports.com',
    address: {
      _type: 'localizedString',
      ar: 'حي الزهراء - داخل مدارس دار الحنان - جدة',
      en: 'Al Zahra District – Inside Dar Al-Hanan Schools – Jeddah',
    },
    googleMapsUrl: 'https://maps.google.com',
    workingHours: {
      _type: 'localizedString',
      ar: 'السبت - الخميس: ٥:٠٠ م - ٨:٠٠ م',
      en: 'Saturday - Thursday: 5:00 PM - 8:00 PM',
    },
    socialLinks: [
      { _key: 's1', platform: 'instagram', url: 'https://instagram.com/alqimasports' },
      { _key: 's2', platform: 'tiktok', url: 'https://tiktok.com/@alqimasports' },
      { _key: 's3', platform: 'snapchat', url: 'https://snapchat.com/add/alqimasports' },
    ],
    defaultSeo: {
      _type: 'seo',
      metaTitle: {
        _type: 'localizedString',
        ar: 'أكاديمية القمة الرياضية للأطفال بجدة | ٧ رياضات متخصصة',
        en: 'ALQIMA Sports Academy for Children in Jeddah | 7 Specialized Sports',
      },
      metaDescription: {
        _type: 'localizedText',
        ar: 'أكاديمية القمة الرياضية للأطفال بجدة.. الأكاديمية الأكثر تطوراً في جدة لتعليم وتطوير مهارات ٧ رياضات متخصصة للأولاد والبنات مع تقسيط ميسر.',
        en: 'ALQIMA Sports Academy in Jeddah — Premier youth sports academy developing athletic champions across 7 specialized sports with flexible installment options.',
      },
      keywords: ['أكاديمية القمة', 'رياضة أطفال جدة', 'كرة قدم', 'سباحة', 'كاراتيه', 'كرة سلة', 'كيك بوكسينغ', 'جمباز', 'سكيتنج', 'جدة'],
    },
  };
  transaction.createOrReplace(siteSettingsDoc);
  docCount++;

  // 2. UI Labels
  console.log('📦 Syncing Global UI Labels...');
  const uiLabelsDoc = {
    _id: 'uiLabels-main',
    _type: 'uiLabels',
    topBarCallText: { _type: 'localizedString', ar: 'اتصل بنا', en: 'Call Us' },
    topBarChatText: { _type: 'localizedString', ar: 'محادثة فورية', en: 'Live Chat' },
    contactButtonText: { _type: 'localizedString', ar: tAr.common.contactUs, en: tEn.common.contactUs },
    whatsappCtaText: { _type: 'localizedString', ar: tAr.common.whatsappTooltip, en: tEn.common.whatsappTooltip },
    exploreOffersText: { _type: 'localizedString', ar: 'استكشف العروض', en: 'Explore Offers' },
    viewAllSportsText: { _type: 'localizedString', ar: tAr.sportsSection.viewAll, en: tEn.sportsSection.viewAll },
    readMoreText: { _type: 'localizedString', ar: tAr.blogPage.readMore, en: tEn.blogPage.readMore },
    backHomeText: { _type: 'localizedString', ar: tAr.common.backHome, en: tEn.common.backHome },
    backToBlogText: { _type: 'localizedString', ar: tAr.blogPage.backToBlog, en: tEn.blogPage.backToBlog },
    levelsHeading: { _type: 'localizedString', ar: tAr.sportDetailPage.levelsTitle, en: tEn.sportDetailPage.levelsTitle },
    featuresHeading: { _type: 'localizedString', ar: tAr.sportDetailPage.curriculumTitle, en: tEn.sportDetailPage.curriculumTitle },
    scheduleHeading: { _type: 'localizedString', ar: 'مواعيد التدريب', en: 'Training Schedule' },
    ageRangeLabel: { _type: 'localizedString', ar: tAr.sportDetailPage.ageLabel, en: tEn.sportDetailPage.ageLabel },
    searchPlaceholder: { _type: 'localizedString', ar: 'ابحث في المقالات...', en: 'Search articles...' },
    allFilterLabel: { _type: 'localizedString', ar: 'الكل', en: 'All' },
    noResultsTitle: { _type: 'localizedString', ar: 'لا توجد نتائج', en: 'No Results Found' },
    noResultsDesc: { _type: 'localizedString', ar: 'جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.', en: 'Try searching with other keywords or select a different category.' },
    pageNotFoundTitle: { _type: 'localizedString', ar: tAr.common.pageNotFound, en: tEn.common.pageNotFound },
    pageNotFoundDesc: { _type: 'localizedString', ar: tAr.common.pageNotFoundDesc, en: tEn.common.pageNotFoundDesc },
    loadingText: { _type: 'localizedString', ar: 'جاري التحميل...', en: 'Loading...' },
  };
  transaction.createOrReplace(uiLabelsDoc);
  docCount++;

  // 3. Homepage
  console.log('📦 Syncing Homepage Content...');
  const homepageDoc = {
    _id: 'homepage-main',
    _type: 'homepage',
    heroBadge: {
      _type: 'localizedString',
      ar: tAr.hero.badge,
      en: tEn.hero.badge,
    },
    heroHeadline: {
      _type: 'localizedString',
      ar: `${tAr.hero.titleLine1} ${tAr.hero.titleHighlight}`,
      en: `${tEn.hero.titleLine1} ${tEn.hero.titleHighlight}`,
    },
    heroHighlight: {
      _type: 'localizedString',
      ar: tAr.hero.titleHighlight,
      en: tEn.hero.titleHighlight,
    },
    heroSubtitle: {
      _type: 'localizedText',
      ar: tAr.hero.subtitle,
      en: tEn.hero.subtitle,
    },
    heroPrimaryCta: {
      _type: 'localizedString',
      ar: tAr.hero.ctaPrimary,
      en: tEn.hero.ctaPrimary,
    },
    heroSecondaryCta: {
      _type: 'localizedString',
      ar: tAr.hero.ctaSecondary,
      en: tEn.hero.ctaSecondary,
    },
    heroTags: [
      { _key: 't1', ar: tAr.hero.stat2Label, en: tEn.hero.stat2Label },
      { _key: 't2', ar: 'ملاعب وصالات مكيفة ومجهزة', en: 'Air-Conditioned Indoor Facilities' },
      { _key: 't3', ar: 'تقسيط عبر تابي وتمارا', en: 'Installments with Tabby & Tamara' },
    ],
    featuresList: [
      {
        _key: 'f1',
        icon: 'shield',
        title: {
          _type: 'localizedString',
          ar: tAr.features.items[0].title,
          en: tEn.features.items[0].title,
        },
        desc: {
          _type: 'localizedText',
          ar: tAr.features.items[0].desc,
          en: tEn.features.items[0].desc,
        },
      },
      {
        _key: 'f2',
        icon: 'heart',
        title: {
          _type: 'localizedString',
          ar: tAr.features.items[1].title,
          en: tEn.features.items[1].title,
        },
        desc: {
          _type: 'localizedText',
          ar: tAr.features.items[1].desc,
          en: tEn.features.items[1].desc,
        },
      },
      {
        _key: 'f3',
        icon: 'users',
        title: {
          _type: 'localizedString',
          ar: tAr.features.items[2].title,
          en: tEn.features.items[2].title,
        },
        desc: {
          _type: 'localizedText',
          ar: tAr.features.items[2].desc,
          en: tEn.features.items[2].desc,
        },
      },
      {
        _key: 'f4',
        icon: 'creditCard',
        title: {
          _type: 'localizedString',
          ar: tAr.features.items[3].title,
          en: tEn.features.items[3].title,
        },
        desc: {
          _type: 'localizedText',
          ar: tAr.features.items[3].desc,
          en: tEn.features.items[3].desc,
        },
      },
    ],
    sportsSectionTitle: {
      _type: 'localizedString',
      ar: tAr.sportsSection.title,
      en: tEn.sportsSection.title,
    },
    sportsSectionHighlight: {
      _type: 'localizedString',
      ar: tAr.sportsSection.badge,
      en: tEn.sportsSection.badge,
    },
    sportsSectionDesc: {
      _type: 'localizedText',
      ar: tAr.sportsSection.subtitle,
      en: tEn.sportsSection.subtitle,
    },
    offersSectionTitle: {
      _type: 'localizedString',
      ar: tAr.offersSection.title,
      en: tEn.offersSection.title,
    },
    offersSectionHighlight: {
      _type: 'localizedString',
      ar: tAr.offersSection.badge,
      en: tEn.offersSection.badge,
    },
    offersSectionDesc: {
      _type: 'localizedText',
      ar: tAr.offersSection.subtitle,
      en: tEn.offersSection.subtitle,
    },
    whyUsTitle: {
      _type: 'localizedString',
      ar: 'لماذا يختار أولياء الأمور أكاديمية القمة؟',
      en: 'Why Parents Choose ALQIMA Academy?',
    },
    whyUsHighlight: {
      _type: 'localizedString',
      ar: 'أكاديمية القمة',
      en: 'ALQIMA Academy',
    },
    whyUsDesc: {
      _type: 'localizedText',
      ar: 'نجمع بين الشغف الرياضي والتربية الإيجابية لنبني جيلاً قوياً وواثقاً ومتميزاً في بيئة آمنة ومحفزة.',
      en: 'Blending athletic excellence with positive mentorship to cultivate strong, resilient, and confident young champions.',
    },
    pathwaysTitle: {
      _type: 'localizedString',
      ar: 'مسار التطور الرياضي في أكاديمية القمة',
      en: 'Athletic Progression Journey at ALQIMA',
    },
    pathwaysHighlight: {
      _type: 'localizedString',
      ar: 'مسار التطور',
      en: 'Progression Journey',
    },
    pathwaysDesc: {
      _type: 'localizedText',
      ar: 'من الخطوة الأولى والتعرف على أساسيات اللعبة حتى منصات التتويج والمنافسات الرسمية.',
      en: 'From foundational movement basics to official competitions and tournament podiums.',
    },
    pathwaysList: [
      {
        _key: 'p1',
        stepNumber: '01',
        title: { _type: 'localizedString', ar: 'التأسيس واكتشاف الشغف', en: 'Foundation & Discovery' },
        desc: { _type: 'localizedText', ar: 'بناء التوافق الحركي والتوازن وحب الرياضة من خلال أنشطة ممتعة ومحفزة للأطفال.', en: 'Building coordination, balance, and love for sports through fun, engaging activities.' },
      },
      {
        _key: 'p2',
        stepNumber: '02',
        title: { _type: 'localizedString', ar: 'التطوير المهاري والتكتيكي', en: 'Skill Mastery & Tactics' },
        desc: { _type: 'localizedText', ar: 'صقل المهارات الفردية المتقدمة والتمركز الجماعي وفهم قواعد اللعبة الاحترافية.', en: 'Refining individual technical skills, positioning, and tactical game understanding.' },
      },
      {
        _key: 'p3',
        stepNumber: '03',
        title: { _type: 'localizedString', ar: 'المسار التنافسي والبطولات', en: 'Championship & Tournaments' },
        desc: { _type: 'localizedText', ar: 'المشاركة في المباريات الرسمية والمعسكرات واختبارات قياس الأداء لصناعة الأبطال.', en: 'Participating in official matches, tournaments, and performance evaluations to forge champions.' },
      },
    ],
    reviewsSectionTitle: {
      _type: 'localizedString',
      ar: tAr.reviewsSection.title,
      en: tEn.reviewsSection.title,
    },
    reviewsSectionHighlight: {
      _type: 'localizedString',
      ar: tAr.reviewsSection.badge,
      en: tEn.reviewsSection.badge,
    },
    reviewsSectionDesc: {
      _type: 'localizedText',
      ar: tAr.reviewsSection.subtitle,
      en: tEn.reviewsSection.subtitle,
    },
    ctaBannerTitle: {
      _type: 'localizedString',
      ar: tAr.ctaBanner.title,
      en: tEn.ctaBanner.title,
    },
    ctaBannerSubtitle: {
      _type: 'localizedText',
      ar: tAr.ctaBanner.subtitle,
      en: tEn.ctaBanner.subtitle,
    },
    ctaBannerBtnText: {
      _type: 'localizedString',
      ar: tAr.ctaBanner.button,
      en: tEn.ctaBanner.button,
    },
    blogSectionTitle: {
      _type: 'localizedString',
      ar: tAr.blogPage.title,
      en: tEn.blogPage.title,
    },
    blogSectionHighlight: {
      _type: 'localizedString',
      ar: tAr.blogPage.badge,
      en: tEn.blogPage.badge,
    },
    blogSectionDesc: {
      _type: 'localizedText',
      ar: tAr.blogPage.subtitle,
      en: tEn.blogPage.subtitle,
    },
    seo: {
      _type: 'seo',
      metaTitle: {
        _type: 'localizedString',
        ar: 'أكاديمية القمة الرياضية للأطفال بجدة | الصفحة الرئيسية',
        en: 'ALQIMA Sports Academy for Children in Jeddah | Home',
      },
      metaDescription: {
        _type: 'localizedText',
        ar: 'أكاديمية القمة الرياضية للأطفال بجدة.. الأكاديمية الأكثر تطوراً في جدة لتعليم وتطوير مهارات ٧ رياضات متخصصة للأولاد والبنات مع تقسيط ميسر.',
        en: 'ALQIMA Sports Academy in Jeddah — Premier youth sports academy developing athletic champions across 7 specialized sports with flexible installment options.',
      },
    },
  };
  transaction.createOrReplace(homepageDoc);
  docCount++;

  // 4. Payment Providers
  console.log('📦 Syncing Payment Providers (Tabby & Tamara)...');
  const paymentDoc = {
    _id: 'paymentProviders-main',
    _type: 'paymentProviders',
    sectionTitle: {
      _type: 'localizedString',
      ar: tAr.paymentSection.title,
      en: tEn.paymentSection.title,
    },
    sectionSubtitle: {
      _type: 'localizedText',
      ar: tAr.paymentSection.subtitle,
      en: tEn.paymentSection.subtitle,
    },
    tabbyEnabled: true,
    tabbyTitle: {
      _type: 'localizedString',
      ar: tAr.paymentSection.tabbyTitle,
      en: tEn.paymentSection.tabbyTitle,
    },
    tabbyDesc: {
      _type: 'localizedText',
      ar: tAr.paymentSection.tabbyDesc,
      en: tEn.paymentSection.tabbyDesc,
    },
    tamaraEnabled: true,
    tamaraTitle: {
      _type: 'localizedString',
      ar: tAr.paymentSection.tamaraTitle,
      en: tEn.paymentSection.tamaraTitle,
    },
    tamaraDesc: {
      _type: 'localizedText',
      ar: tAr.paymentSection.tamaraDesc,
      en: tEn.paymentSection.tamaraDesc,
    },
  };
  transaction.createOrReplace(paymentDoc);
  docCount++;

  // 5. Footer
  console.log('📦 Syncing Footer Configuration...');
  const footerDoc = {
    _id: 'footer-main',
    _type: 'footer',
    description: {
      _type: 'localizedText',
      ar: tAr.footer.description,
      en: tEn.footer.description,
    },
    quickLinksHeading: {
      _type: 'localizedString',
      ar: tAr.footer.quickLinksTitle,
      en: tEn.footer.quickLinksTitle,
    },
    sportsHeading: {
      _type: 'localizedString',
      ar: tAr.footer.sportsTitle,
      en: tEn.footer.sportsTitle,
    },
    contactHeading: {
      _type: 'localizedString',
      ar: tAr.footer.contactTitle,
      en: tEn.footer.contactTitle,
    },
    workingHoursHeading: {
      _type: 'localizedString',
      ar: 'أوقات العمل',
      en: 'Working Hours',
    },
    copyrightText: {
      _type: 'localizedString',
      ar: tAr.footer.allRightsReserved,
      en: tEn.footer.allRightsReserved,
    },
    privacyLinkText: {
      _type: 'localizedString',
      ar: tAr.footer.privacy,
      en: tEn.footer.privacy,
    },
    termsLinkText: {
      _type: 'localizedString',
      ar: tAr.footer.terms,
      en: tEn.footer.terms,
    },
  };
  transaction.createOrReplace(footerDoc);
  docCount++;

  // 6. Navigation
  console.log('📦 Syncing Navigation Links...');
  const navigationDoc = {
    _id: 'navigation-main',
    _type: 'navigation',
    title: { _type: 'localizedString', ar: 'القائمة الرئيسية', en: 'Main Menu' },
    items: [
      { _key: 'n1', label: { _type: 'localizedString', ar: tAr.nav.home, en: tEn.nav.home }, path: '/' },
      { _key: 'n2', label: { _type: 'localizedString', ar: tAr.nav.about, en: tEn.nav.about }, path: '/about' },
      { _key: 'n3', label: { _type: 'localizedString', ar: tAr.nav.sports, en: tEn.nav.sports }, path: '/sports' },
      { _key: 'n4', label: { _type: 'localizedString', ar: tAr.nav.offers, en: tEn.nav.offers }, path: '/offers' },
      { _key: 'n5', label: { _type: 'localizedString', ar: tAr.nav.gallery, en: tEn.nav.gallery }, path: '/gallery' },
      { _key: 'n6', label: { _type: 'localizedString', ar: tAr.nav.blog, en: tEn.nav.blog }, path: '/blog' },
      { _key: 'n7', label: { _type: 'localizedString', ar: tAr.nav.contact, en: tEn.nav.contact }, path: WHATSAPP_URL, isExternal: true },
    ],
  };
  transaction.createOrReplace(navigationDoc);
  docCount++;

  // 7. About Page
  console.log('📦 Syncing About Page Content...');
  const aboutPageDoc = {
    _id: 'aboutPage-main',
    _type: 'aboutPage',
    badge: { _type: 'localizedString', ar: tAr.aboutPage.badge, en: tEn.aboutPage.badge },
    title: { _type: 'localizedString', ar: tAr.aboutPage.title, en: tEn.aboutPage.title },
    subtitle: { _type: 'localizedText', ar: tAr.aboutPage.subtitle, en: tEn.aboutPage.subtitle },
    storyHeadline: { _type: 'localizedString', ar: tAr.aboutPage.whyChooseTitle, en: tEn.aboutPage.whyChooseTitle },
    storyHighlight: { _type: 'localizedString', ar: 'أكاديمية القمة', en: 'ALQIMA Academy' },
    storyParagraph1: { _type: 'localizedText', ar: tAr.aboutPage.subtitle, en: tEn.aboutPage.subtitle },
    storyParagraph2: { _type: 'localizedText', ar: tAr.aboutPage.whyChooseSubtitle, en: tEn.aboutPage.whyChooseSubtitle },
    badgeCardTitle: { _type: 'localizedString', ar: 'كادر تدريبي معتمد', en: 'Certified Coaching Staff' },
    badgeCardSubtitle: { _type: 'localizedString', ar: 'بأعلى المعايير الرسمية', en: 'Licensed by Official Sports Federations' },
    valuesTitle: { _type: 'localizedString', ar: tAr.aboutPage.valuesTitle, en: tEn.aboutPage.valuesTitle },
    valuesHighlight: { _type: 'localizedString', ar: 'قيمنا', en: 'Our Values' },
    valuesSubtitle: { _type: 'localizedText', ar: tAr.aboutPage.valuesSubtitle, en: tEn.aboutPage.valuesSubtitle },
    valuesList: tAr.aboutPage.valuesList.map((val, idx) => ({
      _key: `val-${idx}`,
      icon: ['shield', 'award', 'heart', 'users'][idx] || 'star',
      title: { _type: 'localizedString', ar: val.title, en: tEn.aboutPage.valuesList[idx]?.title || val.title },
      desc: { _type: 'localizedText', ar: val.desc, en: tEn.aboutPage.valuesList[idx]?.desc || val.desc },
    })),
    missionTitle: { _type: 'localizedString', ar: tAr.aboutPage.missionTitle, en: tEn.aboutPage.missionTitle },
    missionDesc: { _type: 'localizedText', ar: tAr.aboutPage.missionDesc, en: tEn.aboutPage.missionDesc },
    visionTitle: { _type: 'localizedString', ar: tAr.aboutPage.visionTitle, en: tEn.aboutPage.visionTitle },
    visionDesc: { _type: 'localizedText', ar: tAr.aboutPage.visionDesc, en: tEn.aboutPage.visionDesc },
    coachesTitle: { _type: 'localizedString', ar: 'كادر تدريبي وتربوي محترف', en: 'Elite Coaching & Mentorship Staff' },
    coachesHighlight: { _type: 'localizedString', ar: 'نخبة المدربين', en: 'Our Coaches' },
    coachesDesc: { _type: 'localizedText', ar: 'مدربون مرخصون ومعتمدون من الاتحادات الرسمية يمتلكون خبرة واسعة في تدريب الفئات السنية.', en: 'Certified coaches licensed by official federations with extensive expertise in youth training.' },
    milestonesTitle: { _type: 'localizedString', ar: 'مسيرة التطور والتميز', en: 'Our Journey of Growth' },
    milestonesHighlight: { _type: 'localizedString', ar: 'محطات النجاح', en: 'Milestones' },
    milestonesDesc: { _type: 'localizedText', ar: 'خطوات ثابتة نحو الريادة في رعاية وتطوير المواهب الرياضية في جدة.', en: 'Steady strides toward leadership in nurturing athletic talent in Jeddah.' },
    achievementsTitle: { _type: 'localizedString', ar: 'إنجازات واعتمادات نعتز بها', en: 'Accreditations & Achievements' },
    achievementsHighlight: { _type: 'localizedString', ar: 'إنجازاتنا', en: 'Achievements' },
    achievementsDesc: { _type: 'localizedText', ar: 'سجل حافل من التميز والشهادات الرسمية والمشاركات البطولية.', en: 'A distinguished record of certifications, safety audits, and championship rankings.' },
    ctaTitle: { _type: 'localizedString', ar: 'انضم إلى عائلة أكاديمية القمة اليوم', en: 'Join the ALQIMA Academy Family Today' },
    ctaSubtitle: { _type: 'localizedText', ar: 'سجل طفلك الآن في إحدى رياضاتنا التخصصية واستثمر في مستقبله الرياضي.', en: 'Enroll your child today in our specialized sports programs and invest in their athletic future.' },
    ctaButtonText: { _type: 'localizedString', ar: 'تحدث معنا عبر واتساب', en: 'Chat on WhatsApp' },
    seo: {
      _type: 'seo',
      metaTitle: { _type: 'localizedString', ar: 'عن أكاديمية القمة الرياضية بجدة | رؤيتنا وقيمنا', en: 'About ALQIMA Sports Academy Jeddah | Vision & Values' },
      metaDescription: { _type: 'localizedText', ar: 'تعرف على قصة ورؤية أكاديمية القمة الرياضية للأطفال بجدة، وكادرنا التدريبي المعتمد ومنشآتنا الرياضية الحديثة.', en: 'Learn about ALQIMA Sports Academy in Jeddah, our mission, vision, certified coaching staff, and modern facilities.' },
    },
  };
  transaction.createOrReplace(aboutPageDoc);
  docCount++;

  // 8. 7 Sports Disciplines
  console.log('📦 Syncing 7 Sports Disciplines...');
  for (let i = 0; i < sports.length; i++) {
    const s = sports[i];
    const sportDoc = {
      _id: `sport-${s.id}`,
      _type: 'sport',
      name: {
        _type: 'localizedString',
        ar: s.nameAr || s.name,
        en: s.name,
      },
      slug: {
        _type: 'slug',
        current: s.id,
      },
      description: {
        _type: 'localizedText',
        ar: s.description,
        en: `${s.name} training program at ALQIMA Sports Academy develops individual technical skills, fitness, and team play under certified professional coaches.`,
      },
      ageRange: {
        _type: 'localizedString',
        ar: s.ageRange,
        en: s.ageRange.replace(/[\u0660-\u0669]/g, (d) => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]).replace('سنة', 'Years'),
      },
      icon: s.id === 'roller-skating' ? 'roller-skating' : s.id,
      color: s.color,
      features: s.features.map((f) => ({
        _type: 'localizedString',
        ar: f,
        en: f,
      })),
      levels: s.levels.map((lvl) => ({
        _type: 'localizedString',
        ar: lvl,
        en: lvl === 'مبتدئ' ? 'Beginner' : lvl === 'متوسط' ? 'Intermediate' : lvl === 'متقدم' ? 'Advanced' : 'Elite',
      })),
      displayOrder: i + 1,
      isFeatured: true,
      seo: {
        _type: 'seo',
        metaTitle: {
          _type: 'localizedString',
          ar: `برنامج ${s.nameAr} للأطفال بجدة | أكاديمية القمة`,
          en: `${s.name} Program for Children in Jeddah | ALQIMA Academy`,
        },
        metaDescription: {
          _type: 'localizedText',
          ar: s.description,
          en: `Comprehensive ${s.name} coaching program for children in Jeddah at ALQIMA Sports Academy.`,
        },
      },
    };
    transaction.createOrReplace(sportDoc);
    docCount++;
  }

  // 9. 4 Offers Packages
  console.log('📦 Syncing 4 Offers Packages...');
  for (let i = 0; i < offers.length; i++) {
    const o = offers[i];
    const offerDoc = {
      _id: `offer-${o.id}`,
      _type: 'offer',
      title: {
        _type: 'localizedString',
        ar: o.titleAr || o.title,
        en: o.title,
      },
      slug: {
        _type: 'slug',
        current: `offer-${o.id}`,
      },
      badge: {
        _type: 'localizedString',
        ar: o.isPopular ? 'الأكثر طلباً' : 'باقة مميزة',
        en: o.isPopular ? 'Most Popular' : 'Special Package',
      },
      tagline: {
        _type: 'localizedString',
        ar: o.titleAr || o.title,
        en: o.title,
      },
      description: {
        _type: 'localizedText',
        ar: o.descriptionAr || o.description,
        en: o.description,
      },
      features: (o.featuresAr || o.features).map((f, idx) => ({
        _type: 'localizedString',
        ar: f,
        en: o.features[idx] || f,
      })),
      isPopular: !!o.isPopular,
      displayOrder: i + 1,
      isActive: true,
    };
    transaction.createOrReplace(offerDoc);
    docCount++;
  }

  // 10. 8 Testimonials (Google Reviews)
  console.log('📦 Syncing 8 Testimonials (Google Reviews)...');
  for (let i = 0; i < googleReviews.length; i++) {
    const r = googleReviews[i];
    const rEn = googleReviewsEn.find((item) => item.id === r.id) || googleReviewsEn[i] || r;
    const reviewDoc = {
      _id: `testimonial-${r.id || i + 1}`,
      _type: 'testimonial',
      name: {
        _type: 'localizedString',
        ar: r.name,
        en: rEn.name || r.name,
      },
      initials: r.initials || r.name.slice(0, 2),
      rating: r.rating || 5,
      date: {
        _type: 'localizedString',
        ar: r.date,
        en: rEn.date || 'Verified Review',
      },
      text: {
        _type: 'localizedText',
        ar: r.text,
        en: rEn.text || r.text,
      },
      source: 'Google Reviews',
      displayOrder: i + 1,
      isFeatured: true,
      isActive: true,
    };
    transaction.createOrReplace(reviewDoc);
    docCount++;
  }

  // 11. 4 Blog Articles (CRITICAL)
  console.log('📦 Syncing 4 Blog Articles (Arabic & English)...');
  for (let i = 0; i < blogPosts.length; i++) {
    const postAr = blogPosts[i];
    const postEn = blogPostsEn.find((p) => p.id === postAr.id) || blogPostsEn[i] || postAr;

    const blogDoc = {
      _id: `blogPost-${postAr.id}`,
      _type: 'blogPost',
      title: {
        _type: 'localizedString',
        ar: postAr.title,
        en: postEn.title,
      },
      slug: {
        _type: 'slug',
        current: postAr.id === '1'
          ? 'stress-management-children-sports'
          : postAr.id === '2'
          ? 'nutrition-tips-young-athletes'
          : postAr.id === '3'
          ? 'winter-fitness-health-children'
          : 'psychological-preparation-tournaments',
      },
      excerpt: {
        _type: 'localizedText',
        ar: postAr.excerpt,
        en: postEn.excerpt,
      },
      content: {
        _type: 'localizedBlockContent',
        ar: postAr.content,
        en: postEn.content,
      },
      categoryText: {
        _type: 'localizedString',
        ar: postAr.category,
        en: postEn.category,
      },
      author: {
        _type: 'localizedString',
        ar: postAr.author,
        en: postEn.author,
      },
      date: {
        _type: 'localizedString',
        ar: postAr.date,
        en: postEn.date,
      },
      readTime: {
        _type: 'localizedString',
        ar: postAr.readTime,
        en: postEn.readTime,
      },
      tags: postAr.tags.map((tag, tagIdx) => ({
        _type: 'localizedString',
        ar: tag,
        en: postEn.tags[tagIdx] || tag,
      })),
      isFeatured: i === 0,
      publishedAt: postAr.id === '1'
        ? '2025-01-20T10:00:00.000Z'
        : postAr.id === '2'
        ? '2025-01-15T10:00:00.000Z'
        : postAr.id === '3'
        ? '2025-01-10T10:00:00.000Z'
        : '2025-01-05T10:00:00.000Z',
      seo: {
        _type: 'seo',
        metaTitle: {
          _type: 'localizedString',
          ar: `${postAr.title} | مدونة أكاديمية القمة`,
          en: `${postEn.title} | ALQIMA Academy Blog`,
        },
        metaDescription: {
          _type: 'localizedText',
          ar: postAr.excerpt,
          en: postEn.excerpt,
        },
      },
    };
    transaction.createOrReplace(blogDoc);
    docCount++;
  }

  // 12. Legal Pages (Privacy & Terms)
  console.log('📦 Syncing Legal Pages (Privacy & Terms)...');
  const privacyDoc = {
    _id: 'legalPage-privacy',
    _type: 'legalPage',
    pageType: 'privacy',
    title: { _type: 'localizedString', ar: tAr.footer.privacy, en: tEn.footer.privacy },
    lastUpdated: { _type: 'localizedString', ar: 'يناير ٢٠٢٥', en: 'January 2025' },
    content: {
      _type: 'localizedBlockContent',
      ar: 'نحن في أكاديمية القمة الرياضية نحترم خصوصيتكم ونلتزم بحماية بياناتكم الشخصية وبيانات أبنائكم المسجلين لدينا...',
      en: 'At ALQIMA Sports Academy, we respect your privacy and are committed to protecting your and your children’s personal information...',
    },
  };
  transaction.createOrReplace(privacyDoc);
  docCount++;

  const termsDoc = {
    _id: 'legalPage-terms',
    _type: 'legalPage',
    pageType: 'terms',
    title: { _type: 'localizedString', ar: tAr.footer.terms, en: tEn.footer.terms },
    lastUpdated: { _type: 'localizedString', ar: 'يناير ٢٠٢٥', en: 'January 2025' },
    content: {
      _type: 'localizedBlockContent',
      ar: 'تحدد هذه الشروط والأحكام القواعد والضوابط الخاصة بالالتحاق والاشتراك في برامج أكاديمية القمة الرياضية للأطفال...',
      en: 'These terms and conditions govern the enrollment, attendance, and participation in ALQIMA Sports Academy programs...',
    },
  };
  transaction.createOrReplace(termsDoc);
  docCount++;

  console.log(`💾 Committing transaction with ${docCount} documents to Sanity...`);
  const result = await transaction.commit();
  console.log(`✅ SUCCESS! Synchronized ${docCount} documents into Sanity CMS dataset "production"!`);
  console.log('Transaction Result:', result);
}

syncAllContent().catch((err) => {
  console.error('❌ Synchronization failed:', err);
  process.exit(1);
});
