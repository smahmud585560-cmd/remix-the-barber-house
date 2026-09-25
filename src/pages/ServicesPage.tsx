import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceMenu } from '../components/ServiceMenu';
import { StyleConsultant } from '../components/StyleConsultant';
import { FAQSection } from '../components/FAQSection';
import { BUSINESS_INFO } from '../data/salonData';
import { Phone, Scissors, ShieldCheck, Clock } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <Scissors className="w-3.5 h-3.5" />
            <span>{t('Carte Complète Hair Salon Genève', 'Complete Geneva Hair Salon Menu')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Prestations & Tarifs Officiels (CHF)', 'Official Services & Pricing (CHF)')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Des soins capillaires masculins et un entretien de barbe réalisés dans les règles de l\'art, avec ou sans rendez-vous au Confédération Centre.',
              'Master men\'s hair grooming and beard shaping crafted with timeless precision, with or without appointment at Confédération Centre.'
            )}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#ded8cb]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c59b63]" />
              <span>{t('Tarifs transparents en Francs Suisses', 'Transparent Swiss Franc prices')}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#c59b63]" />
              <span>{t('Ouvert Lun-Sam 09h00 – 19h00', 'Open Mon-Sat 9:00 AM – 7:00 PM')}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Services Catalog */}
      <ServiceMenu />

      {/* Morpho Diagnostic & Style Advice */}
      <StyleConsultant />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Bottom Direct Call Banner */}
      <div className="py-12 bg-[#0c0d10] border-t border-[#1e1c19] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <h3 className="font-heading font-bold text-xl text-[#f7f2ea]">
            {t('Une prestation sur-mesure vous intéresse ?', 'Interested in a custom grooming service?')}
          </h3>
          <p className="text-xs sm:text-sm text-[#9c9588]">
            {t(
              'Passez directement au salon ou contactez nos barbiers pour toute question.',
              'Drop by directly or give our master barbers a quick call.'
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
