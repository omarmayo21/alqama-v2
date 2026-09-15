import { defineType, defineField } from 'sanity';

export const localizedImage = defineType({
  name: 'localizedImage',
  title: 'Image with Bilingual Alt Text / صورة مع نص بديل',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'altAr',
      title: 'Arabic Alt Text / النص البديل بالعربية',
      type: 'string',
      description: 'وصف مختصر للصورة لتحسين محركات البحث وسهولة الوصول',
    }),
    defineField({
      name: 'altEn',
      title: 'English Alt Text / النص البديل بالإنجليزية',
      type: 'string',
      description: 'Short description of the image for SEO and accessibility',
    }),
    defineField({
      name: 'captionAr',
      title: 'Arabic Caption / تعليق الصورة بالعربية',
      type: 'string',
    }),
    defineField({
      name: 'captionEn',
      title: 'English Caption / تعليق الصورة بالإنجليزية',
      type: 'string',
    }),
  ],
});
