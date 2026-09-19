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

interface ResolvedAlbum {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  images: string[];
  category: CategoryFilter;
  categoryLabel: string;
  featured?: boolean;
}

const Gallery: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { galleryImages: sanityGallery, t: cmsT } = useSanityData();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  // State for active album and active photo index inside that album
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // 1. Resolve Dynamic Gallery Albums Data (Sanity Primary -> Static Fallback)
  const allAlbums: ResolvedAlbum[] = useMemo(() => {
    if (sanityGallery && sanityGallery.length > 0) {
      return sanityGallery.map((doc, idx) => {
        const cat = (doc.category as CategoryFilter) || 'other';
        const fallback = galleryItems[idx] || galleryItems[0];
        const cover = doc.coverImageUrl || doc.imageUrl || fallback?.coverImage || fallback?.image || '/images/hero-bg.jpg';
        
        let albumImages: string[] = [];
        if (doc.imagesUrls && Array.isArray(doc.imagesUrls) && doc.imagesUrls.length > 0) {
          albumImages = doc.imagesUrls.filter(Boolean);
        } else if (fallback?.images && Array.isArray(fallback.images) && fallback.images.length > 0) {
          albumImages = fallback.images;
        } else {
          albumImages = [cover];
        }

        // Ensure cover is in the album list if not already
        if (!albumImages.includes(cover)) {
          albumImages = [cover, ...albumImages];
        }

        return {
          id: doc._id || `album-${idx}`,
          title: cmsT(doc.title, language === 'en' ? (doc.titleEn || fallback?.titleEn || fallback?.title) : (doc.titleAr || fallback?.title)),
          description: cmsT(doc.description, language === 'en' ? (doc.descriptionEn || '') : (doc.descriptionAr || '')),
          coverImage: cover,
          images: albumImages,
          category: cat,
          categoryLabel: doc.categoryTitle
            ? cmsT(doc.categoryTitle, '')
            : cat === 'tournaments'
            ? t.galleryPage.tournamentsCategory
            : cat === 'events'
            ? t.galleryPage.eventsCategory
            : cat === 'training'
            ? t.galleryPage.trainingCategory
            : t.galleryPage.otherCategory,
          featured: doc.isFeatured || false,
        };
      });
    }

    return galleryItems.map((item) => {
      const cover = item.coverImage || item.image;
      let albumImages = item.images && item.images.length > 0 ? item.images : [cover];
      if (!albumImages.includes(cover)) {
        albumImages = [cover, ...albumImages];
      }

      return {
        id: item.id,
        title: language === 'en' ? (item.titleEn || item.title) : item.title,
        description: language === 'en' ? (item.descriptionEn || '') : (item.description || ''),
        coverImage: cover,
        images: albumImages,
        category: item.category as CategoryFilter,
        categoryLabel: item.category === 'tournaments'
          ? t.galleryPage.tournamentsCategory
          : item.category === 'events'
          ? t.galleryPage.eventsCategory
          : item.category === 'training'
          ? t.galleryPage.trainingCategory
          : t.galleryPage.otherCategory,
        featured: item.featured || false,
      };
    });
  }, [sanityGallery, language, cmsT, t.galleryPage]);

  // Filtered albums list
  const filteredAlbums = useMemo(() => {
    if (activeCategory === 'all') return allAlbums;
    return allAlbums.filter((a) => a.category === activeCategory);
  }, [allAlbums, activeCategory]);

  // Categories configuration with icons & counts
  const categories = useMemo(() => [
    {
      id: 'all' as CategoryFilter,
      label: t.galleryPage.allCategory,
      icon: Layers,
      count: allAlbums.length,
    },
    {
      id: 'tournaments' as CategoryFilter,
      label: t.galleryPage.tournamentsCategory,
      icon: Trophy,
      count: allAlbums.filter((img) => img.category === 'tournaments').length,
    },
    {
      id: 'events' as CategoryFilter,
      label: t.galleryPage.eventsCategory,
      icon: Calendar,
      count: allAlbums.filter((img) => img.category === 'events').length,
    },
    {
      id: 'training' as CategoryFilter,
      label: t.galleryPage.trainingCategory,
      icon: Dumbbell,
      count: allAlbums.filter((img) => img.category === 'training').length,
    },
    {
      id: 'other' as CategoryFilter,
      label: t.galleryPage.otherCategory,
      icon: ImageIcon,
      count: allAlbums.filter((img) => img.category === 'other').length,
    },
  ].filter((c) => c.id === 'all' || c.count > 0), [allAlbums, t.galleryPage]);

  const activeAlbum = selectedAlbumIndex !== null ? filteredAlbums[selectedAlbumIndex] : null;

  const handleOpenAlbum = (albumIdx: number) => {
    setSelectedAlbumIndex(albumIdx);
    setActivePhotoIndex(0);
  };

  const handleClose = useCallback(() => {
    setSelectedAlbumIndex(null);
    setActivePhotoIndex(0);
  }, []);

  // Navigation between photos inside the active album
  const handlePrevPhoto = useCallback(() => {
    if (!activeAlbum || activeAlbum.images.length <= 1) return;
    setActivePhotoIndex((prev) => (prev === 0 ? activeAlbum.images.length - 1 : prev - 1));
  }, [activeAlbum]);

  const handleNextPhoto = useCallback(() => {
    if (!activeAlbum || activeAlbum.images.length <= 1) return;
    setActivePhotoIndex((prev) => (prev === activeAlbum.images.length - 1 ? 0 : prev + 1));
  }, [activeAlbum]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedAlbumIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') isRTL ? handlePrevPhoto() : handleNextPhoto();
      if (e.key === 'ArrowLeft') isRTL ? handleNextPhoto() : handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAlbumIndex, isRTL, handlePrevPhoto, handleNextPhoto, handleClose]);

  // Prevent background scrolling when Lightbox is open
  useEffect(() => {
    if (selectedAlbumIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedAlbumIndex]);

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
                      setSelectedAlbumIndex(null);
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

          {/* Albums Grid */}
          {filteredAlbums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAlbums.map((album, idx) => (
                <ScrollReveal key={album.id} delay={idx * 50}>
                  <div
                    onClick={() => handleOpenAlbum(idx)}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer flex flex-col h-full"
                  >
                    {/* Cover Image Box */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-[#18213F]">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#18213F]/90 via-[#18213F]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                      {/* Top Badges */}
                      <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} flex items-center gap-2`}>
                        <span className="inline-flex items-center gap-1.5 bg-[#18213F]/85 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                          <Sparkles size={12} className="text-[#FFC400]" />
                          <span>{album.categoryLabel}</span>
                        </span>
                      </div>

                      {/* Photo Count Badge */}
                      <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                        <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-2.5 py-1.5 rounded-xl shadow-md tabular-nums">
                          <ImageIcon size={13} className="text-white" />
                          <span>
                            {language === 'en' 
                              ? `${album.images.length} ${album.images.length === 1 ? 'Photo' : 'Photos'}`
                              : `${album.images.length} ${album.images.length === 1 ? 'صورة' : 'صور'}`}
                          </span>
                        </span>
                      </div>

                      {/* Zoom Icon Action */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                        <div className="w-14 h-14 rounded-2xl bg-[#D90429] text-white flex items-center justify-center shadow-xl shadow-red-950/40">
                          <Maximize2 size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Album Details */}
                    <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-[#18213F] mb-2 leading-tight group-hover:text-[#D90429] transition-colors">
                          {album.title}
                        </h3>
                        {album.description && (
                          <p className="text-[#5A6E85] text-sm leading-relaxed font-medium line-clamp-2">
                            {album.description}
                          </p>
                        )}
                      </div>
                      <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#D90429]">
                        <span>{language === 'en' ? 'Open Album' : 'عرض الألبوم'}</span>
                        <span>{language === 'en' ? `${album.images.length} Images` : `${album.images.length} صور`}</span>
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

      {/* Album Lightbox Modal */}
      {selectedAlbumIndex !== null && activeAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-fade-in select-none"
          onClick={handleClose}
        >
          {/* Prominent Screen Corner Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className={`fixed top-3 ${isRTL ? 'left-3' : 'right-3'} sm:top-5 ${isRTL ? 'sm:left-5' : 'sm:right-5'} z-[1050] w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-[#D90429] text-white border border-white/30 backdrop-blur-md shadow-2xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95`}
            aria-label={t.galleryPage.closeLightbox}
            title={t.galleryPage.closeLightbox}
          >
            <X size={20} className="text-white sm:w-5 sm:h-5" />
          </button>

          {/* Centered Constrained Viewer Card */}
          <div
            className="relative w-full max-w-xl md:max-w-2xl bg-[#141B2D]/95 border border-white/15 rounded-3xl p-3.5 sm:p-5 shadow-2xl flex flex-col items-center justify-between gap-2.5 sm:gap-3 backdrop-blur-xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Viewer Card */}
            <div className="w-full flex items-center justify-between z-20 flex-shrink-0 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="inline-block bg-[#D90429] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md flex-shrink-0">
                  {activeAlbum.categoryLabel}
                </span>
                <h4 className="text-white text-xs sm:text-sm font-bold truncate">
                  {activeAlbum.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="text-white/80 font-bold text-[11px] sm:text-xs bg-white/10 px-2.5 py-1 rounded-lg tabular-nums flex items-center gap-1.5">
                  <ImageIcon size={13} className="text-[#FFC400]" />
                  <span>{activePhotoIndex + 1}</span>
                  <span className="text-white/40">/</span>
                  <span>{activeAlbum.images.length}</span>
                </div>

                <button
                  onClick={handleClose}
                  className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-[#D90429] text-white transition-all duration-200 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95"
                  aria-label={t.galleryPage.closeLightbox}
                  title={t.galleryPage.closeLightbox}
                >
                  <X size={18} className="text-white sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Center Stage: Main Constrained Image + Prev/Next Controls */}
            <div className="relative w-full flex items-center justify-center px-8 sm:px-10 py-1 min-h-0 flex-1">
              {/* Prev Button */}
              {activeAlbum.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? handleNextPhoto() : handlePrevPhoto();
                  }}
                  className={`absolute ${isRTL ? 'right-0 sm:right-1' : 'left-0 sm:left-1'} z-30 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-[#D90429] text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer`}
                  aria-label={t.galleryPage.prevImage}
                >
                  {isRTL ? <ChevronRight size={18} className="sm:w-5 sm:h-5" /> : <ChevronLeft size={18} className="sm:w-5 sm:h-5" />}
                </button>
              )}

              {/* Main Image Frame */}
              <div className="relative max-h-[30vh] sm:max-h-[36vh] md:max-h-[40vh] w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/60 flex items-center justify-center">
                <img
                  key={activePhotoIndex}
                  src={activeAlbum.images[activePhotoIndex] || activeAlbum.coverImage}
                  alt={`${activeAlbum.title} - ${activePhotoIndex + 1}`}
                  className="max-h-[30vh] sm:max-h-[36vh] md:max-h-[40vh] max-w-full w-auto object-contain rounded-2xl animate-fade-in select-none"
                />
              </div>

              {/* Next Button */}
              {activeAlbum.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    isRTL ? handlePrevPhoto() : handleNextPhoto();
                  }}
                  className={`absolute ${isRTL ? 'left-0 sm:left-1' : 'right-0 sm:right-1'} z-30 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-[#D90429] text-white border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer`}
                  aria-label={t.galleryPage.nextImage}
                >
                  {isRTL ? <ChevronLeft size={18} className="sm:w-5 sm:h-5" /> : <ChevronRight size={18} className="sm:w-5 sm:h-5" />}
                </button>
              )}
            </div>

            {/* Thumbnails Strip */}
            {activeAlbum.images.length > 1 && (
              <div className="w-full max-w-md px-2 py-1 bg-black/40 rounded-xl border border-white/10 overflow-x-auto flex items-center justify-start sm:justify-center gap-1.5 z-20 scrollbar-thin max-h-14 flex-shrink-0">
                {activeAlbum.images.map((imgUrl, thumbIdx) => {
                  const isActiveThumb = thumbIdx === activePhotoIndex;
                  return (
                    <button
                      key={`${imgUrl}-${thumbIdx}`}
                      onClick={() => setActivePhotoIndex(thumbIdx)}
                      className={`relative w-11 h-8 sm:w-13 sm:h-9 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer border-2 ${
                        isActiveThumb
                          ? 'border-[#D90429] scale-105 shadow-md shadow-red-500/40 opacity-100 ring-2 ring-[#D90429]/60'
                          : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/60'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${thumbIdx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Bottom Optional Description */}
            {activeAlbum.description && (
              <p className="text-white/70 text-[11px] sm:text-xs font-medium text-center line-clamp-1 flex-shrink-0 px-2">
                {activeAlbum.description}
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
