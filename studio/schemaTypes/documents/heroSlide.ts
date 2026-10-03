import { defineType, defineField } from 'sanity';

export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Hero Slides / شرائح واجهة البداية',
  type: 'document',
  fieldsets: [
    {
      name: 'publishing',
      title: '⚙️ Status & Scheduling / حالة التفعيل والجدولة الزمنية',
      options: { columns: 2 },
    },
    {
      name: 'content',
      title: '📝 Slide Content / نصوص ومحتوى السلايد',
    },
    {
      name: 'cta',
      title: '🔘 CTA Action Buttons / أزرار الإجراء والروابط',
      options: { columns: 2 },
    },
    {
      name: 'media',
      title: '🖼️ Background Media / صورة الخلفية',
    },
  ],
  fields: [
    // 1. Publishing & Scheduling Controls (Prominent at top)
    defineField({
      name: 'isActive',
      title: 'Enable Slide / تفعيل السلايد',
      type: 'boolean',
      initialValue: true,
      fieldset: 'publishing',
      description: 'تفعيل أو إيقاف ظهور السلايد في الموقع (مفعّل افتراضياً - تفعيل السلايد / Enable Slide)',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order / ترتيب العرض',
      type: 'number',
      initialValue: 1,
      fieldset: 'publishing',
      description: 'الأرقام الأصغر تظهر أولاً (مثال: 1 للشريحة الأولى، 2 للشريحة الثانية...)',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date / بداية عرض السلايد',
      type: 'datetime',
      fieldset: 'publishing',
      description: 'تاريخ ووقت بدء ظهور السلايد تلقائياً (اختياري - بتوقيت مكة المكرمة وجدة Asia/Riyadh)',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date / نهاية عرض السلايد',
      type: 'datetime',
      fieldset: 'publishing',
      description: 'تاريخ ووقت انتهاء ظهور السلايد وإخفائه تلقائياً (اختياري - بتوقيت مكة المكرمة وجدة Asia/Riyadh)',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      validation: (Rule) =>
        Rule.custom((endDate, context) => {
          const startDate = (context?.document as { startDate?: string })?.startDate;
          if (endDate && startDate && new Date(endDate) <= new Date(startDate)) {
            return 'تاريخ النهاية يجب أن يكون بعد تاريخ البداية / End date must be after start date';
          }
          return true;
        }),
    }),

    // 2. Slide Content
    defineField({
      name: 'title',
      title: 'Main Title / العنوان الرئيسي',
      type: 'localizedString',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
      description: 'العنوان الرئيسي للشريحة (يمكن كتابة أكثر من سطر)',
    }),
    defineField({
      name: 'badge',
      title: 'Badge / الشارة العلوية',
      type: 'localizedString',
      fieldset: 'content',
      description: 'النص داخل الشارة الصغيرة أعلى العنوان',
    }),
    defineField({
      name: 'description',
      title: 'Description / الوصف والفقرة الفرعية',
      type: 'localizedText',
      fieldset: 'content',
      description: 'نص الوصف الترحيبي للشريحة',
    }),

    // 3. CTAs
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text / نص الزر الرئيسي (واتساب)',
      type: 'localizedString',
      fieldset: 'cta',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link / رابط الزر الرئيسي',
      type: 'string',
      fieldset: 'cta',
      description: 'رابط الواتساب أو رابط مخصص',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text / نص الزر الثانوي (العروض)',
      type: 'localizedString',
      fieldset: 'cta',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link / رابط الزر الثانوي',
      type: 'string',
      fieldset: 'cta',
      description: 'مثال: /offers',
    }),
    defineField({
      name: 'reassuranceText',
      title: 'Reassurance Trust Text / نص الثقة والاعتماد',
      type: 'localizedString',
      fieldset: 'content',
      description: 'النص الصغير أسفل الأزرار مع أيقونة التحقق',
    }),

    // 4. Background Image
    defineField({
      name: 'image',
      title: 'Slide Background Image / صورة الخلفية',
      type: 'image',
      fieldset: 'media',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
      displayOrder: 'displayOrder',
      media: 'image',
      isActive: 'isActive',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({ titleAr, titleEn, displayOrder, media, isActive, startDate, endDate }) {
      const title = titleAr || titleEn || 'بدون عنوان / Untitled';
      const statusIcon = isActive === false ? '🔴 [غير مفعّل] ' : '🟢 ';
      const details = [`ترتيب: ${displayOrder ?? 1}`];
      if (startDate) {
        details.push(`من: ${new Date(startDate).toLocaleDateString('ar-SA')}`);
      }
      if (endDate) {
        details.push(`إلى: ${new Date(endDate).toLocaleDateString('ar-SA')}`);
      }
      return {
        title: `${statusIcon}${title}`,
        subtitle: details.join(' | '),
        media,
      };
    },
  },
});
