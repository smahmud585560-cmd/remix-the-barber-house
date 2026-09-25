export type Language = 'fr' | 'en';

export type PageId = 'home' | 'services' | 'location' | 'about' | 'gallery' | 'contact' | 'blog';

export interface ServiceItem {
  id: string;
  nameFr: string;
  nameEn: string;
  category: 'hair' | 'beard' | 'combo' | 'treatment';
  priceCHF: number;
  durationMinutes: number;
  descriptionFr: string;
  descriptionEn: string;
  isPopular?: boolean;
  isPromoOrHighlight?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  textFr: string;
  textEn: string;
  serviceMentioned?: string;
  likes?: number;
  verified?: boolean;
}

export interface BarberProfile {
  id: string;
  name: string;
  roleFr: string;
  roleEn: string;
  specialtyFr: string;
  specialtyEn: string;
  experienceYears: number;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  titleFr: string;
  titleEn: string;
  category: 'haircuts' | 'beards' | 'salon' | 'ritual';
  imageUrl: string;
  tagFr: string;
  tagEn: string;
}

export interface BlogPost {
  id: string;
  titleFr: string;
  titleEn: string;
  slug: string;
  excerptFr: string;
  excerptEn: string;
  contentFr: string[];
  contentEn: string[];
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

