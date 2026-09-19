import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Shield, Users, Star, Award, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { aboutPage, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const defaultValues = language === 'en' ? [
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

  const values = React.useMemo(() => {
    if (aboutPage?.valuesList && aboutPage.valuesList.length > 0) {
      const iconMap: Record<string, any> = { Target, Heart, Shield, Users, Star, Award };
      return aboutPage.valuesList.map((v, i) => ({
        icon: (v.icon && iconMap[v.icon]) || defaultValues[i % defaultValues.length].icon,
        title: cmsT(v.title, defaultValues[i % defaultValues.length].title),
        desc: cmsT(v.desc, defaultValues[i % defaultValues.length].desc),
      }));
    }
    return defaultValues;
  }, [aboutPage, defaultValues, cmsT]);

  return (
    <div>
      <PageHeader
        title={cmsT(aboutPage?.title, t.aboutPage.title)}
        subtitle={cmsT(aboutPage?.subtitle, t.aboutPage.subtitle)}
        breadcrumbs={[{ label: t.nav.about }]}
        badge={cmsT(aboutPage?.badge, t.aboutPage.badge)}
      />

      {/* Mission & Vision Intro */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-5xl font-black text-[#18213F] leading-tight mb-6">
                {aboutPage?.storyHeadline || aboutPage?.storyHighlight ? (
                  <>
                    {cmsT(aboutPage?.storyHeadline, language === 'en' ? 'A Decade of Excellence' : 'رحلة عشر سنوات')}{' '}
                    <br />
                    <span className="text-[#D90429]">
                      {cmsT(aboutPage?.storyHighlight, language === 'en' ? '& Children Athletic Leadership' : 'من التميز والإنجاز الرياضي')}
                    </span>
                  </>
                ) : language === 'en' ? (
                  <>
                    A Decade of Excellence <br />
                    <span className="text-[#D90429]">& Children Athletic Leadership</span>
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
                {cmsT(
                  aboutPage?.storyParagraph1,
                  language === 'en'
                    ? "We are Alqima Sports Academy for Children in Jeddah, a leading institution committed to developing and nurturing children's athletic talents across a wide range of sports. We were founded on an ambitious vision aimed at preparing a generation capable of excellence and creativity in the field of sports, through specialized training programs."
                    : 'نحن في أكاديمية القمة الرياضية للأطفال في جدة، مؤسسة رائدة تلتزم بتنمية وصقل المواهب الرياضية للأطفال عبر مجموعة واسعة من الرياضات. تأسسنا على أساس رؤية طموحة تستهدف إعداد جيل قادر على التميز والإبداع في المجال الرياضي، وذلك من خلال برامج تدريبية متخصصة.'
                )}
              </p>
              <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-8 font-medium">
                {cmsT(
                  aboutPage?.storyParagraph2,
                  language === 'en'
                    ? 'These programs enable children to achieve their full potential and advance their athletic abilities. We work diligently to provide a rich and motivating educational experience, supported by qualified coaching staff and advanced sports facilities, helping shape outstanding young athletes who possess skill, discipline, and sportsmanship.'
                    : 'مما يمكنهم من تحقيق إمكاناتهم الكاملة والارتقاء بمستوياتهم الرياضية. نعمل بجد لضمان تقديم تجربة تعليمية غنية ومحفزة، مدعومة بكادر تدريبي مؤهل ومرافق رياضية متطورة، لتشكيل رياضيين متميزين يتمتعون بالمهارة، الانضباط، والروح الرياضية.'
                )}
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
                    src={aboutPage?.teamImageUrl || aboutPage?.storyImageUrl || aboutPage?.imageUrl || '/images/about-team.jpg'}
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
              title={cmsT(aboutPage?.valuesTitle, language === 'en' ? 'Our Core' : 'القيم والمبادئ')}
              highlight={cmsT(aboutPage?.valuesHighlight, language === 'en' ? 'Values & Principles' : 'الراسخة')}
              description={cmsT(aboutPage?.valuesSubtitle, t.aboutPage.valuesSubtitle)}
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
                <h3 className="text-3xl font-black mb-4">
                  {cmsT(aboutPage?.missionTitle, t.aboutPage.missionTitle)}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed font-normal">
                  {cmsT(aboutPage?.missionDesc, t.aboutPage.missionDesc)}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-[#D90429] rounded-3xl p-10 relative overflow-hidden text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Star size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">
                  {cmsT(aboutPage?.visionTitle, t.aboutPage.visionTitle)}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed font-normal">
                  {cmsT(aboutPage?.visionDesc, t.aboutPage.visionDesc)}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
