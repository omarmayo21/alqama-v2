import { defineType, defineField } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Us Page / صفحة من نحن',
  type: 'document',
  groups: [
    { name: 'header', title: 'Header & Intro / المقدمة والقصة' },
    { name: 'values', title: 'Values / القيم والمبادئ' },
    { name: 'missionVision', title: 'Mission & Vision / الرؤية والرسالة' },
    { name: 'coaches', title: 'Coaching Team / الكادر التدريبي' },
    { name: 'milestones', title: 'Milestones Timeline / المحطات التاريخية' },
    { name: 'achievements', title: 'Achievements / الإنجازات والاعتمادات' },
    { name: 'cta', title: 'CTA / شريط الانضمام' },
    { name: 'seo', title: 'SEO / محركات البحث' },
  ],
  fields: [
    // Header & Intro
    defineField({
      name: 'badge',
      title: 'Page Badge / شارة الصفحة',
      type: 'localizedString',
      group: 'header',
    }),
    defineField({
      name: 'title',
      title: 'Page Title / عنوان الصفحة الرئيسي',
      type: 'localizedString',
      group: 'header',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle / الوصف الرئيسي',
      type: 'localizedText',
      group: 'header',
    }),
    defineField({
      name: 'storyHeadline',
      title: 'Story Headline / عنوان القصة والريادة',
      type: 'localizedString',
      group: 'header',
    }),
    defineField({
      name: 'storyHighlight',
      title: 'Story Highlight / الكلمة المميزة بالأحمر',
      type: 'localizedString',
      group: 'header',
    }),
    defineField({
      name: 'storyParagraph1',
      title: 'Story Paragraph 1 / الفقرة الأولى من القصة',
      type: 'localizedText',
      group: 'header',
    }),
    defineField({
      name: 'storyParagraph2',
      title: 'Story Paragraph 2 / الفقرة الثانية من القصة',
      type: 'localizedText',
      group: 'header',
    }),
    defineField({
      name: 'teamImage',
      title: 'Team & Campus Image / صورة الكادر والمنشأة',
      type: 'localizedImage',
      group: 'header',
    }),
    defineField({
      name: 'badgeCardTitle',
      title: 'Floating Badge Title / عنوان الشارة العائمة على الصورة',
      type: 'localizedString',
      group: 'header',
    }),
    defineField({
      name: 'badgeCardSubtitle',
      title: 'Floating Badge Subtitle / النص الثانوي للشارة',
      type: 'localizedString',
      group: 'header',
    }),

    // Values
    defineField({
      name: 'valuesTitle',
      title: 'Values Section Title / عنوان قسم القيم',
      type: 'localizedString',
      group: 'values',
    }),
    defineField({
      name: 'valuesHighlight',
      title: 'Values Section Highlight / الكلمة المميزة',
      type: 'localizedString',
      group: 'values',
    }),
    defineField({
      name: 'valuesSubtitle',
      title: 'Values Section Subtitle / الوصف',
      type: 'localizedText',
      group: 'values',
    }),
    defineField({
      name: 'valuesList',
      title: 'Core Values / القيم الأربعة',
      type: 'array',
      group: 'values',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'desc', title: 'Description', type: 'localizedText' }),
          ],
        },
      ],
    }),

    // Mission & Vision
    defineField({
      name: 'missionTitle',
      title: 'Mission Title / عنوان الرسالة',
      type: 'localizedString',
      group: 'missionVision',
    }),
    defineField({
      name: 'missionDesc',
      title: 'Mission Description / نص الرسالة',
      type: 'localizedText',
      group: 'missionVision',
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title / عنوان الرؤية',
      type: 'localizedString',
      group: 'missionVision',
    }),
    defineField({
      name: 'visionDesc',
      title: 'Vision Description / نص الرؤية',
      type: 'localizedText',
      group: 'missionVision',
    }),

    // Coaches
    defineField({
      name: 'coachesTitle',
      title: 'Coaches Section Title / عنوان قسم المدربين',
      type: 'localizedString',
      group: 'coaches',
    }),
    defineField({
      name: 'coachesHighlight',
      title: 'Coaches Section Highlight / الكلمة المميزة',
      type: 'localizedString',
      group: 'coaches',
    }),
    defineField({
      name: 'coachesDesc',
      title: 'Coaches Section Description / الوصف',
      type: 'localizedText',
      group: 'coaches',
    }),
    defineField({
      name: 'coachesList',
      title: 'Coaching Staff / كادر المدربين والمشرفين',
      type: 'array',
      group: 'coaches',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Coach Name', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'title', title: 'Role / Job Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'sport', title: 'Sport Discipline', type: 'localizedString' }),
            defineField({ name: 'exp', title: 'Years of Experience', type: 'localizedString' }),
            defineField({ name: 'initials', title: 'Initials (e.g. MA / م.ع)', type: 'string' }),
          ],
        },
      ],
    }),

    // Milestones
    defineField({
      name: 'milestonesTitle',
      title: 'Milestones Section Title / عنوان محطات النمو',
      type: 'localizedString',
      group: 'milestones',
    }),
    defineField({
      name: 'milestonesHighlight',
      title: 'Milestones Highlight',
      type: 'localizedString',
      group: 'milestones',
    }),
    defineField({
      name: 'milestonesDesc',
      title: 'Milestones Description / الوصف',
      type: 'localizedText',
      group: 'milestones',
    }),
    defineField({
      name: 'milestonesList',
      title: 'Milestone Events / المحطات الزمنية',
      type: 'array',
      group: 'milestones',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'year', title: 'Year / السنة', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
            defineField({ name: 'desc', title: 'Description', type: 'localizedText' }),
          ],
        },
      ],
    }),

    // Achievements
    defineField({
      name: 'achievementsTitle',
      title: 'Achievements Title / عنوان قسم الإنجازات',
      type: 'localizedString',
      group: 'achievements',
    }),
    defineField({
      name: 'achievementsHighlight',
      title: 'Achievements Highlight',
      type: 'localizedString',
      group: 'achievements',
    }),
    defineField({
      name: 'achievementsDesc',
      title: 'Achievements Description / الوصف',
      type: 'localizedText',
      group: 'achievements',
    }),
    defineField({
      name: 'achievementsList',
      title: 'Achievements Points / بنود الإنجازات',
      type: 'array',
      group: 'achievements',
      of: [{ type: 'localizedString' }],
    }),

    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title / عنوان دعوة الانضمام',
      type: 'localizedString',
      group: 'cta',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Subtitle / وصف الدعوة',
      type: 'localizedText',
      group: 'cta',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA WhatsApp Button Text / نص زر الواتساب',
      type: 'localizedString',
      group: 'cta',
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'About Page SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      titleAr: 'title.ar',
      titleEn: 'title.en',
      media: 'teamImage',
    },
    prepare({ titleAr, titleEn, media }) {
      return {
        title: titleAr || titleEn || 'About Page',
        subtitle: 'Academy story, values, coaches, and milestones',
        media,
      };
    },
  },
});
