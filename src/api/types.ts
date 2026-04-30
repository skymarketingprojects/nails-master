import { type Service } from "../data/services";
import { type Testimonial } from "../data/testimonials";
import { type FooterAddressData, type FooterChipData, type FooterFollowItem } from "../data/footer";

export interface ApiResponse<T> {
  success: "success" | "error";
  code: number;
  message: string;
  data: T;
}

export interface SocialMedia extends FooterFollowItem {}

export interface HeroBanner {
  id: number;
  image: string;
  link: string;
  index: number;
}

export interface TopBar {
  id: number;
  title: string;
  link: string;
}

export interface Contact {
  id: number;
  phone: string;
}

export interface Location {
  id: number;
  title: string;
  image: string;
  icon: string;
  rating: number;
  link: string;
  description: string;
  phone: string;
  email: string;
  images: string[];
  locationlink: string;
  mapLink: string;
  reviewLink?: string;
  timing: Array<{ day: string; time: string }>;
  broucher?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  index: number;
}

export interface Brochure {
  id: number;
  name: string;
  broucher: string;
}

export interface BlogItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  author: string;
  timestamp: string;
}

export interface BlogDetail extends BlogItem {
  updatedAt: string;
}

export interface BlogListResponse {
  total_pages: number;
  current_page: number;
  has_next: boolean;
  has_previous: boolean;
  count: number;
  results: BlogItem[];
}

export interface ServiceListResponse {
  total_pages: number;
  current_page: number;
  has_next: boolean;
  has_previous: boolean;
  count: number;
  results: Service[];
}

export type { Service, Testimonial, FooterAddressData, FooterChipData };
