import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Star, Target, Heart, Shield, Award, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const values = language === 'en' ? [
    { icon: Target, title: 'Athletic Excellence', desc: 'Applying the highest technical and physical standards to develop and hone your child’s athletic capabilities.' },
    { icon: Heart, title: 'Passion & Discipline', desc: 'Instilling a deep love for active sports alongside behavioral integrity, sportsmanship, and focus inside and outside the arena.' },
    { icon: Shield, title: 'Comprehensive Safety', desc: 'Your child’s safety, health, and well-being remain our absolute non-negotiable priority across all venues and equipment.' },
    { icon: Users, title: 'Family Partnership', desc: 'Fostering an open, positive community that actively involves and communicates transparently with parents and guardians.' },
  ] : [
    { icon: Target, title: 'التميز الرياضي', desc: 'تطبيق أعلى المعايير الفنية والبدنية في إعداد وتطوير مهارات أبنائكم.' },
    { icon: Heart, title: 'الشغف والانضباط', desc: 'غرس حب الرياضة والالتزام السلوكي والأخلاقي لدى الأطفال داخل وخارج الملعب.' },
    { icon: Shield, title: 'السلامة الشاملة', desc: 'أمان وصحة أطفالكم تأتي دائمًا في المقام الأول في كافة المرافق والتجهيزات.' },
    { icon: Users, title: 'الروح الجماعية', desc: 'بناء مجتمع رياضي إيجابي يعزز التعاون والشراكة الفعالة مع أولياء الأمور.' },
  ];

  const team = language === 'en' ? [
    { name: 'Mohammed Al-Asiri', title: 'Academy Director & General Supervisor', sport: 'Football', exp: '15 Years', initials: 'MA' },
    { name: 'Khaled Al-Ghamdi', title: 'Senior Head Coach - Football', sport: 'Football', exp: '12 Years', initials: 'KG' },
    { name: 'Youssef Al-Harbi', title: 'Senior Head Coach - Swimming', sport: 'Swimming', exp: '10 Years', initials: 'YH' },
    { name: 'Tariq Al-Balawi', title: 'Senior Head Coach - Karate', sport: 'Karate', exp: '18 Years', initials: 'TB' },
    { name: 'Ahmed Al-Malki', title: 'Senior Head Coach - Basketball', sport: 'Basketball', exp: '9 Years', initials: 'AM' },
    { name: 'Reem Al-Sahli', title: 'Senior Head Coach - Gymnastics', sport: 'Gymnastics', exp: '11 Years', initials: 'RS' },
  ] : [
    { name: 'محمد العسيري', title: 'مدير الأكاديمية والمشرف العام', sport: 'كرة القدم', exp: '١٥ سنة', initials: 'م.ع' },
    { name: 'خالد الغامدي', title: 'مدرب أول - كرة القدم', sport: 'كرة القدم', exp: '١٢ سنة', initials: 'خ.غ' },
    { name: 'يوسف الحربي', title: 'مدرب أول - السباحة', sport: 'السباحة', exp: '١٠ سنوات', initials: 'ي.ح' },
    { name: 'طارق البلوي', title: 'مدرب أول - الكاراتيه', sport: 'الكاراتيه', exp: '١٨ سنة', initials: 'ط.ب' },
    { name: 'أحمد المالكي', title: 'مدرب أول - كرة السلة', sport: 'كرة السلة', exp: '٩ سنوات', initials: 'أ.م' },
    { name: 'ريم السهلي', title: 'مدربة أولى - الجمباز', sport: 'الجمباز', exp: '١١ سنة', initials: 'ر.س' },
  ];

  const milestones = language === 'en' ? [
    { year: '2014', title: 'Academy Foundation', desc: 'Founded in Jeddah with 3 specialized sports to serve youth and families.' },
    { year: '2016', title: 'Facility Expansion', desc: 'Added new sports disciplines, expanded campus capacity, and built parent spectator zones.' },
    { year: '2018', title: 'Official Accreditations', desc: 'Secured national sporting federation recognition and standardized athletic progression.' },
    { year: '2020', title: 'Performance Analytics', desc: 'Introduced biomechanical tracking and transparent digital progress reports for parents.' },
    { year: '2022', title: 'State-of-the-Art Complex', desc: 'Inaugurated our advanced multi-sport complex meeting international safety standards.' },
    { year: '2024', title: 'Leadership & Championships', desc: 'Ranked among Jeddah’s premier youth academies with numerous regional tournament honors.' },
  ] : [
    { year: '٢٠١٤', title: 'تأسيس الأكاديمية', desc: 'انطلاق الأكاديمية بثلاث رياضات تخصصية في جدة لخدمة الأسر والأطفال.' },
    { year: '٢٠١٦', title: 'التوسع واستقطاب الكفاءات', desc: 'إضافة رياضات جديدة وزيادة السعة الاستيعابية للمنشأة ومناطق جلوس الأهل.' },
    { year: '٢٠١٨', title: 'الاعتماد والشراكات', desc: 'الحصول على اعتمادات الاتحادات الرياضية وإطلاق معايير تقييم أداء الطلاب.' },
    { year: '٢٠٢٠', title: 'التحول الرقمي للأداء', desc: 'تطبيق أنظمة التحليل الفني ومتابعة المؤشرات الحركية والبدنية وتقارير الأهل.' },
    { year: '٢٠٢٢', title: 'المجمع الرياضي المتطور', desc: 'افتتاح المنشأة الرياضية الحديثة ومضاعفة تجهيزات الأمان والسلامة.' },
    { year: '٢٠٢٤', title: 'الريادة والبطولات', desc: 'تصنيف الأكاديمية ضمن أبرز مراكز تدريب المواهب والناشئين في جدة.' },
  ];

  return (
    <div>
      <PageHeader
        title={t.aboutPage.title}
        subtitle={t.aboutPage.subtitle}
        breadcrumbs={[{ label: t.nav.about }]}
        badge={t.aboutPage.badge}
      />

      {/* Mission & Vision Intro */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-5xl font-black text-[#18213F] leading-tight mb-6">
                {language === 'en' ? (
                  <>
                    A Decade of Excellence <br />
                    <span className="text-[#D90429]">& Youth Athletic Leadership</span>
                  </>
                ) : (
                  <>
                    رحلة عشر سنوات
                    <br />
                    <span className="text-[#D90429]">من التميز والإنجاز الرياضي</span>
                  </>
                )}
              </h2>
              <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-6 font-medium">
                {language === 'en'
                  ? 'Established in 2014 in Jeddah with an inspiring vision: providing a safe, elite, and holistic sports environment for the rising generation. Today, we proudly serve hundreds of families across 7 specialized athletic disciplines.'
                  : 'تأسست أكاديمية القمة الرياضية عام ٢٠١٤ في جدة برؤية طموحة: توفير بيئة رياضية آمنة واحترافية شاملة للأجيال الناشئة. واليوم نفخر بخدمة مئات العائلات وأبنائهم في سبع تخصصات رياضية متكاملة.'}
              </p>
              <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-8 font-medium">
                {language === 'en'
                  ? 'We believe sport is more than physical training; it is a life classroom nurturing discipline, leadership, and resilient self-confidence inside and outside the arena.'
                  : 'نؤمن أن الرياضة ليست مجرد تمرين بدني، بل هي مدرسة حياة تُعزز الانضباط، والروح القيادية، والإصرار على التميز لدى أطفالكم داخل وخارج الملعب.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D90429] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-200"
                >
                  <MessageCircle size={18} />
                  <span>{language === 'en' ? 'Contact Us on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
                </a>
                <Link
                  to={`${basePath}/offers`}
                  className="group inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-7 py-3.5 rounded-xl font-bold hover:bg-[#18213F] hover:text-white transition-all duration-300"
                >
                  <span>{language === 'en' ? 'Explore Offers' : 'استكشف العروض'}</span>
                  <ArrowIcon size={18} className={`transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={150}>
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/images/about-team.jpg"
                    alt={language === 'en' ? 'ALQIMA Coaching Team' : 'فريق أكاديمية القمة'}
                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className={`absolute -bottom-5 ${isRTL ? '-right-5' : '-left-5'} bg-[#D90429] rounded-2xl p-5 text-white shadow-xl transform transition-transform duration-300 group-hover:scale-105`}>
                  <Award size={32} className="mb-2" />
                  <div className="font-black text-2xl">
                    {language === 'en' ? 'The Most Advanced Academy' : 'الأكاديمية الأكثر تطورًا'}
                  </div>
                  <div className="text-white/80 text-sm font-semibold">
                    {language === 'en' ? 'in Jeddah' : 'في جدة'}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              title={language === 'en' ? 'Our Core' : 'القيم والمبادئ'}
              highlight={language === 'en' ? 'Values & Principles' : 'الراسخة'}
              description={t.aboutPage.valuesSubtitle}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, idx) => (
              <ScrollReveal key={title} direction="up" delay={idx * 80}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 group-hover:bg-[#D90429] flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110">
                    <Icon size={28} className="text-[#D90429] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-black text-xl text-[#18213F] mb-3">{title}</h3>
                  <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={50}>
              <div className="bg-[#18213F] rounded-3xl p-10 relative overflow-hidden text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#D90429] flex items-center justify-center mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">{t.aboutPage.missionTitle}</h3>
                <p className="text-white/80 text-lg leading-relaxed font-normal">
                  {t.aboutPage.missionDesc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-[#D90429] rounded-3xl p-10 relative overflow-hidden text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Star size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">{t.aboutPage.visionTitle}</h3>
                <p className="text-white/90 text-lg leading-relaxed font-normal">
                  {t.aboutPage.visionDesc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              title={language === 'en' ? 'Certified Coaching' : 'فريق المدربين'}
              highlight={language === 'en' ? 'Staff & Mentors' : 'المعتمدين'}
              description={language === 'en' ? 'Experienced national and international coaches holding recognized federation licenses and child education expertise' : 'نخبة من المدربين الوطنيين والدوليين الحاصلين على أعلى الرخص التدريبية والخبرات التربوية'}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <ScrollReveal key={member.name} direction="up" delay={idx * 70}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex items-start gap-4 group border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#18213F] flex items-center justify-center text-white font-black text-lg flex-shrink-0 group-hover:bg-[#D90429] transition-all duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-[#18213F] text-lg leading-tight">{member.name}</h3>
                    <p className="text-[#D90429] font-bold text-sm mb-1.5">{member.title}</p>
                    <div className="flex items-center gap-2 tabular-nums">
                      <span className="text-[#18213F] text-xs font-bold bg-gray-100 px-2.5 py-0.5 rounded-full">{member.sport}</span>
                      <span className="text-[#5A6E85] text-xs font-semibold">{member.exp} {language === 'en' ? 'Experience' : 'خبرة'}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              title={language === 'en' ? 'Key Milestones in Our' : 'محطات في مسيرة'}
              highlight={language === 'en' ? 'Journey of Growth' : 'النمو والإنجاز'}
              description={language === 'en' ? 'A decade of nurturing youth athletic potential and building young champions' : 'عشر سنوات من البناء والتطوير وصناعة أجيال رياضية متميزة'}
            />
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute ${isRTL ? 'right-8 md:right-1/2 md:-translate-x-0.5' : 'left-8 md:left-1/2 md:-translate-x-0.5'} top-0 bottom-0 w-0.5 bg-gray-200`} />

            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <ScrollReveal
                  key={m.year}
                  direction="up"
                  delay={idx * 60}
                >
                  <div
                    className={`relative flex items-start gap-8 ${
                      idx % 2 === 0
                        ? isRTL ? 'md:flex-row' : 'md:flex-row'
                        : isRTL ? 'md:flex-row-reverse' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className={`absolute ${isRTL ? 'right-6 md:right-1/2 md:-translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'} w-5 h-5 rounded-full bg-[#D90429] border-4 border-white shadow-md z-10 mt-2`} />
                    <div className={`flex-1 ${isRTL ? 'mr-16 md:mr-0' : 'ml-16 md:ml-0'}`}>
                      <div className="bg-[#F8F9FA] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="inline-flex items-center gap-2 bg-[#D90429] text-white px-4 py-1 rounded-full text-sm font-bold mb-3 tabular-nums shadow-sm">
                          {m.year}
                        </div>
                        <h3 className="font-black text-xl text-[#18213F] mb-2">{m.title}</h3>
                        <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-[#18213F] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up">
            <SectionHeader
              title={language === 'en' ? 'Major Achievements' : 'أبرز الإنجازات'}
              highlight={language === 'en' ? '& Accreditations' : 'والاعتمادات'}
              description={language === 'en' ? 'A proven track record of athletic accomplishments and the trust of hundreds of parents in Jeddah' : 'سجل حافل بالإنجازات الرياضية وثقة مئات أولياء الأمور في جدة'}
              light
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(language === 'en'
              ? [
                  'Over 200 youth tournament matches and podium finishes',
                  'Official recognition and licenses from sports federations',
                  'Strategic athletic partnerships with premier clubs',
                  'Preparation and qualification of youth national team prospects',
                  'The most advanced sports academy complex in Jeddah',
                  'Hundreds of verified 5-star ratings from parents and guardians',
                ]
              : [
                  'أكثر من ٢٠٠ بطولة ومسابقة فاز بها طلاب الأكاديمية',
                  'اعتماد رسمي من الاتحادات الرياضية المعنية',
                  'شراكات تدريبية مع أندية وأكاديميات كبرى',
                  'تأهيل وتخريج مواهب للمنتخبات الوطنية للفئات السنية',
                  'الأكاديمية الأكثر تطورًا في جدة مع مرافق متكاملة',
                  'مئات التقييمات الإيجابية المعتمدة من أولياء الأمور',
                ]
            ).map((item, idx) => (
              <ScrollReveal key={item} direction="up" delay={idx * 50}>
                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <Trophy size={22} className="text-[#FFC400] flex-shrink-0" />
                  <span className="text-white/90 text-sm md:text-base font-semibold">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-black text-[#18213F] mb-4">
              {language === 'en' ? 'Join the ALQIMA Academy Community' : 'انضموا إلى مجتمع أكاديمية القمة'}
            </h2>
            <p className="text-[#5A6E85] text-base md:text-lg max-w-xl mx-auto mb-8 font-medium">
              {language === 'en'
                ? 'Contact us today to help you choose the ideal training program for your child.'
                : 'تواصلوا معنا اليوم لمساعدتكم في اختيار البرنامج الأنسب لأبنائكم'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-red-200"
              >
                <MessageCircle size={20} />
                <span>{language === 'en' ? 'Talk to Us on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
              </a>
              <Link
                to={`${basePath}/offers`}
                className="group inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#18213F] hover:text-white transition-all duration-300"
              >
                <span>{language === 'en' ? 'Explore Offers' : 'استكشف باقات العروض'}</span>
                <ArrowIcon size={20} className={`transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
