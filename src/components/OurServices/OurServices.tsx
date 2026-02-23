import React, { useState, useEffect } from "react";
import styles from "./OurServices.module.css";
import { services } from "../../data/services";
import { ServiceCard } from "./ServiceCard/ServiceCard";

export const OurServices: React.FC = () => {
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

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + increment);
  };

  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.section__title}>
        Our Services
      </h2>

      <div className={styles.section__grid}>
        {services.slice(0, visibleCount).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {visibleCount < services.length && (
        <div className={styles.section__footer}>
          <button
            onClick={handleViewAll}
            className={styles.section__viewAll}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
};
