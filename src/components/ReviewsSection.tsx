import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { REVIEWS_LIST, BUSINESS_INFO } from '../data/salonData';
import { ReviewItem } from '../types';
import { 
  Star, 
  ThumbsUp, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  Filter,
  Plus,
  X
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'beard' | 'fade' | 'walkin'>('all');
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_LIST);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [showAddModal, setShowAddModal] = useState(false);

  // New review form states
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newService, setNewService] = useState('Coupe et barbe');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleLike = (id: string) => {
    const nextLiked = new Set(likedIds);
    if (nextLiked.has(id)) {
      nextLiked.delete(id);
      setReviews(prev => prev.map(r => r.id === id ? { ...r, likes: (r.likes || 0) - 1 } : r));
    } else {
      nextLiked.add(id);
      setReviews(prev => prev.map(r => r.id === id ? { ...r, likes: (r.likes || 0) + 1 } : r));
    }
    setLikedIds(nextLiked);
  };

  const filteredReviews = reviews.filter(rev => {
    if (filter === 'all') return true;
    if (filter === 'beard') return rev.textFr.toLowerCase().includes('barbe') || rev.textEn.toLowerCase().includes('beard');
    if (filter === 'fade') return rev.textFr.toLowerCase().includes('dégradé') || rev.textEn.toLowerCase().includes('fade');
    if (filter === 'walkin') return rev.textFr.toLowerCase().includes('rendez-vous') || rev.textEn.toLowerCase().includes('walk');
    return true;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const created: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      date: t('À l\'instant', 'Just now'),
      textFr: newComment,
      textEn: newComment,
      serviceMentioned: newService,
      likes: 1,
      verified: true
    };

    setReviews([created, ...reviews]);
    setIsSubmitted(true);
    setTimeout(() => {
      setShowAddModal(false);
      setIsSubmitted(false);
      setNewAuthor('');
      setNewComment('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 bg-[#0f1014] border-b border-[#24211e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Google Score Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b63] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#c59b63]" />
              <span>{t('Avis Clients Vérifiés', 'Verified Customer Feedback')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#f8f4ec]">
              {t('4.8 / 5 Étoiles sur Google', '4.8 / 5 Stars on Google')}
            </h2>
            <p className="text-sm text-[#a8a193]">
              {t(
                'Plus de 321 avis clients réels confirment la qualité d’écoute, la précision du coupe-choux et l\'ambiance authentique du salon à Genève Bel-Air.',
                'Over 321 genuine client reviews confirm our attentive care, straight-razor craftsmanship, and welcoming vintage vibe at Geneva Bel-Air.'
              )}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#16171e] border border-[#2b2722] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-4xl font-heading font-black text-[#f8f4ec]">4.8</span>
                <div className="space-y-0.5">
                  <div className="flex items-center text-[#e5b34a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e5b34a]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#8e8779] block">
                    {BUSINESS_INFO.totalReviews} {t('avis Google', 'Google reviews')}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#beb5a5]">
                {t('Note Facebook : 5.0 / 5 (1 vote)', 'Facebook rating: 5.0 / 5 (1 vote)')}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2.5 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] hover:from-[#d6aa6e] hover:to-[#be9359] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#c59b63]/20 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t('Donner mon avis', 'Write a Review')}</span>
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded bg-[#1f2028] hover:bg-[#282a34] border border-[#353029] text-xs font-semibold text-[#ded8cc] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{t('Fiche Google Maps', 'Google Profile')}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#c59b63]" />
              </a>
            </div>
          </div>

        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-[#8c8577] flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('Filtrer par thème :', 'Filter by topic:')}</span>
          </span>

          {[
            { id: 'all', labelFr: 'Tous les avis', labelEn: 'All reviews' },
            { id: 'beard', labelFr: 'Taille de barbe (15 CHF)', labelEn: 'Beard trim (15 CHF)' },
            { id: 'fade', labelFr: 'Dégradé & Coupe', labelEn: 'Fade & Haircut' },
            { id: 'walkin', labelFr: 'Sans rendez-vous & Accueil', labelEn: 'Walk-in & Hospitality' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1.5 rounded text-xs transition-colors cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#c59b63] text-black font-bold'
                  : 'bg-[#181920] border border-[#2b2723] text-[#a9a294] hover:text-white'
              }`}
            >
              {lang === 'fr' ? tab.labelFr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const isLiked = likedIds.has(rev.id);
            return (
              <div
                key={rev.id}
                className="bg-[#15171d] border border-[#27231f] hover:border-[#3d362e] rounded-xl p-5 flex flex-col justify-between transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2d271f] to-[#4c3f30] border border-[#c59b63]/40 flex items-center justify-center font-bold text-xs text-[#f1ece2]">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#f5f1e8] flex items-center gap-1.5">
                          <span>{rev.author}</span>
                          {rev.verified && (
                            <span title="Avis Google vérifié">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#8a8376]">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-[#e5b34a]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#e5b34a]" />
                      ))}
                    </div>
                  </div>

                  {rev.serviceMentioned && (
                    <div className="text-[11px] text-[#c59b63] font-medium">
                      Prestation : {rev.serviceMentioned}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[#beb6a7] leading-relaxed italic">
                    "{lang === 'fr' ? rev.textFr : rev.textEn}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#211e1b] flex items-center justify-between text-xs text-[#8c8577]">
                  <span className="text-[11px]">{t('Source : Google Maps Genève', 'Source: Google Maps Geneva')}</span>
                  <button
                    onClick={() => toggleLike(rev.id)}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isLiked ? 'text-[#c59b63] font-bold' : 'text-[#8c8577] hover:text-[#ded8cc]'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{rev.likes || 0}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Write a review */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#161820] border border-[#38322a] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-[#8f887b] hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#c59b63] font-semibold mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>The Barber House Geneva</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#f7f2eb] mb-1">
                {t('Partager votre expérience au salon', 'Share your salon experience')}
              </h3>
              <p className="text-xs text-[#a69e90] mb-5">
                {t('Confédération Centre, Rue de la Cité 7, 1204 Genève', 'Confédération Centre, Rue de la Cité 7, 1204 Genève')}
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#22c55e] mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-[#f7f2ea]">
                    {t('Merci pour votre avis !', 'Thank you for your feedback!')}
                  </h4>
                  <p className="text-xs text-[#9d9587]">
                    {t('Votre témoignage a été ajouté avec succès.', 'Your review has been successfully submitted.')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#ded8cc] mb-1">
                      {t('Votre nom ou pseudo', 'Your name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder={t('ex. Thomas B.', 'e.g. Thomas B.')}
                      className="w-full px-3 py-2 bg-[#1b1d25] border border-[#332f29] rounded text-sm text-[#eee9df] focus:outline-none focus:border-[#c59b63]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#ded8cc] mb-1">
                      {t('Note globale', 'Your rating')}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="p-1 text-[#e5b34a] hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newRating ? 'fill-[#e5b34a]' : 'text-[#474138]'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-[#c59b63] ml-2">
                        {newRating} / 5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#ded8cc] mb-1">
                      {t('Prestation réalisée', 'Service completed')}
                    </label>
                    <select
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      className="w-full px-3 py-2 bg-[#1b1d25] border border-[#332f29] rounded text-sm text-[#eee9df] focus:outline-none focus:border-[#c59b63]"
                    >
                      <option value="Coupe et entretien de la barbe">Coupe et entretien de la barbe (15 CHF)</option>
                      <option value="Coupe de cheveux enfants">Coupe de cheveux enfants (19 CHF)</option>
                      <option value="Coupe homme signature">Coupe homme signature (29 CHF)</option>
                      <option value="Forfait Duo Coupe + Barbe">Forfait Duo Coupe + Barbe (39 CHF)</option>
                      <option value="Rasage traditionnel à l'ancienne">Rasage traditionnel à l'ancienne (25 CHF)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#ded8cc] mb-1">
                      {t('Votre commentaire', 'Your review text')}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder={t('Précision des finitions, accueil, ambiance vintage...', 'Precision of finish, hospitality, vintage vibe...')}
                      className="w-full px-3 py-2 bg-[#1b1d25] border border-[#332f29] rounded text-sm text-[#eee9df] focus:outline-none focus:border-[#c59b63]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded bg-gradient-to-r from-[#c59b63] to-[#ad844e] text-black font-bold text-xs uppercase tracking-wider shadow-md shadow-[#c59b63]/20 cursor-pointer"
                    >
                      {t('Publier mon avis', 'Publish Review')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2.5 rounded bg-[#202129] border border-[#34302a] text-xs font-semibold text-[#b8b0a2]"
                    >
                      {t('Annuler', 'Cancel')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
