import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BLOG_POSTS, BUSINESS_INFO } from '../data/salonData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, Phone } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 bg-[#111217] border-b border-[#23201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('Le Journal du Hair Salon', 'The Hair Salon Journal')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Conseils Coiffure & Tendances à Genève', 'Hair Trends & Barber Advice in Geneva')}
          </h2>
          <p className="text-sm text-[#a49d8f] font-light">
            {t(
              'Découvrez les secrets de coupes, l\'entretien de la barbe et l\'actualité de notre hair salon au centre de Genève.',
              'Discover haircut inspirations, beard maintenance secrets, and men\'s grooming insights from our Geneva hair salon.'
            )}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#161820] border border-[#27231f] hover:border-[#3d362e] rounded-xl overflow-hidden flex flex-col justify-between transition-all group shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.imageUrl}
                  alt={lang === 'fr' ? post.titleFr : post.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#111216]/90 backdrop-blur-sm border border-[#363127] text-[#c59b63] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs text-[#8c8577]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#c59b63]" />
                      <span>{post.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c59b63]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors leading-snug">
                    {lang === 'fr' ? post.titleFr : post.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a49d8f] line-clamp-3 leading-relaxed">
                    {lang === 'fr' ? post.excerptFr : post.excerptEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#23201d]">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold text-[#c59b63] hover:text-[#e0b884] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t('Lire l\'article complet', 'Read full article')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read Article Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#15171f] border border-[#3b3429] rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 text-[#8e8779] hover:text-white rounded-full bg-[#20222b]"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-[#c59b63] font-bold">
                  {selectedPost.category} · {selectedPost.date}
                </span>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#f8f4ed] leading-snug">
                  {lang === 'fr' ? selectedPost.titleFr : selectedPost.titleEn}
                </h3>

                <div className="aspect-[16/9] rounded-xl overflow-hidden my-4 border border-[#2b2721]">
                  <img
                    src={selectedPost.imageUrl}
                    alt={lang === 'fr' ? selectedPost.titleFr : selectedPost.titleEn}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 text-sm text-[#b8b0a1] leading-relaxed">
                  {(lang === 'fr' ? selectedPost.contentFr : selectedPost.contentEn).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-[#25221d] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#8f887b]">
                    {t('Une question ? Passez au salon ou appelez :', 'Have a question? Drop by or call:')}
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="px-4 py-2 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-bold text-xs uppercase flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>{BUSINESS_INFO.formattedPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
