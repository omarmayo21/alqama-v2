import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Image as ImageIcon,
  Maximize2,
  Calendar,
  Layers,
  MessageCircle
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { galleryItems } from '../data/gallery';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';
import { WHATSAPP_URL } from '../utils/constants';

interface ResolvedAlbumDetail {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage: string;
  images: string[];
  category: string;
  categoryLabel: string;
}

const GalleryAlbum: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, isRTL } = useLanguage();
  const { galleryImages: sanityGallery, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  // Single-image viewer state
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Resolve album from Sanity or fallback data
  const album: ResolvedAlbumDetail | null = useMemo(() => {
    if (!slug) return null;
    const decodedSlug = decodeURIComponent(slug);

    // 1. Try Sanity
    if (sanityGallery && sanityGallery.length > 0) {
      const matchIdx = sanityGallery.findIndex((doc, idx) => {
        const docSlug = (doc as any).slug || (doc.titleEn ? doc.titleEn.toLowerCase().replace(/\s+/g, '-') : null) || doc._id || `album-${idx}`;
        const fallback = galleryItems[idx];
        return (
          docSlug === decodedSlug ||
          doc._id === decodedSlug ||
          fallback?.slug === decodedSlug ||
          fallback?.id === decodedSlug
        );
      });

      if (matchIdx !== -1) {
        const doc = sanityGallery[matchIdx];
        const fallback = galleryItems[matchIdx] || galleryItems[0];
        const cover = doc.coverImageUrl || doc.imageUrl || fallback?.coverImage || fallback?.image || '/images/hero-bg.jpg';

        let albumImages: string[] = [];
        if (doc.imagesUrls && Array.isArray(doc.imagesUrls) && doc.imagesUrls.length > 0) {
          albumImages = doc.imagesUrls.filter(Boolean);
        } else if (fallback?.images && Array.isArray(fallback.images) && fallback.images.length > 0) {
          albumImages = fallback.images;
        } else {
          albumImages = [cover];
        }

        if (!albumImages.includes(cover)) {
          albumImages = [cover, ...albumImages];
        }

        const cat = (doc.category as string) || 'other';

        return {
          id: doc._id || `album-${matchIdx}`,
          slug: (doc as any).slug || fallback?.slug || decodedSlug,
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
        };
      }
    }

    // 2. Try Static Fallback
    const staticItem = galleryItems.find(
      (item) => item.slug === decodedSlug || item.id === decodedSlug
    );

    if (staticItem) {
      const cover = staticItem.coverImage || staticItem.image;
      let albumImages = staticItem.images && staticItem.images.length > 0 ? staticItem.images : [cover];
      if (!albumImages.includes(cover)) {
        albumImages = [cover, ...albumImages];
      }

      return {
        id: staticItem.id,
        slug: staticItem.slug || staticItem.id,
        title: language === 'en' ? (staticItem.titleEn || staticItem.title) : staticItem.title,
        description: language === 'en' ? (staticItem.descriptionEn || '') : (staticItem.description || ''),
        coverImage: cover,
        images: albumImages,
        category: staticItem.category,
        categoryLabel: staticItem.category === 'tournaments'
          ? t.galleryPage.tournamentsCategory
          : staticItem.category === 'events'
          ? t.galleryPage.eventsCategory
          : staticItem.category === 'training'
          ? t.galleryPage.trainingCategory
          : t.galleryPage.otherCategory,
      };
    }

    return null;
  }, [slug, sanityGallery, language, cmsT, t.galleryPage]);

  // If album not found, redirect back to gallery
  if (!album) {
    return <Navigate to={basePath ? `${basePath}/gallery` : '/gallery'} replace />;
  }

  // Single-image modal controls
  const handleOpenViewer = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseViewer = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const handlePrevPhoto = useCallback(() => {
    if (!album || album.images.length <= 1) return;
    setSelectedPhotoIndex((prev) => (prev === null || prev === 0 ? album.images.length - 1 : prev - 1));
  }, [album]);

  const handleNextPhoto = useCallback(() => {
    if (!album || album.images.length <= 1) return;
    setSelectedPhotoIndex((prev) => (prev === null || prev === album.images.length - 1 ? 0 : prev + 1));
  }, [album]);

  // Keyboard navigation for image viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseViewer();
      if (e.key === 'ArrowRight') isRTL ? handlePrevPhoto() : handleNextPhoto();
      if (e.key === 'ArrowLeft') isRTL ? handleNextPhoto() : handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, isRTL, handlePrevPhoto, handleNextPhoto, handleCloseViewer]);

  // Prevent background scrolling when image viewer is active
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhotoIndex]);

  const photoCountText = language === 'en'
    ? `${album.images.length} ${album.images.length === 1 ? 'Photo' : 'Photos'}`
    : `${album.images.length} ${album.images.length === 1 ? 'صورة' : 'صور'}`;

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title={album.title}
        breadcrumbs={[
          { label: t.nav.gallery, path: `${basePath}/gallery` },
          { label: album.title },
        ]}
      />

      {/* Main Album Content Section */}
      <section className="section-padding bg-[#F8F9FA] min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Top Bar: Back Link & Category */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <Link
                to={`${basePath}/gallery`}
                className="group inline-flex items-center gap-2 bg-white text-[#18213F] px-5 py-2.5 rounded-2xl font-bold text-sm border border-gray-200/80 hover:border-[#D90429] hover:text-[#D90429] shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <ArrowIcon size={16} className={`transition-transform duration-300 ${isRTL ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                <span>{t.galleryPage.backToGallery}</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-white text-[#18213F] border border-gray-200/80 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-sm">
                  <Sparkles size={14} className="text-[#D90429]" />
                  <span>{album.categoryLabel}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#18213F] text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-sm tabular-nums">
                  <ImageIcon size={14} className="text-[#FFC400]" />
                  <span>{photoCountText}</span>
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero / Cover Presentation & Album Description */}
          <ScrollReveal delay={50}>
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Large Cover Image */}
                <div 
                  className="lg:col-span-5 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#18213F] shadow-lg group cursor-pointer"
                  onClick={() => handleOpenViewer(0)}
                >
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18213F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                    <div className="w-14 h-14 rounded-2xl bg-[#D90429] text-white flex items-center justify-center shadow-xl shadow-red-950/40">
                      <Maximize2 size={24} />
                    </div>
                  </div>

                  <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} text-white`}>
                    <span className="text-[11px] font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20">
                      {language === 'en' ? 'Cover Photo' : 'صورة الغلاف الرئيسية'}
                    </span>
                  </div>
                </div>

                {/* Album Info & Description */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-[#D90429] font-black text-xs uppercase tracking-wider mb-3">
                    <Layers size={14} />
                    <span>{album.categoryLabel}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#18213F] leading-tight mb-4">
                    {album.title}
                  </h1>

                  {album.description ? (
                    <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed font-normal mb-6">
                      {album.description}
                    </p>
                  ) : (
                    <p className="text-[#5A6E85] text-base leading-relaxed font-normal mb-6">
                      {language === 'en' 
                        ? 'Explore the complete photo collection captured from this event at ALQIMA Sports Academy.' 
                        : 'استعرض كافة الصور واللحظات المميزة الموثقة من هذه الفعالية بأكاديمية القمة الرياضية.'}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-[#5A6E85] flex items-center gap-2">
                      <Calendar size={15} className="text-[#D90429]" />
                      <span>{language === 'en' ? 'Click any photo to view full size' : 'انقر على أي صورة لتكبيرها واستعراضها'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Album Photos Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-black text-[#18213F] flex items-center gap-2.5">
                <ImageIcon size={22} className="text-[#D90429]" />
                <span>{language === 'en' ? 'Album Photos' : 'صور الألبوم'}</span>
              </h2>
              <span className="text-sm font-bold text-[#5A6E85] tabular-nums">
                {photoCountText}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6">
              {album.images.map((imgUrl, idx) => (
                <ScrollReveal key={`${imgUrl}-${idx}`} delay={idx * 40}>
                  <div
                    onClick={() => handleOpenViewer(idx)}
                    className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#18213F] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100"
                  >
                    <img
                      src={imgUrl}
                      alt={`${album.title} - ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#D90429] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </div>

                    {/* Image Number Badge */}
                    <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'}`}>
                      <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/15 tabular-nums">
                        {idx + 1} / {album.images.length}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Single-Image Viewer Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-5 md:p-6 animate-fade-in select-none max-h-[100dvh] overflow-hidden"
          onClick={handleCloseViewer}
        >
          {/* Top Bar: Counter, Title & Close Button */}
          <div
            className="w-full flex items-center justify-between z-20 max-w-5xl mb-3 px-2 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="text-white/90 font-bold text-xs sm:text-sm bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur-sm tabular-nums flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <ImageIcon size={14} className="text-[#FFC400] sm:w-4 sm:h-4" />
                <span>{selectedPhotoIndex + 1}</span>
                <span className="text-white/50">{t.galleryPage.imageCounter}</span>
                <span>{album.images.length}</span>
              </div>
              <span className="inline-block text-xs font-bold text-white/80 bg-white/5 px-3 py-1.5 rounded-xl truncate max-w-[180px] sm:max-w-md">
                {album.title}
              </span>
            </div>

            <button
              onClick={handleCloseViewer}
              className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-[#D90429] text-white transition-all duration-200 cursor-pointer backdrop-blur-sm flex items-center justify-center flex-shrink-0 hover:scale-105 active:scale-95"
              aria-label={t.galleryPage.closeLightbox}
              title={t.galleryPage.closeLightbox}
            >
              <X size={20} className="text-white sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Center Stage: Constrained Image Viewport with Prev/Next Controls */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 px-10 sm:px-14 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            {album.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  isRTL ? handleNextPhoto() : handlePrevPhoto();
                }}
                className={`absolute ${isRTL ? 'right-0 sm:right-1' : 'left-0 sm:left-1'} z-30 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-[#D90429] text-white backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-xl cursor-pointer flex items-center justify-center`}
                aria-label={t.galleryPage.prevImage}
                title={t.galleryPage.prevImage}
              >
                {isRTL ? <ChevronRight size={20} className="sm:w-6 sm:h-6" /> : <ChevronLeft size={20} className="sm:w-6 sm:h-6" />}
              </button>
            )}

            {/* Constrained Image Frame: Image keeps natural aspect ratio, never cropped or stretched */}
            <div className="relative flex items-center justify-center max-w-full max-h-full min-h-0 min-w-0">
              <img
                key={selectedPhotoIndex}
                src={album.images[selectedPhotoIndex]}
                alt={`${album.title} - ${selectedPhotoIndex + 1}`}
                className="max-w-full max-h-[78vh] sm:max-h-[82vh] w-auto h-auto object-contain rounded-2xl shadow-2xl animate-fade-in select-none"
              />
            </div>

            {/* Next Button */}
            {album.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  isRTL ? handlePrevPhoto() : handleNextPhoto();
                }}
                className={`absolute ${isRTL ? 'left-0 sm:left-1' : 'right-0 sm:right-1'} z-30 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-[#D90429] text-white backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-xl cursor-pointer flex items-center justify-center`}
                aria-label={t.galleryPage.nextImage}
                title={t.galleryPage.nextImage}
              >
                {isRTL ? <ChevronLeft size={20} className="sm:w-6 sm:h-6" /> : <ChevronRight size={20} className="sm:w-6 sm:h-6" />}
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip for Quick Switching */}
          {album.images.length > 1 && (
            <div
              className="w-full max-w-2xl my-2 px-3 py-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-x-auto flex items-center justify-start sm:justify-center gap-2 z-20 scrollbar-thin max-h-16 flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {album.images.map((imgUrl, thumbIdx) => {
                const isActiveThumb = thumbIdx === selectedPhotoIndex;
                return (
                  <button
                    key={`${imgUrl}-${thumbIdx}`}
                    onClick={() => setSelectedPhotoIndex(thumbIdx)}
                    className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer border-2 ${
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
        </div>
      )}

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-[#18213F] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollReveal direction="scale">
            <span className="inline-block bg-[#D90429] text-white text-xs font-black px-4 py-1.5 rounded-full mb-4">
              {language === 'en' ? 'Join the Champions' : 'انضم إلى أبطالنا'}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {language === 'en'
                ? 'Be Part of Our Next Championship'
                : 'كن جزءاً من بطولتنا وفعاليتنا القادمة'}
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 font-normal">
              {language === 'en'
                ? 'Enroll your child in our specialized academies across 7 sports and let them experience real athletic development.'
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

export default GalleryAlbum;
