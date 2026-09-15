import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings / إعدادات الموقع العامة',
  type: 'document',
  groups: [
    { name: 'general', title: 'General / عام' },
    { name: 'contact', title: 'Contact & Location / التواصل والموقع' },
    { name: 'social', title: 'Social Media / وسائل التواصل' },
    { name: 'seo', title: 'SEO Defaults / إعدادات محركات البحث' },
  ],
  fields: [
    defineField({
      name: 'academyName',
      title: 'Academy Name / اسم الأكاديمية',
      type: 'localizedString',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slogan',
      title: 'Academy Slogan / الشعار اللفظي',
      type: 'localizedString',
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Official Logo / الشعار الرسمي',
      type: 'localizedImage',
      group: 'general',
      description: 'شعار الأكاديمية الرسمي بصيغة PNG شفافة عالية الدقة',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number / رقم الهاتف للاتصال',
      type: 'string',
      group: 'contact',
      description: 'مثال: 0500123456',
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Display Phone / رقم الهاتف للعرض',
      type: 'string',
      group: 'contact',
      description: 'مثال: ٠٥٠ ٠١٢ ٣٤٥٦',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number / رقم الواتساب (دولي)',
      type: 'string',
      group: 'contact',
      description: 'مثال: 966500123456',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'WhatsApp Direct URL / رابط الواتساب المباشر',
      type: 'url',
      group: 'contact',
      description: 'مثال: https://wa.me/966500123456',
    }),
    defineField({
      name: 'email',
      title: 'Email Address / البريد الإلكتروني',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address / العنوان والمقر',
      type: 'localizedString',
      group: 'contact',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Link / رابط خرائط جوجل',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours / أوقات العمل الرسمية',
      type: 'localizedString',
      group: 'contact',
      description: 'مثال: السبت - الخميس: ٢:٠٠ م - ١٠:٠٠ م',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Accounts / حسابات التواصل الاجتماعي',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform / المنصة',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram / انستغرام', value: 'instagram' },
                  { title: 'Twitter / X / تويتر', value: 'twitter' },
                  { title: 'TikTok / تيك توك', value: 'tiktok' },
                  { title: 'Snapchat / سناب شات', value: 'snapchat' },
                  { title: 'YouTube / يوتيوب', value: 'youtube' },
                  { title: 'Facebook / فيسبوك', value: 'facebook' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Account URL / رابط الحساب',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO Metadata / بيانات السيو الافتراضية للموقع',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      titleAr: 'academyName.ar',
      titleEn: 'academyName.en',
      media: 'logo',
    },
    prepare({ titleAr, titleEn, media }) {
      return {
        title: titleAr || titleEn || 'Site Settings',
        subtitle: 'Global academy configuration',
        media,
      };
    },
  },
});
