import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BlogSection } from '../components/BlogSection';
import { BUSINESS_INFO } from '../data/salonData';
import { BookOpen, Phone, Sparkles } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <div className="bg-[#12141a] border-b border-[#24211e] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c59b63] font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('Conseils & Actualités Capillaires', 'Grooming Advice & Trends')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#f7f2ea]">
            {t('Le Journal du Hair Salon Genève', 'The Geneva Hair Salon Journal')}
          </h1>
          <p className="text-sm sm:text-base text-[#a9a293] max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              'Découvrez les tendances coupes masculines, les secrets d\'entretien de la barbe et les guides de nos maîtres barbiers genevois.',
              'Discover masculine haircut trends, beard grooming rituals, and insider guides written by our Geneva master barbers.'
            )}
          </p>
        </div>
      </div>

      {/* Main Blog Section */}
      <BlogSection />

      {/* Call CTA */}
      <div className="py-12 bg-[#0c0d10] border-t border-[#1e1c19] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <h3 className="font-heading font-bold text-xl text-[#f7f2ea]">
            {t('Envie de tester une de ces coupes en salon ?', 'Ready to try one of these styles in salon?')}
          </h3>
          <p className="text-xs sm:text-sm text-[#9c9588]">
            {t(
              'Passez directement au Confédération Centre ou appelez-nous.',
              'Drop by directly at Confédération Centre or give us a call.'
            )}
          </p>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#c59b63]/25"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
