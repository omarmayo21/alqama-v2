import { defineType, defineField } from 'sanity';

export const navItem = defineType({
  name: 'navItem',
  title: 'Navigation Item / عنصر القائمة',
  type: 'object',
  fields: [
    defineField({
      name: 'labelAr',
      title: 'Label (Arabic) / اسم الرابط بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'labelEn',
      title: 'Label (English) / اسم الرابط بالإنجليزية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'path',
      title: 'URL / Path / المسار أو الرابط',
      type: 'string',
      description: 'المسار داخل الموقع مثل: /about أو /sports أو رابط خارجي مثل: https://wa.me/...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isExternal',
      title: 'External Link / رابط خارجي',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / مفعّل في الموقع',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'children',
      title: 'Submenu Items / روابط القائمة المنسدلة',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'labelAr', title: 'Arabic Label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'labelEn', title: 'English Label', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'path', title: 'Path / URL', type: 'string', validation: (Rule) => Rule.required() }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      titleAr: 'labelAr',
      titleEn: 'labelEn',
      path: 'path',
    },
    prepare({ titleAr, titleEn, path }) {
      return {
        title: `${titleAr || ''} | ${titleEn || ''}`,
        subtitle: path,
      };
    },
  },
});
