import React, { useState } from "react";
import styles from "./ContactServicesSection.module.css";
import { type Location } from "../../api/types";
import config from "../../config/config";
import { useServices } from "../../hooks/useServices";

interface ContactServicesSectionProps {
  location: Location;
}

export const ContactServicesSection: React.FC<ContactServicesSectionProps> = ({ location }) => {
  const { tabs, activeTab, setActiveTab, filteredServices } = useServices(location.link);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(8); // Reset on tab change
  };

  const displayedServices = filteredServices.slice(0, visibleCount);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services:</h2>

        {/* Tabs */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {filteredServices.length === 0 ? (
          <p className={styles.emptyMessage}>No services available for this category.</p>
        ) : (
          <>
            <div className={styles.grid}>
              {displayedServices.map((service, index) => {
                const imgSrc = service.image.startsWith("http")
                  ? service.image
                  : config.BASE_URL.slice(0, -1) + service.image;

                return (
                  <div key={service.id || index} className={styles.gridItem}>
                    <img
                      src={imgSrc}
                      alt={service.title || `Service ${index + 1}`}
                      className={styles.image}
                      title={service.title}
                    />
                  </div>
                );
              })}
            </div>

            {visibleCount < filteredServices.length && (
              <div className={styles.showMoreWrapper}>
                <button
                  className={styles.showMoreBtn}
                  onClick={() => setVisibleCount((prev) => prev + 8)}
                >
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

