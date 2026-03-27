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
} from "./types";

const BASE_URL = "http://127.0.0.1:8000";

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
  getSocialMedia: () => apiFetch<SocialMedia[]>("/api/socialmedia/"),
  getFooterAddress: () => apiFetch<FooterAddressData>("/api/footer/address"),
  getFooterChips: () => apiFetch<FooterChipData[]>("/api/footer/chips"),
  getServices: () => apiFetch<Service[]>("/api/services/"),
  getTestimonials: () => apiFetch<Testimonial[]>("/api/testimonials/"),
  getHeroBanners: (page: string) => apiFetch<HeroBanner[]>(`/api/herobanners/?page=${page}`),
  getTopBar: () => apiFetch<TopBar[]>("/api/topbar/"),
  getContact: () => apiFetch<Contact>("/api/contact/"),
};
