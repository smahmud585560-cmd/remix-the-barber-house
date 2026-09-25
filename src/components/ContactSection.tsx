import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Phone, MapPin, Clock, MessageCircle, Navigation, Train, Car, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>{t('Contact Direct & Renseignements', 'Direct Contact & Inquiries')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Contactez The Barber House Genève', 'Get in Touch with The Barber House')}
          </h2>
          <p className="text-sm text-[#a49d8f] font-light">
            {t(
              'Un accueil chaleureux et sans attente superflue. Appelez-nous directement ou venez sans rendez-vous à Bel-Air.',
              'Warm hospitality and straightforward care. Call us directly or drop in without an appointment at Bel-Air.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Call Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#161822] via-[#1a1b26] to-[#161822] border border-[#3b3429] rounded-2xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#201d17] border border-[#443b2d] text-xs font-bold text-[#c59b63] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span>{t('Ligne Directe Salon', 'Salon Direct Line')}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#f7f2ea] leading-tight">
                  {BUSINESS_INFO.formattedPhone}
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a193] mt-2">
                  {t(
                    'Joignable du lundi au samedi de 09h00 à 19h00 pour toute question sur nos prestations, temps d\'attente ou informations.',
                    'Available Monday through Saturday from 9:00 AM to 7:00 PM for services info, current queue status, and quick inquiries.'
                  )}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#ded8cb]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>{t('Avec ou sans rendez-vous', 'Walk-ins and spontaneous visits welcome')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>{t('Accès immédiat tram 12 arrêt Bel-Air', 'Immediate access via Tram 12 at Bel-Air stop')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                  <span>{t('Café espresso suisse offert au salon', 'Complimentary Swiss espresso in the parlour')}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] hover:from-[#d5aa6e] hover:to-[#ba8d52] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#c59b63]/25 flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-0.5 text-center"
              >
                <Phone className="w-4 h-4 text-black fill-black" />
                <span>{t('Appeler Maintenant', 'Call Now')}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="py-4 px-5 rounded-xl bg-[#1e2029] hover:bg-[#272935] border border-[#3b362c] text-xs font-bold text-[#22c55e] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Location & Access Card */}
          <div className="lg:col-span-6 bg-[#15171f] border border-[#2b2723] rounded-2xl p-7 sm:p-9 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#25221d]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c59b63]">
                  <MapPin className="w-4 h-4" />
                  <span>{t('Adresse & Accès Bel-Air', 'Address & Bel-Air Transit')}</span>
                </div>
                <span className="text-xs text-[#8e8779]">Rive Gauche Genève</span>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-[#f7f2eb]">
                  Confédération Centre
                </h4>
                <p className="text-sm text-[#ded8cb] font-medium mt-1">
                  Rue de la Cité 7, 1204 Genève, Suisse
                </p>
                <p className="text-xs text-[#9d9587] mt-1">
                  {t(
                    'Entrée directe au niveau de la Rue de la Cité ou via la galerie commerciale Confédération Centre.',
                    'Direct entrance at Rue de la Cité street level or through the Confédération Centre gallery.'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-[#1a1c24] border border-[#26231f] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#eee8dd]">
                    <Train className="w-3.5 h-3.5 text-[#c59b63]" />
                    <span>Transports Publics TPG</span>
                  </div>
                  <p className="text-xs text-[#a0988b]">
                    Trams 12, 14, 18 · Arrêt Bel-Air (1 min à pied)
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1a1c24] border border-[#26231f] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#eee8dd]">
                    <Car className="w-3.5 h-3.5 text-[#c59b63]" />
                    <span>Parkings Voitures</span>
                  </div>
                  <p className="text-xs text-[#a0988b]">
                    Parking de la Cité (100m) & Parking Mont-Blanc
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#23201d] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#a8a193] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c59b63]" />
                <span>{t('Ouvert Lun-Sam 09h00 – 19h00', 'Open Mon-Sat 9:00 AM – 7:00 PM')}</span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-[#232530] hover:bg-[#c59b63] text-[#ded8cc] hover:text-black font-bold text-xs uppercase flex items-center gap-1.5 transition-colors border border-[#343029]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t('Itinéraire GPS', 'GPS Directions')}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
