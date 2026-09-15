import { defineType, defineField } from 'sanity';

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category / تصنيف المقالات',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title / اسم التصنيف',
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
      validation: (Rule) => Rule.required(),
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
        title: `${titleAr || ''} / ${titleEn || ''}`,
        subtitle: slug ? `slug: ${slug}` : '',
      };
    },
  },
});
