import { defineType, defineField } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer Configuration / إعدادات وتذييل الموقع',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Academy Footer Bio / نبذة تذييل الموقع',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickLinksHeading',
      title: 'Quick Links Column Title / عنوان عمود روابط سريعة',
      type: 'localizedString',
      initialValue: { ar: 'روابط سريعة', en: 'Quick Links' },
    }),
    defineField({
      name: 'sportsHeading',
      title: 'Sports Column Title / عنوان عمود الرياضات',
      type: 'localizedString',
      initialValue: { ar: 'الرياضات', en: 'Sports Disciplines' },
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Column Title / عنوان عمود تواصل معنا',
      type: 'localizedString',
      initialValue: { ar: 'تواصل معنا', en: 'Contact Us' },
    }),
    defineField({
      name: 'workingHoursHeading',
      title: 'Working Hours Column Title / عنوان عمود أوقات العمل',
      type: 'localizedString',
      initialValue: { ar: 'أوقات العمل', en: 'Working Hours' },
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Notice / نص حقوق النشر والملكية',
      type: 'localizedString',
    }),
    defineField({
      name: 'privacyLinkText',
      title: 'Privacy Policy Label / نص رابط سياسة الخصوصية',
      type: 'localizedString',
      initialValue: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    }),
    defineField({
      name: 'termsLinkText',
      title: 'Terms & Conditions Label / نص رابط الشروط والأحكام',
      type: 'localizedString',
      initialValue: { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
        subtitle: 'Footer columns, text, and copyright',
      };
    },
  },
});
