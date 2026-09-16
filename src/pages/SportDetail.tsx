import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Clock, Users, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, MessageCircle, Layers, CreditCard, HeartHandshake } from 'lucide-react';
import { sports, sportsEn } from '../data/sports';
import { scheduleItems } from '../data/schedule';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import SportIcon from '../components/ui/SportIcon';
import ScrollReveal from '../components/animation/ScrollReveal';
import { getWhatsAppUrl } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const SportDetail: React.FC = () => {
  const { sportId } = useParams<{ sportId: string }>();
  const { language, isRTL } = useLanguage();
  const { sports: sanitySports, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const currentSports = language === 'en' ? sportsEn : sports;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const resolvedSport = React.useMemo(() => {
    const cleanId = sportId ? sportId.replace(/^sport-/, '') : '';
    const foundSanity = sanitySports?.find((s) => s.slug === sportId || s.slug === cleanId || s._id === sportId || s._id === `sport-${cleanId}`);
    const foundStatic = currentSports.find((s) => s.id === sportId || s.id === cleanId);

    if (foundSanity) {
      return {
        id: cleanId,
        name: cmsT(foundSanity.name, foundStatic?.name || ''),
        nameAr: typeof foundSanity.name === 'object' ? foundSanity.name?.ar : foundSanity.nameAr || foundStatic?.nameAr || '',
        nameEn: typeof foundSanity.name === 'object' ? foundSanity.name?.en : foundSanity.nameEn || foundStatic?.name || '',
        description: cmsT(foundSanity.description || foundSanity.shortDescription, foundStatic?.description || ''),
        ageRange: cmsT(foundSanity.ageRange, foundStatic?.ageRange || ''),
        image: foundSanity.imageUrl || foundSanity.heroImageUrl || foundStatic?.image || `/images/${cleanId}.jpg`,
        features: foundSanity.features && foundSanity.features.length > 0 
          ? foundSanity.features.map(f => typeof f === 'object' ? cmsT(f as any, '') : String(f))
          : (foundStatic?.features || []),
        levels: foundSanity.levels && foundSanity.levels.length > 0
          ? foundSanity.levels.map(l => typeof l === 'object' ? cmsT(l as any, language === 'en' ? l.en || l.nameEn || '' : l.ar || l.nameAr || '') : String(l))
          : (foundStatic?.levels || []),
      };
    }
    return foundStatic;
  }, [sanitySports, currentSports, sportId, cmsT, language]);

  if (!resolvedSport) return <Navigate to={basePath === '' ? '/sports' : `${basePath}/sports`} replace />;

  const sport = resolvedSport;
  const sportSchedule = scheduleItems.filter((s) => s.sportId === sportId);
  const otherSports = currentSports.filter((s) => s.id !== sportId).slice(0, 3);
  const sportDisplayName = language === 'en' ? sport.name : (sport.nameAr || sport.name);

  return (
    <div>
      <PageHeader
        title={language === 'en' ? `${sport.name} Program` : `رياضة ${sport.nameAr}`}
        subtitle={sport.description}
        breadcrumbs={[
          { label: t.nav.sports, path: `${basePath}/sports` },
          { label: sportDisplayName },
        ]}
        badge={language === 'en' ? 'Comprehensive Children Training Program' : 'برنامج تدريبي متكامل لأبنائكم'}
      />

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 -mt-1 bg-[#18213F]">
        <img
          src={sport.image}
          alt={sportDisplayName}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className={`absolute bottom-6 ${isRTL ? 'right-8' : 'left-8'} flex items-center gap-4`}>
          <div className="bg-white rounded-2xl px-6 py-3.5 shadow-xl flex items-center gap-3 border border-gray-100 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-xs">
              <SportIcon sportId={sport.id} size={24} />
            </div>
            <div>
              <div className="font-black text-[#18213F] text-lg leading-tight">{sportDisplayName}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-black text-[#18213F] mb-4">
                  {language === 'en' ? `About the ${sport.name} Program` : `نبذة عن برنامج ${sport.nameAr}`}
                </h2>
                <p className="text-[#5A6E85] text-lg leading-relaxed mb-8 font-medium">{sport.description}</p>
              </ScrollReveal>

              {/* Features */}
              <ScrollReveal delay={80}>
                <h3 className="text-2xl font-black text-[#18213F] mb-5">{t.sportDetailPage.curriculumTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {sport.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-[#F8F9FA] rounded-xl p-4 border border-gray-100">
                      <CheckCircle size={20} className="text-[#D90429] flex-shrink-0 mt-0.5" />
                      <span className="text-[#18213F] font-semibold text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Training Modules / Program Highlights */}
              <ScrollReveal delay={120}>
                <h3 className="text-2xl font-black text-[#18213F] mb-5">{t.sportDetailPage.levelsTitle}</h3>
                <div className="flex flex-wrap gap-3 mb-10">
                  {sport.levels.map((level) => (
                    <div
                      key={level}
                      className="flex items-center gap-2.5 bg-white border-2 border-[#E8EAF0] rounded-xl px-5 py-3 shadow-sm"
                    >
                      <ShieldCheck size={18} className="text-[#D90429]" />
                      <span className="font-bold text-[#18213F]">
                        {language === 'en' ? `Level: ${level}` : `مستوى: ${level}`}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Schedule */}
              {sportSchedule.length > 0 && (
                <ScrollReveal delay={160}>
                  <h3 className="text-2xl font-black text-[#18213F] mb-5">
                    {language === 'en' ? 'Available Training Schedule' : 'جدول الحصص المتاحة'}
                  </h3>
                  <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden mb-8 border border-gray-200">
                    <div className="grid grid-cols-4 bg-[#18213F] text-white text-sm font-bold px-5 py-3.5">
                      <span>{language === 'en' ? 'Day' : 'اليوم'}</span>
                      <span>{language === 'en' ? 'Time' : 'الوقت'}</span>
                      <span>{language === 'en' ? 'Level' : 'الفئة'}</span>
                      <span>{language === 'en' ? 'Coach' : 'المدرب'}</span>
                    </div>
                    {sportSchedule.map((item) => (
                      <div key={item.id} className="grid grid-cols-4 text-sm px-5 py-4 border-b border-gray-200 schedule-row hover:bg-red-50/40 transition-colors">
                        <span className="font-bold text-[#18213F]">{item.day}</span>
                        <span className="text-[#5A6E85] tabular-nums font-medium">{item.time}</span>
                        <span className="text-[#D90429] font-bold">{item.level}</span>
                        <span className="text-[#18213F] font-medium">{item.coach}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Inquiry Card */}
              <ScrollReveal delay={100} direction="scale">
                <div className="bg-[#18213F] rounded-3xl p-7 text-white mb-6 sticky top-24 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-md">
                    <SportIcon sportId={sport.id} size={36} />
                  </div>
                  <h3 className="text-xl font-black text-center mb-2">
                    {language === 'en' ? `Enroll in ${sport.name}` : `إلحاق أبنائكم ببرنامج ${sport.nameAr}`}
                  </h3>
                  <p className="text-white/70 text-sm text-center mb-6 font-medium">
                    {language === 'en'
                      ? 'Join the premier children sports academy in Jeddah'
                      : 'انضموا إلى المنظومة الرياضية المتطورة في أكاديمية القمة'}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <Users size={16} className="text-[#FFC400]" />
                      <span className="text-sm text-white/90">
                        {language === 'en' ? 'Small & balanced training groups' : 'مجموعات تدريبية متوازنة ومحددة'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <Layers size={16} className="text-[#FFC400]" />
                      <span className="text-sm text-white/90">{t.sportsSection.trainingPrograms}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <HeartHandshake size={16} className="text-[#FFC400]" />
                      <span className="text-sm text-white/90">
                        {language === 'en' ? 'Parents can attend training sessions' : 'إمكانية حضور الأهل للتدريبات'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <CreditCard size={16} className="text-[#FFC400]" />
                      <span className="text-sm text-white/90">
                        {language === 'en' ? 'Easy installments with Tabby & Tamara' : 'تقسيط ميسر مع تابي وتمارا'}
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      language === 'en'
                        ? `Hello ALQIMA Academy, I would like to inquire about the ${sport.name} program and packages for my child.`
                        : `مرحباً أكاديمية القمة، أود الاستفسار عن باقات وبرنامج تدريب ${sport.nameAr} لأبنائي`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center bg-[#D90429] text-white py-4 rounded-xl font-bold hover:bg-[#B0021F] transition-colors mb-3 shadow-md shadow-red-900/40"
                  >
                    <MessageCircle size={18} />
                    <span>{t.sportDetailPage.whatsappInquiry}</span>
                  </a>
                  <Link
                    to={`${basePath}/offers`}
                    className="block w-full text-center bg-white/10 text-white py-3 rounded-xl font-bold hover:bg-white/20 transition-colors text-sm"
                  >
                    {language === 'en' ? 'Explore Academy Offers' : 'استكشف باقات وعروض الأكاديمية'}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sports */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Other Sports Programs' : 'برامج رياضية أخرى'}
              highlight={language === 'en' ? 'for Your Child' : 'قد تهم أبنائكم'}
              description={language === 'en' ? 'Explore more athletic disciplines available at the academy' : 'استكشف المزيد من التخصصات الرياضية المتاحة في الأكاديمية'}
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSports.map((s, idx) => (
              <ScrollReveal key={s.id} delay={idx * 80}>
                <Link
                  to={`${basePath}/sports/${s.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 flex flex-col justify-between h-full"
                >
                  <div className="relative h-44 overflow-hidden bg-[#18213F]">
                    <img
                      src={s.image}
                      alt={language === 'en' ? s.name : s.nameAr}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'} w-9 h-9 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center shadow-sm`}>
                      <SportIcon sportId={s.id} size={20} />
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-[#18213F] group-hover:text-[#D90429] transition-colors text-lg">
                        {language === 'en' ? s.name : s.nameAr}
                      </h3>
                    </div>
                    <ChevronIcon size={20} className={`text-[#D90429] ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={150} className="text-center mt-8">
            <Link
              to={`${basePath}/sports`}
              className="inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-6 py-3 rounded-xl font-bold hover:bg-[#18213F] hover:text-white transition-all duration-300"
            >
              <span>{t.sportsSection.viewAll}</span>
              <ArrowIcon size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SportDetail;
