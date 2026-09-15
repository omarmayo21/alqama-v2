import { defineType, defineField } from 'sanity';

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized Text (Arabic & English)',
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
      title: 'Arabic / العربية',
      type: 'text',
      rows: 4,
      description: 'النص باللغة العربية',
    }),
    defineField({
      name: 'en',
      title: 'English / الإنجليزية',
      type: 'text',
      rows: 4,
      description: 'The text in English',
    }),
  ],
});
