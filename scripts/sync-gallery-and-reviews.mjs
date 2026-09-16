import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

// Exact 8 original Google reviews from origin/main
const originalReviews = [
  {
    id: 'r1',
    nameAr: 'Haitham Ahmed',
    nameEn: 'Haitham Ahmed',
    initials: 'HA',
    rating: 5,
    dateAr: 'قبل سنة',
    dateEn: 'a year ago',
    textAr: `تجربة رائعة واستثنائية مع الأكاديمية.

منذ البداية لاحظنا التنظيم الممتاز وحسن الاستقبال والإدارة الاحترافية بإشراف الكابتن محسن المدير العام.

تتميز الأكاديمية بتعاونها الكبير مع أولياء الأمور والمستوى العالي من الاحترافية في التدريب.

سجلنا طفلنا في برنامج السباحة ووجدنا مستوى عالياً من الاحترافية والإخلاص من جميع المدربين، وخاصة الكابتن وليد والكابتن محمد اللذين أظهرا حرصاً كبيراً على دعم الأطفال وتحبيبهم في السباحة.

شكراً لكم على هذا المستوى المتميز.`,
    textEn: `A wonderful and exceptional experience with the academy.

From the very beginning, we noticed the excellent organization, warm welcome, and professional management under the supervision of Captain Mohsen, the General Manager.

The academy is distinguished by its cooperation with parents and its high level of professionalism in training.

We enrolled our child in the swimming program and found a high level of professionalism and dedication from all the coaches, especially Captain Waleed and Captain Mohammed, who showed great commitment to supporting the children and encouraging them to love swimming.

Thank you for this outstanding level of service.`,
  },
  {
    id: 'r2',
    nameAr: 'صالح ناصر',
    nameEn: 'صالح ناصر',
    initials: 'ص.ن',
    rating: 5,
    dateAr: 'قبل شهر',
    dateEn: 'a month ago',
    textAr: 'كان يوماً رائعاً! استمتع ابني وابنتي بيوم رياضي جميل. الألعاب كانت متنوعة، شملت كرة القدم، الهايكنج، الجمباز، الكاراتيه، والسكيتنج. الطاقم الإداري والمدربون كانوا في قمة الاحترافية والتعاون. بارك الله في جهودهم وجزاهم خيراً.',
    textEn: 'It was wonderful! My son and daughter had a lovely sports day. The games were varied, including football, hiking, gymnastics, karate, and skating. The administrative staff and coaches were incredibly professional and helpful. May God bless their efforts and reward them.',
  },
  {
    id: 'r3',
    nameAr: 'Iman Youshaa',
    nameEn: 'Iman Youshaa',
    initials: 'IY',
    rating: 5,
    dateAr: 'قبل سنة',
    dateEn: 'a year ago',
    textAr: 'نادي رياضي ممتاز.. المدربين يتعاملون مع الأطفال كأنهم عائلة واحدة.. أنشطة مبتكرة وبيئة آمنة.',
    textEn: 'Excellent Sports Club.. Coaches treat kids as if they are all one family.. Creative Activities and Safe Environment.',
  },
  {
    id: 'r4',
    nameAr: 'Ahmed Sami',
    nameEn: 'Ahmed Sami',
    initials: 'AS',
    rating: 5,
    dateAr: 'قبل ٥ سنوات',
    dateEn: '5 years ago',
    textAr: 'أفضل أكاديمية في جدة.',
    textEn: 'The best academy in Jeddah .',
  },
  {
    id: 'r5',
    nameAr: 'Arakan Ahmad Officially Pbh',
    nameEn: 'Arakan Ahmad Officially Pbh',
    initials: 'AA',
    rating: 5,
    dateAr: 'قبل شهرين',
    dateEn: '2 months ago',
    textAr: 'مرفق رائع جداً',
    textEn: 'Very nice facility',
  },
  {
    id: 'r6',
    nameAr: 'Mazen EL-Sakka',
    nameEn: 'Mazen EL-Sakka',
    initials: 'ME',
    rating: 5,
    dateAr: 'قبل سنة',
    dateEn: 'a year ago',
    textAr: 'طاقم عمل ممتاز',
    textEn: 'Excellent Staff',
  },
  {
    id: 'r7',
    nameAr: 'Mahmoud Hassan',
    nameEn: 'Mahmoud Hassan',
    initials: 'MH',
    rating: 4,
    dateAr: 'معدّل قبل ٤ سنوات',
    dateEn: 'Edited 4 years ago',
    textAr: 'أنشطة رياضية متعددة للأطفال تشمل كرة القدم',
    textEn: 'Several sports activities for kids including football',
  },
  {
    id: 'r8',
    nameAr: 'nizar khairt',
    nameEn: 'nizar khairt',
    initials: 'NK',
    rating: 4,
    dateAr: 'قبل ٤ سنوات',
    dateEn: '4 years ago',
    textAr: 'أكاديمية رياضية رائعة للأطفال',
    textEn: 'Great sports academy for children',
  },
];

// Gallery initial items
const galleryData = [
  {
    id: 'g1',
    imageFile: 'football.jpg',
    category: 'tournaments',
    titleAr: 'بطولة القمة الرمضانية لكرة القدم',
    titleEn: 'ALQIMA Ramadan Football Championship',
    descAr: 'مباريات حماسية وتتويج الفرق الفائزة بالكؤوس والميداليات في ملاعب الأكاديمية.',
    descEn: 'Thrilling matches and trophy awards for winning teams on the academy football pitches.',
    order: 1,
    featured: true,
  },
  {
    id: 'g2',
    imageFile: 'swimming.jpg',
    category: 'tournaments',
    titleAr: 'بطولة جدة للسباحة للفئات السنية',
    titleEn: 'Jeddah Youth Swimming Championship',
    descAr: 'تألق سباحي أكاديمية القمة وحصدهم مراكز متقدمة في المسافات المتنوعة.',
    descEn: 'ALQIMA young swimmers excelling and securing top rankings across multiple swim styles.',
    order: 2,
    featured: true,
  },
  {
    id: 'g3',
    imageFile: 'karate.jpg',
    category: 'tournaments',
    titleAr: 'اختبارات الأحزمة وبطولة الكاراتيه السنوية',
    titleEn: 'Annual Karate Championship & Belt Graduation',
    descAr: 'عروض قتالية متميزة واجتياز أبطالنا لاختبارات الترقية للأحزمة المتقدمة بنجاح.',
    descEn: 'Exceptional kata demonstrations and successful belt graduations for our young martial artists.',
    order: 3,
    featured: true,
  },
  {
    id: 'g4',
    imageFile: 'basketball.jpg',
    category: 'tournaments',
    titleAr: 'دوري كرة السلة للصغار',
    titleEn: 'Junior Basketball League Matches',
    descAr: 'أجواء تنافسية وتصويبات حاسمة في صالات كرة السلة المجهزة بأحدث المعايير.',
    descEn: 'Competitive spirit and decisive shots in our indoor air-conditioned basketball courts.',
    order: 4,
    featured: false,
  },
  {
    id: 'g5',
    imageFile: 'about-team.jpg',
    category: 'events',
    titleAr: 'حفل تكريم أبطال الموسم واليوم المفتوح',
    titleEn: 'End of Season Champions Celebration & Open Day',
    descAr: 'تكريم الأطفال المتفوقين بحضور أولياء الأمور والمدربين في أجواء احتفالية رائعة.',
    descEn: 'Honoring top achievers alongside parents and certified coaching staff in a festive atmosphere.',
    order: 5,
    featured: true,
  },
  {
    id: 'g6',
    imageFile: 'hero-bg.jpg',
    category: 'events',
    titleAr: 'اليوم الرياضي العائلي المفتوح',
    titleEn: 'ALQIMA Family Fun & Sports Day',
    descAr: 'أنشطة ترفيهية ومسابقات عائلية تجمع الآباء والأبناء في بيئة رياضية محفزة.',
    descEn: 'Exciting sports activities and family challenges bringing parents and kids together.',
    order: 6,
    featured: false,
  },
  {
    id: 'g7',
    imageFile: 'kickboxing.jpg',
    category: 'training',
    titleAr: 'تدريبات الكيك بوكسينغ وبناء اللياقة البدنية',
    titleEn: 'Kickboxing Fitness & Agility Sessions',
    descAr: 'تمارين رفع اللياقة، الدفاع عن النفس، وزيادة التركيز والسرعة تحت إشراف متخصص.',
    descEn: 'High-energy fitness drills, self-defense basics, and speed training with expert supervision.',
    order: 7,
    featured: true,
  },
  {
    id: 'g8',
    imageFile: 'gymnastics.jpg',
    category: 'training',
    titleAr: 'حصص الجمباز وتطوير المرونة والتوازن',
    titleEn: 'Gymnastics Flexibility & Core Balance Classes',
    descAr: 'تطوير المرونة الحركية، القوة البدنية، والتوافق العضلي العصبي للأولاد والبنات.',
    descEn: 'Building motor agility, muscular strength, and graceful balance for boys and girls.',
    order: 8,
    featured: false,
  },
  {
    id: 'g9',
    imageFile: 'roller-skating.jpg',
    category: 'training',
    titleAr: 'تدريبات السكيتنج وتحديات الرشاقة والسرعة',
    titleEn: 'Roller Skating Agility & Speed Challenges',
    descAr: 'تعليم أساسيات التوازن والتحكم في السكيت مع مسارات تدريبية آمنة وممتعة.',
    descEn: 'Teaching core balance, speed control, and skating obstacle navigation in a safe indoor setting.',
    order: 9,
    featured: false,
  },
];

async function syncData() {
  console.log('🚀 Syncing Exact Original Google Reviews & Photo Gallery into Sanity...');

  // 1. Sync Site Settings
  console.log('🏢 Updating Site Settings Academy Name in Sanity...');
  await client.patch('siteSettings-main')
    .set({
      academyName: {
        _type: 'localizedString',
        ar: 'أكاديمية القمة الرياضية',
        en: 'Alqima Sports Academy',
      },
    })
    .commit();

  // 2. Sync Exact 8 Google Reviews
  console.log('⭐ Syncing 8 Original Google Reviews...');
  const txReviews = client.transaction();
  for (let i = 0; i < originalReviews.length; i++) {
    const r = originalReviews[i];
    const doc = {
      _id: `testimonial-${r.id}`,
      _type: 'testimonial',
      name: {
        _type: 'localizedString',
        ar: r.nameAr,
        en: r.nameEn,
      },
      initials: r.initials,
      rating: r.rating,
      date: {
        _type: 'localizedString',
        ar: r.dateAr,
        en: r.dateEn,
      },
      text: {
        _type: 'localizedText',
        ar: r.textAr,
        en: r.textEn,
      },
      source: 'Google Reviews',
      displayOrder: i + 1,
      isFeatured: true,
      isActive: true,
    };
    txReviews.createOrReplace(doc);
  }
  await txReviews.commit();
  console.log('✅ 8 Google Reviews Synced successfully.');

  // 3. Upload Gallery Assets & Documents
  console.log('🖼️ Uploading Gallery Images to Sanity...');
  for (const item of galleryData) {
    const filePath = path.join(rootDir, 'public', 'images', item.imageFile);
    if (fs.existsSync(filePath)) {
      console.log(`Uploading ${item.imageFile}...`);
      const stream = fs.createReadStream(filePath);
      const asset = await client.assets.upload('image', stream, {
        filename: item.imageFile,
      });

      const galleryDoc = {
        _id: `galleryImage-${item.id}`,
        _type: 'galleryImage',
        title: {
          _type: 'localizedString',
          ar: item.titleAr,
          en: item.titleEn,
        },
        description: {
          _type: 'localizedText',
          ar: item.descAr,
          en: item.descEn,
        },
        category: item.category,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
        displayOrder: item.order,
        isFeatured: item.featured,
        isActive: true,
      };

      await client.createOrReplace(galleryDoc);
      console.log(`✅ Gallery item ${item.titleAr} created with asset ${asset._id}`);
    }
  }

  // 4. Update Navigation in Sanity to include Gallery
  console.log('🧭 Updating Header Navigation in Sanity...');
  const navDoc = {
    _id: 'navigation-main',
    _type: 'navigation',
    title: 'Main Navigation / القائمة الرئيسية',
    items: [
      { _key: 'n1', label: { _type: 'localizedString', ar: 'الرئيسية', en: 'Home' }, path: '/' },
      { _key: 'n2', label: { _type: 'localizedString', ar: 'من نحن', en: 'About Us' }, path: '/about' },
      { _key: 'n3', label: { _type: 'localizedString', ar: 'الرياضات', en: 'Sports' }, path: '/sports' },
      { _key: 'n4', label: { _type: 'localizedString', ar: 'العروض', en: 'Offers' }, path: '/offers' },
      { _key: 'n5', label: { _type: 'localizedString', ar: 'المعرض', en: 'Gallery' }, path: '/gallery' },
      { _key: 'n6', label: { _type: 'localizedString', ar: 'المدونة', en: 'Blog' }, path: '/blog' },
    ],
  };
  await client.createOrReplace(navDoc);

  console.log('🎉 Sanity Synchronization Complete!');
}

syncData().catch(console.error);
