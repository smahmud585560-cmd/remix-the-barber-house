import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { PageId } from '../types';
import { Phone, Scissors, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; labelFr: string; labelEn: string }[] = [
    { id: 'home', labelFr: 'Home', labelEn: 'Home' },
    { id: 'services', labelFr: 'Services', labelEn: 'Services' },
    { id: 'location', labelFr: 'Location', labelEn: 'Location' },
    { id: 'about', labelFr: 'About', labelEn: 'About' },
    { id: 'gallery', labelFr: 'Gallery', labelEn: 'Gallery' },
    { id: 'contact', labelFr: 'Contact', labelEn: 'Contact' },
    { id: 'blog', labelFr: 'Blog', labelEn: 'Blog' },
  ];

  const handleLinkClick = (id: PageId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f1013]/95 backdrop-blur-md shadow-2xl border-b border-[#292622] py-3'
          : 'bg-[#0f1013] border-b border-[#1f1d1a] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Identity / Hair Salon Logo */}
        <button
          onClick={(e) => handleLinkClick('home', e)}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#c59b63] to-[#8c6b3e] flex items-center justify-center text-black shadow-lg shadow-[#c59b63]/10">
            <Scissors className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
          </div>
          <div>
            <div className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#f4efe8] flex items-center gap-2">
              <span>THE BARBER HOUSE</span>
              <span className="text-[10px] uppercase font-sans tracking-widest px-1.5 py-0.5 bg-[#25221d] text-[#c59b63] border border-[#423b32] rounded">
                Genève
              </span>
            </div>
            <p className="text-[11px] text-[#938b7e] font-sans tracking-wide">
              {t('Hair Salon & Barbier · Bel-Air Cité', 'Hair Salon & Barber · Bel-Air Cité')}
            </p>
          </div>
        </button>

        {/* Exact Menu Requested: (home, services, location, about, gallery, contact, blog) with multi-page navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`capitalize transition-all py-1.5 relative cursor-pointer ${
                  isActive
                    ? 'text-[#c59b63] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#c59b63]'
                    : 'text-[#cbc4b7] hover:text-[#c59b63]'
                }`}
              >
                {lang === 'fr' ? link.labelFr : link.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions: Language Switch & Direct Call Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Subtle Language switcher */}
          <div className="flex items-center border border-[#34302b] rounded bg-[#1c1d22] p-0.5 text-[11px]">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                lang === 'fr'
                  ? 'bg-[#c59b63] text-black font-bold'
                  : 'text-[#9c958a] hover:text-white'
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#c59b63] text-black font-bold'
                  : 'text-[#9c958a] hover:text-white'
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <a
            href={BUSINESS_INFO.phoneTelLink}
            className="px-4 py-2.5 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] hover:from-[#d6aa6e] hover:to-[#be9359] text-black text-xs font-bold tracking-wide uppercase shadow-md shadow-[#c59b63]/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-black fill-black" />
            <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded text-[#cbc4b7] hover:text-[#c59b63] border border-[#2b2723]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with page switches */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121317] border-b border-[#2a2622] px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-2 text-sm">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`py-2 px-3 rounded-lg text-left flex items-center justify-between capitalize transition-colors ${
                    isActive
                      ? 'bg-[#222430] text-[#c59b63] font-bold border border-[#c59b63]/30'
                      : 'text-[#ded8cc] hover:bg-[#1a1b22] hover:text-[#c59b63]'
                  }`}
                >
                  <span>{lang === 'fr' ? link.labelFr : link.labelEn}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#c59b63]"></span>
                  ) : (
                    <span className="text-xs text-[#71695c]">→</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-[#a0988b] pb-1">
              <span>{t('Langue', 'Language')} :</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLang('fr')}
                  className={`px-2 py-0.5 rounded text-xs cursor-pointer ${lang === 'fr' ? 'bg-[#c59b63] text-black font-bold' : 'text-white'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded text-xs cursor-pointer ${lang === 'en' ? 'bg-[#c59b63] text-black font-bold' : 'text-white'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.phoneTelLink}
              className="w-full py-3 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-[#c59b63]/25"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>{t('Appeler : +41 79 325 33 77', 'Call: +41 79 325 33 77')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
