import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BUSINESS_INFO } from '../data/salonData';
import { X, Copy, Check, QrCode, Phone, MapPin, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#15171e] border border-[#342f27] rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8f887b] hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#201d18] border border-[#c59b63]/50 mx-auto flex items-center justify-center text-[#c59b63]">
            <Share2 className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-heading font-bold text-[#f8f4ec]">
            The Barber House Genève
          </h3>
          <p className="text-xs text-[#9d9587]">
            Confédération Centre, Rue de la Cité 7, 1204 Genève
          </p>

          {/* Quick contact summary */}
          <div className="p-3.5 bg-[#1b1c24] border border-[#2a2620] rounded-xl text-left text-xs space-y-2 text-[#d4cdbf]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#c59b63]" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c59b63]" />
              <span>Tram 12, 14, 18 · Arrêt Bel-Air</span>
            </div>
          </div>

          {/* Copy link input */}
          <div className="pt-2 flex gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full px-3 py-2 bg-[#101115] border border-[#2a2723] rounded text-xs text-[#a9a293]"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded bg-[#c59b63] hover:bg-[#d6aa6e] text-black font-bold text-xs uppercase flex items-center gap-1 shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t('Copié', 'Copied') : t('Copier', 'Copy')}</span>
            </button>
          </div>

          <div className="pt-2 text-[11px] text-[#8a8375]">
            {t(
              'Partagez facilement les coordonnées du salon avec vos proches ou collègues.',
              'Easily share the barbershop contact and address with friends or coworkers.'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
