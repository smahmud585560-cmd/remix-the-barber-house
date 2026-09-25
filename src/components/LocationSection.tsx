import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Compass, 
  Train, 
  Car, 
  ExternalLink,
  CheckCircle,
  Building2
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday ...
  // Map JS day (0=Sun, 1=Mon, ..., 6=Sat) to BUSINESS_INFO.hours index (0=Mon, 1=Tue, ..., 6=Sun)
  const adjustedToday = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="location" className="py-16 bg-[#111217] border-b border-[#24211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('Hair Salon Location & Accès Rive Gauche', 'Hair Salon Location & Transit Guide')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Hair Salon au Cœur de Genève à Bel-Air', 'Hair Salon in the Heart of Geneva at Bel-Air')}
          </h2>
          <p className="text-sm text-[#a49d8f] font-light">
            {t(
              'Hair salon in Geneva, Switzerland — Installé au sein du Confédération Centre, Rue de la Cité 7. À 1 minute du tram 12.',
              'Hair salon in Geneva, Switzerland — Located inside Confédération Centre at Rue de la Cité 7. 1 minute from tram 12.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Transit, Directions & Map Preview */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Location Card */}
            <div className="bg-[#161820] border border-[#2b2723] rounded-xl overflow-hidden shadow-xl">
              
              {/* Stylized Dark Map Canvas Preview */}
              <div className="relative h-64 bg-[#0d0e12] overflow-hidden flex items-center justify-center p-6 border-b border-[#24211d]">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c59b63_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Decorative map streets pattern */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div className="w-[120%] h-1 bg-[#36322b] rotate-12 absolute" />
                  <div className="w-[120%] h-1 bg-[#36322b] -rotate-45 absolute" />
                  <div className="w-2 h-[120%] bg-[#36322b] absolute left-1/3" />
                  <div className="w-2 h-[120%] bg-[#36322b] absolute right-1/4" />
                </div>

                {/* Central Salon Pin */}
                <div className="relative z-10 text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1b1c23] border-2 border-[#c59b63] shadow-2xl shadow-[#c59b63]/30 flex items-center justify-center text-[#c59b63] animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="px-3 py-1.5 rounded bg-[#101115]/90 border border-[#3b342a] shadow-lg">
                    <div className="font-heading font-bold text-xs text-[#f7f2ea]">THE BARBER HOUSE</div>
                    <div className="text-[11px] text-[#c59b63]">Rue de la Cité 7 · 1204 Genève</div>
                  </div>
                </div>

                {/* Quick Map Action Links on top */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded bg-[#1f2029]/95 border border-[#3d3830] text-xs font-semibold text-[#eee8df] hover:text-[#c59b63] flex items-center gap-1.5 backdrop-blur-sm"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Wayfinding Instructions */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#20222a] flex items-center justify-center text-[#c59b63] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#f5f0e6]">
                      {t('À l\'intérieur du Confédération Centre', 'Inside Confédération Centre')}
                    </h3>
                    <p className="text-xs text-[#a49d8f] mt-0.5 leading-relaxed">
                      {t(
                        'Entrée directe par la Rue de la Cité 7 ou par la Rue de la Confédération. Suivez l\'enseigne "The Barber House Coiffure & Barbier".',
                        'Direct entrance via Rue de la Cité 7 or via Rue de la Confédération corridor. Look for the "The Barber House Coiffure & Barbier" heritage sign.'
                      )}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#23201d]">
                  
                  {/* Public Transit TPG */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ded8cc]">
                      <Train className="w-4 h-4 text-[#c59b63]" />
                      <span>{t('Transports TPG (Bel-Air)', 'Public Transit TPG (Bel-Air)')}</span>
                    </div>
                    <div className="text-xs text-[#9d9588] space-y-1">
                      <p>
                        <strong className="text-[#eee8dd]">Trams 12, 14, 18 :</strong> Arrêt Bel-Air (1 min à pied)
                      </p>
                      <p>
                        <strong className="text-[#eee8dd]">Bus 2, 3, 5, 7, 10, 19, 36 :</strong> Arrêt Bel-Air
                      </p>
                    </div>
                  </div>

                  {/* Car Parking */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ded8cc]">
                      <Car className="w-4 h-4 text-[#c59b63]" />
                      <span>{t('Parkings à Proximité', 'Nearby Parking Garages')}</span>
                    </div>
                    <div className="text-xs text-[#9d9588] space-y-1">
                      <p>
                        <strong className="text-[#eee8dd]">Parking de la Cité :</strong> à 100 mètres (Rue de la Cité)
                      </p>
                      <p>
                        <strong className="text-[#eee8dd]">Parking Mont-Blanc :</strong> à 400 mètres
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-3 border-t border-[#23201d] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#8c8577]">
                    {t('Téléphone direct pour guidage :', 'Direct assistance phone:')}
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneTelLink}
                    className="text-xs font-bold text-[#c59b63] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{BUSINESS_INFO.formattedPhone}</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Weekly Hours & Live Status */}
          <div className="lg:col-span-5 bg-[#161820] border border-[#2b2723] rounded-xl p-6 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#25221e]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c59b63] font-semibold">
                <Clock className="w-4 h-4" />
                <span>{t('Horaires d\'Ouverture', 'Opening Hours')}</span>
              </div>
              <span className="text-[11px] text-[#22c55e] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span>{t('Ouvert · Ferme 19h', 'Open · Closes 7 PM')}</span>
              </span>
            </div>

            {/* Weekly Hours Table */}
            <div className="space-y-2 text-xs">
              {BUSINESS_INFO.hours.map((h, idx) => {
                const isCurrentDay = idx === adjustedToday;
                return (
                  <div
                    key={h.dayFr}
                    className={`flex items-center justify-between py-2 px-3 rounded transition-colors ${
                      isCurrentDay
                        ? 'bg-[#232530] border border-[#c59b63]/40 text-white font-bold'
                        : 'text-[#a9a294] hover:bg-[#1a1c24]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isCurrentDay && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b63]"></span>
                      )}
                      <span>{lang === 'fr' ? h.dayFr : h.dayEn}</span>
                      {isCurrentDay && (
                        <span className="text-[10px] text-[#c59b63] uppercase tracking-wider font-semibold">
                          ({t('Aujourd\'hui', 'Today')})
                        </span>
                      )}
                    </div>
                    <div>
                      {h.isOpen ? (
                        <span className="text-[#ded8cc]">
                          {h.opens} – {h.closes}
                        </span>
                      ) : (
                        <span className="text-[#7c7569]">{t('Fermé', 'Closed')}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Practical Notes */}
            <div className="p-4 rounded-lg bg-[#1a1c24] border border-[#27241f] text-xs text-[#a49d8f] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#eee9df]">
                <CheckCircle className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>{t('Sans rendez-vous toute la semaine', 'Walk-ins accepted all week')}</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                {t(
                  'Pour le déjeuner (12h-14h) et après 17h, venez 15 minutes avant ou réservez votre créneau en ligne.',
                  'During lunch rush (12-2 PM) and after 5 PM, arriving slightly ahead or booking online guarantees zero wait.'
                )}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded bg-[#25221d] hover:bg-[#c59b63] text-[#ded8cc] hover:text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#3b352c]"
              >
                <Navigation className="w-4 h-4" />
                <span>{t('Lancer l\'itinéraire GPS', 'Start GPS Navigation')}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
