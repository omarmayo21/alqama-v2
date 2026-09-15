import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Target, Users, BarChart3, Trophy, ShieldCheck, HeartHandshake, Layers, MessageCircle } from 'lucide-react';
import { sports, sportsEn } from '../data/sports';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import SportIcon from '../components/ui/SportIcon';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const Sports: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { sports: sanitySports, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const currentSports = language === 'en' ? sportsEn : sports;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const displayedSports = React.useMemo(() => {
    if (sanitySports && sanitySports.length > 0) {
      return sanitySports.map((s) => {
        const cleanId = s.slug || (s._id ? s._id.replace(/^sport-/, '') : '');
        return {
          id: cleanId,
          name: cmsT(s.name, language === 'en' ? (s.nameEn || s.nameAr || '') : (s.nameAr || s.nameEn || '')),
          nameAr: typeof s.name === 'object' ? s.name?.ar : s.nameAr || '',
          nameEn: typeof s.name === 'object' ? s.name?.en : s.nameEn || '',
          description: cmsT(s.description || s.shortDescription, language === 'en' ? (s.shortDescriptionEn || s.fullDescriptionEn || '') : (s.shortDescriptionAr || s.fullDescriptionAr || '')),
          ageRange: cmsT(s.ageRange, language === 'en' ? (s.ageRangeEn || '') : (s.ageRangeAr || '')),
          image: s.imageUrl || s.heroImageUrl || `/images/${cleanId}.jpg`,
        };
      });
    }
    return currentSports;
  }, [sanitySports, currentSports, cmsT, language]);

  const trainingFeatures = language === 'en' ? [
    {
      icon: Target,
      title: 'Certified Training Curriculum',
      desc: 'We adhere to recognized sporting federation methodologies to ensure premier athletic and personal development for your child.',
    },
    {
      icon: Users,
      title: 'Small & Balanced Groups',
      desc: 'We maintain low coach-to-student ratios to ensure personalized technical corrections and dedicated attention for every young athlete.',
    },
    {
      icon: BarChart3,
      title: 'Continuous Parent Reports',
      desc: 'Regular evaluations keep parents closely informed on their child’s physical conditioning, skill mastery, and character growth.',
    },
    {
      icon: Trophy,
      title: 'Tournament & League Pathways',
      desc: 'Promising young talents gain competitive experience through organized matches, friendly meets, and official tournaments.',
    },
    {
      icon: ShieldCheck,
      title: 'Top Safety & Security Standards',
      desc: 'Fully equipped indoor facilities meeting strict safety specifications, supported by certified first-aid on site.',
    },
    {
      icon: HeartHandshake,
      title: 'Parent Attendance Privileges',
      desc: 'Comfortable spectator seating areas allow parents to watch training sessions and encourage their children firsthand.',
    },
  ] : [
    {
      icon: Target,
      title: 'منهج تدريبي معتمد',
      desc: 'نتبع المناهج والخطط المعتمدة لضمان جودة الإعداد والتأهيل الرياضي لأبنائكم.',
    },
    {
      icon: Users,
      title: 'مجموعات تدريبية متوازنة',
      desc: 'نحافظ على كثافة عددية مدروسة لكل مدرب لتوفير رعاية واهتمام فني دقيق لكل طفل.',
    },
    {
      icon: BarChart3,
      title: 'تقارير أداء مستمرة للأهل',
      desc: 'تقييم دوري ومتابعة دقيقة تطلع أولياء الأمور على تطور أبنائهم بدنيًا ومهاريًا.',
    },
    {
      icon: Trophy,
      title: 'إعداد للبطولات والمنافسات',
      desc: 'إتاحة الفرصة للمواهب الواعدة للاحتكاك التنافسي واللعب في بطولات ومباريات رسمية.',
    },
    {
      icon: ShieldCheck,
      title: 'أعلى معايير السلامة والأمان',
      desc: 'مرافق مجهزة بالكامل ومطابقة لاشتراطات السلامة مع إشراف طبي وإسعافي متكامل.',
    },
    {
      icon: HeartHandshake,
      title: 'حضور أولياء الأمور',
      desc: 'أماكن مخصصة ومريحة تتيح للأهل متابعة التدريبات وتشجيع أطفالهم.',
    },
  ];

  return (
    <div>
      <PageHeader
        title={t.sportsPage.title}
        subtitle={t.sportsPage.subtitle}
        breadcrumbs={[{ label: t.nav.sports }]}
        badge={t.sportsPage.badge}
      />

      {/* Sports Grid */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Specialized Training Programs' : 'البرامج الرياضية التخصصية'}
              highlight={language === 'en' ? 'for Your Children' : 'المتاحة لأبنائكم'}
              description={t.sportsSection.subtitle}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedSports.map((sport, idx) => (
              <ScrollReveal key={sport.id} delay={idx * 80}>
                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col md:flex-row h-full"
                >
                  {/* Image */}
                  <div className="relative md:w-64 h-56 md:h-auto overflow-hidden flex-shrink-0 bg-[#18213F]">
                    <img
                      src={sport.image}
                      alt={language === 'en' ? sport.name : sport.nameAr}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${isRTL ? 'md:bg-gradient-to-l md:from-transparent md:to-black/40' : 'md:bg-gradient-to-r md:from-transparent md:to-black/40'}`} />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-11 h-11 rounded-xl bg-[#18213F]/80 backdrop-blur-md text-white flex items-center justify-center border border-white/10 shadow-sm`}>
                      <SportIcon sportId={sport.id} size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <div>
                          <h3 className="text-2xl font-black text-[#18213F] group-hover:text-[#D90429] transition-colors">
                            {language === 'en' ? sport.name : sport.nameAr}
                          </h3>
                          <span className="text-xs text-[#5A6E85] font-semibold">
                            {language === 'en' ? sport.nameAr : sport.name}
                          </span>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 tabular-nums">
                          <span className="bg-red-50 text-[#D90429] text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                            {t.sportsSection.agePrefix} {sport.ageRange}
                          </span>
                          <span className="bg-gray-100 text-[#18213F] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Layers size={12} className="text-[#D90429]" />
                            <span>{t.sportsSection.trainingPrograms}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-[#5A6E85] text-sm leading-relaxed mb-6 font-medium">
                        {sport.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <Link
                        to={`${basePath}/sports/${sport.id}`}
                        className="inline-flex items-center gap-2 bg-[#D90429] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-red-200"
                      >
                        <span>{language === 'en' ? 'Program Details' : 'تفاصيل البرنامج'}</span>
                        <ChevronIcon size={16} />
                      </Link>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#18213F] hover:text-[#D90429] text-sm font-bold transition-colors"
                      >
                        <MessageCircle size={16} />
                        <span>{language === 'en' ? 'Inquire on WhatsApp' : 'استفسر عبر واتساب'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Sports */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Our Accredited' : 'المنهج التدريبي'}
              highlight={language === 'en' ? 'Training Curriculum' : 'المعتمد بالأكاديمية'}
              description={language === 'en' ? 'We focus on building and developing your child’s abilities technically, physically, and behaviorally' : 'نركز على بناء وتطوير قدرات أطفالكم في كافة النواحي الفنية والبدنية والسلوكية'}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={idx * 80}>
                  <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:shadow-md transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#18213F] text-white flex items-center justify-center mb-4">
                      <Icon size={22} className="text-[#FFC400]" />
                    </div>
                    <h3 className="font-black text-xl text-[#18213F] mb-2">{item.title}</h3>
                    <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#18213F] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl md:text-4xl font-black mb-4">{t.sportsPage.ctaTitle}</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              {t.sportsPage.ctaSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-950/40"
              >
                <MessageCircle size={22} />
                <span>{t.sportsPage.ctaButton}</span>
              </a>
              <Link
                to={`${basePath}/offers`}
                className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white/40 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <span>{language === 'en' ? 'Explore Offers' : 'استكشف عروض التدريب'}</span>
                <ArrowIcon size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sports;
