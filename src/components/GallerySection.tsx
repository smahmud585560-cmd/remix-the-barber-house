import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'haircuts' | 'beards' | 'salon' | 'ritual'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="gallery" className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t('Galerie Photos Hair Salon', 'Hair Salon Photo Gallery')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Nos Réalisations & L\'Atmosphère du Salon', 'Our Styles & Salon Ambiance')}
          </h2>
          <p className="text-sm text-[#a49d8f] font-light">
            {t(
              'Aperçu des coupes hommes, dégradés américains, tailles de barbe au rasoir et du cadre vintage à Bel-Air.',
              'A look at our master haircuts, precision skin fades, straight-razor beard sculpting, and vintage Bel-Air parlour.'
            )}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', labelFr: 'Toutes les photos', labelEn: 'All Photos' },
            { id: 'haircuts', labelFr: 'Coupes & Dégradés', labelEn: 'Haircuts & Fades' },
            { id: 'beards', labelFr: 'Barbes (15 CHF)', labelEn: 'Beard Sculpting' },
            { id: 'salon', labelFr: 'Le Salon Bel-Air', labelEn: 'The Salon' },
            { id: 'ritual', labelFr: 'Rasage à l\'Ancienne', labelEn: 'Traditional Shave' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#c59b63] text-black font-bold shadow-md shadow-[#c59b63]/20'
                  : 'bg-[#161820] text-[#a9a294] hover:text-white border border-[#27241f]'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-xl overflow-hidden bg-[#161820] border border-[#27231f] hover:border-[#c59b63]/60 cursor-pointer transition-all duration-300 shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={lang === 'fr' ? item.titleFr : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-bold text-[#c59b63] tracking-widest mb-1">
                  {lang === 'fr' ? item.tagFr : item.tagEn}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#f5f1e8] leading-snug">
                  {lang === 'fr' ? item.titleFr : item.titleEn}
                </h3>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#14151b] border border-[#3b352b] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-[#c59b63] transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeImage.imageUrl}
                  alt={lang === 'fr' ? activeImage.titleFr : activeImage.titleEn}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-5 bg-[#171922] border-t border-[#2a2620] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#c59b63] uppercase tracking-wider block">
                    {lang === 'fr' ? activeImage.tagFr : activeImage.tagEn}
                  </span>
                  <h4 className="text-base font-bold text-[#f5f1e8]">
                    {lang === 'fr' ? activeImage.titleFr : activeImage.titleEn}
                  </h4>
                </div>
                <span className="text-xs text-[#8e8779]">
                  The Barber House Genève
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
