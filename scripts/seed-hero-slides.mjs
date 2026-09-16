import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  token: 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function uploadImageIfExists(relPath) {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`Uploading ${relPath}...`);
    const asset = await client.assets.upload('image', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath),
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  }
  return null;
}

async function seedHeroSlides() {
  console.log('🚀 Updating Hero Slides in Sanity CMS...');

  try {
    const slide1Image = await uploadImageIfExists('public/images/hero-bg.jpg');
    const slide2Image = await uploadImageIfExists('public/images/national-day-96.png');

    const slide1 = {
      _id: 'heroSlide-1',
      _type: 'heroSlide',
      title: {
        _type: 'localizedString',
        ar: 'الأكاديمية الاكثر تطورا في جدة',
        en: 'The Most Advanced Sports Academy in Jeddah',
      },
      badge: {
        _type: 'localizedString',
        ar: 'اكاديمية القمة الرياضية للأطفال بجدة',
        en: 'ALQIMA Sports Academy for Children in Jeddah',
      },
      description: {
        _type: 'localizedText',
        ar: 'نمهّد طريق أبنائكم نحو القمة.. صرح رياضي متكامل يهدف إلى اكتشاف المواهب وبناء الأبطال عبر برامج تدريبية احترافية تدعم تطورهم الجسدي والنفسي',
        en: 'Paving your children’s path to the top.. A comprehensive sports academy dedicated to discovering talent and building champions through professional training programs supporting their physical and mental development.',
      },
      primaryCtaText: {
        _type: 'localizedString',
        ar: 'ابدأ رحلة أبنائك اليوم',
        en: "Start Your Child's Journey Today",
      },
      primaryCtaLink: 'https://wa.me/966500000000',
      secondaryCtaText: {
        _type: 'localizedString',
        ar: 'استكشف العروض',
        en: 'Explore Offers',
      },
      secondaryCtaLink: '/offers',
      reassuranceText: {
        _type: 'localizedString',
        ar: 'مدربون معتمدون ومتخصصون',
        en: 'Certified Coaching Staff',
      },
      image: slide1Image,
      displayOrder: 1,
      isActive: true,
    };

    const slide2 = {
      _id: 'heroSlide-2',
      _type: 'heroSlide',
      title: {
        _type: 'localizedString',
        ar: 'الأكاديمية الاكثر تطورا في جدة',
        en: 'The Most Advanced Sports Academy in Jeddah',
      },
      badge: {
        _type: 'localizedString',
        ar: 'اكاديمية القمة الرياضية للأطفال بجدة',
        en: 'ALQIMA Sports Academy for Children in Jeddah',
      },
      description: {
        _type: 'localizedText',
        ar: 'نمهّد طريق أبنائكم نحو القمة.. صرح رياضي متكامل يهدف إلى اكتشاف المواهب وبناء الأبطال عبر برامج تدريبية احترافية تدعم تطورهم الجسدي والنفسي',
        en: 'Paving your children’s path to the top.. A comprehensive sports academy dedicated to discovering talent and building champions through professional training programs supporting their physical and mental development.',
      },
      primaryCtaText: {
        _type: 'localizedString',
        ar: 'ابدأ رحلة أبنائك اليوم',
        en: "Start Your Child's Journey Today",
      },
      primaryCtaLink: 'https://wa.me/966500000000',
      secondaryCtaText: {
        _type: 'localizedString',
        ar: 'استكشف العروض',
        en: 'Explore Offers',
      },
      secondaryCtaLink: '/offers',
      reassuranceText: {
        _type: 'localizedString',
        ar: 'مدربون معتمدون ومتخصصون',
        en: 'Certified Coaching Staff',
      },
      image: slide2Image,
      displayOrder: 2,
      isActive: true,
    };

    await client.createOrReplace(slide1);
    console.log('✅ Created / Updated heroSlide-1 in Sanity');

    await client.createOrReplace(slide2);
    console.log('✅ Created / Updated heroSlide-2 in Sanity');

    const slides = await client.fetch('*[_type == "heroSlide"] | order(displayOrder asc)');
    console.log('🎉 Verified Sanity Slides in CMS:', JSON.stringify(slides.map(s => ({
      id: s._id,
      titleAr: s.title?.ar,
      titleEn: s.title?.en,
      badgeAr: s.badge?.ar,
      descAr: s.description?.ar,
      primaryCtaAr: s.primaryCtaText?.ar,
      order: s.displayOrder,
      isActive: s.isActive,
    })), null, 2));
  } catch (err) {
    console.error('❌ Error seeding hero slides:', err);
  }
}

seedHeroSlides();
