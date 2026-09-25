import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS } from '../data/salonData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#0e0f13] border-b border-[#23201d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('Questions Fréquentes', 'Frequently Asked Questions')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f6f1e8]">
            {t('Tout Savoir Avant Votre Visite', 'Good to Know Before You Arrive')}
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#15171d] border border-[#27231f] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#f2ede4]">
                    {lang === 'fr' ? item.qFr : item.qEn}
                  </span>
                  <span className="text-[#c59b63] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#a8a193] leading-relaxed border-t border-[#22201c] pt-3">
                    {lang === 'fr' ? item.aFr : item.aEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
