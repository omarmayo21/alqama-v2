import { defineType, defineField } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage Content / محتوى الصفحة الرئيسية',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section / قسم البداية' },
    { name: 'features', title: 'Feature Highlights / مميزات الأكاديمية' },
    { name: 'sports', title: 'Sports Section / قسم الرياضات' },
    { name: 'offers', title: 'Offers Section / قسم العروض' },
    { name: 'whyUs', title: 'Why Us Section / لماذا نحن' },
    { name: 'pathways', title: 'Development Pathways / المسارات التطويرية' },
    { name: 'reviews', title: 'Reviews Section / آراء أولياء الأمور' },
    { name: 'ctaBanner', title: 'CTA Banner / شريط التواصل' },
    { name: 'blog', title: 'Blog Preview / قسم المدونة' },
    { name: 'seo', title: 'SEO / محركات البحث' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge / شارة الهيرو العلوية',
      type: 'localizedString',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Main Headline / العنوان الرئيسي',
      type: 'localizedString',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight Text (Red Accent) / النص المميز باللون الأحمر',
      type: 'localizedString',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle / الوصف والفقرة الترحيبية',
      type: 'localizedText',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image / صورة خلفية الهيرو',
      type: 'localizedImage',
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryCta',
      title: 'Primary CTA Button / زر الواتساب الرئيسي',
      type: 'localizedString',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Secondary CTA Button / زر استكشف الرياضات',
      type: 'localizedString',
      group: 'hero',
    }),
    defineField({
      name: 'heroTags',
      title: 'Hero Feature Badges / شارات مميزات الهيرو',
      type: 'array',
      group: 'hero',
      of: [{ type: 'localizedString' }],
    }),

    // Features Section
    defineField({
      name: 'featuresList',
      title: 'Academy Core Features / مميزات الأكاديمية الأربعة',
      type: 'array',
      group: 'features',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon Name', type: 'string', options: { list: ['shield', 'users', 'award', 'sparkles', 'trophy', 'heart', 'target'] } }),
            defineField({ name: 'title', title: 'Feature Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'desc', title: 'Feature Description', type: 'localizedText' }),
          ],
        },
      ],
    }),

    // Sports Section
    defineField({
      name: 'sportsSectionTitle',
      title: 'Sports Section Title / عنوان قسم الرياضات',
      type: 'localizedString',
      group: 'sports',
    }),
    defineField({
      name: 'sportsSectionHighlight',
      title: 'Sports Section Highlight / الكلمة المميزة في العنوان',
      type: 'localizedString',
      group: 'sports',
    }),
    defineField({
      name: 'sportsSectionDesc',
      title: 'Sports Section Description / وصف قسم الرياضات',
      type: 'localizedText',
      group: 'sports',
    }),

    // Offers Section
    defineField({
      name: 'offersSectionTitle',
      title: 'Offers Section Title / عنوان قسم العروض',
      type: 'localizedString',
      group: 'offers',
    }),
    defineField({
      name: 'offersSectionHighlight',
      title: 'Offers Section Highlight / الكلمة المميزة',
      type: 'localizedString',
      group: 'offers',
    }),
    defineField({
      name: 'offersSectionDesc',
      title: 'Offers Section Description / وصف قسم العروض',
      type: 'localizedText',
      group: 'offers',
    }),

    // Why Us Section
    defineField({
      name: 'whyUsTitle',
      title: 'Why Us Title / عنوان قسم لماذا أكاديمية القمة',
      type: 'localizedString',
      group: 'whyUs',
    }),
    defineField({
      name: 'whyUsHighlight',
      title: 'Why Us Highlight / الكلمة المميزة',
      type: 'localizedString',
      group: 'whyUs',
    }),
    defineField({
      name: 'whyUsDesc',
      title: 'Why Us Description / الوصف',
      type: 'localizedText',
      group: 'whyUs',
    }),
    defineField({
      name: 'whyUsImage',
      title: 'Why Us Image / صورة قسم لماذا يختارنا أولياء الأمور',
      type: 'localizedImage',
      group: 'whyUs',
      description: 'الصورة الرئيسية المعروضة في قسم لماذا يختارنا أولياء الأمور (الافتراضية: /images/about-team.jpg)',
    }),
    defineField({
      name: 'whyUsCards',
      title: 'Why Us Cards / بطاقات المزايا',
      type: 'array',
      group: 'whyUs',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
            defineField({ name: 'desc', title: 'Description', type: 'localizedText' }),
          ],
        },
      ],
    }),

    // Pathways
    defineField({
      name: 'pathwaysTitle',
      title: 'Pathways Title / عنوان قسم المسارات الرياضية',
      type: 'localizedString',
      group: 'pathways',
    }),
    defineField({
      name: 'pathwaysHighlight',
      title: 'Pathways Highlight',
      type: 'localizedString',
      group: 'pathways',
    }),
    defineField({
      name: 'pathwaysDesc',
      title: 'Pathways Description / الوصف',
      type: 'localizedText',
      group: 'pathways',
    }),
    defineField({
      name: 'pathwaysList',
      title: 'Pathways Steps / خطوات المسار',
      type: 'array',
      group: 'pathways',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'stepNumber', title: 'Step / المرحلة', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
            defineField({ name: 'desc', title: 'Description', type: 'localizedText' }),
          ],
        },
      ],
    }),

    // Reviews
    defineField({
      name: 'reviewsSectionTitle',
      title: 'Reviews Section Title / عنوان قسم آراء أولياء الأمور',
      type: 'localizedString',
      group: 'reviews',
    }),
    defineField({
      name: 'reviewsSectionHighlight',
      title: 'Reviews Section Highlight',
      type: 'localizedString',
      group: 'reviews',
    }),
    defineField({
      name: 'reviewsSectionDesc',
      title: 'Reviews Section Description / الوصف',
      type: 'localizedText',
      group: 'reviews',
    }),

    // CTA Banner
    defineField({
      name: 'ctaBannerTitle',
      title: 'CTA Banner Title / عنوان شريط التواصل',
      type: 'localizedString',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerSubtitle',
      title: 'CTA Banner Subtitle / وصف شريط التواصل',
      type: 'localizedText',
      group: 'ctaBanner',
    }),
    defineField({
      name: 'ctaBannerBtnText',
      title: 'CTA Banner WhatsApp Button Text / نص زر الواتساب',
      type: 'localizedString',
      group: 'ctaBanner',
    }),

    // Blog Preview
    defineField({
      name: 'blogSectionTitle',
      title: 'Blog Section Title / عنوان قسم المقالات والمدونة',
      type: 'localizedString',
      group: 'blog',
    }),
    defineField({
      name: 'blogSectionHighlight',
      title: 'Blog Section Highlight',
      type: 'localizedString',
      group: 'blog',
    }),
    defineField({
      name: 'blogSectionDesc',
      title: 'Blog Section Description / الوصف',
      type: 'localizedText',
      group: 'blog',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'Homepage SEO Metadata',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      titleAr: 'heroHeadline.ar',
      titleEn: 'heroHeadline.en',
      media: 'heroImage',
    },
    prepare({ titleAr, titleEn, media }) {
      return {
        title: titleAr || titleEn || 'Homepage',
        subtitle: 'Main landing page content',
        media,
      };
    },
  },
});
