import { defineType, defineField } from 'sanity';

export const paymentProviders = defineType({
  name: 'paymentProviders',
  title: 'Payment Providers & Installments / خيارات الدفع والتقسيط',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Main Title / عنوان قسم خيارات الدفع',
      type: 'localizedString',
      initialValue: { ar: 'خيارات دفع وتقسيط مرنة', en: 'Flexible Payment & Installment Options' },
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle / الوصف التمهيدي',
      type: 'localizedText',
    }),
    // Tabby
    defineField({
      name: 'tabbyEnabled',
      title: 'Enable Tabby / تفعيل تابي',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'tabbyTitle',
      title: 'Tabby Title / عنوان تابي',
      type: 'localizedString',
      initialValue: { ar: 'قسّمها على ٤ دفعات بدون فوائد', en: 'Split into 4 interest-free installments' },
    }),
    defineField({
      name: 'tabbyDesc',
      title: 'Tabby Description / وصف تابي',
      type: 'localizedText',
      initialValue: {
        ar: 'ادفع ٢٥٪ اليوم وقسّم المبلغ المتبقي على ٣ أشهر بكل سهولة وبدون أي رسوم إضافية عبر تابي.',
        en: 'Pay 25% today and split the rest over 3 months with zero fees or interest via Tabby.',
      },
    }),
    // Tamara
    defineField({
      name: 'tamaraEnabled',
      title: 'Enable Tamara / تفعيل تمارا',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'tamaraTitle',
      title: 'Tamara Title / عنوان تمارا',
      type: 'localizedString',
      initialValue: { ar: 'دفعات شهرية ميسرة ومتوافقة مع الشريعة', en: 'Convenient Sharia-compliant monthly installments' },
    }),
    defineField({
      name: 'tamaraDesc',
      title: 'Tamara Description / وصف تمارا',
      type: 'localizedText',
      initialValue: {
        ar: 'اختر خطة السداد المناسبة لميزانيتك وقسّم رسوم تدريب طفلك على دفعات مريحة مع تمارا.',
        en: 'Choose the payment schedule that suits your family budget and split fees easily with Tamara.',
      },
    }),
  ],
  preview: {
    select: {
      tabby: 'tabbyEnabled',
      tamara: 'tamaraEnabled',
    },
    prepare({ tabby, tamara }) {
      return {
        title: 'Payment Providers (Tabby & Tamara)',
        subtitle: `Tabby: ${tabby ? 'ON' : 'OFF'} | Tamara: ${tamara ? 'ON' : 'OFF'}`,
      };
    },
  },
});
