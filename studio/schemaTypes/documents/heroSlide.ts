import { defineType, defineField } from 'sanity';

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slides / شرائح واجهة البداية',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Title / العنوان الرئيسي',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
      description: 'العنوان الرئيسي للشريحة (يمكن كتابة أكثر من سطر)',
    }),
    defineField({
      name: 'badge',
      title: 'Badge / الشارة العلوية',
      type: 'localizedString',
      description: 'النص داخل الشارة الصغيرة أعلى العنوان',
    }),
    defineField({
      name: 'description',
      title: 'Description / الوصف والفقرة الفرعية',
      type: 'localizedText',
      description: 'نص الوصف الترحيبي للشريحة',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text / نص الزر الرئيسي (واتساب)',
      type: 'localizedString',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link / رابط الزر الرئيسي',
      type: 'string',
      description: 'رابط الواتساب أو رابط مخصص',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text / نص الزر الثانوي (العروض)',
      type: 'localizedString',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link / رابط الزر الثانوي',
      type: 'string',
      description: 'مثال: /offers',
    }),
    defineField({
      name: 'reassuranceText',
      title: 'Reassurance Trust Text / نص الثقة والاعتماد',
      type: 'localizedString',
      description: 'النص الصغير أسفل الأزرار مع أيقونة التحقق',
    }),
    defineField({
      name: 'image',
      title: 'Slide Background Image / صورة الخلفية',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      initialValue: 1,
      description: 'الأرقام الأصغر تظهر أولاً (مثال: 1 للشريحة الأولى، 2 للشريحة الثانية...)',
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
    {
      title: 'Newest First / الأحدث أولاً',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      titleAr: 'title.ar',
      titleEn: 'title.en',
      displayOrder: 'displayOrder',
      media: 'image',
      isActive: 'isActive',
    },
    prepare({ titleAr, titleEn, displayOrder, media, isActive }) {
      const title = titleAr || titleEn || 'بدون عنوان / Untitled';
      return {
        title: `${isActive === false ? '❌ [غير مفعّل] ' : ''}${title}`,
        subtitle: `ترتيب: ${displayOrder ?? 0}`,
        media,
      };
    },
  },
});

