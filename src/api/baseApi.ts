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
  type Category,
  type GalleryItem,
  type Brochure,
  type BlogItem,
  type BlogDetail,
  type BlogListResponse,
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

  if (result.success === "error" || result.code !== 200) {
    throw new Error(result.message || "API error");
  }

  return result.data;
}

export const api = {
  getSocialMedia: () => apiFetch<SocialMedia[]>("socialmedia/"),
  getFooterAddress: () => apiFetch<FooterAddressData>("footer/address"),
  getFooterChips: () => apiFetch<FooterChipData[]>("footer/chips"),
  getServices: (params?: { location?: string; category?: string }) => {
    const query = new URLSearchParams();
    if (params?.location) query.set("location", params.location);
    if (params?.category) query.set("category", params.category);
    const qs = query.toString();
    return apiFetch<Service[]>(`services/${qs ? `?${qs}` : ""}`);
  },
  getTestimonials: () => apiFetch<Testimonial[]>("testimonials/"),
  getHeroBanners: (page: string) => apiFetch<HeroBanner[]>(`herobanners/?page=${page}`),
  getTopBar: () => apiFetch<TopBar[]>("topbar/"),
  getContact: () => apiFetch<Contact>("contact/"),
  getLocations: () => apiFetch<Location[]>("location/"),
  getLocation: (slug: string) => apiFetch<Location>(`location/${slug}/`),
  getCategories: () => apiFetch<Category[]>("categories/"),
  getGallery: (page: string) => apiFetch<GalleryItem[]>(`gallery/?page=${page}`),
  getBrochure: (name: string) => apiFetch<Brochure>(`broucher/${name}/`),
  getBlogs: (page: number = 1, pageSize: number = 6) => 
    apiFetch<BlogListResponse>(`blogs/?page=${page}&page_size=${pageSize}`),
  getBlogDetail: (slug: string) => apiFetch<BlogDetail>(`blog/${slug}/`),
};
