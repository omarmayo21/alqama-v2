import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Privacy: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const sections = language === 'en' ? [
    {
      title: 'Introduction',
      content: `ALQIMA Sports Academy is committed to protecting the privacy of our website visitors and safeguarding personal data submitted by parents, athletes, and guardians. This Privacy Policy details how we collect, process, maintain, and protect personal information.

By using our website or enrolling your child in our academy, you consent to the practices described in this policy.`,
    },
    {
      title: 'Information We Collect',
      content: `We collect relevant information for operational, administrative, and coaching purposes:

• Student Profile Data: Full name, age, gender, athletic history, and health notes relevant to physical exercise.
• Parent/Guardian Details: Full name, phone number, email address, and emergency contact details.
• Technical & Usage Data: Pages visited, time spent on site, device type, and browser preferences.
• Payment Processing: Handled securely through licensed payment gateways compliant with Saudi Central Bank (SAMA) standards; we do not store credit card numbers directly.

All information is collected with explicit guardian consent solely to provide premium athletic training services.`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use collected information for the following purposes:

• Managing athlete enrollment, group assignments, and training schedules.
• Sending critical schedule notifications, event updates, and academy announcements.
• Evaluating and developing training quality and individual performance progress.
• Communicating with parents regarding child development, milestones, and tournament readiness.
• Fulfilling regulatory and legal reporting requirements.

We never sell or distribute your personal data to third parties for commercial advertising without explicit consent.`,
    },
    {
      title: 'Data Security & Protection',
      content: `We implement strict organizational and technical security measures:

• End-to-end encrypted transmission via modern HTTPS/TLS protocols.
• Secure server storage protected by industry-grade firewalls and access controls.
• Restricted data access limited strictly to authorized administrative and coaching personnel.
• Routine technical audits and security assessments.
• Retention of personal information only as long as necessary for active operational purposes.`,
    },
    {
      title: 'Sharing of Information',
      content: `We do not sell, rent, or lease personal information to third parties except:

• With prior explicit guardian consent.
• When necessary for operational delivery via trusted technical partners bound by confidentiality agreements.
• When required by applicable Saudi laws or official government authorities.
• To protect the safety, rights, and security of academy members and athletes.`,
    },
    {
      title: 'Your Rights & Privacy Choices',
      content: `You hold the right at any time to:

• Request access to personal data registered under your account.
• Request correction or updates to any inaccurate information.
• Request data deletion upon completion of program enrollment where no regulatory obligation exists.
• Opt out of non-essential promotional notifications.

To exercise any of these rights, please contact our dedicated privacy officer.`,
    },
  ] : [
    {
      title: 'مقدمة',
      content: `تلتزم أكاديمية القمة الرياضية بحماية خصوصية مستخدمي موقعها الإلكتروني وحماية البيانات الشخصية لجميع المسجلين والمتواصلين معها. تُوضّح سياسة الخصوصية هذه كيفية جمع المعلومات واستخدامها والحفاظ عليها والإفصاح عنها.

بالتسجيل في الأكاديمية أو استخدام موقعنا الإلكتروني، فإنك توافق على الشروط الواردة في هذه السياسة.`,
    },
    {
      title: 'المعلومات التي نجمعها',
      content: `نجمع المعلومات التالية لأغراض تشغيلية وإدارية وفنية:

• البيانات الشخصية: الاسم، العمر، الجنس، التاريخ الرياضي، الحالة الصحية ذات الصلة بالنشاط الرياضي
• بيانات ولي الأمر: الاسم، رقم الهاتف، البريد الإلكتروني، صلة القرابة
• بيانات الاستخدام: الصفحات المُزارة، مدة البقاء، الأجهزة المستخدمة
• بيانات الدفع: تتم معالجتها عبر منصات آمنة ومُعتمدة من البنك المركزي دون الاحتفاظ بأرقام البطاقات المصرفية

جميع البيانات تُجمع بموافقة صريحة ولأغراض تقديم الخدمة الرياضية والتدريبية فقط.`,
    },
    {
      title: 'كيفية استخدام المعلومات',
      content: `نستخدم المعلومات التي نجمعها للأغراض التالية:

• إدارة تسجيل الطلاب وتنظيم الجلسات التدريبية وتوزيع الفئات
• إرسال التحديثات والإشعارات المتعلقة بالبرامج والجداول والمواعيد
• تطوير جودة خدماتنا وبرامجنا التدريبية ومتابعة الأداء الرياضي
• الوفاء بالالتزامات القانونية والتنظيمية
• التواصل مع أولياء الأمور حول تقدم أطفالهم وجاهزيتهم للمنافسات

لا نستخدم بياناتك لأغراض تجارية أو إعلانية موجهة لطرف ثالث دون موافقتك الصريحة.`,
    },
    {
      title: 'حماية وأمان المعلومات',
      content: `نتخذ تدابير أمنية شاملة لحماية بياناتك:

• تشفير جميع البيانات المنقولة عبر بروتوكول HTTPS المشفر
• تخزين البيانات على خوادم آمنة مع تطبيق أنظمة الحماية المتطورة
• حصر صلاحيات الوصول إلى البيانات للموظفين والمشرفين المُصرّح لهم فقط
• إجراء مراجعات أمنية وفنية دورية
• عدم الاحتفاظ بالبيانات لمدة أطول مما هو ضروري للأغراض التشغيلية`,
    },
    {
      title: 'مشاركة المعلومات',
      content: `لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:

• بموافقتك الصريحة المسبقة
• عند الضرورة الفنية لتشغيل المنصة عبر شركاء تقنيين موثوقين ومقيدين باتفاقيات سرية
• عند الالتزام بمتطلبات قانونية أو تنظيمية رسمية
• لحماية حقوق وسلامة أعضاء ومنتسبي الأكاديمية`,
    },
    {
      title: 'حقوق المستخدم',
      content: `يحق لك في أي وقت:

• طلب الاطلاع على بياناتك الشخصية المسجلة لدينا
• طلب تصحيح أو تحديث أي بيانات غير دقيقة
• طلب حذف بياناتك عند انتهاء الاشتراك وعدم وجود التزام تنظيمي
• سحب الموافقة على تلقي الرسائل التوعوية أو غير الضرورية

لممارسة أي من هذه الحقوق، يُرجى التواصل معنا عبر البريد الإلكتروني المخصص للخصوصية.`,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t.footer.privacy}
        subtitle={language === 'en' ? 'Our commitment to protecting your privacy and your child’s data at ALQIMA Sports Academy' : 'التزامنا بحماية بياناتك وخصوصيتك في أكاديمية القمة الرياضية'}
        breadcrumbs={[{ label: t.footer.privacy }]}
        badge={language === 'en' ? 'Privacy & Security' : 'الخصوصية والأمان'}
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Last updated */}
            <ScrollReveal direction="up">
              <div className="bg-[#F2F3F5] rounded-2xl p-5 mb-10 flex items-center gap-3.5 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#D90429] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="font-bold text-[#18213F] tabular-nums">
                    {language === 'en' ? 'Last Updated: January 1, 2025' : 'آخر تحديث: ١ يناير ٢٠٢٥'}
                  </div>
                  <div className="text-[#5A6E85] text-sm font-medium">
                    {language === 'en'
                      ? 'Please read this policy carefully to understand how your family data is handled'
                      : 'يُرجى قراءة هذه السياسة بعناية للتعرف على حقوقك وضوابط استخدام البيانات'}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Table of contents */}
            <ScrollReveal direction="up" delay={80}>
              <div className="bg-[#18213F] rounded-3xl p-7 mb-10 text-white shadow-lg">
                <h3 className="font-black text-lg mb-4">
                  {language === 'en' ? 'Table of Contents' : 'فهرس المحتوى'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {sections.map((s, idx) => (
                    <li key={s.title}>
                      <a href={`#section-${idx}`} className="flex items-center gap-2.5 text-white/80 hover:text-white text-sm transition-colors tabular-nums">
                        <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, idx) => (
                <ScrollReveal key={section.title} direction="up" delay={Math.min(idx * 50, 300)}>
                  <div id={`section-${idx}`} className="scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#D90429] flex items-center justify-center text-white font-black text-sm tabular-nums shadow-sm">
                        {idx + 1}
                      </div>
                      <h2 className="text-2xl font-black text-[#18213F]">{section.title}</h2>
                    </div>
                    <div className="bg-[#F2F3F5] rounded-2xl p-6 border border-gray-100">
                      <p className="text-[#18213F] leading-relaxed whitespace-pre-line text-base font-normal">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Contact for privacy */}
            <ScrollReveal direction="up" delay={150}>
              <div className="mt-12 bg-[#18213F] rounded-3xl p-8 text-white text-center shadow-xl">
                <h3 className="text-2xl font-black mb-3">
                  {language === 'en' ? 'Privacy & Data Inquiries' : 'استفسارات الخصوصية والبيانات'}
                </h3>
                <p className="text-white/80 mb-6 max-w-md mx-auto font-medium">
                  {language === 'en'
                    ? 'For any questions or requests regarding your personal data, our team is happy to assist you.'
                    : 'لأي استفسار أو طلب يتعلق ببياناتك الشخصية، يسعدنا التواصل المباشر معك'}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="mailto:privacy@alqima.sa" className="inline-flex items-center gap-2 bg-[#D90429] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-red-950/40">
                    <Mail size={16} />
                    <span>privacy@alqima.sa</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    <span>{language === 'en' ? 'Chat on WhatsApp' : 'تواصل عبر واتساب'}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
