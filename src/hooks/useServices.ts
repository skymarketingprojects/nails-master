import { useState, useEffect, useMemo } from "react";
import { api } from "../api/baseApi";
import type { Service, Category } from "../api/types";
import { services as staticServices } from "../data/services";

/**
 * Custom hook for fetching services and categories with category tab filtering.
 * @param locationSlug - Optional location slug to filter services server-side via the API query param.
 */
export function useServices(locationSlug?: string) {
  const [services, setServices] = useState<Service[]>(locationSlug ? [] : staticServices);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("View All");

  useEffect(() => {
    let isMounted = true;

    // Reset state when locationSlug changes to avoid stale data
    setServices(locationSlug ? [] : staticServices);
    setActiveTab("View All");
    setLoading(true);

    const fetchData = async () => {
      try {
        const [servicesData, categoriesData] = await Promise.all([
          api.getServices(locationSlug ? { location: locationSlug } : undefined),
          api.getCategories(),
        ]);

        if (!isMounted) return;

        if (servicesData && servicesData.length > 0) {
          setServices(servicesData);
        }
        if (categoriesData && categoriesData.length > 0) {
          setCategories(categoriesData);
        }
      } catch (error) {
        if (isMounted) console.error("Failed to fetch data:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [locationSlug]);

  const tabs = useMemo(() => {
    return ["View All", ...categories.map((c) => c.name)];
  }, [categories]);

  const filteredServices = useMemo(() => {
    if (activeTab === "View All") return services;
    return services.filter((service) => service.category === activeTab);
  }, [services, activeTab]);

  return {
    services,
    categories,
    tabs,
    activeTab,
    setActiveTab,
    loading,
    filteredServices,
  };
}
