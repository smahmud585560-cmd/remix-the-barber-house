import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AboutSection } from '../components/AboutSection';
import { ProductsShowcase } from '../components/ProductsShowcase';
import { BUSINESS_INFO } from '../data/salonData';
import { Award, Phone, Scissors, Shield, HeartHandshake } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{t('Tradition & Savoir-Faire Suisse', 'Swiss Craft & Barber Tradition')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('L’Esprit The Barber House Genève', 'The Barber House Geneva Ethos')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Un hair salon et barber shop à l\'ancienne où le geste précis, la lame stérilisée et l\'accueil bienveillant sont au cœur de chaque rendez-vous.',
              'An authentic traditional hair salon and barber shop where razor precision, sterile tools, and genuine warmth define every visit.'
            )}
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <AboutSection />

      {/* In-Salon Products Showcase */}
      <ProductsShowcase />

      {/* Call CTA Banner */}
      <div className="py-12 bg-[#0c0d10] border-t border-[#1e1c19] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <h3 className="font-heading font-bold text-xl text-[#f7f2ea]">
            {t('Venez rencontrer notre équipe à Bel-Air', 'Come meet our team at Bel-Air')}
          </h3>
          <p className="text-xs sm:text-sm text-[#9c9588]">
            {t(
              'Confédération Centre, Rue de la Cité 7. Avec ou sans rendez-vous.',
              'Confédération Centre, Rue de la Cité 7. Walk-ins and calls welcome.'
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
