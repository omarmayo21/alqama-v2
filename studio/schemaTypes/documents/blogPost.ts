import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Article / مقال في المدونة',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content / المحتوى' },
    { name: 'meta', title: 'Meta & Publishing / النشر والكاتب' },
    { name: 'seo', title: 'SEO / محركات البحث' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title / عنوان المقال',
      type: 'localizedString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Article Slug / المعرف في الرابط',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / ملخص المقال للعرض السريع',
      type: 'localizedText',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Full Article Content / نص المقال الكامل',
      type: 'localizedBlockContent',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image / الصورة الرئيسية للمقال',
      type: 'localizedImage',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category Reference / تصنيف المقال',
      type: 'reference',
      to: [{ type: 'blogCategory' }],
      group: 'meta',
    }),
    defineField({
      name: 'categoryText',
      title: 'Direct Category Name / اسم التصنيف المباشر',
      type: 'localizedString',
      group: 'meta',
      description: 'مثال: صحة وتطوير / Health & Growth',
    }),
    defineField({
      name: 'author',
      title: 'Author Name / اسم الكاتب أو المشرف',
      type: 'localizedString',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Display Date / تاريخ النشر المكتوب',
      type: 'localizedString',
      group: 'meta',
      description: 'مثال: ٢٠ يناير ٢٠٢٥ / Jan 20, 2025',
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time / وقت القراءة المقدر',
      type: 'localizedString',
      group: 'meta',
      description: 'مثال: ٥ دقائق / 5 min',
    }),
    defineField({
      name: 'tags',
      title: 'Article Tags / وسوم وكلمات مفتاحية',
      type: 'array',
      group: 'meta',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Article (Top of Blog) / تمييز كمقال رئيسي',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publishing Timestamp / تاريخ النشر الفعلي',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo',
      title: 'Article SEO Metadata',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      titleAr: 'title.ar',
      titleEn: 'title.en',
      author: 'author.ar',
      media: 'image',
      isFeatured: 'isFeatured',
    },
    prepare({ titleAr, titleEn, author, media, isFeatured }) {
      return {
        title: `${titleAr || ''} (${titleEn || ''})`,
        subtitle: `${author ? `بقلم: ${author}` : ''}${isFeatured ? ' ⭐ مقال مميز' : ''}`,
        media,
      };
    },
  },
});
