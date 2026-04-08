import { useState, useEffect, useMemo, useCallback } from "react";
import { api } from "../api/baseApi";
import type { Service, Category } from "../api/types";
import { services as staticServices } from "../data/services";

/**
 * Custom hook for fetching services and categories with category tab filtering.
 * @param locationSlug - Optional location slug to filter services server-side via the API query param.
 * @param pageSize - Number of items per page.
 */
export function useServices(locationSlug?: string, pageSize: number = 6) {
  const [services, setServices] = useState<Service[]>(locationSlug ? [] : staticServices);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeTab, setActiveTab] = useState("View All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  // Fetch categories once on mount or when locationSlug changes
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await api.getCategories();
        if (categoriesData) setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchServices = useCallback(async (page: number, isNewTab: boolean = false) => {
    try {
      if (page === 1) setLoading(true);
      else setLoadingMore(true);

      const params = {
        location: locationSlug,
        category: activeTab === "View All" ? undefined : activeTab,
        page,
        page_size: pageSize,
      };

      const response = await api.getServices(params);
      
      if (response && response.results) {
        setServices(prev => isNewTab ? response.results : [...prev, ...response.results]);
        setHasNext(response.has_next);
        setCurrentPage(response.current_page);
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [locationSlug, activeTab, pageSize]);

  // Refetch when location or tab changes
  useEffect(() => {
    setCurrentPage(1);
    fetchServices(1, true);
  }, [locationSlug, activeTab, fetchServices]);

  const loadMore = () => {
    if (hasNext && !loadingMore) {
      fetchServices(currentPage + 1);
    }
  };

  const tabs = useMemo(() => {
    return ["View All", ...categories.map((c) => c.name)];
  }, [categories]);

  // Since filtering is now server-side, filteredServices is same as services
  // But we keep the variable for compatibility with existing components
  const filteredServices = services;

  return {
    services,
    categories,
    tabs,
    activeTab,
    setActiveTab,
    loading,
    loadingMore,
    filteredServices,
    hasNext,
    loadMore,
  };
}
