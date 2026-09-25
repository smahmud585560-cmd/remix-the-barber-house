import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { Scissors, Clock, Phone, Sparkles } from 'lucide-react';

export const ServiceMenu: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'beard' | 'hair' | 'combo' | 'treatment'>('all');

  const filteredServices = SERVICES_LIST.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="services" className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Title & Price Guarantee */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <Scissors className="w-3.5 h-3.5" />
            <span>{t('Carte des Soins & Tarifs en Francs Suisses', 'Grooming Menu & Official Swiss Franc Rates')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Prestations & Tarifs Officiels', 'Official Rates & Services')}
          </h2>
          <p className="text-sm sm:text-base text-[#a9a294] font-light">
            {t(
              'Nos prestations sont réalisées avec ou sans rendez-vous. Tarifs transparents au cœur de Genève (Bel-Air).',
              'All services available with or without appointment. Transparent Geneva Bel-Air pricing.'
            )}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', labelFr: 'Tous les tarifs', labelEn: 'All Prices' },
            { id: 'beard', labelFr: 'Barbe & Rasage (dès 15 CHF)', labelEn: 'Beard & Shave (from 15 CHF)' },
            { id: 'hair', labelFr: 'Coupe & Cheveux (dès 19 CHF)', labelEn: 'Haircuts (from 19 CHF)' },
            { id: 'combo', labelFr: 'Forfaits Combos', labelEn: 'Combo Packages' },
            { id: 'treatment', labelFr: 'Soins Visage', labelEn: 'Facial Rituals' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#c59b63] text-black font-bold shadow-md shadow-[#c59b63]/20'
                  : 'bg-[#18191f] text-[#b0a99c] hover:text-white border border-[#2b2723]'
              }`}
            >
              {lang === 'fr' ? cat.labelFr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                className={`bg-[#14161b] border rounded-xl p-5 flex flex-col justify-between transition-all duration-200 relative group ${
                  service.isPromoOrHighlight
                    ? 'border-[#c59b63]/60 shadow-lg shadow-[#c59b63]/5'
                    : 'border-[#26231f] hover:border-[#423c34]'
                }`}
              >
                {/* Special Highlight Ribbon if highlighted in brief */}
                {service.isPromoOrHighlight && (
                  <div className="absolute top-0 right-5 -translate-y-1/2 bg-[#c59b63] text-black font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    {t('Prestation Vedette Bel-Air', 'Bel-Air Highlight')}
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors leading-snug">
                      {lang === 'fr' ? service.nameFr : service.nameEn}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-lg sm:text-xl font-heading font-black text-[#c59b63] block">
                        CHF {service.priceCHF.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#8c8577]">
                    <Clock className="w-3.5 h-3.5 text-[#c59b63]" />
                    <span>{service.durationMinutes} minutes</span>
                    <span>·</span>
                    <span className="capitalize">{service.category}</span>
                  </div>

                  <p className="text-xs text-[#a39b8d] leading-relaxed">
                    {lang === 'fr' ? service.descriptionFr : service.descriptionEn}
                  </p>
                </div>

                {/* Call directly for this service */}
                <div className="pt-4 mt-4 border-t border-[#211f1b] flex items-center justify-between">
                  <span className="text-[11px] text-[#8c8577]">
                    {t('Avec ou sans RDV', 'Walk-in or call')}
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="px-3 py-1.5 rounded bg-[#1e2027] hover:bg-[#c59b63] text-[#ded8cc] hover:text-black text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-[#c59b63] group-hover:text-black" />
                    <span>{t('Appeler le salon', 'Call salon')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#171922] via-[#1c1d27] to-[#171922] border border-[#312c24] text-center max-w-3xl mx-auto space-y-3">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-[#f7f2eb]">
            {t('Envie d\'une coupe ou d\'une taille de barbe aujourd\'hui ?', 'Looking for a fresh cut or beard trim today?')}
          </h3>
          <p className="text-xs sm:text-sm text-[#b5ada0] max-w-xl mx-auto">
            {t(
              'Appelez-nous au +41 79 325 33 77 ou venez directement sans rendez-vous au Confédération Centre (Rue de la Cité 7, arrêt Tram 12 Bel-Air).',
              'Call us at +41 79 325 33 77 or walk in directly with no appointment at Confédération Centre (Rue de la Cité 7, Tram 12 Bel-Air stop).'
            )}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="px-6 py-3 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#c59b63]/25 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-black fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded bg-[#252733] border border-[#3c372e] text-[#eee8de] text-xs font-bold hover:text-[#c59b63] transition-colors"
            >
              {t('Itinéraire Bel-Air', 'Bel-Air Map')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
