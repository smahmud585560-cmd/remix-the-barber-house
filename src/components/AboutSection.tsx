import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO, BARBERS } from '../data/salonData';
import { Scissors, Shield, Award, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Quote Hero Banner */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#171821] to-[#121318] border border-[#2b2721] p-8 sm:p-12 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c59b63]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
              <Award className="w-4 h-4" />
              <span>{t('L\'Esprit du Hair Salon · The Barber House', 'The Hair Salon Ethos · The Barber House')}</span>
            </div>

            <blockquote className="text-lg sm:text-2xl font-editorial italic text-[#f6f1e8] leading-relaxed">
              « {lang === 'fr' ? BUSINESS_INFO.quoteFr : BUSINESS_INFO.quoteEn} »
            </blockquote>

            <div className="pt-2 flex flex-col items-center">
              <div className="font-heading font-bold text-base text-[#c59b63] tracking-wider">
                THE BARBER HOUSE · HAIR SALON & BARBIER
              </div>
              <p className="text-xs text-[#8e8779] mt-0.5">
                Hair salon in Geneva, Switzerland · Bel-Air · Confédération Centre (Rue de la Cité 7)
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-[#14161c] border border-[#26231f] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#433b2f] flex items-center justify-center text-[#c59b63]">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-[#f5f0e6]">
              {t('Tradition à l\'Ancienne', 'Old-School Tradition')}
            </h3>
            <p className="text-xs text-[#a59e90] leading-relaxed">
              {t(
                'Lames stérilisées à chaque client, serviettes chaudes gorgées d\'huiles essentielles d\'eucalyptus, blaireau en poils naturels et rasoir coupe-choux affûté.',
                'Surgically sanitized blades for each guest, steaming towels infused with eucalyptus essentials, and artisanal badger brushes.'
              )}
            </p>
          </div>

          <div className="bg-[#14161c] border border-[#26231f] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#433b2f] flex items-center justify-center text-[#c59b63]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-[#f5f0e6]">
              {t('Précision & Conseil Morpho', 'Face Morphology Precision')}
            </h3>
            <p className="text-xs text-[#a59e90] leading-relaxed">
              {t(
                'Chaque taille de barbe et chaque dégradé est pensé selon la forme de votre mâchoire, l\'implantation naturelle de vos cheveux et votre style de vie.',
                'Every cut and beard line is engineered around your jawline structure, hair growth direction, and personal lifestyle.'
              )}
            </p>
          </div>

          <div className="bg-[#14161c] border border-[#26231f] rounded-xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#201e19] border border-[#433b2f] flex items-center justify-center text-[#c59b63]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-heading font-bold text-[#f5f0e6]">
              {t('Accueil & Sans Prétention', 'Warm & Genuine Hospitality')}
            </h3>
            <p className="text-xs text-[#a59e90] leading-relaxed">
              {t(
                'Un vrai moment de détente au cœur de Genève. Café espresso offert, ambiance musicale feutrée, équipe souriante et écoute attentive.',
                'A genuine pause in downtown Geneva. Complimentary espresso, curated vintage tunes, attentive ears, and smiling master barbers.'
              )}
            </p>
          </div>

        </div>

        {/* Master Barbers Presentation */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-heading font-bold text-[#f7f2ea]">
              {t('L\'Équipe des Maîtres Barbiers', 'The Master Barbers')}
            </h3>
            <p className="text-xs sm:text-sm text-[#9c9588]">
              {t(
                'Des artisans passionnés cumulant plus de 30 années d\'expérience combinée à Genève.',
                'Passionate craftsmen with over 30 combined years of high-precision styling in Geneva.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="bg-[#15171d] border border-[#27231f] rounded-xl p-5 flex items-center gap-4 hover:border-[#423c34] transition-colors"
              >
                <img
                  src={barber.avatarUrl}
                  alt={barber.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#c59b63]/60 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-sm text-[#f5f0e6]">
                      {barber.name}
                    </h4>
                    <span className="text-[10px] text-[#c59b63] font-semibold">
                      {barber.experienceYears} {t('ans d\'exp.', 'yrs exp.')}
                    </span>
                  </div>
                  <p className="text-xs text-[#c59b63] font-medium">
                    {lang === 'fr' ? barber.roleFr : barber.roleEn}
                  </p>
                  <p className="text-[11px] text-[#9a9385] leading-snug">
                    {lang === 'fr' ? barber.specialtyFr : barber.specialtyEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
