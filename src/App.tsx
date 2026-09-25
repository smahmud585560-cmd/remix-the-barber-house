import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationPage } from './pages/LocationPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { ShareModal } from './components/ShareModal';
import { BUSINESS_INFO } from './data/salonData';
import { PageId } from './types';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const validPages: PageId[] = ['home', 'services', 'location', 'about', 'gallery', 'contact', 'blog'];

const MainContent: React.FC = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Sync with URL hash on load and when hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0e11] text-[#f4efe8] flex flex-col selection:bg-[#c59b63] selection:text-black">
      
      {/* Header with clean navigation: home, services, location, about, gallery, contact, blog */}
      <Header currentPage={currentPage} onNavigate={navigate} />

      {/* Dedicated Multi-Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onOpenShareModal={() => setShareModalOpen(true)}
          />
        )}

        {currentPage === 'services' && <ServicesPage />}

        {currentPage === 'location' && <LocationPage />}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'gallery' && <GalleryPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'blog' && <BlogPage />}
      </main>

      {/* Footer with page navigation links */}
      <Footer onNavigate={navigate} />

      {/* Share / QR Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
      />

      {/* Sticky Mobile Quick Contact Dock: Focus on Direct Call */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#121319]/95 backdrop-blur-md border-t border-[#2a2620] px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={BUSINESS_INFO.phoneTelLink}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c59b63]/25"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>{t('Appeler le Salon', 'Call Salon')}</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-xl bg-[#1f2027] border border-[#3b352b] text-[#22c55e] flex items-center justify-center shrink-0"
          title="WhatsApp The Barber House"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <button
          onClick={() => navigate('location')}
          className="p-3 rounded-xl bg-[#1f2027] border border-[#3b352b] text-[#c59b63] flex items-center justify-center shrink-0 cursor-pointer"
          title="Location Tram 12 Bel-Air"
          aria-label="Location"
        >
          <MapPin className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
