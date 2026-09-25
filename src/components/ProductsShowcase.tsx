import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS_LIST } from '../data/salonData';
import { Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';

export const ProductsShowcase: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 bg-[#111216] border-b border-[#24211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c59b63] font-semibold mb-1">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t('Soins & Produits Barbe Suisses', 'Swiss Beard & Hair Care Line')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#f7f2eb]">
              {t('Disponibles Directement en Salon', 'Available at Rue de la Cité 7')}
            </h2>
            <p className="text-xs sm:text-sm text-[#9f988b] mt-1">
              {t(
                'Les mêmes formules professionnelles utilisées pendant vos soins au fauteuil.',
                'The very same artisanal formulas applied during your grooming session in the chair.'
              )}
            </p>
          </div>

          <div className="text-xs text-[#90897d] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c59b63]" />
            <span>{t('Ingrédients naturels sélectionnés en Suisse', 'Natural ingredients selected in Switzerland')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_LIST.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#16181f] border border-[#27231f] hover:border-[#3f382f] rounded-xl p-5 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-[#c59b63] tracking-wider px-2 py-0.5 rounded bg-[#201d18] border border-[#3b3429]">
                    {prod.badge}
                  </span>
                  <span className="text-xs text-[#8c8577]">{prod.volume}</span>
                </div>

                <h3 className="text-sm font-bold text-[#f5f1e8] group-hover:text-[#c59b63] transition-colors leading-snug">
                  {lang === 'fr' ? prod.nameFr : prod.nameEn}
                </h3>

                <p className="text-[11px] text-[#9a9385] leading-relaxed">
                  <strong className="text-[#beb5a5]">{t('Senteur :', 'Scent:')}</strong> {lang === 'fr' ? prod.scentFr : prod.scentEn}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#23201c] flex items-center justify-between">
                <span className="text-base font-heading font-bold text-[#c59b63]">
                  CHF {prod.priceCHF.toFixed(2)}
                </span>
                <span className="text-[11px] text-[#8e877a]">
                  {t('En stock au salon', 'In salon stock')}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
