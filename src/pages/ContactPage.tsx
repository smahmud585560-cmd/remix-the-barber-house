import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactSection } from '../components/ContactSection';
import { BUSINESS_INFO } from '../data/salonData';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>{t('Contact & Renseignements Hair Salon', 'Hair Salon Contact & Inquiries')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Contactez The Barber House Genève', 'Contact The Barber House Geneva')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Pour connaître l\'affluence en direct, poser une question sur un soin ou obtenir un itinéraire, appelez directement notre salon.',
              'To check real-time chair availability, ask about a treatment, or get transit guidance, reach out to our parlour.'
            )}
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
};
