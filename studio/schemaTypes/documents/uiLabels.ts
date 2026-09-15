import { defineType, defineField } from 'sanity';

export const uiLabels = defineType({
  name: 'uiLabels',
  title: 'Global UI Labels & Text / النصوص والأزرار العامة',
  type: 'document',
  groups: [
    { name: 'nav', title: 'Navigation & Header / القائمة والرأس' },
    { name: 'buttons', title: 'Buttons & CTAs / الأزرار والدعوات' },
    { name: 'sports', title: 'Sports UI / نصوص الرياضات' },
    { name: 'blog', title: 'Blog & Search / المدونة والبحث' },
    { name: 'common', title: 'General & Status / نصوص عامة وحالات' },
  ],
  fields: [
    // Navigation & Header
    defineField({
      name: 'topBarCallText',
      title: 'Top Bar Phone Label / نص زر الاتصال بالشريط العلوي',
      type: 'localizedString',
      group: 'nav',
    }),
    defineField({
      name: 'topBarChatText',
      title: 'Top Bar WhatsApp Label / نص زر الواتساب بالشريط العلوي',
      type: 'localizedString',
      group: 'nav',
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Header Contact Button / نص زر تواصل معنا في الهيدر',
      type: 'localizedString',
      group: 'nav',
    }),

    // Buttons & CTAs
    defineField({
      name: 'whatsappCtaText',
      title: 'Default WhatsApp CTA / نص زر التواصل عبر الواتساب العام',
      type: 'localizedString',
      group: 'buttons',
    }),
    defineField({
      name: 'exploreOffersText',
      title: 'Explore Offers CTA / نص زر استكشف العروض والباقات',
      type: 'localizedString',
      group: 'buttons',
    }),
    defineField({
      name: 'viewAllSportsText',
      title: 'View All Sports CTA / نص زر استكشف جميع الرياضات',
      type: 'localizedString',
      group: 'buttons',
    }),
    defineField({
      name: 'readMoreText',
      title: 'Read More Text / نص زر قراءة المزيد',
      type: 'localizedString',
      group: 'buttons',
    }),
    defineField({
      name: 'backHomeText',
      title: 'Back to Home / نص زر العودة للرئيسية',
      type: 'localizedString',
      group: 'buttons',
    }),
    defineField({
      name: 'backToBlogText',
      title: 'Back to Blog / نص زر العودة للمدونة',
      type: 'localizedString',
      group: 'buttons',
    }),

    // Sports UI
    defineField({
      name: 'levelsHeading',
      title: 'Levels Section Heading / عنوان قسم المستويات التدريبية',
      type: 'localizedString',
      group: 'sports',
    }),
    defineField({
      name: 'featuresHeading',
      title: 'Curriculum Features Heading / عنوان مميزات البرنامج',
      type: 'localizedString',
      group: 'sports',
    }),
    defineField({
      name: 'scheduleHeading',
      title: 'Training Schedule Heading / عنوان جدول المواعيد والحصص',
      type: 'localizedString',
      group: 'sports',
    }),
    defineField({
      name: 'ageRangeLabel',
      title: 'Age Range Label / تسمية الفئة العمرية',
      type: 'localizedString',
      group: 'sports',
    }),

    // Blog & Search
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Input Placeholder / نص مربع البحث',
      type: 'localizedString',
      group: 'blog',
    }),
    defineField({
      name: 'allFilterLabel',
      title: 'All Filter Tag / تصنيف "الكل"',
      type: 'localizedString',
      group: 'blog',
    }),
    defineField({
      name: 'noResultsTitle',
      title: 'No Results Found Title / عنوان عند عدم وجود نتائج',
      type: 'localizedString',
      group: 'blog',
    }),
    defineField({
      name: 'noResultsDesc',
      title: 'No Results Found Description / وصف عند عدم وجود نتائج',
      type: 'localizedString',
      group: 'blog',
    }),

    // Common
    defineField({
      name: 'pageNotFoundTitle',
      title: '404 Page Not Found Title / عنوان صفحة 404',
      type: 'localizedString',
      group: 'common',
    }),
    defineField({
      name: 'pageNotFoundDesc',
      title: '404 Page Not Found Description / وصف صفحة 404',
      type: 'localizedString',
      group: 'common',
    }),
    defineField({
      name: 'loadingText',
      title: 'Loading Indicator Text / نص جاري التحميل',
      type: 'localizedString',
      group: 'common',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Global UI Labels & Strings',
        subtitle: 'Bilingual buttons, placeholders, and UI text',
      };
    },
  },
});
