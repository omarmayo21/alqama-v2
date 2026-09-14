import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, Search, FileText } from 'lucide-react';
import { blogPosts, blogPostsEn, categories, categoriesEn } from '../data/blog';
import PageHeader from '../components/ui/PageHeader';
import ScrollReveal from '../components/animation/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Blog: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const basePath = language === 'en' ? '/en' : '';
  const currentPosts = language === 'en' ? blogPostsEn : blogPosts;
  const currentCategories = language === 'en' ? categoriesEn : categories;
  const allCategoryLabel = language === 'en' ? 'All' : 'الكل';
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const [selectedCategory, setSelectedCategory] = useState(allCategoryLabel);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = currentPosts.filter((post) => {
    const catMatch = selectedCategory === allCategoryLabel || post.category === selectedCategory;
    const searchMatch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const featured = currentPosts[0];

  return (
    <div>
      <PageHeader
        title={t.blogPage.title}
        subtitle={t.blogPage.subtitle}
        breadcrumbs={[{ label: t.nav.blog }]}
        badge={t.blogPage.badge}
      />

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="relative group rounded-3xl overflow-hidden h-72 lg:h-96 bg-[#18213F] shadow-xl">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'}`}>
                    <span className="bg-[#D90429] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      {language === 'en' ? 'Featured Article' : 'مقال مميز'}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-50 text-[#D90429] text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                      {featured.category}
                    </span>
                    <span className="text-[#5A6E85] text-sm font-semibold flex items-center gap-1.5 tabular-nums">
                      <Clock size={14} className="text-[#D90429]" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#18213F] leading-tight mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-[#5A6E85] text-base md:text-lg leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#18213F] flex items-center justify-center text-white text-xs font-bold">
                        {featured.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#18213F] text-sm">{featured.author}</div>
                        <div className="text-[#5A6E85] text-xs font-medium tabular-nums">{featured.date}</div>
                      </div>
                    </div>
                    <Link
                      to={`${basePath}/blog/${featured.id}`}
                      className={`group ${isRTL ? 'mr-auto' : 'ml-auto'} inline-flex items-center gap-2 bg-[#D90429] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#B0021F] transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-red-200`}
                    >
                      <span>{t.blogPage.readMore}</span>
                      <ChevronIcon size={16} className={`transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-6 bg-[#F2F3F5] border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {currentCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#D90429] text-white shadow-md'
                      : 'bg-white text-[#18213F] hover:bg-red-50 hover:text-[#D90429]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search size={16} className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#5A6E85]`} />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search articles...' : 'ابحث في المقالات...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#D90429] outline-none text-sm w-64 bg-white transition-all`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-[#F2F3F5]">
        <div className="container mx-auto px-4 md:px-8">
          {filtered.length === 0 ? (
            <ScrollReveal direction="scale">
              <div className="text-center py-20 bg-white rounded-3xl p-10 max-w-lg mx-auto border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4 text-[#5A6E85]">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-black text-[#18213F] mb-2">
                  {language === 'en' ? 'No Matching Articles Found' : 'لا توجد مقالات مطابقة'}
                </h3>
                <p className="text-[#5A6E85]">
                  {language === 'en' ? 'Try searching with different keywords or choose another category' : 'جرّب البحث بكلمات أخرى أو اختر تصنيفًا مختلفًا'}
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, idx) => (
                <ScrollReveal key={post.id} direction="up" delay={idx * 70}>
                  <article
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group border border-gray-100 flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Image */}
                      <div className="overflow-hidden h-52 relative bg-[#18213F]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                          <span className="bg-[#D90429] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-xs text-[#5A6E85] font-semibold tabular-nums">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-[#D90429]" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-black text-[#18213F] text-xl leading-tight mb-3 group-hover:text-[#D90429] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-[#5A6E85] text-sm leading-relaxed line-clamp-3 mb-5 font-medium">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#18213F] flex items-center justify-center text-white text-xs font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-[#18213F] text-xs font-bold">{post.author}</span>
                        </div>
                        <Link
                          to={`${basePath}/blog/${post.id}`}
                          className={`inline-flex items-center gap-1 text-[#D90429] font-bold text-sm ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-300`}
                        >
                          <span>{t.blogPage.readMore}</span>
                          <ChevronIcon size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
