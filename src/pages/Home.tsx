import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  ArrowRight,
  Star, 
  Users, 
  Trophy, 
  ChevronLeft,
  ChevronRight,
  CheckCircle, 
  ShieldCheck,
  HeartHandshake,
  CreditCard,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sports, sportsEn } from '../data/sports';
import { googleReviews, googleReviewsEn } from '../data/reviews';
import { blogPosts, blogPostsEn } from '../data/blog';
import SectionHeader from '../components/ui/SectionHeader';
import SportIcon from '../components/ui/SportIcon';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const Home: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { homepage, sports: sanitySports, testimonials: sanityTestimonials, blogPosts: sanityBlogPosts, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const currentSports = language === 'en' ? sportsEn : sports;
  const currentReviews = language === 'en' ? googleReviewsEn : googleReviews;
  const currentBlogPosts = (language === 'en' ? blogPostsEn : blogPosts).slice(0, 3);

  const [showAllReviews, setShowAllReviews] = useState(false);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  // 1. Dynamic Sports Data (Sanity Primary -> Static Fallback)
  const displayedSports = useMemo(() => {
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

  // 2. Dynamic Reviews (Sanity Primary -> Static Fallback)
  const allReviews = useMemo(() => {
    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map((r, i) => ({
        id: r._id || `sanity-r-${i}`,
        name: language === 'en' ? (r.authorNameEn || r.authorNameAr || 'Parent') : (r.authorNameAr || r.authorNameEn || 'ولي أمر'),
        rating: r.rating || 5,
        date: r.reviewDate || (language === 'en' ? 'Verified Review' : 'تقييم موثق'),
        text: language === 'en' ? (r.reviewTextEn || r.reviewTextAr || '') : (r.reviewTextAr || r.reviewTextEn || ''),
        initials: r.authorInitials || (r.authorNameAr ? r.authorNameAr.slice(0, 2) : 'ق'),
      }));
    }
    return currentReviews;
  }, [sanityTestimonials, currentReviews, language]);

  const displayedReviews = showAllReviews ? allReviews : allReviews.slice(0, 6);

  // 3. Dynamic Blog (Sanity Primary -> Static Fallback)
  const displayedBlogPosts = useMemo(() => {
    if (sanityBlogPosts && sanityBlogPosts.length > 0) {
      return sanityBlogPosts.slice(0, 3).map((p, i) => ({
        id: p.slug || p._id || `blog-${i + 1}`,
        title: cmsT(p.title, language === 'en' ? (p.titleEn || '') : (p.titleAr || '')),
        category: cmsT(p.category, language === 'en' ? 'Guidance' : 'إرشادات'),
        date: p.publishedAt
          ? new Date(p.publishedAt).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')
          : (typeof p.date === 'object' ? cmsT(p.date, '') : (p.date || '')),
        image: p.imageUrl || p.coverImageUrl || `/images/blog-${(i % 4) + 1}.jpg`,
      }));
    }
    return currentBlogPosts;
  }, [sanityBlogPosts, currentBlogPosts, cmsT, language]);

  // 4 Feature Items (Sanity Primary -> Static Fallback)
  const featureItems = useMemo(() => {
    const icons = [ShieldCheck, HeartHandshake, Users, CreditCard];
    if (homepage?.featuresList && homepage.featuresList.length === 4) {
      return homepage.featuresList.map((item, idx) => ({
        title: cmsT(item.title, t.features.items[idx]?.title || ''),
        description: cmsT(item.desc || item.description, t.features.items[idx]?.desc || ''),
        icon: icons[idx] || ShieldCheck,
      }));
    }
    return [
      {
        title: t.features.items[0].title,
        description: t.features.items[0].desc,
        icon: ShieldCheck,
      },
      {
        title: t.features.items[1].title,
        description: t.features.items[1].desc,
        icon: HeartHandshake,
      },
      {
        title: t.features.items[2].title,
        description: t.features.items[2].desc,
        icon: Users,
      },
      {
        title: t.features.items[3].title,
        description: t.features.items[3].desc,
        icon: CreditCard,
      },
    ];
  }, [homepage?.featuresList, t.features.items, cmsT]);

  // Hero Copy Resolution
  const heroBadge = cmsT(homepage?.heroBadge, t.hero.badge);
  const heroHeadline = cmsT(homepage?.heroHeadline || homepage?.heroTitle, `${t.hero.titleLine1} ${t.hero.titleHighlight}`);
  const heroSubtitle = cmsT(homepage?.heroSubtitle || homepage?.heroDescription, t.hero.subtitle);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#18213F]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={homepage?.heroImageUrl || "/images/hero-bg.jpg"}
            alt={language === 'en' ? 'ALQIMA Sports Academy Jeddah' : 'أكاديمية القمة الرياضية بجدة'}
            className="w-full h-full object-cover object-center animate-hero-bg"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Decorative subtle ambient circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/5" />
          <div className="absolute top-40 left-20 w-36 h-36 rounded-full border border-white/10" />
          <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full border border-[#D90429]/20" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D90429]/25 backdrop-blur-md border border-[#D90429]/40 text-white px-4 py-1.5 rounded-full mb-8 animate-fade-up delay-75">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-sm font-bold">{heroBadge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight animate-fade-up delay-150">
              {heroHeadline}
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl font-normal animate-fade-up delay-250">
              {heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <MessageCircle size={22} />
                <span>{cmsT(homepage?.heroPrimaryCta || homepage?.heroPrimaryCtaText, language === 'en' ? "Start Your Child's Journey Today" : 'ابدأ رحلة أبنائك اليوم')}</span>
              </a>
              <Link
                to={`${basePath}/offers`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>{cmsT(homepage?.heroSecondaryCta || homepage?.heroSecondaryCtaText, language === 'en' ? 'Explore Offers' : 'استكشف العروض')}</span>
                <ArrowIcon size={20} />
              </Link>
            </div>

            {/* Reassurance badge for parents */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10 text-white/80 text-sm font-semibold animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#FFC400]" />
                <span>{language === 'en' ? 'Certified Coaching Staff' : 'مدربون معتمدون ومتخصصون'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 pointer-events-none">
          <span className="text-xs font-semibold">
            {language === 'en' ? 'Scroll Down' : 'اسحب للأسفل'}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-white/70 animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* 4 Feature Items Section */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map(({ title, description, icon: Icon }, idx) => (
              <ScrollReveal key={title} delay={idx * 80}>
                <div 
                  className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#D90429]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#D90429] transition-colors duration-300">
                    <Icon size={26} className="text-[#D90429] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-[#18213F] mb-2">{title}</h3>
                  <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="section-padding bg-[#F2F3F5] pattern-bg">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={cmsT(homepage?.sportsSectionTitle || homepage?.sportsTitle, t.sportsSection.title)}
              description={cmsT(homepage?.sportsSectionDesc || homepage?.sportsSubtitle, t.sportsSection.subtitle)}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedSports.map((sport, idx) => (
              <ScrollReveal key={sport.id} delay={idx * 70}>
                <Link
                  to={`${basePath}/sports/${sport.id}`}
                  className="sport-card bg-white rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-[#18213F]">
                      <img
                        src={sport.image}
                        alt={language === 'en' ? sport.name : (sport.nameAr || sport.name)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-10 h-10 rounded-xl bg-[#18213F]/85 backdrop-blur-md text-white flex items-center justify-center border border-white/15 shadow-sm`}>
                        <SportIcon sportId={sport.id} size={20} className="text-white" />
                      </div>
                      
                      {/* Age badge */}
                      <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'}`}>
                        <span className="bg-[#D90429] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {sport.ageRange}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-[#18213F] mb-2 group-hover:text-[#D90429] transition-colors">
                        {language === 'en' ? sport.name : (sport.nameAr || sport.name)}
                      </h3>
                      <p className="text-[#5A6E85] text-sm leading-relaxed line-clamp-2 font-medium">
                        {sport.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0 mt-auto">
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-[#D90429] group-hover:underline flex items-center gap-1">
                        <span>{t.sportsSection.detailsBtn}</span>
                        <ArrowIcon size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="text-center mt-10">
            <Link
              to={`${basePath}/sports`}
              className="inline-flex items-center gap-2 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-red-200"
            >
              <span>{t.sportsSection.viewAll}</span>
              <ArrowIcon size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Payment / Installment Section (Tabby & Tamara) */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="scale">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#18213F] to-[#222D52] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="inline-block bg-[#D90429] text-white text-xs font-black px-4 py-1.5 rounded-full mb-4">
                    {t.paymentSection.badge}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    {t.paymentSection.title}
                  </h2>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {t.paymentSection.subtitle}
                  </p>
                </div>

                {/* Installment Partner Cards with Original Local Logos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
                  {/* Tabby */}
                  <div className="bg-white rounded-2xl p-6 text-[#18213F] shadow-lg flex items-center gap-5 card-hover">
                    <div className="w-20 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                      <img src="/images/tabby-logo.png" alt="Tabby" className="h-6 w-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg mb-1">{t.paymentSection.tabbyTitle}</h3>
                      <p className="text-[#5A6E85] text-xs leading-relaxed font-medium">
                        {t.paymentSection.tabbyDesc}
                      </p>
                    </div>
                  </div>

                  {/* Tamara */}
                  <div className="bg-white rounded-2xl p-6 text-[#18213F] shadow-lg flex items-center gap-5 card-hover">
                    <div className="w-20 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 p-2">
                      <img src="/images/tamara-logo.jpg" alt="Tamara" className="h-6 w-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="font-black text-lg mb-1">{t.paymentSection.tamaraTitle}</h3>
                      <p className="text-[#5A6E85] text-xs leading-relaxed font-medium">
                        {t.paymentSection.tamaraDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="text-center">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#D90429] text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-red-950/40"
                  >
                    <MessageCircle size={18} />
                    <span>{t.paymentSection.learnMore}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Parents Choose Us Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="scale">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={homepage?.whyUsImageUrl || "/images/about-team.jpg"}
                    alt={language === 'en' ? 'ALQIMA Coaching Team' : 'فريق ومدربو أكاديمية القمة'}
                    className="w-full h-[500px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18213F]/40 to-transparent" />
                </div>

                {/* Floating card */}
                <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-2xl p-5 shadow-xl border border-gray-100 max-w-[220px]`}>
                  <div className="text-2xl font-black text-[#D90429] mb-1">
                    {language === 'en' ? 'Safe Environment' : 'بيئة آمنة'}
                  </div>
                  <div className="text-xs text-[#5A6E85] font-bold">
                    {language === 'en'
                      ? 'Continuous certified supervision & top safety standards'
                      : 'إشراف متواصل وأعلى معايير السلامة لأطفالكم'}
                  </div>
                </div>

                {/* Red accent badge */}
                <div className={`absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} w-16 h-16 rounded-2xl bg-[#D90429] flex items-center justify-center shadow-lg shadow-red-500/30`}>
                  <Trophy size={28} className="text-white" />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={100}>
              <div>
                <span className="inline-block bg-[#D90429]/10 text-[#D90429] text-xs font-black px-3.5 py-1.5 rounded-full mb-4">
                  {language === 'en' ? 'The Best Choice for Your Children' : 'اختيارك الأفضل لأبنائك'}
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-[#18213F] leading-tight mb-6">
                  {cmsT(homepage?.whyUsTitle, language === 'en' ? 'Because We See in Your Child a Champion Who Deserves the Best Beginning' : 'لأننا نرى في طفلك بطلاً يستحق أفضل بداية')}
                </h2>

                <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-6 font-medium">
                  {cmsT(homepage?.whyUsDesc, language === 'en' ? "We don't just teach them sports; we build their character in a safe environment that gives you total peace of mind." : 'نحن لا نُعلمهم الرياضة فحسب، بل نبني شخصياتهم في بيئة آمنة تمنحك راحة البال التامة.')}
                </p>

                <div className="space-y-4 mb-8">
                  {(language === 'en'
                    ? [
                        'Specialized and certified coaches experienced in child mentorship',
                        'Parents can attend sessions from comfortable spectator areas',
                        'Custom training methodologies tailored to individual age and skill stages',
                        'Exclusive family and sibling discounts to support parents',
                        'Regular progress reports updating you on your child’s athletic growth',
                      ]
                    : [
                        'مدربون معتمدون ذوو كفاءة عالية وخبرة في التعامل التربوي مع الأطفال',
                        'إمكانية حضور أولياء الأمور للتدريبات في مقاعد مخصصة ومريحة',
                        'منهج تدريبي يراعي الفروق الفردية ومراحل النمو البدني والمهاري',
                        'خصومات عائلية خاصة عند تسجيل الأخوة لدعم الأسرة',
                        'تقارير دورية تطلع الأهل على تطور أداء وسلوك أطفالهم الرياضي',
                      ]
                  ).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#D90429] flex-shrink-0 mt-0.5" />
                      <span className="text-[#18213F] font-semibold text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`${basePath}/about`}
                    className="inline-flex items-center gap-2 bg-[#D90429] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-red-200"
                  >
                    <span>{language === 'en' ? 'Learn More About Us' : 'تعرف علينا أكثر'}</span>
                    <ArrowIcon size={18} />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-6 py-3.5 rounded-xl font-bold hover:bg-[#18213F] hover:text-white transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>{language === 'en' ? 'Contact Us on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section ("What Our Parents Say") */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={cmsT(homepage?.reviewsSectionTitle || homepage?.reviewsTitle, t.reviewsSection.title)}
              highlight={language === 'en' ? 'from Real Parents' : 'تجارب حقيقية'}
              description={cmsT(homepage?.reviewsSectionDesc || homepage?.reviewsSubtitle, t.reviewsSection.subtitle)}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {displayedReviews.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 70}>
                <div 
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Stars + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-[#FFC400] text-[#FFC400]" />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Star key={i + review.rating} size={16} className="text-gray-200" />
                        ))}
                      </div>
                      {review.date && (
                        <span className="text-[#5A6E85] text-xs font-medium tabular-nums">
                          {review.date}
                        </span>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-[#18213F] leading-relaxed mb-6 text-sm md:text-base font-normal whitespace-pre-line">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-[#18213F] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[#18213F] text-sm">
                        {review.name}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Toggle All Reviews */}
          {allReviews.length > 6 && (
            <ScrollReveal delay={150} className="text-center mt-10">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="inline-flex items-center gap-2 bg-white border-2 border-[#18213F] text-[#18213F] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#18213F] hover:text-white transition-all cursor-pointer shadow-sm"
              >
                <span>{showAllReviews ? t.reviewsSection.showLess : t.reviewsSection.showMore}</span>
                {showAllReviews ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#D90429] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollReveal direction="scale">
            <span className="inline-block bg-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full mb-6">
              {language === 'en' ? 'Join the ALQIMA Family' : 'انضم إلى عائلة القمة'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {cmsT(homepage?.ctaBannerTitle, t.ctaBanner.title)}
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              {cmsT(homepage?.ctaBannerSubtitle || homepage?.ctaBannerDesc, t.ctaBanner.subtitle)}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-[#D90429] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <MessageCircle size={22} />
                <span>{cmsT(homepage?.ctaBannerButton, t.ctaBanner.button)}</span>
              </a>
              <Link
                to={`${basePath}/offers`}
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/60 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <span>{language === 'en' ? 'Explore Offers' : 'استكشف باقات العروض'}</span>
                <ArrowIcon size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={cmsT(homepage?.blogTitle, language === 'en' ? 'Latest Articles' : 'أحدث المقالات')}
              highlight={language === 'en' ? '& Parent Guidance' : 'والنصائح لأولياء الأمور'}
              description={cmsT(homepage?.blogSubtitle, t.blogPage.subtitle)}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedBlogPosts.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 80}>
                <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col justify-between">
                  <div>
                    <div className="img-overlay h-48 bg-[#18213F]">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                        <span className="bg-[#D90429] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-[#5A6E85] text-xs font-semibold mb-3 tabular-nums">{post.date}</p>
                      <h3 className="font-bold text-[#18213F] text-lg leading-tight mb-4 group-hover:text-[#D90429] transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link
                      to={`${basePath}/blog/${post.id}`}
                      className={`inline-flex items-center gap-1.5 text-[#D90429] font-bold text-sm ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}
                    >
                      <span>{t.blogPage.readMore}</span>
                      <ChevronIcon size={16} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="text-center mt-10">
            <Link
              to={`${basePath}/blog`}
              className="inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#18213F] hover:text-white transition-all duration-300"
            >
              <span>{language === 'en' ? 'View All Articles' : 'عرض جميع المقالات'}</span>
              <ArrowIcon size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
