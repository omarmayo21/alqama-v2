import { defineType, defineField } from 'sanity';

export const offer = defineType({
  name: 'offer',
  title: 'Academy Offer Package / باقة وعرض تدريبي',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title / اسم الباقة أو العرض',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / المعرف في الرابط',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price / السعر (مثال: 296 ريال / SAR 296)',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sessionsCount',
      title: 'Sessions Count / عدد الحصص (مثال: 8 حصص / 8 Sessions)',
      type: 'localizedString',
    }),
    defineField({
      name: 'sportsIncluded',
      title: 'Sports Included / الرياضات المشمولة (مثال: كرة القدم - كاراتيه... / في أي رياضة)',
      type: 'localizedString',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Label / شارة العرض (مثال: الأكثر طلباً / عرض 96)',
      type: 'localizedString',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / الشعار المختصر للباقة',
      type: 'localizedString',
    }),
    defineField({
      name: 'description',
      title: 'Description / الوصف التوضيحي للباقة',
      type: 'localizedText',
    }),
    defineField({
      name: 'features',
      title: 'Included Benefits & Features / مزايا وبنود إضافية',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Highlight as Most Popular / تمييز كباقة رئيسية',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب الظهور',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / مفعّلة في الموقع',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display Order / ترتيب العرض',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      titleAr: 'title.ar',
      titleEn: 'title.en',
      badgeAr: 'badge.ar',
      isPopular: 'isPopular',
    },
    prepare({ titleAr, titleEn, badgeAr, isPopular }) {
      return {
        title: `${titleAr || ''} (${titleEn || ''})`,
        subtitle: `${badgeAr ? `[${badgeAr}] ` : ''}${isPopular ? '⭐ الأكثر طلباً' : ''}`,
      };
    },
  },
});
