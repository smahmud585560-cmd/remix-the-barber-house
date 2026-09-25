import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Hero } from '../components/Hero';
import { WalkInCallBanner } from '../components/WalkInCallBanner';
import { ReviewsSection } from '../components/ReviewsSection';
import { BUSINESS_INFO, SERVICES_LIST, GALLERY_ITEMS } from '../data/salonData';
import { PageId } from '../types';
import { Phone, ArrowRight, Scissors, MapPin, Sparkles, Image as ImageIcon, BookOpen, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenShareModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenShareModal }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* 1. Hero with primary keyword: Hair Salon in Geneva, Switzerland */}
      <Hero onOpenShareModal={onOpenShareModal} />

      {/* 2. Walk-in & Direct Call Banner */}
      <WalkInCallBanner />

      {/* 3. Featured Services Spotlight (Highlights from prompt) */}
      <section className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold mb-1">
                <Scissors className="w-3.5 h-3.5" />
                <span>{t('Prestations Phares du Hair Salon', 'Featured Hair Salon Services')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f7f2ea]">
                {t('Coupe, Barbe & Soins au Juste Prix', 'Haircut, Beard & Grooming at Fair Geneva Rates')}
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#c59b63] hover:text-[#dfb782] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{t('Voir tous les tarifs & prestations', 'View full service menu & prices')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-[#15171d] border border-[#27231f] hover:border-[#c59b63]/60 rounded-xl p-6 flex flex-col justify-between transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading font-bold text-base text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors">
                      {lang === 'fr' ? service.nameFr : service.nameEn}
                    </h3>
                    <span className="text-lg font-heading font-black text-[#c59b63] shrink-0">
                      CHF {service.priceCHF.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-[#a49d8f] leading-relaxed">
                    {lang === 'fr' ? service.descriptionFr : service.descriptionEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#22201d] flex items-center justify-between">
                  <span className="text-[11px] text-[#8e8779]">
                    {service.durationMinutes} min · {t('Sans RDV ou appel', 'Walk-in or call')}
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="px-3 py-1.5 rounded bg-[#1e2029] hover:bg-[#c59b63] text-[#ded8cc] hover:text-black text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-[#c59b63] group-hover:text-black" />
                    <span>{t('Appeler', 'Call')}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick link button to full services page */}
          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-lg bg-[#1a1c24] hover:bg-[#252835] border border-[#343028] text-xs font-bold text-[#ded8cb] hover:text-[#c59b63] transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t('Consulter la carte complète des prestations CHF', 'Explore complete Swiss Franc pricing menu')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Quick Gateway Cards to Other Pages */}
      <section className="py-14 bg-[#111217] border-b border-[#23201d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* About Card */}
            <div
              onClick={() => onNavigate('about')}
              className="p-5 rounded-xl bg-[#161820] border border-[#27231f] hover:border-[#c59b63]/60 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#3f372a] flex items-center justify-center text-[#c59b63] mb-3 group-hover:rotate-6 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors">
                {t('L\'Esprit du Salon', 'The Salon Ethos')}
              </h3>
              <p className="text-xs text-[#9d9587] mt-1 line-clamp-2">
                {t('Tradition à l\'ancienne, maîtres barbiers d\'expérience et fauteuils vintage.', 'Timeless tradition, seasoned master barbers, and authentic leather chairs.')}
              </p>
              <span className="text-xs font-bold text-[#c59b63] mt-3 inline-flex items-center gap-1">
                <span>{t('Découvrir', 'Learn more')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Gallery Card */}
            <div
              onClick={() => onNavigate('gallery')}
              className="p-5 rounded-xl bg-[#161820] border border-[#27231f] hover:border-[#c59b63]/60 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#3f372a] flex items-center justify-center text-[#c59b63] mb-3 group-hover:rotate-6 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors">
                {t('Galerie Photos', 'Photo Gallery')}
              </h3>
              <p className="text-xs text-[#9d9587] mt-1 line-clamp-2">
                {t('Photos de dégradés, barbes sculptées et de notre espace Confédération Centre.', 'Photos of skin fades, sculpted beards, and our Confédération Centre parlour.')}
              </p>
              <span className="text-xs font-bold text-[#c59b63] mt-3 inline-flex items-center gap-1">
                <span>{t('Voir la galerie', 'View gallery')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Location Card */}
            <div
              onClick={() => onNavigate('location')}
              className="p-5 rounded-xl bg-[#161820] border border-[#27231f] hover:border-[#c59b63]/60 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#3f372a] flex items-center justify-center text-[#c59b63] mb-3 group-hover:rotate-6 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors">
                {t('Accès & Tram 12', 'Location & Tram 12')}
              </h3>
              <p className="text-xs text-[#9d9587] mt-1 line-clamp-2">
                {t('Rue de la Cité 7, arrêt Bel-Air. Trams 12, 14, 18 et parkings à proximité.', 'Rue de la Cité 7, Bel-Air stop. Trams 12, 14, 18 and nearby parking.')}
              </p>
              <span className="text-xs font-bold text-[#c59b63] mt-3 inline-flex items-center gap-1">
                <span>{t('Plan & transports', 'Map & transit')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Blog Card */}
            <div
              onClick={() => onNavigate('blog')}
              className="p-5 rounded-xl bg-[#161820] border border-[#27231f] hover:border-[#c59b63]/60 cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#3f372a] flex items-center justify-center text-[#c59b63] mb-3 group-hover:rotate-6 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors">
                {t('Le Journal Coiffure', 'Hair & Style Journal')}
              </h3>
              <p className="text-xs text-[#9d9587] mt-1 line-clamp-2">
                {t('Articles et conseils de nos barbiers sur les tendances masculines à Genève.', 'Articles and styling secrets from our Geneva master barbers.')}
              </p>
              <span className="text-xs font-bold text-[#c59b63] mt-3 inline-flex items-center gap-1">
                <span>{t('Lire les articles', 'Read articles')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Google Reviews (4.8 ★ / 321 avis) */}
      <ReviewsSection />

      {/* 6. Direct Call & Walk-in Callout before Footer */}
      <section className="py-14 bg-[#0e0f13] border-b border-[#23201d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b63] font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>{t('Besoin d\'un rafraîchissement express ?', 'Need a sharp cut or beard trim?')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Passez Sans Rendez-vous à Bel-Air ou Appelez le Salon', 'Walk In Today at Bel-Air or Call the Parlour')}
          </h2>
          <p className="text-sm text-[#a49d8f] max-w-xl mx-auto">
            {t(
              'Confédération Centre, Rue de la Cité 7, 1204 Genève. Ouvert du lundi au samedi de 09h00 à 19h00.',
              'Confédération Centre, Rue de la Cité 7, 1204 Geneva. Open Monday through Saturday 9:00 AM – 7:00 PM.'
            )}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#c59b63]/25 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3.5 rounded-xl bg-[#1e2029] border border-[#353128] text-xs font-bold text-[#ded8cc] hover:text-[#c59b63] cursor-pointer"
            >
              {t('Page Contact & Horaires', 'Contact & Hours Page')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
