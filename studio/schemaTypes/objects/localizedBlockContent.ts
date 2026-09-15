import { defineType, defineField } from 'sanity';

export const localizedBlockContent = defineType({
  name: 'localizedBlockContent',
  title: 'Localized Rich Content (Arabic & English)',
  type: 'object',
  fieldsets: [
    {
      name: 'translations',
      title: 'Translations / الترجمات',
      options: { collapsible: false },
    },
  ],
  fields: [
    defineField({
      name: 'ar',
      title: 'Arabic Content / المحتوى بالعربية',
      type: 'text',
      rows: 10,
      description: 'نص المقال أو المحتوى بالعربية (يدعم التنسيق والفقرات)',
    }),
    defineField({
      name: 'en',
      title: 'English Content / المحتوى بالإنجليزية',
      type: 'text',
      rows: 10,
      description: 'Article or rich content in English (supports paragraphs and markdown)',
    }),
  ],
});
