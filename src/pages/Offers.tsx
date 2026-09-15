import React from 'react';
import { CheckCircle, MessageCircle, Sparkles, Users, CreditCard, ShieldCheck, HeartHandshake } from 'lucide-react';
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
  const { offers: sanityOffers, t: cmsT } = useSanityData();
  const t = translations[language];
  const currentOffers = language === 'en' ? offersEn : offers;
  const currentSpecialOffers = language === 'en' ? specialOffersEn : specialOffers;

  const displayedOffers = React.useMemo(() => {
    if (sanityOffers && sanityOffers.length > 0) {
      return sanityOffers.map((o, idx) => ({
        id: o.slug || o._id || `offer-${idx}`,
        title: cmsT(o.title, currentOffers[idx]?.title || ''),
        tagline: cmsT(o.tagline, currentOffers[idx]?.tagline || ''),
        badge: cmsT(o.badge, currentOffers[idx]?.badge || ''),
        description: cmsT(o.description, currentOffers[idx]?.description || ''),
        features: o.features && o.features.length > 0
          ? o.features.map(f => typeof f === 'object' ? cmsT(f as any, '') : f)
          : (currentOffers[idx]?.features || []),
        popular: o.isPopular || currentOffers[idx]?.popular || false,
      }));
    }
    return currentOffers;
  }, [sanityOffers, currentOffers, cmsT]);

  return (
    <div>
      <PageHeader
        title={t.offersPage.title}
        subtitle={t.offersPage.subtitle}
        breadcrumbs={[{ label: t.nav.offers }]}
        badge={t.offersPage.badge}
      />

      {/* Main Offers Section */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Training Offers Tailored to' : 'باقات تدريبية تناسب'}
              highlight={language === 'en' ? 'Your Child’s Goals' : 'طموح أبنائكم'}
              description={t.offersSection.subtitle}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {displayedOffers.map((offer, idx) => (
              <ScrollReveal key={offer.id} delay={idx * 90}>
                <div
                  className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border h-full ${
                    offer.popular
                      ? 'shadow-xl shadow-red-500/10 scale-102 md:scale-105 border-[#D90429] relative z-10'
                      : 'shadow-sm hover:shadow-lg border-gray-100'
                  }`}
                >
                  <div>
                    {/* Offer Header */}
                    <div
                      className="p-8 text-center"
                      style={{
                        background: offer.popular
                          ? 'linear-gradient(135deg, #D90429, #B0021F)'
                          : 'linear-gradient(135deg, #18213F, #222D52)',
                      }}
                    >
                      {offer.badge && (
                        <span className="inline-block mb-3 bg-white/20 text-white text-xs font-bold px-3.5 py-1 rounded-full backdrop-blur-sm">
                          {offer.badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-black text-white mb-2">{offer.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{offer.tagline}</p>
                    </div>

                    {/* Body & Description */}
                    <div className="p-8">
                      <p className="text-[#5A6E85] text-sm leading-relaxed mb-6 font-medium">
                        {offer.description}
                      </p>

                      <div className="border-t border-gray-100 pt-6">
                        <h4 className="font-bold text-[#18213F] text-sm mb-4 flex items-center gap-2">
                          <Sparkles size={16} className="text-[#D90429]" />
                          <span>{language === 'en' ? 'Offer Highlights:' : 'مميزات الباقة:'}</span>
                        </h4>
                        <ul className="space-y-3">
                          {offer.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle
                                size={16}
                                className="text-[#D90429] flex-shrink-0 mt-0.5"
                              />
                              <span className="text-[#18213F] text-sm font-semibold">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-8 pt-0 mt-auto">
                    <a
                      href={getWhatsAppUrl(
                        language === 'en'
                          ? `Hello, I would like to inquire about the ${offer.title} package at ALQIMA Sports Academy.`
                          : `السلام عليكم، أود الاستفسار والتسجيل في ${offer.title} بأكاديمية القمة الرياضية.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-xl font-bold text-center block transition-all duration-300 shadow-md ${
                        offer.popular
                          ? 'bg-[#D90429] text-white hover:bg-[#B0021F] shadow-red-200 hover:-translate-y-0.5'
                          : 'bg-[#18213F] text-white hover:bg-[#222D52] hover:-translate-y-0.5'
                      }`}
                    >
                      {t.offersSection.ctaButton}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Highlights & Family Perks */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader
              title={language === 'en' ? 'Exclusive Privileges' : 'مزايا وعروض حصرية'}
              highlight={language === 'en' ? 'for Parents & Families' : 'لأولياء الأمور'}
              description={language === 'en' ? 'We are dedicated to providing a comprehensive sports experience supporting families with maximum flexibility' : 'نحرص على تقديم تجربة متكاملة تدعم العائلة وتوفر أفضل رعاية ومرونة لأطفالكم'}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentSpecialOffers.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 80}>
                <div
                  className="bg-[#F8F9FA] rounded-2xl p-7 border border-gray-100 hover:border-[#D90429]/30 transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D90429] mb-5">
                      {item.id === 'siblings-discount' && <Users size={24} />}
                      {item.id === 'tabby-tamara' && <CreditCard size={24} />}
                      {item.id === 'parents-attendance' && <HeartHandshake size={24} />}
                    </div>
                    <span className="inline-block bg-[#D90429]/10 text-[#D90429] text-xs font-black px-2.5 py-1 rounded-full mb-3">
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
                    className="text-[#18213F] font-bold text-sm hover:text-[#D90429] inline-flex items-center gap-2 transition-colors duration-200"
                  >
                    <MessageCircle size={16} />
                    <span>{language === 'en' ? 'Contact for Details' : 'تواصل لمعرفة التفاصيل'}</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tabby & Tamara Installment Section */}
      <section className="section-padding bg-[#18213F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal direction="scale">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-block bg-[#D90429] text-white text-xs font-black px-4 py-1.5 rounded-full mb-4">
                  {t.paymentSection.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  {t.paymentSection.title}
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {t.paymentSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Tabby Card */}
                <div className="bg-white rounded-2xl p-6 text-[#18213F] shadow-lg flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#18213F] px-4 py-2 rounded-xl inline-flex items-center justify-center">
                        <img src="/images/tabby-logo.png" alt="Tabby" className="h-6 w-auto object-contain" />
                      </div>
                      <span className="text-xs font-bold text-[#5A6E85] bg-gray-100 px-3 py-1 rounded-full">
                        {language === 'en' ? 'Installment Payment' : 'دفع بالتقسيط'}
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
                        <img src="/images/tamara-logo.jpg" alt="Tamara" className="h-6 w-auto object-contain rounded" />
                      </div>
                      <span className="text-xs font-bold text-[#5A6E85] bg-gray-100 px-3 py-1 rounded-full">
                        {language === 'en' ? 'Installment Payment' : 'دفع بالتقسيط'}
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
                  className="inline-flex items-center gap-3 bg-[#D90429] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-950/40"
                >
                  <MessageCircle size={22} />
                  <span>{t.offersSection.ctaButton}</span>
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
              <div className="p-6 rounded-2xl bg-[#F8F9FA] h-full">
                <ShieldCheck size={32} className="text-[#D90429] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">{t.features.items[0].title}</h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">{t.features.items[0].desc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="p-6 rounded-2xl bg-[#F8F9FA] h-full">
                <HeartHandshake size={32} className="text-[#D90429] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">{t.features.items[1].title}</h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">{t.features.items[1].desc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="p-6 rounded-2xl bg-[#F8F9FA] h-full">
                <Users size={32} className="text-[#D90429] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">{t.features.items[2].title}</h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">{t.features.items[2].desc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="p-6 rounded-2xl bg-[#F8F9FA] h-full">
                <CreditCard size={32} className="text-[#D90429] mx-auto mb-3" />
                <h4 className="font-bold text-[#18213F] text-base mb-1">{t.features.items[3].title}</h4>
                <p className="text-[#5A6E85] text-xs leading-relaxed">{t.features.items[3].desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
