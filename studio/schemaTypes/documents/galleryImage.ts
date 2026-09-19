import { defineType, defineField } from 'sanity';

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Album / ألبوم الفعالية والبطولة',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album / Event Title / عنوان الألبوم أو البطولة',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
      description: 'مثال: بطولة كرة القدم الرمضانية / ALQIMA Ramadan Football Championship',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug / الرابط المخصص للألبوم',
      type: 'slug',
      options: {
        source: (doc: any) => doc?.title?.en || doc?.title?.ar || doc?.title || 'album',
        maxLength: 96,
      },
      description: 'الرابط المخصص للألبوم، مثال: junior-basketball-league',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional) / نبذة أو وصف مختصر عن الفعالية',
      type: 'localizedText',
      description: 'وصف الفعالية أو تفاصيل البطولة والنتائج',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image / صورة الغلاف الرئيسية للألبوم',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'الصورة الرئيسية التي تظهر في بطاقة الألبوم في صفحة المعرض',
    }),
    defineField({
      name: 'image',
      title: 'Legacy Image / صورة بديلة',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => Boolean(document?.coverImage),
    }),
    defineField({
      name: 'images',
      title: 'Album Photos / جميع صور الألبوم والفعالية',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'مجموعة الصور التابعة لهذه البطولة أو الفعالية التي تظهر داخل الألبوم',
    }),
    defineField({
      name: 'category',
      title: 'Event Category / تصنيف الفعالية',
      type: 'string',
      options: {
        list: [
          { title: '🏆 بطولات ومسابقات (Tournaments)', value: 'tournaments' },
          { title: '🎉 فعاليات واحتفالات (Events)', value: 'events' },
          { title: '⚽ حصص وتدريبات (Training)', value: 'training' },
          { title: '📌 أخرى (Other)', value: 'other' },
        ],
        layout: 'radio',
      },
      initialValue: 'tournaments',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryTitle',
      title: 'Custom Category Label (Optional) / تسمية مخصصة للقسم',
      type: 'localizedString',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      initialValue: 0,
      description: 'الأرقام الأصغر تظهر أولاً (مثال: 1, 2, 3...)',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Album / ألبوم مميز',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / مفعّل في المعرض',
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
      category: 'category',
      cover: 'coverImage',
      legacyMedia: 'image',
      images: 'images',
      isActive: 'isActive',
    },
    prepare({ titleAr, titleEn, category, cover, legacyMedia, images, isActive }) {
      const categoryNames: Record<string, string> = {
        tournaments: '🏆 بطولات',
        events: '🎉 فعاليات',
        training: '⚽ تدريبات',
        other: '📌 أخرى',
      };
      const catLabel = categoryNames[category] || category || '';
      const title = titleAr || titleEn || 'بدون عنوان / Untitled';
      const imgCount = Array.isArray(images) ? images.length : 0;
      return {
        title: `${isActive === false ? '❌ [غير مفعّل] ' : ''}${title}`,
        subtitle: `${catLabel} • ${imgCount > 0 ? `${imgCount} صور` : 'صورة الغلاف'}`,
        media: cover || legacyMedia,
      };
    },
  },
});
