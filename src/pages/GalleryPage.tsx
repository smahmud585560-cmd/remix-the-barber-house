import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GallerySection } from '../components/GallerySection';
import { BUSINESS_INFO } from '../data/salonData';
import { Image as ImageIcon, Phone, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t('Galerie d\'Art Capillaire', 'Hair Salon Portfolio')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Galerie Photos Hair Salon & Barbier', 'Hair Salon & Barber Photo Gallery')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Découvrez nos dégradés américains, coupes homme, tailles de barbe au millimètre et l\'ambiance chaleureuse de notre salon à Bel-Air.',
              'Explore our signature skin fades, classic scissor cuts, millimeter beard trims, and warm parlour atmosphere at Bel-Air.'
            )}
          </p>
        </div>
      </div>

      {/* Main Gallery Section */}
      <GallerySection />

      {/* Call CTA */}
      <div className="py-12 bg-[#0c0d10] border-t border-[#1e1c19] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <h3 className="font-heading font-bold text-xl text-[#f7f2ea]">
            {t('Un style repéré dans notre galerie ?', 'Spotted a style you like in our gallery?')}
          </h3>
          <p className="text-xs sm:text-sm text-[#9c9588]">
            {t(
              'Montrez la photo directement à nos maîtres barbiers lors de votre passage au salon.',
              'Show the photo to our master barbers right from your phone upon stepping in.'
            )}
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#c59b63]/25"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
