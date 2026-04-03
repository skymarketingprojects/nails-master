import { type Service } from "../data/services";
import { type Testimonial } from "../data/testimonials";
import { type FooterAddressData, type FooterChipData, type FooterFollowItem } from "../data/footer";

export interface ApiResponse<T> {
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
  description?: string;
  phone: string;
  email: string;
  images: string[];
  locationlink: string;
  mapLink: string;
  mon_sat_hours?: string;
  sun_hours?: string;
  brochure?: string;
}

export type { Service, Testimonial, FooterAddressData, FooterChipData };

