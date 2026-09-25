import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { PageId } from '../types';
import { Phone, MapPin, Clock, Scissors, Star, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, setLang, t } = useLanguage();

  const handleNav = (page: PageId, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#0b0b0e] text-[#8e8779] text-xs border-t border-[#1f1d1a] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1c1a17]">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#c59b63] flex items-center justify-center text-black font-bold">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-base tracking-wider text-[#f5f0e6]">
                THE BARBER HOUSE
              </span>
            </div>

            <p className="text-xs text-[#a69e90] leading-relaxed">
              {t(
                "Hair salon et barbier d'exception au centre-ville de Genève. Un vrai barber shop à l'ancienne avec une équipe professionnelle et sympathique à votre écoute.",
                "Men's hair salon and authentic traditional barbershop in central Geneva. Attentive craftsmanship, razor sharpness, and genuine hospitality."
              )}
            </p>

            <div className="flex items-center gap-3 text-[#ded8cc]">
              <div className="flex items-center text-[#e5b34a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e5b34a]" />
                ))}
              </div>
              <span className="font-bold text-xs">4.8 / 5</span>
              <span className="text-[#6b6458]">·</span>
              <span className="text-[#8e8779]">{BUSINESS_INFO.totalReviews} avis Google</span>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#6e685c] block mb-1">
                {t('Modes de règlement :', 'Accepted payment:')}
              </span>
              <span className="text-xs text-[#ded8cb]">
                Espèces CHF · TWINT · Cartes bancaires · Apple Pay
              </span>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#f5f0e6] tracking-wider uppercase">
              {t('Contact & Adresse', 'Contact & Location')}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-[#b0a89a]">
                <MapPin className="w-4 h-4 text-[#c59b63] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#f1ede3] font-medium">Confédération Centre</p>
                  <p>Rue de la Cité 7, 1204 Genève</p>
                  <p className="text-[11px] text-[#8e8779]">Rive Gauche · Arrêt Bel-Air (Tram 12)</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#b0a89a]">
                <Phone className="w-4 h-4 text-[#c59b63] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTelLink}
                  className="hover:text-[#c59b63] transition-colors font-bold text-[#f1ede3] text-sm"
                >
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={BUSINESS_INFO.phoneTelLink}
                className="px-4 py-2 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-xs uppercase flex items-center gap-1.5 shadow-md shadow-[#c59b63]/20"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>{t('Appeler le salon', 'Call salon')}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded bg-[#1e2027] border border-[#343029] text-xs font-semibold text-[#22c55e] flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Practical Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#f5f0e6] tracking-wider uppercase">
              {t('Horaires Bel-Air', 'Bel-Air Hours')}
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span>{t('Lun – Sam', 'Mon – Sat')}</span>
                <span className="text-[#ded8cb] font-semibold">09:00 – 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t('Dimanche', 'Sunday')}</span>
                <span className="text-[#6e685c]">{t('Fermé', 'Closed')}</span>
              </div>
              <div className="pt-2 text-[11px] text-[#22c55e] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                <span>{t('Sans rendez-vous', 'Walk-ins welcome')}</span>
              </div>
            </div>
          </div>

          {/* Exact Menu Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#f5f0e6] tracking-wider uppercase">
              {t('Pages du Site', 'Website Pages')}
            </h4>
            <div className="space-y-2 flex flex-col text-xs">
              <button
                onClick={(e) => handleNav('home', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={(e) => handleNav('services', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Services (dès 15 CHF)
              </button>
              <button
                onClick={(e) => handleNav('location', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Location (Tram 12)
              </button>
              <button
                onClick={(e) => handleNav('about', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={(e) => handleNav('gallery', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Gallery
              </button>
              <button
                onClick={(e) => handleNav('contact', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                onClick={(e) => handleNav('blog', e)}
                className="text-left text-[#9e9688] hover:text-[#c59b63] transition-colors cursor-pointer"
              >
                Blog
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e685c]">
          <p>
            © {new Date().getFullYear()} The Barber House Genève · Hair Salon. Rue de la Cité 7 (Confédération Centre).
          </p>

          <div className="flex items-center gap-4">
            <span>{t('Genève Rive Gauche', 'Geneva Left Bank')}</span>
            <span>·</span>
            <span>Tram 12 Bel-Air</span>
            <span>·</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setLang('fr')}
                className={`cursor-pointer ${lang === 'fr' ? 'text-[#c59b63] font-bold' : 'hover:text-white'}`}
              >
                FR
              </button>
              <span>/</span>
              <button
                onClick={() => setLang('en')}
                className={`cursor-pointer ${lang === 'en' ? 'text-[#c59b63] font-bold' : 'hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
