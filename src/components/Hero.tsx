import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { 
  Phone, 
  MapPin, 
  Star, 
  Clock, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Share2,
  MessageCircle
} from 'lucide-react';

interface HeroProps {
  onOpenShareModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShareModal }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#23201d]">
      {/* Subtle atmospheric background grid & radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#c59b63_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c59b63]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand, Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Rating & Location Line (Clean, unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#beb6a7]">
              <div className="flex items-center gap-1.5 text-[#e5b34a] font-semibold">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e5b34a] text-[#e5b34a]" />
                  ))}
                </div>
                <span className="text-[#f7f2ea] font-bold text-sm">4.8</span>
                <span className="text-[#8c8577]">/ 5</span>
              </div>
              <span className="text-[#4e4840]">·</span>
              <a 
                href="#reviews" 
                className="text-[#c59b63] hover:underline font-medium"
              >
                {BUSINESS_INFO.totalReviews} {t('avis Google vérifiés', 'verified Google reviews')}
              </a>
              <span className="text-[#4e4840]">·</span>
              <span className="text-[#999285]">Hair Salon · Geneva Bel-Air</span>
            </div>

            {/* Main Headline with primary keyword: Hair Salon */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#c59b63]"></span>
                <span>{t('Hair Salon & Barbier d\'Exception à Genève', 'Premier Hair Salon & Barber in Geneva')}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#fbf8f3] font-heading leading-[1.12]">
                THE BARBER <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e7c793] via-[#c59b63] to-[#9b7540]">
                  HOUSE GENEVA
                </span>
              </h1>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#d8c39e] font-semibold">
                {t('Hair Salon in Geneva, Switzerland · Confédération Centre', 'Hair Salon in Geneva, Switzerland · Confédération Centre')}
              </p>
              <p className="text-base sm:text-lg text-[#b8b0a1] max-w-2xl leading-relaxed font-light">
                {t(
                  "Le hair salon et barbier de référence pour hommes au cœur de Genève. Savoir-faire d'une longue tradition artisanale, coupe de cheveux sur-mesure, rasoir coupe-choux, serviettes chaudes et dégradés américains de haute précision. Avec ou sans rendez-vous.",
                  "Geneva's premier men's hair salon and traditional barber shop. Master haircuts, skin fades, beard sculpting, and straight-razor care in the heart of the city at Bel-Air. Walk-ins & calls welcome."
                )}
              </p>
            </div>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-[#ded8cc]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b63] shrink-0" />
                <span>{t('Avec ou sans RDV', 'Walk-ins Welcome')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b63] shrink-0" />
                <span>{t('Accès Tram 12 Bel-Air', 'Tram 12 Bel-Air Stop')}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#c59b63] shrink-0" />
                <span>{t('Produits suisses & soins', 'Swiss Oils & Steam Care')}</span>
              </div>
            </div>

            {/* Primary Action Buttons: Call Now */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="px-7 py-4 rounded bg-gradient-to-r from-[#c59b63] via-[#ba9057] to-[#9e7740] hover:from-[#d5aa6e] hover:to-[#ae854d] text-black font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-xl shadow-[#c59b63]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                <Phone className="w-5 h-5 text-black fill-black" />
                <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded bg-[#1b1c21] hover:bg-[#23242b] border border-[#38332d] hover:border-[#22c55e] text-[#f2ede4] font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded bg-[#17181c] hover:bg-[#202227] border border-[#2c2824] hover:border-[#7d7365] text-[#b3aaa0] hover:text-[#f4efe8] text-sm transition-colors flex items-center gap-2"
                title={t('Ouvrir l\'itinéraire Google Maps', 'Open Google Maps Directions')}
              >
                <Compass className="w-4 h-4 text-[#c59b63]" />
                <span className="hidden sm:inline">{t('Itinéraire Cité', 'Directions')}</span>
              </a>

              <button
                onClick={onOpenShareModal}
                className="p-4 rounded bg-[#17181c] hover:bg-[#202227] border border-[#2c2824] hover:border-[#7d7365] text-[#b3aaa0] hover:text-[#f4efe8] transition-colors"
                title={t('Partager la fiche ou scanner le QR code', 'Share or scan QR Code')}
                aria-label="Share"
              >
                <Share2 className="w-4 h-4 text-[#c59b63]" />
              </button>
            </div>

            {/* Operating Hours Quick Status */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#9c9486]">
              <Clock className="w-4 h-4 text-[#c59b63] shrink-0" />
              <span>
                <strong className="text-[#34d399] font-semibold">
                  {t('Ouvert actuellement · Closes 7 PM', 'Currently Open · Closes 7 PM')}
                </strong>
                {' '}· {t('Lundi à Samedi 09h00 – 19h00', 'Monday to Saturday 9:00 AM – 7:00 PM')}
                {' '}· {t('Fermé le dimanche', 'Closed Sundays')}
              </span>
            </div>
          </div>

          {/* Right Column: Promoted Products & Heritage Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Special Spotlight on the Two Services explicitly in Google Brief */}
            <div className="bg-[#15161b] border border-[#2d2822] rounded-xl p-5 sm:p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c59b63]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#24211d]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c59b63]">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('Prestations Phares à Genève Bel-Air', 'Bel-Air Highlight Services')}</span>
                </div>
                <span className="text-[11px] text-[#8e877a]">Confédération Centre</span>
              </div>

              {/* Service 1 from prompt: Entretien de la barbe à 15 CHF */}
              <div className="p-4 rounded-lg bg-[#1a1b22] border border-[#2b2723] hover:border-[#c59b63]/50 transition-all mb-3.5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#f5f1e8]">
                      {t('Coupe et entretien de la barbe à Genève Bel Air', 'Beard Trim & Sculpting Bel Air Geneva')}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a39b8e] line-clamp-2">
                    {t(
                      'Taille au millimètre, contours nets au rasoir & application d\'huile de soin à Bel-Air Genève.',
                      'Millimeter trim, straight-razor contours & nourishing beard oil finish at Bel-Air Geneva.'
                    )}
                  </p>
                  <span className="inline-block text-[11px] text-[#c59b63]">
                    {t('~20 min · Avec ou sans RDV', '~20 mins · Walk-in or call')}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg sm:text-xl font-heading font-extrabold text-[#c59b63]">
                    CHF 15.00
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="mt-1.5 px-3 py-1 text-[11px] font-bold bg-[#27241f] hover:bg-[#c59b63] text-[#dcd6ca] hover:text-black rounded transition-colors inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{t('Appeler', 'Call')}</span>
                  </a>
                </div>
              </div>

              {/* Service 2 from prompt: Coupe de cheveux enfants à 19 CHF */}
              <div className="p-4 rounded-lg bg-[#1a1b22] border border-[#2b2723] hover:border-[#c59b63]/50 transition-all flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#f5f1e8]">
                      {t('Coupe de cheveux enfants - Bel Air Genève', 'Kids Haircut - Bel Air Geneva')}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a39b8e] line-clamp-2">
                    {t(
                      'Coupe soignée, douce et attentive pour garçons (-12 ans) au centre-ville de Genève.',
                      'Gentle, stylish and attentive haircut for boys (-12 yo) in downtown Geneva.'
                    )}
                  </p>
                  <span className="inline-block text-[11px] text-[#c59b63]">
                    {t('~25 min · Bel-Air Cité', '~25 mins · Bel-Air Cité')}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg sm:text-xl font-heading font-extrabold text-[#c59b63]">
                    CHF 19.00
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="mt-1.5 px-3 py-1 text-[11px] font-bold bg-[#27241f] hover:bg-[#c59b63] text-[#dcd6ca] hover:text-black rounded transition-colors inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{t('Appeler', 'Call')}</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#23201d] flex items-center justify-between text-xs text-[#8f887b]">
                <span>{t('Carte complète dès 12 CHF', 'Full menu from 12 CHF')}</span>
                <a href="#services" className="text-[#c59b63] hover:underline flex items-center gap-1 font-medium">
                  <span>{t('Voir tous les tarifs', 'View all prices')} →</span>
                </a>
              </div>
            </div>

            {/* Address & Quick Walk-in Note */}
            <div className="bg-[#121317] border border-[#262320] rounded-lg p-4 flex items-center justify-between text-xs text-[#a69e90]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#1e1f26] flex items-center justify-center text-[#c59b63] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#eee9df]">Rue de la Cité 7, 1204 Genève</p>
                  <p className="text-[#878074]">Confédération Centre · Arrêt Tram 12 Bel-Air</p>
                </div>
              </div>
              <a 
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank" 
                rel="noreferrer" 
                className="text-[#c59b63] hover:underline font-semibold shrink-0 text-right"
              >
                {t('Plan d\'accès →', 'Get Map →')}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
