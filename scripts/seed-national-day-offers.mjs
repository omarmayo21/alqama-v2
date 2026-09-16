import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const nationalDayOffers = [
  {
    _id: 'offer-nd-1',
    _type: 'offer',
    title: {
      _type: 'localizedString',
      ar: 'اشتراك شهر',
      en: '1 Month Membership',
    },
    slug: {
      _type: 'slug',
      current: 'nd-1-month-8-sessions',
    },
    price: {
      _type: 'localizedString',
      ar: '296 ريال',
      en: 'SAR 296',
    },
    sessionsCount: {
      _type: 'localizedString',
      ar: '8 حصص',
      en: '8 Sessions',
    },
    sportsIncluded: {
      _type: 'localizedString',
      ar: 'كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة',
      en: 'Football - Karate - Gymnastics - Roller Skating - Swimming - Basketball',
    },
    badge: {
      _type: 'localizedString',
      ar: 'عروض اليوم الوطني 96',
      en: 'National Day 96',
    },
    tagline: {
      _type: 'localizedString',
      ar: '8 حصص تدريبية',
      en: '8 Training Sessions',
    },
    description: {
      _type: 'localizedText',
      ar: 'اشتراك شهر يشمل 8 حصص تدريبية في كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة.',
      en: '1 Month Membership including 8 training sessions in Football, Karate, Gymnastics, Roller Skating, Swimming, and Basketball.',
    },
    features: [
      {
        _type: 'localizedString',
        ar: '8 حصص تدريبية معتمدة',
        en: '8 Certified Training Sessions',
      },
      {
        _type: 'localizedString',
        ar: 'كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة',
        en: 'Football - Karate - Gymnastics - Roller Skating - Swimming - Basketball',
      },
      {
        _type: 'localizedString',
        ar: 'إشراف مدربين معتمدين ومرخصين',
        en: 'Supervised by Certified & Licensed Coaches',
      },
    ],
    isPopular: false,
    displayOrder: 1,
    isActive: true,
  },
  {
    _id: 'offer-nd-2',
    _type: 'offer',
    title: {
      _type: 'localizedString',
      ar: 'اشتراك 3 أشهر',
      en: '3 Month Membership',
    },
    slug: {
      _type: 'slug',
      current: 'nd-3-months-36-sessions',
    },
    price: {
      _type: 'localizedString',
      ar: '896 ريال',
      en: 'SAR 896',
    },
    sessionsCount: {
      _type: 'localizedString',
      ar: '36 حصة',
      en: '36 Sessions',
    },
    sportsIncluded: {
      _type: 'localizedString',
      ar: 'في أي رياضة',
      en: 'Any Sport',
    },
    badge: {
      _type: 'localizedString',
      ar: 'الأكثر طلباً ⭐',
      en: 'Most Popular ⭐',
    },
    tagline: {
      _type: 'localizedString',
      ar: '36 حصة في أي رياضة',
      en: '36 Sessions in Any Sport',
    },
    description: {
      _type: 'localizedText',
      ar: 'اشتراك 3 أشهر يشمل 36 حصة تدريبية مكثفة في أي رياضة من اختياركم.',
      en: '3 Month Membership including 36 intensive training sessions in any sport of your choice.',
    },
    features: [
      {
        _type: 'localizedString',
        ar: '36 حصة تدريبية متكاملة',
        en: '36 Comprehensive Sessions',
      },
      {
        _type: 'localizedString',
        ar: 'في أي رياضة من رياضات الأكاديمية',
        en: 'In Any Academy Sport',
      },
      {
        _type: 'localizedString',
        ar: 'متابعة دورية وتطوير مستمر للمهارات',
        en: 'Regular Progress Tracking & Skill Development',
      },
    ],
    isPopular: true,
    displayOrder: 2,
    isActive: true,
  },
  {
    _id: 'offer-nd-3',
    _type: 'offer',
    title: {
      _type: 'localizedString',
      ar: 'اشتراك 3 أشهر',
      en: '3 Month Membership',
    },
    slug: {
      _type: 'slug',
      current: 'nd-3-months-24-sessions',
    },
    price: {
      _type: 'localizedString',
      ar: '796 ريال',
      en: 'SAR 796',
    },
    sessionsCount: {
      _type: 'localizedString',
      ar: '24 حصة',
      en: '24 Sessions',
    },
    sportsIncluded: {
      _type: 'localizedString',
      ar: 'في أي رياضة',
      en: 'Any Sport',
    },
    badge: {
      _type: 'localizedString',
      ar: 'عرض مميز',
      en: 'Special Value',
    },
    tagline: {
      _type: 'localizedString',
      ar: '24 حصة في أي رياضة',
      en: '24 Sessions in Any Sport',
    },
    description: {
      _type: 'localizedText',
      ar: 'اشتراك 3 أشهر يشمل 24 حصة تدريبية مرنة في أي رياضة يختارها طفلك.',
      en: '3 Month Membership including 24 flexible training sessions in any sport of your choice.',
    },
    features: [
      {
        _type: 'localizedString',
        ar: '24 حصة تدريبية مرنة',
        en: '24 Flexible Training Sessions',
      },
      {
        _type: 'localizedString',
        ar: 'في أي رياضة تختارها',
        en: 'In Any Sport of Your Choice',
      },
      {
        _type: 'localizedString',
        ar: 'تقسيط ميسر متاح عبر تابي وتمارا',
        en: 'Installments available via Tabby & Tamara',
      },
    ],
    isPopular: false,
    displayOrder: 3,
    isActive: true,
  },
  {
    _id: 'offer-nd-4',
    _type: 'offer',
    title: {
      _type: 'localizedString',
      ar: 'اشتراك 6 أشهر',
      en: '6 Month Membership',
    },
    slug: {
      _type: 'slug',
      current: 'nd-6-months-any-sport',
    },
    price: {
      _type: 'localizedString',
      ar: '1596 ريال',
      en: 'SAR 1,596',
    },
    sessionsCount: {
      _type: 'localizedString',
      ar: 'نصف سنوي',
      en: 'Semi-Annual',
    },
    sportsIncluded: {
      _type: 'localizedString',
      ar: 'في أي رياضة',
      en: 'Any Sport',
    },
    badge: {
      _type: 'localizedString',
      ar: 'أفضل توفير ⭐',
      en: 'Best Savings ⭐',
    },
    tagline: {
      _type: 'localizedString',
      ar: 'اشتراك 6 أشهر في أي رياضة',
      en: '6 Month Membership in Any Sport',
    },
    description: {
      _type: 'localizedText',
      ar: 'اشتراك 6 أشهر يمنح طفلك فرصة التطور الرياضي طويل المدى وبناء مسار الأبطال في أي رياضة.',
      en: '6 Month Membership giving your child long-term athletic development and championship training in any sport.',
    },
    features: [
      {
        _type: 'localizedString',
        ar: 'اشتراك 6 أشهر متواصل',
        en: '6 Full Months Membership',
      },
      {
        _type: 'localizedString',
        ar: 'في أي رياضة من اختياركم',
        en: 'In Any Sport of Your Choice',
      },
      {
        _type: 'localizedString',
        ar: 'إعداد بدني وفني وتنافسي مستمر',
        en: 'Continuous Physical & Tactical Preparation',
      },
    ],
    isPopular: false,
    displayOrder: 4,
    isActive: true,
  },
  {
    _id: 'offer-nd-5',
    _type: 'offer',
    title: {
      _type: 'localizedString',
      ar: 'اشتراك شهر',
      en: '1 Month Membership',
    },
    slug: {
      _type: 'slug',
      current: 'nd-1-month-12-sessions',
    },
    price: {
      _type: 'localizedString',
      ar: '396 ريال',
      en: 'SAR 396',
    },
    sessionsCount: {
      _type: 'localizedString',
      ar: '12 حصة',
      en: '12 Sessions',
    },
    sportsIncluded: {
      _type: 'localizedString',
      ar: 'كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة',
      en: 'Football - Karate - Gymnastics - Roller Skating - Swimming - Basketball',
    },
    badge: {
      _type: 'localizedString',
      ar: 'باقة 12 حصة',
      en: '12 Sessions Pack',
    },
    tagline: {
      _type: 'localizedString',
      ar: '12 حصة تدريبية',
      en: '12 Training Sessions',
    },
    description: {
      _type: 'localizedText',
      ar: 'اشتراك شهر يشمل 12 حصة تدريبية في كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة.',
      en: '1 Month Membership including 12 training sessions in Football, Karate, Gymnastics, Roller Skating, Swimming, and Basketball.',
    },
    features: [
      {
        _type: 'localizedString',
        ar: '12 حصة تدريبية مكثفة',
        en: '12 Intensive Training Sessions',
      },
      {
        _type: 'localizedString',
        ar: 'كرة القدم - كاراتيه - جمباز - رول سكيت - سباحة - كرة سلة',
        en: 'Football - Karate - Gymnastics - Roller Skating - Swimming - Basketball',
      },
      {
        _type: 'localizedString',
        ar: 'جدول تدريبي مرن وخيارات متعددة',
        en: 'Flexible Training Schedule & Multiple Options',
      },
    ],
    isPopular: false,
    displayOrder: 5,
    isActive: true,
  },
];

async function seedOffers() {
  console.log('🇸🇦 Seeding Saudi National Day 96 Offers in Sanity CMS...');

  // Fetch existing offers
  const existingOffers = await client.fetch('*[_type == "offer"]');
  console.log(`Found ${existingOffers.length} existing offers in Sanity.`);

  // Delete obsolete legacy offers if not part of the 5
  const newIds = new Set(nationalDayOffers.map((o) => o._id));
  for (const old of existingOffers) {
    if (!newIds.has(old._id)) {
      console.log(`Deleting legacy offer: ${old._id} (${JSON.stringify(old.title)})`);
      await client.delete(old._id);
    }
  }

  // Create or update the 5 national day offers
  for (const offer of nationalDayOffers) {
    console.log(`Upserting offer [${offer.displayOrder}]: ${offer.title.ar} / ${offer.title.en} - ${offer.price.ar}`);
    await client.createOrReplace(offer);
  }

  console.log('✅ Successfully seeded all 5 Saudi National Day 96 Offers into Sanity!');
}

seedOffers().catch(console.error);
