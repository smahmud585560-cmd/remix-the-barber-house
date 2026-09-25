import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STYLE_CONSULTATION_DATA, BUSINESS_INFO } from '../data/salonData';
import { Sparkles, Scissors, Check, Phone } from 'lucide-react';

export const StyleConsultant: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedShape, setSelectedShape] = useState<string>('square');

  const currentAdvisor = STYLE_CONSULTATION_DATA.find(s => s.faceShapeId === selectedShape) || STYLE_CONSULTATION_DATA[0];

  return (
    <section id="morpho-guide" className="py-16 bg-[#121318] border-b border-[#24211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Expertise Morphologie & Barbe', 'Face Shape & Beard Consultation')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f6f2ea]">
            {t('Du Sur-Mesure Pour Votre Visage', 'Bespoke Grooming for Your Face Structure')}
          </h2>
          <p className="text-sm text-[#a49d8f] font-light">
            {t(
              '« Spécialiste Barbes, conseils beauté, du sur-mesure pour tout type de barbes à Bel-Air. » Découvrez la coupe et le tracé recommandés par nos maîtres barbiers.',
              '« Beard specialist, custom styling advice for every beard type in Bel-Air. » Discover the cut and razor line tailored to your profile.'
            )}
          </p>
        </div>

        {/* Interactive Shape Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
          {STYLE_CONSULTATION_DATA.map((item) => (
            <button
              key={item.faceShapeId}
              onClick={() => setSelectedShape(item.faceShapeId)}
              className={`p-3.5 rounded-lg border text-center transition-all cursor-pointer ${
                selectedShape === item.faceShapeId
                  ? 'bg-[#1e1f28] border-[#c59b63] shadow-lg shadow-[#c59b63]/10 text-white'
                  : 'bg-[#15171d] border-[#292621] text-[#9a9386] hover:text-[#d9d3c7] hover:border-[#423c34]'
              }`}
            >
              <div className="font-heading font-bold text-sm mb-0.5 text-[#f1ece2]">
                {lang === 'fr' ? item.labelFr : item.labelEn}
              </div>
              <span className="text-[11px] text-[#8e8779] block">
                {lang === 'fr' ? item.descriptionFr.slice(0, 32) + '...' : item.descriptionEn.slice(0, 32) + '...'}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Recommendation Card */}
        <div className="max-w-4xl mx-auto bg-[#161820] border border-[#2d2923] rounded-xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Beard Advice */}
            <div className="space-y-3 p-5 rounded-lg bg-[#1a1c24] border border-[#282622]">
              <div className="flex items-center gap-2 text-[#c59b63] font-semibold text-xs uppercase tracking-wider">
                <Scissors className="w-4 h-4" />
                <span>{t('Conseil Barbe & Lignes', 'Beard & Razor Lines Recommendation')}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-[#f5f1e8]">
                {lang === 'fr' ? currentAdvisor.labelFr : currentAdvisor.labelEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada0] leading-relaxed">
                {lang === 'fr' ? currentAdvisor.beardAdviceFr : currentAdvisor.beardAdviceEn}
              </p>
              <div className="pt-2 text-xs text-[#8f887b] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>{t('Finitions au coupe-choux & serviette chaude', 'Straight-razor detailing & hot steam towel')}</span>
              </div>
            </div>

            {/* Hair Advice */}
            <div className="space-y-3 p-5 rounded-lg bg-[#1a1c24] border border-[#282622]">
              <div className="flex items-center gap-2 text-[#c59b63] font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t('Conseil Coupe & Dégradé', 'Haircut & Fade Recommendation')}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-[#f5f1e8]">
                {t('Dégradé & Volume Recommandés', 'Recommended Fade & Top Volume')}
              </h3>
              <p className="text-xs sm:text-sm text-[#b5ada0] leading-relaxed">
                {lang === 'fr' ? currentAdvisor.hairAdviceFr : currentAdvisor.hairAdviceEn}
              </p>
              <div className="pt-2 text-xs text-[#8f887b] flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>{t('Conseils personnalisés au fauteuil à Bel-Air', 'Personalized advice in the chair at Bel-Air')}</span>
              </div>
            </div>

          </div>

          {/* Action: Call */}
          <div className="mt-6 pt-5 border-t border-[#26231f] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#9d9588] text-center sm:text-left">
              {t(
                'Nos barbiers valident ce diagnostic avec vous au salon avant le premier coup de ciseaux.',
                'Our master barbers validate and refine this diagnostic with you in person at the shop.'
              )}
            </span>
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="px-5 py-2.5 rounded bg-gradient-to-r from-[#c59b63] to-[#aa8049] hover:from-[#d5aa6e] hover:to-[#ba8d52] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-[#c59b63]/20 shrink-0"
            >
              <Phone className="w-4 h-4 text-black fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
