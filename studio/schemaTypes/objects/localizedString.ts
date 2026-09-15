import { defineType, defineField } from 'sanity';

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized String (Arabic & English)',
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
      type: 'string',
      description: 'النص باللغة العربية',
    }),
    defineField({
      name: 'en',
      title: 'English / الإنجليزية',
      type: 'string',
      description: 'The text in English',
    }),
  ],
});
