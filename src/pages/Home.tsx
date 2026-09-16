import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  const { homepage, sports: sanitySports, testimonials: sanityTestimonials, blogPosts: sanityBlogPosts, heroSlides: sanityHeroSlides, t: cmsT } = useSanityData();
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
      return sanityTestimonials.map((r, i) => {
        const fallback = currentReviews[i] || currentReviews[0];
        
        const nameVal = typeof r.name === 'object'
          ? cmsT(r.name, fallback?.name || '')
          : (r.name || (language === 'en' ? (r.authorNameEn || r.authorNameAr) : (r.authorNameAr || r.authorNameEn)) || fallback?.name || (language === 'en' ? 'Verified Parent' : 'ولي أمر'));

        const dateVal = typeof r.date === 'object'
          ? cmsT(r.date, fallback?.date || '')
          : (r.date || r.reviewDate || fallback?.date || (language === 'en' ? 'Verified Review' : 'تقييم موثق'));

        const textVal = typeof r.text === 'object'
          ? cmsT(r.text, fallback?.text || '')
          : (r.text || (language === 'en' ? (r.reviewTextEn || r.reviewTextAr) : (r.reviewTextAr || r.reviewTextEn)) || fallback?.text || '');

        const initialsVal = r.initials || r.authorInitials || fallback?.initials || (nameVal ? nameVal.slice(0, 2) : 'HA');

        return {
          id: r._id || fallback?.id || `r-${i + 1}`,
          name: nameVal,
          rating: typeof r.rating === 'number' ? r.rating : (fallback?.rating || 5),
          date: dateVal,
          text: textVal,
          initials: initialsVal,
        };
      });
    }
    return currentReviews;
  }, [sanityTestimonials, currentReviews, cmsT, language]);

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Slide 1 Data (Original Hero - Preserved Exactly)
  const slide1 = useMemo(() => {
    const s = sanityHeroSlides && sanityHeroSlides.length > 0 ? sanityHeroSlides[0] : null;

    const rawTitle = s
      ? (typeof s.title === 'object'
          ? (language === 'en' ? (s.title?.en || s.title?.ar) : (s.title?.ar || s.title?.en))
          : (language === 'en' ? (s.titleEn || s.titleAr || s.title) : (s.titleAr || s.titleEn || s.title)))
      : (language === 'en' ? 'The Most Advanced Sports Academy in Jeddah' : 'الأكاديمية الاكثر تطورا في جدة');

    const rawBadge = s
      ? (typeof s.badge === 'object'
          ? (language === 'en' ? (s.badge?.en || s.badge?.ar) : (s.badge?.ar || s.badge?.en))
          : (language === 'en' ? (s.badgeEn || s.badgeAr || s.badge) : (s.badgeAr || s.badgeEn || s.badge)))
      : (language === 'en' ? 'ALQIMA Sports Academy for Children in Jeddah' : 'اكاديمية القمة الرياضية للأطفال بجدة');

    const rawDesc = s
      ? (typeof s.description === 'object'
          ? (language === 'en' ? (s.description?.en || s.description?.ar) : (s.description?.ar || s.description?.en))
          : (language === 'en' ? (s.descriptionEn || s.descriptionAr || s.description) : (s.descriptionAr || s.descriptionEn || s.description)))
      : (language === 'en' 
          ? 'Paving your children’s path to the top.. A comprehensive sports academy dedicated to discovering talent and building champions through professional training programs supporting their physical and mental development.' 
          : 'نمهّد طريق أبنائكم نحو القمة.. صرح رياضي متكامل يهدف إلى اكتشاف المواهب وبناء الأبطال عبر برامج تدريبية احترافية تدعم تطورهم الجسدي والنفسي');

    const rawPrimaryCta = s
      ? (typeof s.primaryCtaText === 'object'
          ? (language === 'en' ? (s.primaryCtaText?.en || s.primaryCtaText?.ar) : (s.primaryCtaText?.ar || s.primaryCtaText?.en))
          : (language === 'en' ? (s.primaryCtaTextEn || s.primaryCtaTextAr || s.primaryCtaText) : (s.primaryCtaTextAr || s.primaryCtaTextEn || s.primaryCtaText)))
      : (language === 'en' ? "Start Your Child's Journey Today" : 'ابدأ رحلة أبنائك اليوم');

    const rawSecondaryCta = s
      ? (typeof s.secondaryCtaText === 'object'
          ? (language === 'en' ? (s.secondaryCtaText?.en || s.secondaryCtaText?.ar) : (s.secondaryCtaText?.ar || s.secondaryCtaText?.en))
          : (language === 'en' ? (s.secondaryCtaTextEn || s.secondaryCtaTextAr || s.secondaryCtaText) : (s.secondaryCtaTextAr || s.secondaryCtaTextEn || s.secondaryCtaText)))
      : (language === 'en' ? 'Explore Offers' : 'استكشف العروض');

    const rawReassurance = s
      ? (typeof s.reassuranceText === 'object'
          ? (language === 'en' ? (s.reassuranceText?.en || s.reassuranceText?.ar) : (s.reassuranceText?.ar || s.reassuranceText?.en))
          : (language === 'en' ? (s.reassuranceTextEn || s.reassuranceTextAr || s.reassuranceText) : (s.reassuranceTextAr || s.reassuranceTextEn || s.reassuranceText)))
      : (language === 'en' ? 'Certified Coaching Staff' : 'مدربون معتمدون ومتخصصون');

    return {
      id: s?._id || 'heroSlide-1',
      image: s?.imageUrl || homepage?.heroImageUrl || '/images/hero-bg.jpg',
      title: rawTitle || (language === 'en' ? 'The Most Advanced Sports Academy in Jeddah' : 'الأكاديمية الاكثر تطورا في جدة'),
      badge: rawBadge || (language === 'en' ? 'ALQIMA Sports Academy for Children in Jeddah' : 'اكاديمية القمة الرياضية للأطفال بجدة'),
      description: rawDesc || '',
      primaryCtaText: rawPrimaryCta || (language === 'en' ? "Start Your Child's Journey Today" : 'ابدأ رحلة أبنائك اليوم'),
      primaryCtaLink: s?.primaryCtaLink || WHATSAPP_URL,
      secondaryCtaText: rawSecondaryCta || (language === 'en' ? 'Explore Offers' : 'استكشف العروض'),
      secondaryCtaLink: s?.secondaryCtaLink ? `${basePath}${s.secondaryCtaLink.startsWith('/') ? s.secondaryCtaLink : `/${s.secondaryCtaLink}`}` : `${basePath}/offers`,
      reassuranceText: rawReassurance || (language === 'en' ? 'Certified Coaching Staff' : 'مدربون معتمدون ومتخصصون'),
    };
  }, [sanityHeroSlides, homepage?.heroImageUrl, language, basePath]);

  // Slide 2 Data (Clean duplicate of Slide 1 structure, using slide 2 image)
  const slide2 = useMemo(() => {
    const s = sanityHeroSlides && sanityHeroSlides.length > 1 ? sanityHeroSlides[1] : null;

    const rawTitle = s
      ? (typeof s.title === 'object'
          ? (language === 'en' ? (s.title?.en || s.title?.ar) : (s.title?.ar || s.title?.en))
          : (language === 'en' ? (s.titleEn || s.titleAr || s.title) : (s.titleAr || s.titleEn || s.title)))
      : slide1.title;

    const rawBadge = s
      ? (typeof s.badge === 'object'
          ? (language === 'en' ? (s.badge?.en || s.badge?.ar) : (s.badge?.ar || s.badge?.en))
          : (language === 'en' ? (s.badgeEn || s.badgeAr || s.badge) : (s.badgeAr || s.badgeEn || s.badge)))
      : slide1.badge;

    const rawDesc = s
      ? (typeof s.description === 'object'
          ? (language === 'en' ? (s.description?.en || '') : (s.description?.ar || ''))
          : (language === 'en' ? (s.descriptionEn || '') : (s.descriptionAr || '')))
      : '';

    const rawPrimaryCta = s
      ? (typeof s.primaryCtaText === 'object'
          ? (language === 'en' ? (s.primaryCtaText?.en || s.primaryCtaText?.ar) : (s.primaryCtaText?.ar || s.primaryCtaText?.en))
          : (language === 'en' ? (s.primaryCtaTextEn || s.primaryCtaTextAr || s.primaryCtaText) : (s.primaryCtaTextAr || s.primaryCtaTextEn || s.primaryCtaText)))
      : slide1.primaryCtaText;

    const rawSecondaryCta = s
      ? (typeof s.secondaryCtaText === 'object'
          ? (language === 'en' ? (s.secondaryCtaText?.en || s.secondaryCtaText?.ar) : (s.secondaryCtaText?.ar || s.secondaryCtaText?.en))
          : (language === 'en' ? (s.secondaryCtaTextEn || s.secondaryCtaTextAr || s.secondaryCtaText) : (s.secondaryCtaTextAr || s.secondaryCtaTextEn || s.secondaryCtaText)))
      : slide1.secondaryCtaText;

    const rawReassurance = s
      ? (typeof s.reassuranceText === 'object'
          ? (language === 'en' ? (s.reassuranceText?.en || s.reassuranceText?.ar) : (s.reassuranceText?.ar || s.reassuranceText?.en))
          : (language === 'en' ? (s.reassuranceTextEn || s.reassuranceTextAr || s.reassuranceText) : (s.reassuranceTextAr || s.reassuranceTextEn || s.reassuranceText)))
      : slide1.reassuranceText;

    return {
      id: s?._id || 'heroSlide-2',
      image: s?.imageUrl || '/images/national-day-96.png',
      title: rawTitle || slide1.title,
      badge: rawBadge || slide1.badge,
      description: rawDesc || '',
      primaryCtaText: rawPrimaryCta || slide1.primaryCtaText,
      primaryCtaLink: s?.primaryCtaLink || slide1.primaryCtaLink,
      secondaryCtaText: rawSecondaryCta || slide1.secondaryCtaText,
      secondaryCtaLink: s?.secondaryCtaLink ? `${basePath}${s.secondaryCtaLink.startsWith('/') ? s.secondaryCtaLink : `/${s.secondaryCtaLink}`}` : slide1.secondaryCtaLink,
      reassuranceText: rawReassurance || slide1.reassuranceText,
    };
  }, [sanityHeroSlides, language, basePath, slide1]);

  // Autoplay (5.5s interval, paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Touch / Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      if (isRTL) prevSlide();
      else nextSlide();
    } else if (isRightSwipe) {
      if (isRTL) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#18213F]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Hero Slider"
      >
        {/* SLIDE 1: Original Hero Design (Preserved 100%) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide1.image}
              alt={slide1.title}
              className="w-full h-full object-cover object-center animate-hero-bg"
              loading="eager"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          {/* Decorative subtle ambient circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/5" />
            <div className="absolute top-40 left-20 w-36 h-36 rounded-full border border-white/10" />
            <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full border border-[#D90429]/20" />
          </div>

          {/* Slide 1 Content */}
          <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 min-h-[90vh] flex items-center">
            <div className="max-w-3xl animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#D90429]/25 backdrop-blur-md border border-[#D90429]/40 text-white px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                <span className="text-sm font-bold">{slide1.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight whitespace-pre-line">
                {slide1.title}
              </h1>

              {/* Subtitle / Description */}
              <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl font-normal">
                {slide1.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={slide1.primaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <MessageCircle size={22} />
                  <span>{slide1.primaryCtaText}</span>
                </a>
                <Link
                  to={slide1.secondaryCtaLink}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>{slide1.secondaryCtaText}</span>
                  <ArrowIcon size={20} />
                </Link>
              </div>

              {/* Reassurance badge */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10 text-white/80 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#FFC400]" />
                  <span>{slide1.reassuranceText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 2: Clean Hero with Slide 2 Image, No Dark Overlay, Green CTAs, and Right-Aligned Content */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image: Original colors and brightness (NO dark overlay), mobile object-position: 84% center */}
          <div className="absolute inset-0">
            <img
              src={slide2.image}
              alt={slide2.title}
              className="w-full h-full object-cover object-[84%_center] sm:object-[42%_center] md:object-[38%_center] animate-hero-bg"
              loading="lazy"
            />
          </div>

          {/* Decorative subtle ambient circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/5" />
            <div className="absolute top-40 left-20 w-36 h-36 rounded-full border border-white/10" />
            <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full border border-[#006C35]/20" />
          </div>

          {/* Slide 2 Content (Right-aligned, moved down on mobile, no badge) */}
          <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 min-h-[90vh] flex items-center">
            <div className={`max-w-3xl w-full animate-fade-up relative top-[50px] sm:top-0 pt-8 sm:pt-14 md:pt-20 text-right ${isRTL ? 'md:-mr-6 lg:-mr-15' : 'md:-ml-6 lg:-ml-55'}`}>
              {/* Title: Centered with line-height: 2 on mobile only */}
              <h1 className="text-center sm:text-right text-[26px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[2] sm:leading-tight mb-4 sm:mb-6 tracking-tight whitespace-pre-line">
                {slide2.title}
              </h1>

              {/* Subtitle / Description: Clean responsive sizing and spacing */}
              {slide2.description ? (
                <p className="text-white/90 text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl font-normal">
                  {slide2.description}
                </p>
              ) : null}

              {/* CTA Buttons: Both Saudi Green, positioned on the right underneath the text */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
                <a
                  href={slide2.primaryCtaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#006C35] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#005429] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-emerald-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white text-center"
                >
                  <MessageCircle size={20} className="sm:w-[22px] sm:h-[22px]" />
                  <span>{slide2.primaryCtaText}</span>
                </a>
                <Link
                  to={slide2.secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 bg-[#006C35]/25 backdrop-blur-md text-white border-2 border-[#006C35] hover:bg-[#006C35]/40 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:border-[#00843D] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white text-center"
                >
                  <span>{slide2.secondaryCtaText}</span>
                  <ArrowIcon size={18} className="sm:w-5 sm:h-5" />
                </Link>
              </div>

              {/* Reassurance badge */}
              <div className="flex flex-wrap items-center gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-white/80 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#00E676]" />
                  <span>{slide2.reassuranceText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={isRTL ? nextSlide : prevSlide}
          aria-label={isRTL ? (language === 'en' ? 'Next Slide' : 'الشريحة التالية') : (language === 'en' ? 'Previous Slide' : 'الشريحة السابقة')}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 md:left-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all duration-300 shadow-lg group focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={isRTL ? prevSlide : nextSlide}
          aria-label={isRTL ? (language === 'en' ? 'Previous Slide' : 'الشريحة السابقة') : (language === 'en' ? 'Next Slide' : 'الشريحة التالية')}
          className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 md:right-8 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all duration-300 shadow-lg group focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-[#18213F]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={language === 'en' ? `Go to slide ${idx + 1}` : `الانتقال إلى الشريحة ${idx + 1}`}
              className={`transition-all duration-500 rounded-full ${
                idx === currentSlide
                  ? 'w-8 h-2.5 bg-[#D90429]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/75'
              }`}
            />
          ))}
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
