import React from 'react';
import {
  CheckCircle,
  MessageCircle,
  Sparkles,
  Users,
  CreditCard,
  ShieldCheck,
  HeartHandshake,
  Award,
  Zap,
  Star,
  Calendar,
  Clock,
} from 'lucide-react';
import { offers, offersEn, specialOffers, specialOffersEn } from '../data/offers';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL, getWhatsAppUrl } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const Offers: React.FC = () => {
  const { language } = useLanguage();
  const { siteSettings, offers: sanityOffers, paymentProviders, t: cmsT } = useSanityData();
  const t = translations[language];
  const currentOffers = language === 'en' ? offersEn : offers;
  const currentSpecialOffers = language === 'en' ? specialOffersEn : specialOffers;

  const displayedOffers = React.useMemo(() => {
    if (sanityOffers && sanityOffers.length > 0) {
      return sanityOffers.map((o, idx) => {
        const fallback = currentOffers[idx] || currentOffers[0];
        const title = cmsT(o.title, fallback?.title || '');
        const price =
          typeof o.price === 'object'
            ? cmsT(o.price as any, fallback?.price || '')
            : (o.price || fallback?.price || '');
        const sessionsCount =
          typeof o.sessionsCount === 'object'
            ? cmsT(o.sessionsCount as any, fallback?.sessionsCount || '')
            : (o.sessionsCount || fallback?.sessionsCount || '');
        const sportsIncluded =
          typeof o.sportsIncluded === 'object'
            ? cmsT(o.sportsIncluded as any, fallback?.sportsIncluded || '')
            : (o.sportsIncluded || fallback?.sportsIncluded || '');
        const badge = cmsT(o.badge, fallback?.badge || '');
        const tagline = cmsT(o.tagline, fallback?.tagline || '');
        const description = cmsT(o.description, fallback?.description || '');
        const features =
          o.features && o.features.length > 0
            ? o.features.map((f) => (typeof f === 'object' ? cmsT(f as any, '') : f))
            : fallback?.features || [];

        return {
          id: o.slug || o._id || `offer-${idx}`,
          title,
          price,
          sessionsCount,
          sportsIncluded,
          badge,
          tagline,
          description,
          features,
          popular: o.isPopular ?? fallback?.popular ?? false,
        };
      });
    }
    return currentOffers;
  }, [sanityOffers, currentOffers, cmsT]);

  // Helper to split sports list into separate pills if delimited by '-'
  const parseSportsList = (sportsStr?: string) => {
    if (!sportsStr) return [];
    if (sportsStr.includes('-')) {
      return sportsStr.split('-').map((s) => s.trim()).filter(Boolean);
    }
    return [sportsStr.trim()];
  };

  // Schedule content fetched from Sanity (with fallback to translations)
  const scheduleTitle = cmsT(siteSettings?.dailyScheduleTitle, t.offersPage.scheduleTitle);
  const scheduleDays = cmsT(siteSettings?.dailyScheduleDays, t.offersPage.scheduleDays);
  const scheduleHours = cmsT(siteSettings?.dailyScheduleHours, t.offersPage.scheduleHours);

  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      {/* Saudi National Day 96 Dedicated Page Header */}
      <PageHeader
        title={t.offersPage.title}
        subtitle={t.offersPage.subtitle}
        breadcrumbs={[{ label: t.nav.offers }]}
        badge={language === 'en' ? 'Saudi National Day 96 Offers' : 'عروض اليوم الوطني 96'}
      />

      {/* Main National Day 96 Offers Grid */}
      <section className="section-padding relative overflow-hidden pb-12 md:pb-16">
        {/* Subtle Saudi National Day Green & Gold Decorative Ambient Blobs */}
        <div className="absolute top-12 right-0 w-96 h-96 bg-[#006C35]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 left-0 w-96 h-96 bg-[#FFC400]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006C35]/10 border border-[#006C35]/20 text-[#006C35] font-bold text-sm mb-4">
                <Sparkles size={16} className="text-[#006C35]" />
                <span>
                  {language === 'en'
                    ? '🇸🇦 Limited-Time Saudi National Day 96 Specials'
                    : '🇸🇦 عروض حصرية واستثنائية بمناسبة اليوم الوطني 96'}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#18213F] mb-4">
                {language === 'en' ? (
                  <>
                    Saudi National Day 96 <span className="text-[#006C35]">Offers</span>
                  </>
                ) : (
                  <>
                    عروض وباقات <span className="text-[#006C35]">اليوم الوطني 96</span>
                  </>
                )}
              </h2>
              <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed">
                {language === 'en'
                  ? 'Choose the ideal membership for your young athlete with unmissable prices, certified coaching, and flexible multi-sport access.'
                  : 'اختر الباقة الأنسب لأبطالك بأسعار استثنائية وإشراف تدريبي معتمد وشامل لمختلف الرياضات في بيئة متطورة وآمنة.'}
              </p>
            </div>
          </ScrollReveal>

          {/* 5 Offers Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            {displayedOffers.map((offer, idx) => {
              const sportsList = parseSportsList(offer.sportsIncluded);
              const isAnySport =
                offer.sportsIncluded?.includes('أي رياضة') ||
                offer.sportsIncluded?.toLowerCase().includes('any sport');

              return (
                <ScrollReveal key={offer.id} delay={idx * 75}>
                  <div
                    className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full border ${
                      offer.popular
                        ? 'border-[#006C35] shadow-2xl shadow-[#006C35]/15 ring-2 ring-[#006C35]/20 relative z-10'
                        : 'border-emerald-950/10 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {/* Top Header & Price Banner */}
                    <div>
                      <div
                        className="p-6 md:p-8 text-white relative overflow-hidden"
                        style={{
                          background: offer.popular
                            ? 'linear-gradient(135deg, #005228 0%, #006C35 60%, #00843D 100%)'
                            : 'linear-gradient(135deg, #18213F 0%, #202C54 100%)',
                        }}
                      >
                        {/* Subtle Gold Accent Ribbon / Glow */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFC400]/15 rounded-full blur-xl pointer-events-none" />

                        {/* Badges row */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          {offer.badge ? (
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full shadow-sm ${
                                offer.popular
                                  ? 'bg-[#FFC400] text-[#004D25]'
                                  : 'bg-white/20 text-white backdrop-blur-md'
                              }`}
                            >
                              <Star size={13} className="fill-current" />
                              <span>{offer.badge}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full bg-white/10 text-white/90">
                              <span>96 🇸🇦</span>
                            </span>
                          )}

                          {offer.sessionsCount && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
                              <Calendar size={13} />
                              <span>{offer.sessionsCount}</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                          {offer.title}
                        </h3>

                        {/* Tagline / Subtitle */}
                        {offer.tagline && (
                          <p className="text-white/80 text-sm font-medium mb-4">{offer.tagline}</p>
                        )}

                        {/* Price Display - STRONGEST VISUAL ELEMENT */}
                        <div className="mt-4 pt-4 border-t border-white/15 flex items-baseline gap-2">
                          <div className="text-4xl md:text-5xl font-black text-[#FFC400] tracking-tight drop-shadow-sm">
                            {offer.price}
                          </div>
                        </div>
                      </div>

                      {/* Card Body & Details */}
                      <div className="p-6 md:p-8 space-y-6">
                        {/* Sports Included Section */}
                        {offer.sportsIncluded && (
                          <div className="rounded-2xl bg-[#F0F7F2] p-4 border border-[#006C35]/15">
                            <div className="text-xs font-black text-[#006C35] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                              <Zap size={15} className="text-[#006C35]" />
                              <span>
                                {language === 'en' ? 'Sports Included:' : 'الرياضات المشمولة:'}
                              </span>
                            </div>

                            {isAnySport ? (
                              <div className="inline-flex items-center gap-2 bg-[#006C35] text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-sm">
                                <Award size={14} />
                                <span>{offer.sportsIncluded}</span>
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-1.5">
                                {sportsList.map((sport, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="inline-block bg-white text-[#18213F] text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-900/10 shadow-2xs"
                                  >
                                    {sport}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Features & Details Checklist */}
                        {offer.features && offer.features.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <div className="text-xs font-bold text-[#5A6E85] flex items-center gap-1.5">
                              <CheckCircle size={15} className="text-[#006C35]" />
                              <span>
                                {language === 'en' ? 'Package Benefits:' : 'مزايا وتفاصيل الباقة:'}
                              </span>
                            </div>
                            <ul className="space-y-2.5">
                              {offer.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                                  <CheckCircle
                                    size={16}
                                    className="text-[#006C35] flex-shrink-0 mt-0.5"
                                  />
                                  <span className="text-[#18213F] font-semibold leading-snug">
                                    {feat}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Action - WhatsApp CTA */}
                    <div className="p-6 md:p-8 pt-0 mt-auto">
                      <a
                        href={getWhatsAppUrl(
                          language === 'en'
                            ? `Hello, I would like to inquire and enroll in the Saudi National Day 96 offer (${offer.title} - ${offer.price}) at ALQIMA Sports Academy.`
                            : `السلام عليكم، أود الاستفسار والتسجيل في عرض اليوم الوطني 96 (${offer.title} - ${offer.price}) بأكاديمية القمة الرياضية.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-4 rounded-2xl font-black text-center flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:-translate-y-1 ${
                          offer.popular
                            ? 'bg-[#006C35] text-white hover:bg-[#005228] shadow-[#006C35]/25 hover:shadow-lg'
                            : 'bg-[#18213F] text-white hover:bg-[#006C35] hover:shadow-lg'
                        }`}
                      >
                        <MessageCircle size={20} />
                        <span>
                          {language === 'en' ? 'Claim Offer on WhatsApp' : 'احجز العرض عبر واتساب'}
                        </span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE SECTION */}
      <section className="py-12 bg-white border-y border-emerald-900/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-[#F0F7F2] rounded-3xl p-6 md:p-8 border border-[#006C35]/20 shadow-lg shadow-[#006C35]/5 relative overflow-hidden">
              {/* Subtle Ambient Saudi Green / Gold Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC400]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#006C35]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
                {/* Title & Badge */}
                <div className="lg:max-w-xs">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006C35]/10 text-[#006C35] font-bold text-xs mb-2.5">
                    <Calendar size={13} className="text-[#006C35]" />
                    <span>{t.offersPage.scheduleBadge}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#18213F] leading-tight">
                    {scheduleTitle}
                  </h3>
                </div>

                {/* Schedule Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {/* Days Card */}
                  <div className="bg-white rounded-2xl p-5 border border-emerald-900/10 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#006C35] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#006C35]/20">
                      <Calendar size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#5A6E85] block mb-0.5">
                        {language === 'en' ? 'Days' : 'الأيام'}
                      </span>
                      <span className="text-base md:text-lg font-black text-[#18213F] leading-snug block">
                        {scheduleDays}
                      </span>
                    </div>
                  </div>

                  {/* Hours Card */}
                  <div className="bg-white rounded-2xl p-5 border border-emerald-900/10 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#FFC400] text-[#004D25] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#FFC400]/25">
                      <Clock size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#5A6E85] block mb-0.5">
                        {language === 'en' ? 'Hours' : 'الأوقات'}
                      </span>
                      <span className="text-base md:text-lg font-black text-[#18213F] leading-snug block">
                        {scheduleHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Special Highlights & Family Perks */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Exclusive Privileges' : 'مزايا وتسهيلات حصرية'}
              highlight={language === 'en' ? 'for Parents & Families' : 'لأولياء الأمور'}
              description={
                language === 'en'
                  ? 'We are dedicated to providing a comprehensive sports experience supporting families with maximum flexibility and comfort.'
                  : 'نحرص على تقديم تجربة رياضية وتربوية متكاملة تدعم العائلة وتوفر أفضل رعاية ومرونة لأبنائكم.'
              }
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentSpecialOffers.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 80}>
                <div className="bg-[#F8FAF9] rounded-2xl p-7 border border-emerald-900/10 hover:border-[#006C35]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#006C35] mb-5 border border-emerald-900/10">
                      {item.id === 'siblings-discount' && <Users size={24} />}
                      {item.id === 'tabby-tamara' && <CreditCard size={24} />}
                      {item.id === 'parents-attendance' && <HeartHandshake size={24} />}
                    </div>
                    <span className="inline-block bg-[#006C35]/10 text-[#006C35] text-xs font-black px-2.5 py-1 rounded-full mb-3">
                      {item.highlight}
                    </span>
                    <h3 className="text-xl font-black text-[#18213F] mb-3">{item.title}</h3>
                    <p className="text-[#5A6E85] text-sm leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      language === 'en'
                        ? `Hello, I would like to inquire about ${item.title}.`
                        : `مرحباً، أود الاستفسار عن ${item.title}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#006C35] font-bold text-sm hover:text-[#004D25] inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    <MessageCircle size={16} />
                    <span>
                      {language === 'en' ? 'Contact for Details' : 'تواصل لمعرفة التفاصيل'}
                    </span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tabby & Tamara Installment Section */}
      <section className="section-padding bg-[#004D25] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFC400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal direction="scale">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/15 shadow-2xl">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-flex items-center gap-1.5 bg-[#FFC400] text-[#004D25] text-xs font-black px-4 py-1.5 rounded-full mb-4 shadow-sm">
                  <Star size={13} className="fill-current" />
                  <span>{t.paymentSection.badge}</span>
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-4">{t.paymentSection.title}</h2>
                <p className="text-white/85 text-base md:text-lg leading-relaxed">
                  {cmsT(paymentProviders?.sectionSubtitle, t.paymentSection.subtitle)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Tabby Card */}
                <div className="bg-white rounded-2xl p-6 text-[#18213F] shadow-lg flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#18213F] px-4 py-2 rounded-xl inline-flex items-center justify-center">
                        <img
                          src="/images/tabby-logo.png"
                          alt="Tabby"
                          className="h-6 w-auto object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#006C35] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        {language === 'en' ? 'Flexible Installments' : 'تقسيط بدون فوائد'}
                      </span>
                    </div>
                    <h4 className="text-lg font-black mb-2">{t.paymentSection.tabbyTitle}</h4>
                    <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">
                      {t.paymentSection.tabbyDesc}
                    </p>
                  </div>
                </div>

                {/* Tamara Card */}
                <div className="bg-white rounded-2xl p-6 text-[#18213F] shadow-lg flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#18213F] px-4 py-2 rounded-xl inline-flex items-center justify-center">
                        <img
                          src="/images/tamara-logo.jpg"
                          alt="Tamara"
                          className="h-6 w-auto object-contain rounded"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#006C35] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        {language === 'en' ? 'Flexible Installments' : 'تقسيط ميسر'}
                      </span>
                    </div>
                    <h4 className="text-lg font-black mb-2">{t.paymentSection.tamaraTitle}</h4>
                    <p className="text-[#5A6E85] text-sm leading-relaxed font-medium">
                      {t.paymentSection.tamaraDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FFC400] text-[#004D25] px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20"
                >
                  <MessageCircle size={22} />
                  <span>
                    {language === 'en'
                      ? 'Inquire About Offers via WhatsApp'
                      : 'تواصل لحجز عروض اليوم الوطني 96'}
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parents Reassurance Section */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <ScrollReveal delay={0}>
              <div className="p-6 rounded-2xl bg-[#F8FAF9] h-full border border-emerald-900/5">
                <ShieldCheck size={32} className="text-[#006C35] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">
                  {t.features.items[0].title}
                </h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">
                  {t.features.items[0].desc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="p-6 rounded-2xl bg-[#F8FAF9] h-full border border-emerald-900/5">
                <HeartHandshake size={32} className="text-[#006C35] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">
                  {t.features.items[1].title}
                </h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">
                  {t.features.items[1].desc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="p-6 rounded-2xl bg-[#F8FAF9] h-full border border-emerald-900/5">
                <Users size={32} className="text-[#006C35] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">
                  {t.features.items[2].title}
                </h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">
                  {t.features.items[2].desc}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="p-6 rounded-2xl bg-[#F8FAF9] h-full border border-emerald-900/5">
                <CreditCard size={32} className="text-[#006C35] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">
                  {t.features.items[3].title}
                </h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">
                  {t.features.items[3].desc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
