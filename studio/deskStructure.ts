import type { StructureResolver } from 'sanity/structure';

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('ALQIMA Sports Academy / لوحة تحكم أكاديمية القمة')
    .items([
      // 1. Content
      S.listItem()
        .title('📁 Content Management / إدارة المحتوى')
        .child(
          S.list()
            .title('Content Pages & Lists')
            .items([
              S.listItem()
                .title('🏠 Homepage / الصفحة الرئيسية')
                .child(S.document().schemaType('homepage').documentId('homepage-main')),
              S.listItem()
                .title('🎬 Hero Slides / شرائح واجهة البداية')
                .schemaType('heroSlide')
                .child(S.documentTypeList('heroSlide').title('Hero Slides / شرائح البداية')),
              S.listItem()
                .title('ℹ️ About Page / صفحة من نحن')
                .child(S.document().schemaType('aboutPage').documentId('about-page-main')),
              S.divider(),
              S.listItem()
                .title('⚽ Sports Disciplines / الرياضات التخصصية')
                .schemaType('sport')
                .child(S.documentTypeList('sport').title('Sports Catalog / قائمة الرياضات')),
              S.listItem()
                .title('🏷️ Offer Packages / العروض وباقات التدريب')
                .schemaType('offer')
                .child(S.documentTypeList('offer').title('Offers / باقات العروض')),
              S.divider(),
              S.listItem()
                .title('📝 Blog Articles / مقالات المدونة')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('Blog Articles / جميع المقالات')),
              S.listItem()
                .title('🗂️ Blog Categories / تصنيفات المقالات')
                .schemaType('blogCategory')
                .child(S.documentTypeList('blogCategory').title('Blog Categories')),
              S.divider(),
              S.listItem()
                .title('⭐ Testimonials & Reviews / آراء وتقييمات أولياء الأمور')
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Testimonials / التقييمات')),
              S.divider(),
              S.listItem()
                .title('🖼️ Photo Gallery / معرض صور الأكاديمية')
                .schemaType('galleryImage')
                .child(S.documentTypeList('galleryImage').title('Gallery Images / صور المعرض')),
            ])
        ),

      S.divider(),

      // 2. Global & UI
      S.listItem()
        .title('⚙️ Global Settings & UI / الإعدادات العامة والواجهة')
        .child(
          S.list()
            .title('Global Configurations')
            .items([
              S.listItem()
                .title('🏢 Site Settings / إعدادات الموقع والشعار')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings-main')),
              S.listItem()
                .title('🔤 Global UI Labels & Buttons / نصوص الأزرار والواجهة العامة')
                .child(S.document().schemaType('uiLabels').documentId('ui-labels-main')),
              S.listItem()
                .title('🧭 Header Navigation / القائمة الرئيسية للموقع')
                .child(S.document().schemaType('navigation').documentId('navigation-main')),
              S.listItem()
                .title('🦶 Footer Settings / تذييل الموقع والروابط')
                .child(S.document().schemaType('footer').documentId('footer-main')),
              S.listItem()
                .title('💳 Payment & Installments / خيارات تابي وتمارا')
                .child(S.document().schemaType('paymentProviders').documentId('payment-providers-main')),
            ])
        ),

      S.divider(),

      // 3. Marketing & Analytics
      S.listItem()
        .title('📊 Analytics & Marketing / التحليلات والتسويق')
        .child(
          S.list()
            .title('Marketing & Pixels')
            .items([
              S.listItem()
                .title('📈 Analytics & Tracking IDs / معرفات التحليلات والبيكسل')
                .child(S.document().schemaType('analyticsSettings').documentId('analytics-settings-main')),
            ])
        ),

      S.divider(),

      // 4. Legal
      S.listItem()
        .title('📜 Legal Policies / السياسات واللوائح')
        .schemaType('legalPage')
        .child(S.documentTypeList('legalPage').title('Legal Pages / الصفحات القانونية')),
    ]);
