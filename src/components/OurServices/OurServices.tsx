import React, { useState, useEffect } from "react";
import styles from "./OurServices.module.css";
import { services as staticServices } from "../../data/services";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { api } from "../../api/baseApi";
import type { Service } from "../../api/types";

export const OurServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>(staticServices);
  const [visibleCount, setVisibleCount] = useState(6);
  const [increment, setIncrement] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const updateIncrement = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setIncrement(6);
      } else if (width >= 768) {
        setIncrement(4);
      } else {
        setIncrement(3);
      }
    };

    updateIncrement();
    window.addEventListener("resize", updateIncrement);
    return () => window.removeEventListener("resize", updateIncrement);
  }, []);

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + increment);
  };

  if (loading && services.length === 0) return null;

  const TABS = ["View All", "Nail extension", "Hair color", "Acrylic gel", "Makeup"];
  const [activeTab, setActiveTab] = useState("View All");

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.section__title}>
        Our Services:
      </h2>

      <div className={styles.section__tabsWrapper}>
        <div className={styles.section__tabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section__grid}>
        {services.slice(0, visibleCount).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {visibleCount < services.length && (
        <div className={styles.section__footer}>
          <button
            onClick={handleViewAll}
            className={styles.section__viewMore}
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

