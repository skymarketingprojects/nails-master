import React, { useState, useEffect } from "react";
import styles from "./OurServices.module.css";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { useServices } from "../../hooks/useServices";

interface OurServicesProps {
  locationSlug?: string;
}

export const OurServices: React.FC<OurServicesProps> = ({ locationSlug }) => {
  const { tabs, activeTab, setActiveTab, loading, filteredServices, services } = useServices(locationSlug);
  const [visibleCount, setVisibleCount] = useState(6);
  const [increment, setIncrement] = useState(3);

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

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setVisibleCount(increment); // Reset visible count on tab change
  };

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + increment);
  };

  if (loading && services.length === 0) return null;

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.section__title}>
        Our Services:
      </h2>

      <div className={styles.section__tabsWrapper}>
        <div className={styles.section__tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section__grid}>
        {filteredServices.slice(0, visibleCount).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {visibleCount < filteredServices.length && (
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

