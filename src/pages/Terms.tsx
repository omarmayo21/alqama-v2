import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldAlert, MessageCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Terms: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';

  const termsSections = language === 'en' ? [
    {
      title: 'General Terms & Conditions',
      content: `Welcome to ALQIMA Sports Academy. These Terms and Conditions govern your use of our website and enrollment in our children athletic programs.

By accessing this website or enrolling in any academy program, you accept these terms in full. Please do not continue using our services if you do not agree to all terms stated on this page.`,
    },
    {
      title: 'Enrollment & Participation',
      content: `• Enrollment is open to specified children age groups according to academy criteria.
• Accurate, true, and complete information must be provided during the registration process.
• Parents or legal guardians retain the right to enroll dependents under 18 years of age.
• The academy reserves the right to decline or cancel any enrollment if submitted information is inaccurate.
• Participation becomes active upon payment confirmation and administrative coordinator verification.`,
    },
    {
      title: 'Fees & Refund Policy',
      content: `• All program fees are stated in Saudi Riyals (SAR) and inclusive of applicable Value Added Tax (VAT).
• Training fees are non-refundable once the training cycle has begun, except under exceptional administrative circumstances approved by management.
• Program participation may be frozen once during the enrollment period subject to academy regulations.
• The academy reserves the right to adjust program fees and offers with prior notice provided to members before renewal.`,
    },
    {
      title: 'Safety & Behavioral Standards',
      content: `• All participants and guardians must adhere to safety directives issued by certified coaching and management staff.
• Proper athletic attire and mandatory protective equipment for each sport must be worn at all times.
• The academy assumes no liability for lost personal belongings within the sports facility.
• The academy reserves the right to suspend or terminate the enrollment of any participant engaging in serious behavioral misconduct.
• Full disclosure of any medical conditions or pre-existing injuries affecting child safety must be provided prior to participation.`,
    },
    {
      title: 'Intellectual Property & Media',
      content: `• All content, logos, and materials on this website are the property of ALQIMA Sports Academy.
• The academy may capture photographs or video footage during sessions and events for documentation and promotional purposes, unless a parent provides written notice otherwise.
• No part of published academy materials may be reproduced or distributed without prior written consent.`,
    },
    {
      title: 'Amendments to Terms',
      content: `ALQIMA Sports Academy reserves the right to update or modify these Terms & Conditions at any time. Updates take effect immediately upon publication on the website.

Continued use of our website and services following updates constitutes explicit acceptance of the revised terms.`,
    },
  ] : [
    {
      title: 'شروط وأحكام عامة',
      content: `مرحبًا بكم في أكاديمية القمة الرياضية. تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقعنا الإلكتروني والتسجيل في برامجنا الرياضية.

باستخدام هذا الموقع أو التسجيل في أي من برامج الأكاديمية، فإنك تقبل هذه الشروط بالكامل. لا تستمر في استخدام خدماتنا إذا كنت لا توافق على جميع الشروط والأحكام المذكورة في هذه الصفحة.`,
    },
    {
      title: 'شروط التسجيل والعضوية',
      content: `• التسجيل متاح للأعمار المحددة لكل برنامج رياضي وفق شروط الأكاديمية
• يجب تقديم معلومات صحيحة ودقيقة وكاملة أثناء عملية التسجيل
• يحتفظ ولي الأمر بالحق في تسجيل التابعين له ممن هم دون سن ١٨ عامًا
• يحق للأكاديمية رفض أو إلغاء أي تسجيل إذا تبيّن عدم صحة البيانات المقدمة
• يعتبر الاشتراك ساري المفعول فور سداد الرسوم المقررة وتأكيد المشرف الإداري`,
    },
    {
      title: 'الرسوم وسياسة الاسترداد',
      content: `• جميع الرسوم موضحة بالريال السعودي وتشمل ضريبة القيمة المضافة المقررة
• رسوم الاشتراك غير قابلة للاسترداد بعد بدء البرنامج التدريبي إلا في الحالات الاستثنائية التي تقرها الإدارة
• يمكن تجميد الاشتراك لمرة واحدة خلال مدة الاشتراك وفق اللوائح المحددة
• يحق للأكاديمية تعديل أسعار البرامج والعروض مع إشعار الأعضاء قبل موعد التجديد`,
    },
    {
      title: 'قواعد السلامة والسلوك',
      content: `• يلتزم جميع المشتركين بتعليمات السلامة الصادرة عن المدربين وإدارة الأكاديمية
• يجب ارتداء الزي الرياضي المناسب ومعدات السلامة الخاصة بكل رياضة
• الأكاديمية غير مسؤولة عن فقدان المقتنيات الشخصية داخل المنشأة
• يحق للأكاديمية تعليق أو إنهاء عضوية أي مشترك يرتكب مخالفات سلوكية جسيمة
• يجب الإفصاح الكامل عن أي حالة صحية أو إصابة قد تؤثر على سلامة المشترك`,
    },
    {
      title: 'الملكية الفكرية والتصوير',
      content: `• جميع المحتويات والعلامات التجارية الموجودة على الموقع ملك لأكاديمية القمة الرياضية
• يحق للأكاديمية التقاط صور ومقاطع فيديو أثناء التدريبات والفعاليات للأغراض التوثيقية والترويجية، ما لم يُبدِ ولي الأمر رغبته الكتابية في عدم التصوير
• لا يجوز إعادة إنتاج أو توزيع أي جزء من المحتوى المنشور دون إذن خطي مسبق`,
    },
    {
      title: 'تعديل الشروط والأحكام',
      content: `تحتفظ أكاديمية القمة الرياضية بالحق في تعديل أو تحديث هذه الشروط والأحكام في أي وقت دون إشعار مسبق. تسري التعديلات فور نشرها على الموقع الإلكتروني.

يُعد استمرارك في استخدام خدماتنا بعد نشر التعديلات موافقة صريحة منك على الشروط المعدلة.`,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t.footer.terms}
        subtitle={language === 'en' ? 'Regulations and guidelines governing ALQIMA Sports Academy programs and facilities' : 'القواعد واللوائح المنظمة لخدمات وبرامج أكاديمية القمة الرياضية'}
        breadcrumbs={[{ label: t.footer.terms }]}
        badge={language === 'en' ? 'Terms & Regulations' : 'اللوائح والأنظمة'}
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Notice */}
            <ScrollReveal direction="up">
              <div className="bg-[#F2F3F5] rounded-2xl p-5 mb-10 flex items-center gap-3.5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#18213F] flex items-center justify-center flex-shrink-0 text-[#FFC400] shadow-sm">
                  <ShieldAlert size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#18213F] tabular-nums">
                    {language === 'en' ? 'Effective Date: January 1, 2025' : 'سارية المفعول من: ١ يناير ٢٠٢٥'}
                  </div>
                  <div className="text-[#5A6E85] text-sm font-medium">
                    {language === 'en'
                      ? 'Please review these terms carefully to ensure a safe and exceptional training experience'
                      : 'يُرجى قراءة هذه اللائحة بعناية لضمان تجربة تدريبية متميزة وآمنة'}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sections */}
            <div className="space-y-8">
              {termsSections.map((section, idx) => (
                <ScrollReveal key={section.title} direction="up" delay={Math.min(idx * 50, 300)}>
                  <div className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#18213F] flex items-center justify-center text-white font-black tabular-nums shadow-sm">
                        {idx + 1}
                      </div>
                      <h2 className="text-2xl font-black text-[#18213F]">{section.title}</h2>
                    </div>
                    <div className={`bg-[#F2F3F5] rounded-2xl p-6 ${isRTL ? 'mr-0 md:mr-12' : 'ml-0 md:ml-12'} border border-gray-100`}>
                      <p className="text-[#18213F] leading-relaxed whitespace-pre-line text-base font-normal">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Acceptance */}
            <ScrollReveal direction="up" delay={150}>
              <div className="mt-12 bg-[#18213F] rounded-3xl p-8 text-white text-center shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-[#FFC400]">
                  <CheckCircle size={30} />
                </div>
                <h3 className="text-2xl font-black mb-3">
                  {language === 'en'
                    ? 'Our Commitment to a Professional and Safe Environment'
                    : 'التزامنا بتقديم بيئة رياضية احترافية وآمنة'}
                </h3>
                <p className="text-white/80 mb-6 max-w-md mx-auto font-medium">
                  {language === 'en'
                    ? 'By using this website or joining the academy, you confirm that you have read, understood, and agreed to these terms.'
                    : 'باستخدامك للموقع أو تسجيلك في الأكاديمية، فإنك تُقرّ بقراءة وفهم وقبول جميع هذه الشروط والأحكام.'}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D90429] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-950/40"
                  >
                    <MessageCircle size={18} />
                    <span>{language === 'en' ? 'Contact Us on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
                  </a>
                  <Link
                    to={`${basePath}/offers`}
                    className="bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {language === 'en' ? 'Explore Offers' : 'استكشف باقات العروض'}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
