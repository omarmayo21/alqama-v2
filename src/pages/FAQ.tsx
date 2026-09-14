import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, ArrowLeft, ArrowRight, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { faqItems, faqItemsEn, faqCategories, faqCategoriesEn } from '../data/faq';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL, ACADEMY_PHONE, ACADEMY_PHONE_DISPLAY } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const FAQ: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const currentItems = language === 'en' ? faqItemsEn : faqItems;
  const currentCategories = language === 'en' ? faqCategoriesEn : faqCategories;
  const allCategoryLabel = language === 'en' ? 'All' : 'الكل';

  const [selectedCategory, setSelectedCategory] = useState(allCategoryLabel);
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = currentItems.filter((item) => {
    const catMatch = selectedCategory === allCategoryLabel || item.category === selectedCategory;
    const searchMatch = !searchQuery || item.question.toLowerCase().includes(searchQuery.toLowerCase()) || item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div>
      <PageHeader
        title={t.faqPage.title}
        subtitle={t.faqPage.subtitle}
        breadcrumbs={[{ label: language === 'en' ? 'FAQ' : 'الأسئلة الشائعة' }]}
        badge={t.faqPage.badge}
      />

      {/* Search */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up" className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search size={20} className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-[#5A6E85]`} />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search questions and answers...' : 'ابحث في الأسئلة والإجابات...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${isRTL ? 'pr-12 pl-5' : 'pl-12 pr-5'} py-4 rounded-2xl border-2 border-gray-200 focus:border-[#D90429] outline-none text-base bg-[#F2F3F5] text-[#18213F] transition-all`}
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {currentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#D90429] text-white shadow-md'
                      : 'bg-[#F2F3F5] text-[#18213F] hover:bg-red-50 hover:text-[#D90429]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            {filtered.length === 0 ? (
              <ScrollReveal direction="scale">
                <div className="text-center py-20 bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 text-[#5A6E85]">
                    <HelpCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#18213F] mb-2">
                    {language === 'en' ? 'No Matching Questions Found' : 'لا توجد نتائج مطابقة'}
                  </h3>
                  <p className="text-[#5A6E85]">
                    {language === 'en'
                      ? 'Try searching with different keywords or contact our team directly.'
                      : 'جرّب البحث بكلمات أخرى أو تواصل مباشرة مع فريق خدمة العملاء'}
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              <div className="space-y-3">
                {filtered.map((item, idx) => (
                  <ScrollReveal key={item.id} direction="up" delay={Math.min(idx * 40, 300)}>
                    <div
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                    >
                      <button
                        onClick={() => toggle(item.id)}
                        className={`w-full flex items-center justify-between px-6 py-5 ${isRTL ? 'text-right' : 'text-left'} cursor-pointer`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                              openId === item.id ? 'bg-[#D90429] text-white' : 'bg-[#F2F3F5] text-[#D90429]'
                            }`}
                          >
                            <span className="text-sm font-black">{isRTL ? '؟' : '?'}</span>
                          </div>
                          <span className={`font-bold text-[#18213F] text-base ${isRTL ? 'text-right' : 'text-left'} leading-snug`}>
                            {item.question}
                          </span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`text-[#5A6E85] flex-shrink-0 ${isRTL ? 'mr-3' : 'ml-3'} transition-transform duration-300 ${
                            openId === item.id ? 'rotate-180 text-[#D90429]' : ''
                          }`}
                        />
                      </button>

                      <div className={`accordion-wrapper ${openId === item.id ? 'open' : ''}`}>
                        <div className="accordion-inner">
                          <div className="px-6 pb-6 pt-1">
                            <div className={`${isRTL ? 'mr-11' : 'ml-11'} pt-3 border-t border-gray-100`}>
                              <p className="text-[#5A6E85] leading-relaxed text-base font-normal">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still need help? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal direction="up" className="max-w-2xl mx-auto">
            <div className="text-center bg-[#18213F] rounded-3xl p-10 relative overflow-hidden text-white shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 text-[#FFC400]">
                <MessageCircle size={28} />
              </div>
              <h2 className="text-3xl font-black mb-3">{t.faqPage.stillQuestionsTitle}</h2>
              <p className="text-white/80 text-base mb-8 max-w-md mx-auto font-medium">{t.faqPage.stillQuestionsDesc}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D90429] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-950/40"
                >
                  <MessageCircle size={18} />
                  <span>{t.faqPage.askOnWhatsapp}</span>
                </a>
                <a
                  href={`tel:${ACADEMY_PHONE}`}
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 tabular-nums"
                >
                  <Phone size={16} />
                  <span>{language === 'en' ? `Call Us: ${ACADEMY_PHONE_DISPLAY}` : `اتصل بنا: ${ACADEMY_PHONE_DISPLAY}`}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
