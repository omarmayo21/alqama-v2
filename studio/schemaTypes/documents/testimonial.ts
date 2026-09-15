import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial (Google Review) / تقييم ولي أمر',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Reviewer Name / اسم ولي الأمر أو صاحب التقييم',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'initials',
      title: 'Initials / الحروف الأولى (للأيقونة)',
      type: 'string',
      description: 'مثال: HA أو ص.ن',
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating (1 - 5) / عدد النجوم',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'date',
      title: 'Review Date Display / تاريخ التقييم المكتوب',
      type: 'localizedString',
      description: 'مثال: قبل سنة / a year ago',
    }),
    defineField({
      name: 'text',
      title: 'Review Content / نص التقييم الحقيقي',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Image (Optional) / صورة المستخدم الشخصية',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'source',
      title: 'Review Source / مصدر التقييم',
      type: 'string',
      initialValue: 'Google Reviews',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured on Homepage / تمييز في الصفحة الرئيسية',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isActive',
      title: 'Active / مفعّل في الموقع',
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
  ],
  preview: {
    select: {
      nameAr: 'name.ar',
      nameEn: 'name.en',
      rating: 'rating',
      media: 'avatar',
    },
    prepare({ nameAr, nameEn, rating, media }) {
      return {
        title: `${nameAr || nameEn || 'Review'} (${rating} ⭐)`,
        subtitle: 'Google Reviews Verified Parent',
        media,
      };
    },
  },
});
