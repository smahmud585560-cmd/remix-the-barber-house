import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LocationSection } from '../components/LocationSection';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Phone, Train, Car, Navigation, Building2 } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('Situation & Accès Hair Salon', 'Hair Salon Location & Transit')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Confédération Centre · Bel-Air Cité', 'Confédération Centre · Bel-Air Cité')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Idéalement situé sur la rive gauche de Genève, au croisement des lignes de tram 12, 14 et 18, à 1 minute à pied de l\'arrêt Bel-Air.',
              'Conveniently located on Geneva\'s left bank, at the crossroads of tram lines 12, 14, and 18, 1 minute walking from Bel-Air stop.'
            )}
          </p>
        </div>
      </div>

      {/* Main Location Section */}
      <LocationSection />

      {/* Access Steps Guide */}
      <section className="py-14 bg-[#0e0f13] border-b border-[#23201d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#15171d] border border-[#27231f] rounded-xl p-6 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#201d17] border border-[#3e3529] flex items-center justify-center text-[#c59b63]">
                <Train className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8]">
                {t('En Tram & Bus TPG', 'By Public Transit TPG')}
              </h3>
              <p className="text-xs text-[#a0988b] leading-relaxed">
                {t(
                  'Descendre à l\'arrêt Bel-Air (Trams 12, 14, 18 ou Bus 2, 3, 5, 7, 10, 19, 36). Entrer dans le Confédération Centre au 7 Rue de la Cité.',
                  'Alight at Bel-Air stop (Trams 12, 14, 18 or Buses 2, 3, 5, 7, 10, 19, 36). Step into Confédération Centre at Rue de la Cité 7.'
                )}
              </p>
            </div>

            <div className="bg-[#15171d] border border-[#27231f] rounded-xl p-6 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#201d17] border border-[#3e3529] flex items-center justify-center text-[#c59b63]">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8]">
                {t('En Voiture & Parkings', 'By Car & Nearby Parking')}
              </h3>
              <p className="text-xs text-[#a0988b] leading-relaxed">
                {t(
                  'Parking de la Cité (100 mètres) ou Parking du Mont-Blanc (400 mètres). Accès piéton direct en quelques minutes.',
                  'Parking de la Cité (100 meters away) or Parking du Mont-Blanc (400 meters away). Direct pedestrian access in minutes.'
                )}
              </p>
            </div>

            <div className="bg-[#15171d] border border-[#27231f] rounded-xl p-6 space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#201d17] border border-[#3e3529] flex items-center justify-center text-[#c59b63]">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-sm text-[#f5f1e8]">
                {t('Dans le Centre Commercial', 'Inside the Centre')}
              </h3>
              <p className="text-xs text-[#a0988b] leading-relaxed">
                {t(
                  'The Barber House est visible dès l\'entrée Rue de la Cité avec son enseigne traditionnelle et ses fauteuils vintage.',
                  'The Barber House is clearly visible from the Rue de la Cité entrance with its traditional sign and vintage leather chairs.'
                )}
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#c59b63]/25"
            >
              <Navigation className="w-4 h-4" />
              <span>{t('Ouvrir l\'itinéraire Google Maps', 'Open Google Maps Navigation')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
