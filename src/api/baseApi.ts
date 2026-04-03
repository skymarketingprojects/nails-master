import {
  type ApiResponse,
  type SocialMedia,
  type HeroBanner,
  type TopBar,
  type Contact,
  type Service,
  type Testimonial,
  type FooterAddressData,
  type FooterChipData,
  type Location,
} from "./types";

import config from "../config/config";

const BASE_URL = config.apiBaseUrl;

async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  const result: ApiResponse<T> = await response.json();

  if (result.code !== 200) {
    throw new Error(result.message || "API error");
  }

  return result.data;
}

export const api = {
  getSocialMedia: () => apiFetch<SocialMedia[]>("socialmedia/"),
  getFooterAddress: () => apiFetch<FooterAddressData>("footer/address"),
  getFooterChips: () => apiFetch<FooterChipData[]>("footer/chips"),
  getServices: () => apiFetch<Service[]>("services/"),
  getTestimonials: () => apiFetch<Testimonial[]>("testimonials/"),
  getHeroBanners: (page: string) => apiFetch<HeroBanner[]>(`herobanners/?page=${page}`),
  getTopBar: () => apiFetch<TopBar[]>("topbar/"),
  getContact: () => apiFetch<Contact>("contact/"),
  getLocations: () => apiFetch<Location[]>("location/"),
  getLocation: (slug: string) => apiFetch<Location>(`location/${slug}/`),
};

