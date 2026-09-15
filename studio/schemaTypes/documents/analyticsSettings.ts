import { defineType, defineField } from 'sanity';

export const analyticsSettings = defineType({
  name: 'analyticsSettings',
  title: 'Analytics & Tracking Settings / إعدادات التحليلات والتتبع',
  type: 'document',
  groups: [
    { name: 'ga4', title: 'Google Analytics 4' },
    { name: 'meta', title: 'Meta Pixel (Facebook/Instagram)' },
    { name: 'clarity', title: 'Microsoft Clarity' },
    { name: 'googleAds', title: 'Google Ads & GTM' },
  ],
  fields: [
    // GA4
    defineField({
      name: 'googleAnalyticsEnabled',
      title: 'Enable Google Analytics 4 / تفعيل جوجل أناليتكس',
      type: 'boolean',
      group: 'ga4',
      initialValue: false,
    }),
    defineField({
      name: 'googleAnalyticsMeasurementId',
      title: 'GA4 Measurement ID / معرف قياس جوجل (G-XXXXXXXXXX)',
      type: 'string',
      group: 'ga4',
      placeholder: 'G-XXXXXXXXXX',
      description: 'معرف قياس Google Analytics 4 العام. لن يتم تفعيله إلا عند تشغيل زر التفعيل وإدخال المعرف بشكل صحيح.',
    }),

    // Meta Pixel
    defineField({
      name: 'metaPixelEnabled',
      title: 'Enable Meta Pixel / تفعيل بيكسل ميتا (فيسبوك وانستغرام)',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
    defineField({
      name: 'metaPixelId',
      title: 'Meta Pixel ID / معرف بيكسل ميتا',
      type: 'string',
      group: 'meta',
      placeholder: '123456789012345',
      description: 'معرف البيكسل العام لحسابك الإعلاني في Meta Business Suite.',
    }),

    // Microsoft Clarity
    defineField({
      name: 'microsoftClarityEnabled',
      title: 'Enable Microsoft Clarity / تفعيل مايكروسوفت كلاريتي (خرائط الحرارة)',
      type: 'boolean',
      group: 'clarity',
      initialValue: false,
    }),
    defineField({
      name: 'microsoftClarityProjectId',
      title: 'Clarity Project ID / معرف مشروع كلاريتي',
      type: 'string',
      group: 'clarity',
      placeholder: 'abcdef1234',
      description: 'معرف المشروع لتسجيل الجلسات وخرائط الحرارة من Microsoft Clarity.',
    }),

    // Google Ads & GTM
    defineField({
      name: 'googleAdsEnabled',
      title: 'Enable Google Ads / تفعيل إعلانات جوجل',
      type: 'boolean',
      group: 'googleAds',
      initialValue: false,
    }),
    defineField({
      name: 'googleAdsId',
      title: 'Google Ads Conversion ID (AW-XXXXXXXXX)',
      type: 'string',
      group: 'googleAds',
      placeholder: 'AW-XXXXXXXXX',
    }),
    defineField({
      name: 'googleTagManagerEnabled',
      title: 'Enable Google Tag Manager / تفعيل مدير العلامات GTM',
      type: 'boolean',
      group: 'googleAds',
      initialValue: false,
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager Container ID (GTM-XXXXXXX)',
      type: 'string',
      group: 'googleAds',
      placeholder: 'GTM-XXXXXXX',
    }),
  ],
  preview: {
    select: {
      gaEnabled: 'googleAnalyticsEnabled',
      metaEnabled: 'metaPixelEnabled',
      clarityEnabled: 'microsoftClarityEnabled',
    },
    prepare({ gaEnabled, metaEnabled, clarityEnabled }) {
      const active = [];
      if (gaEnabled) active.push('GA4');
      if (metaEnabled) active.push('Meta');
      if (clarityEnabled) active.push('Clarity');
      return {
        title: 'Analytics & Tracking IDs',
        subtitle: active.length > 0 ? `Active: ${active.join(', ')}` : 'All tracking disabled',
      };
    },
  },
});
