import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  Trophy, 
  Calendar, 
  Dumbbell, 
  Layers, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { galleryItems } from '../data/gallery';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';
import { WHATSAPP_URL } from '../utils/constants';

type CategoryFilter = 'all' | 'tournaments' | 'events' | 'training' | 'other';

const Gallery: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { galleryImages: sanityGallery, t: cmsT } = useSanityData();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 1. Resolve Dynamic Gallery Data (Sanity Primary -> Static Fallback)
  const allImages = useMemo(() => {
    if (sanityGallery && sanityGallery.length > 0) {
      return sanityGallery.map((img, idx) => {
        const cat = (img.category as CategoryFilter) || 'other';
        const fallback = galleryItems[idx] || galleryItems[0];
        return {
          id: img._id || `gallery-${idx}`,
          title: cmsT(img.title, language === 'en' ? (img.titleEn || fallback?.titleEn || fallback?.title) : (img.titleAr || fallback?.title)),
          description: cmsT(img.description, language === 'en' ? (img.descriptionEn || '') : (img.descriptionAr || '')),
          image: img.imageUrl || fallback?.image || '/images/hero-bg.jpg',
          category: cat,
          categoryLabel: img.categoryTitle
            ? cmsT(img.categoryTitle, '')
            : cat === 'tournaments'
            ? t.galleryPage.tournamentsCategory
            : cat === 'events'
            ? t.galleryPage.eventsCategory
            : cat === 'training'
            ? t.galleryPage.trainingCategory
            : t.galleryPage.otherCategory,
          featured: img.isFeatured || false,
        };
      });
    }
    return galleryItems.map((item) => ({
      id: item.id,
      title: language === 'en' ? (item.titleEn || item.title) : item.title,
      description: language === 'en' ? (item.descriptionEn || '') : (item.description || ''),
      image: item.image,
      category: item.category,
      categoryLabel: item.category === 'tournaments'
        ? t.galleryPage.tournamentsCategory
        : item.category === 'events'
        ? t.galleryPage.eventsCategory
        : item.category === 'training'
        ? t.galleryPage.trainingCategory
        : t.galleryPage.otherCategory,
      featured: item.featured || false,
    }));
  }, [sanityGallery, language, cmsT, t.galleryPage]);

  // Filtered list
  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [allImages, activeCategory]);

  // Categories configuration with icons & counts
  const categories = useMemo(() => [
    {
      id: 'all' as CategoryFilter,
      label: t.galleryPage.allCategory,
      icon: Layers,
      count: allImages.length,
    },
    {
      id: 'tournaments' as CategoryFilter,
      label: t.galleryPage.tournamentsCategory,
      icon: Trophy,
      count: allImages.filter((img) => img.category === 'tournaments').length,
    },
    {
      id: 'events' as CategoryFilter,
      label: t.galleryPage.eventsCategory,
      icon: Calendar,
      count: allImages.filter((img) => img.category === 'events').length,
    },
    {
      id: 'training' as CategoryFilter,
      label: t.galleryPage.trainingCategory,
      icon: Dumbbell,
      count: allImages.filter((img) => img.category === 'training').length,
    },
    {
      id: 'other' as CategoryFilter,
      label: t.galleryPage.otherCategory,
      icon: ImageIcon,
      count: allImages.filter((img) => img.category === 'other').length,
    },
  ].filter((c) => c.id === 'all' || c.count > 0), [allImages, t.galleryPage]);

  // Lightbox Navigation Handlers
  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [lightboxIndex, filteredImages.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') isRTL ? handlePrev() : handleNext();
      if (e.key === 'ArrowLeft') isRTL ? handleNext() : handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isRTL, handlePrev, handleNext, handleClose]);

  // Prevent background scrolling when Lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const activeLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title={t.galleryPage.title}
        subtitle={t.galleryPage.subtitle}
        breadcrumbs={[{ label: t.nav.gallery }]}
        badge={t.galleryPage.badge}
      />

      {/* Gallery Section */}
      <section className="section-padding bg-[#F8F9FA] min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-12">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setLightboxIndex(null);
                    }}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer shadow-sm ${
                      isActive
                        ? 'bg-[#D90429] text-white shadow-lg shadow-red-500/20 scale-105'
                        : 'bg-white text-[#18213F] hover:bg-gray-50 border border-gray-200/80 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-white' : 'text-[#D90429]'} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-bold tabular-nums ${
                        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#5A6E85]'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Photos Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredImages.map((item, idx) => (
                <ScrollReveal key={item.id} delay={idx * 50}>
                  <div
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer flex flex-col h-full"
                  >
                    {/* Image Box */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-[#18213F]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#18213F]/90 via-[#18213F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                        <span className="inline-flex items-center gap-1.5 bg-[#18213F]/80 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                          <Sparkles size={12} className="text-[#FFC400]" />
                          <span>{item.categoryLabel}</span>
                        </span>
                      </div>

                      {/* Zoom Icon Action */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <div className="w-14 h-14 rounded-2xl bg-[#D90429] text-white flex items-center justify-center shadow-xl shadow-red-950/40">
                          <Maximize2 size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Image Details */}
                    <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-[#18213F] mb-2 leading-tight group-hover:text-[#D90429] transition-colors">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-[#5A6E85] text-sm leading-relaxed font-medium line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 max-w-lg mx-auto p-8 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#D90429] flex items-center justify-center mx-auto mb-4">
                <ImageIcon size={32} />
              </div>
              <h3 className="text-xl font-black text-[#18213F] mb-2">{t.galleryPage.emptyTitle}</h3>
              <p className="text-[#5A6E85] text-sm font-medium">{t.galleryPage.emptySubtitle}</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 animate-fade-in"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="w-full flex items-center justify-between z-20 max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white/80 font-bold text-sm bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm tabular-nums">
              <span>{lightboxIndex + 1}</span>
              <span className="mx-1.5 text-white/50">{t.galleryPage.imageCounter}</span>
              <span>{filteredImages.length}</span>
            </div>

            <button
              onClick={handleClose}
              className="p-3 rounded-2xl bg-white/10 hover:bg-[#D90429] text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
              aria-label={t.galleryPage.closeLightbox}
              title={t.galleryPage.closeLightbox}
            >
              <X size={24} />
            </button>
          </div>

          {/* Center Stage: Image + Navigation Arrows */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={isRTL ? handleNext : handlePrev}
                className={`absolute ${isRTL ? 'right-2 md:-right-6' : 'left-2 md:-left-6'} z-30 p-3.5 rounded-2xl bg-white/15 hover:bg-[#D90429] text-white backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer`}
                aria-label={t.galleryPage.prevImage}
              >
                {isRTL ? <ChevronRight size={26} /> : <ChevronLeft size={26} />}
              </button>
            )}

            {/* Main Image */}
            <div className="relative max-h-[70vh] max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <img
                src={activeLightboxImage.image}
                alt={activeLightboxImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl animate-fade-up select-none"
              />
            </div>

            {/* Next Button */}
            {filteredImages.length > 1 && (
              <button
                onClick={isRTL ? handlePrev : handleNext}
                className={`absolute ${isRTL ? 'left-2 md:-left-6' : 'right-2 md:-right-6'} z-30 p-3.5 rounded-2xl bg-white/15 hover:bg-[#D90429] text-white backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer`}
                aria-label={t.galleryPage.nextImage}
              >
                {isRTL ? <ChevronLeft size={26} /> : <ChevronRight size={26} />}
              </button>
            )}
          </div>

          {/* Bottom Caption */}
          <div
            className="w-full max-w-3xl text-center bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="inline-block bg-[#D90429] text-white text-xs font-black px-3 py-1 rounded-lg mb-2">
              {activeLightboxImage.categoryLabel}
            </span>
            <h4 className="text-white text-lg md:text-xl font-black mb-1">
              {activeLightboxImage.title}
            </h4>
            {activeLightboxImage.description && (
              <p className="text-white/80 text-sm font-medium leading-relaxed">
                {activeLightboxImage.description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#18213F] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollReveal direction="scale">
            <span className="inline-block bg-[#D90429] text-white text-xs font-black px-4 py-1.5 rounded-full mb-4">
              {language === 'en' ? 'Start Your Champion’s Story' : 'اصنع قصة بطلكم معنا'}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {language === 'en'
                ? 'Want Your Child to Be in Our Next Champions Gallery?'
                : 'هل ترغب في أن يكون طفلك ضمن معرض أبطالنا القادم؟'}
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 font-normal">
              {language === 'en'
                ? 'Enroll your child in our specialized academies across 7 sports and let them experience the thrill of real athletic development.'
                : 'سجل طفلك الآن في إحدى أكاديمياتنا التخصصية ودعهم يعيشون شغف وتحديات التدريب والبطولات.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-950/40"
              >
                <MessageCircle size={22} />
                <span>{language === 'en' ? 'Talk to Our Team on WhatsApp' : 'تحدث مع فريقنا عبر واتساب'}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
