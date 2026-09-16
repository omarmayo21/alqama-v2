import { defineType, defineField } from 'sanity';

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image / صورة المعرض',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title / عنوان الصورة',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
      description: 'مثال: تتويج أبطال السباحة في بطولة جدة / Jeddah Swimming Championship Awarding',
    }),
    defineField({
      name: 'description',
      title: 'Description (Optional) / وصف تفصيلي أو مناسبة الصورة',
      type: 'localizedText',
      description: 'وصف مختصر أو مناسبة التقاط الصورة',
    }),
    defineField({
      name: 'image',
      title: 'Image File / ملف الصورة',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Image Category / تصنيف الصورة',
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
      title: 'Featured Image / صورة مميزة',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / مفعّلة في المعرض',
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
      media: 'image',
      isActive: 'isActive',
    },
    prepare({ titleAr, titleEn, category, media, isActive }) {
      const categoryNames: Record<string, string> = {
        tournaments: '🏆 بطولات',
        events: '🎉 فعاليات',
        training: '⚽ تدريبات',
        other: '📌 أخرى',
      };
      const catLabel = categoryNames[category] || category || '';
      const title = titleAr || titleEn || 'بدون عنوان / Untitled';
      return {
        title: `${isActive === false ? '❌ [غير مفعّل] ' : ''}${title}`,
        subtitle: catLabel,
        media,
      };
    },
  },
});
