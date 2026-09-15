import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Tag, ArrowRight, ArrowLeft, Trophy, MessageCircle } from 'lucide-react';
import { blogPosts, blogPostsEn } from '../data/blog';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { WHATSAPP_URL } from '../utils/constants';
import { useLanguage } from '../context/LanguageContext';
import { useSanityData } from '../context/SanityDataContext';
import { translations } from '../data/translations';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, isRTL } = useLanguage();
  const { blogPosts: sanityPosts, t: cmsT } = useSanityData();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const currentPosts = language === 'en' ? blogPostsEn : blogPosts;
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  const post = React.useMemo(() => {
    const foundSanity = sanityPosts?.find(
      (p) => p.slug === id || p._id === id || p._id === `blogPost-${id}` || (p as any).id === id
    );
    const foundStatic = currentPosts.find((p) => p.id === id);

    if (foundSanity) {
      return {
        id: foundSanity.slug || foundSanity._id,
        title: cmsT(foundSanity.title, foundStatic?.title || ''),
        category: cmsT(foundSanity.category, foundStatic?.category || ''),
        author: cmsT(foundSanity.author, foundStatic?.author || (language === 'en' ? 'Coach Ahmed' : 'كابتن أحمد')),
        date: cmsT(foundSanity.date, foundStatic?.date || ''),
        readTime: cmsT(foundSanity.readTime, foundStatic?.readTime || ''),
        image: foundSanity.imageUrl || foundSanity.coverImageUrl || foundStatic?.image || '/images/blog-1.jpg',
        content: cmsT(foundSanity.content, foundStatic?.content || ''),
        tags: foundSanity.tags && foundSanity.tags.length > 0
          ? foundSanity.tags.map((tg: any) => (typeof tg === 'object' ? cmsT(tg, '') : String(tg)))
          : (foundStatic?.tags || []),
      };
    }
    return foundStatic;
  }, [sanityPosts, currentPosts, id, cmsT, language]);

  if (!post) return <Navigate to={basePath === '' ? '/blog' : `${basePath}/blog`} replace />;

  const related = currentPosts.filter((p) => p.id !== id && p.category === post.category).slice(0, 3);

  return (
    <div>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: t.nav.blog, path: `${basePath}/blog` },
          { label: post.category },
        ]}
      />

      {/* Article Image */}
      <div className="relative h-64 md:h-96 bg-[#18213F] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover animate-fade-in"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <ScrollReveal direction="up" className="lg:col-span-2">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-100 tabular-nums">
                <span className="bg-[#D90429] text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-[#5A6E85] text-sm font-semibold">
                  <div className="w-8 h-8 rounded-full bg-[#18213F] flex items-center justify-center text-white text-xs font-bold">
                    {post.author.charAt(0)}
                  </div>
                  {post.author}
                </div>
                <span className="text-[#5A6E85] text-sm font-medium">{post.date}</span>
                <span className="flex items-center gap-1 text-[#5A6E85] text-sm font-medium">
                  <Clock size={14} className="text-[#D90429]" />
                  {post.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-[#18213F]">
                {post.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={idx} className="text-2xl md:text-3xl font-black text-[#18213F] mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl md:text-2xl font-black text-[#18213F] mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter((l) => l.startsWith('- '));
                    return (
                      <ul key={idx} className="space-y-2.5 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#18213F] font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#D90429] mt-2 flex-shrink-0" />
                            <span>{item.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d\./)) {
                    const items = paragraph.split('\n').filter((l) => l.match(/^\d\./));
                    return (
                      <ol key={idx} className="space-y-2.5 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#18213F] font-medium">
                            <span className="w-6 h-6 rounded-full bg-[#D90429] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 tabular-nums">
                              {i + 1}
                            </span>
                            <span>{item.replace(/^\d\.\s/, '')}</span>
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={idx} className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-6 font-normal">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                <Tag size={16} className="text-[#5A6E85]" />
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-[#F2F3F5] text-[#18213F] text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-red-50 hover:text-[#D90429] transition-colors cursor-pointer border border-gray-100"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Navigation back */}
              <div className="flex gap-4 mt-8">
                <Link
                  to={`${basePath}/blog`}
                  className="group inline-flex items-center gap-2 border-2 border-[#18213F] text-[#18213F] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#18213F] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ArrowIcon size={16} className={`transition-transform duration-300 ${isRTL ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                  <span>{t.blogPage.backToBlog}</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Author Card */}
              <ScrollReveal direction="up" delay={100}>
                <div className="bg-[#F2F3F5] rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-black text-[#18213F] text-lg mb-4">
                    {language === 'en' ? 'Author' : 'الكاتب'}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#18213F] flex items-center justify-center text-white font-black text-xl">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-[#18213F]">{post.author}</div>
                      <div className="text-[#5A6E85] text-xs font-semibold">
                        {language === 'en'
                          ? 'Coaching & Technical Guidance • ALQIMA'
                          : 'إشراف فني ورياضي • أكاديمية القمة'}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Related Posts */}
              {related.length > 0 && (
                <ScrollReveal direction="up" delay={150}>
                  <div className="bg-[#F2F3F5] rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-black text-[#18213F] text-lg mb-5">{t.blogPage.relatedArticles}</h3>
                    <div className="space-y-4">
                      {related.map((p) => (
                        <Link
                          key={p.id}
                          to={`${basePath}/blog/${p.id}`}
                          className="flex gap-3 group items-center p-1 rounded-xl transition-all"
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#18213F] text-sm leading-snug group-hover:text-[#D90429] transition-colors duration-300 line-clamp-2">
                              {p.title}
                            </h4>
                            <span className="text-[#5A6E85] text-xs mt-1 block tabular-nums">{p.date}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* CTA */}
              <ScrollReveal direction="up" delay={200}>
                <div className="bg-[#18213F] rounded-3xl p-7 text-white text-center shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-[#FFC400]">
                    <Trophy size={24} />
                  </div>
                  <h3 className="font-black text-xl mb-2">
                    {language === 'en' ? 'Start Your Child’s Journey' : 'ابدأ رحلة أبنائك الرياضية'}
                  </h3>
                  <p className="text-white/75 text-sm mb-5 font-medium">
                    {language === 'en'
                      ? 'Talk to our advisors today to inquire about available sports and offers.'
                      : 'تواصل معنا اليوم للاستفسار عن برامج وعروض أكاديمية القمة'}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#D90429] text-white py-3.5 rounded-xl font-bold hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 text-sm shadow-md shadow-red-950/40 mb-3"
                  >
                    <MessageCircle size={17} />
                    <span>{language === 'en' ? 'Chat on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
                  </a>
                  <Link
                    to={`${basePath}/offers`}
                    className="block w-full bg-white/10 text-white py-2.5 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 text-xs"
                  >
                    {language === 'en' ? 'Explore Offers & Packages' : 'استكشف العروض والباقات'}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
