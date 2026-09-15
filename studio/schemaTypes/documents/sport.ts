import { defineType, defineField } from 'sanity';

export const sport = defineType({
  name: 'sport',
  title: 'Sport Discipline / رياضة تخصصية',
  type: 'document',
  groups: [
    { name: 'general', title: 'Basic Info / البيانات الأساسية' },
    { name: 'media', title: 'Media & Visuals / الصور والألوان' },
    { name: 'curriculum', title: 'Curriculum & Features / المنهج والمميزات' },
    { name: 'schedule', title: 'Training Schedule / جدول الحصص' },
    { name: 'seo', title: 'SEO / محركات البحث' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Sport Name / اسم الرياضة',
      type: 'localizedString',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug / المعرف في الرابط',
      type: 'slug',
      group: 'general',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description / الوصف التعريفي للرياضة',
      type: 'localizedText',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageRange',
      title: 'Target Age Range / الفئة العمرية المستهدفة',
      type: 'localizedString',
      group: 'general',
      description: 'مثال: ٦ - ١٨ سنة / 6 - 18 Years',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Sport Icon Identifier / أيقونة الرياضة',
      type: 'string',
      group: 'media',
      options: {
        list: [
          { title: 'Football / كرة القدم', value: 'football' },
          { title: 'Basketball / كرة السلة', value: 'basketball' },
          { title: 'Swimming / السباحة', value: 'swimming' },
          { title: 'Karate / الكاراتيه', value: 'karate' },
          { title: 'Kickboxing / الكيك بوكسينغ', value: 'kickboxing' },
          { title: 'Gymnastics / الجمباز', value: 'gymnastics' },
          { title: 'Skating / سكيتنج', value: 'roller-skating' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Theme Accent Color / لون الشارة المميز (Hex)',
      type: 'string',
      group: 'media',
      placeholder: '#16A34A',
    }),
    defineField({
      name: 'image',
      title: 'Main Sport Image / الصورة الرئيسية للرياضة',
      type: 'localizedImage',
      group: 'media',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Curriculum Features / مميزات البرنامج التدريبي',
      type: 'array',
      group: 'curriculum',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'levels',
      title: 'Training Levels / المستويات التدريبية',
      type: 'array',
      group: 'curriculum',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'schedule',
      title: 'Training Schedule Sessions / جدول الحصص التدريبية المتاحة',
      type: 'array',
      group: 'schedule',
      of: [{ type: 'scheduleItem' }],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      group: 'general',
      initialValue: 0,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Sport / رياضة مميزة في الرئيسية',
      type: 'boolean',
      group: 'general',
      initialValue: true,
    }),
    defineField({
      name: 'seo',
      title: 'Sport Page SEO Metadata',
      type: 'seo',
      group: 'seo',
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
      titleAr: 'name.ar',
      titleEn: 'name.en',
      age: 'ageRange.ar',
      media: 'image',
    },
    prepare({ titleAr, titleEn, age, media }) {
      return {
        title: `${titleAr || ''} (${titleEn || ''})`,
        subtitle: age ? `الفئة العمرية: ${age}` : '',
        media,
      };
    },
  },
});
