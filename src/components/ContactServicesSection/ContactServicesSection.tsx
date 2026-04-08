import React, { useEffect, useRef } from "react";
import styles from "./ContactServicesSection.module.css";
import { type Location } from "../../api/types";
import config from "../../config/config";
import { useServices } from "../../hooks/useServices";

interface ContactServicesSectionProps {
  location: Location;
}

export const ContactServicesSection: React.FC<ContactServicesSectionProps> = ({ location }) => {
  const { tabs, activeTab, setActiveTab, filteredServices, hasNext, loadMore, loadingMore } = useServices(location.link, 8);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNext && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = scrollRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasNext, loadMore, loadingMore]);

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
        {filteredServices.length === 0 && !loadingMore ? (
          <p className={styles.emptyMessage}>No services available for this category.</p>
        ) : (
          <>
            <div className={styles.grid}>
              {filteredServices.map((service, index) => {
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

            {/* Scroll Anchor for Infinite Pagination */}
            <div ref={scrollRef} style={{ height: "20px" }}>
              {loadingMore && <p className={styles.loadingMoreText}>Loading more services...</p>}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
