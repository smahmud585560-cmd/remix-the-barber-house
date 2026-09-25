import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { Phone, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export const WalkInCallBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-[#121318] border-b border-[#24211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#171922] via-[#1a1b24] to-[#171922] border border-[#2e2a22] rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b63] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span>{t('Avec ou Sans Rendez-vous · Bel-Air', 'Walk-ins & Appointments · Bel-Air')}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f7f2ea]">
                {t('Passez Directement ou Appelez Nous', 'Drop In Directly or Give Us a Call')}
              </h2>

              <p className="text-xs sm:text-sm text-[#beb6a7] leading-relaxed max-w-2xl">
                {t(
                  "« Un vrai barber shop à l'ancienne. Une équipe professionnelle et sympathique à votre écoute. Avec ou sans rendez-vous. Accès tram 12 Centre Bel Air Cité. »",
                  "« A genuine old-school barbershop. A professional and friendly crew at your service. With or without appointment. Direct access via tram 12 Centre Bel Air Cité. »"
                )}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#ded8cb] pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#c59b63]" />
                  <span>{t('Lun-Sam 09h00 – 19h00', 'Mon-Sat 9:00 AM – 7:00 PM')}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#c59b63]" />
                  <span>{t('Rue de la Cité 7 (Confédération Centre)', 'Rue de la Cité 7 (Confédération Centre)')}</span>
                </div>
              </div>
            </div>

            {/* Right Direct Call Action */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#c59b63] via-[#ba9057] to-[#9e7740] hover:from-[#d5aa6e] hover:to-[#ae854d] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-[#c59b63]/25 flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 text-center"
              >
                <Phone className="w-5 h-5 text-black fill-black shrink-0" />
                <span>{BUSINESS_INFO.formattedPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1b1c24] hover:bg-[#23242e] border border-[#332f28] text-xs font-bold text-[#f1ece2] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e]" />
                <span>{t('Discuter sur WhatsApp', 'Chat on WhatsApp')}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
