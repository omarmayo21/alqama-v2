import { defineType, defineField } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Social Share / تحسين محركات البحث والمشاركة',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'titleAr',
      title: 'SEO Title (Arabic) / عنوان الصفحة بالعربية',
      type: 'string',
      description: 'العنوان الذي يظهر في نتائج بحث جوجل وشريط المتصفح',
    }),
    defineField({
      name: 'titleEn',
      title: 'SEO Title (English) / عنوان الصفحة بالإنجليزية',
      type: 'string',
      description: 'Page title displayed in Google search results and browser tab',
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Meta Description (Arabic) / وصف الصفحة بالعربية',
      type: 'text',
      rows: 3,
      description: 'الوصف الذي يظهر أسفل العنوان في محركات البحث (١٥٠-١٦٠ حرف)',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Meta Description (English) / وصف الصفحة بالإنجليزية',
      type: 'text',
      rows: 3,
      description: 'Page description displayed in search engines (150-160 chars)',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image / صورة المشاركة في منصات التواصل',
      type: 'image',
      description: 'الصورة التي تظهر عند مشاركة الرابط على واتساب وتويتر وفيسبوك (١٢٠٠×٦٣٠)',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines (noindex) / إخفاء من محركات البحث',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
