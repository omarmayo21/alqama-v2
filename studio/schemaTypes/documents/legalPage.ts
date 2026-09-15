import { defineType, defineField } from 'sanity';

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Legal Policy Page / صفحة قانونية وسياسات',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title / عنوان الصفحة',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (privacy or terms) / المعرف في الرابط',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Page Badge / شارة الصفحة',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle / الوصف التمهيدي',
      type: 'localizedText',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date / تاريخ آخر تحديث',
      type: 'localizedString',
      description: 'مثال: ١ يناير ٢٠٢٥ / January 1, 2025',
    }),
    defineField({
      name: 'summaryNotice',
      title: 'Summary Notice / نص التنويه الإرشادي',
      type: 'localizedText',
    }),
    defineField({
      name: 'sections',
      title: 'Policy Sections / بنود وفقرات السياسة',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Section Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'content', title: 'Section Content', type: 'localizedText', validation: (Rule) => Rule.required() }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'Page SEO Metadata',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      titleAr: 'title.ar',
      titleEn: 'title.en',
      slug: 'slug.current',
    },
    prepare({ titleAr, titleEn, slug }) {
      return {
        title: `${titleAr || ''} (${titleEn || ''})`,
        subtitle: `Path: /${slug || ''}`,
      };
    },
  },
});
