import React, { useState, useEffect } from "react";
import styles from "./OurServices.module.css";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { useServices } from "../../hooks/useServices";
import { useContact } from "../../context/ContactContext";

interface OurServicesProps {
  locationSlug?: string;
  locationPhone?: string;
}

export const OurServices: React.FC<OurServicesProps> = ({ locationSlug, locationPhone }) => {
  const { phone: globalPhone } = useContact();
  const [pageSize, setPageSize] = useState(6);
  
  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setPageSize(6);
      else if (width >= 768) setPageSize(4);
      else setPageSize(3);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const { tabs, activeTab, setActiveTab, loading, loadingMore, filteredServices, hasNext, loadMore } = useServices(locationSlug, pageSize);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  if (loading && filteredServices.length === 0) return null;

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
        {filteredServices.map((service) => {
          // Replace the phone number in the WhatsApp link
          let updatedService = { ...service };
          const activePhone = locationPhone || globalPhone;
          
          if (activePhone) {
            const cleanPhone = activePhone.replace(/\D/g, "");
            
            if (updatedService.link.includes("wa.me/")) {
              // Replace digits immediately following wa.me/
              updatedService.link = updatedService.link.replace(
                /(wa\.me\/)(\d+)/,
                `wa.me/${cleanPhone}`
              );
            } else if (updatedService.link.includes("phone=")) {
              // Replace digits immediately following phone=
              updatedService.link = updatedService.link.replace(
                /([?&]phone=)(\d+)/,
                `$1${cleanPhone}`
              );
            }
          }
          return <ServiceCard key={service.id} service={updatedService} />;
        })}
      </div>

      {loadingMore && (
        <div className={styles.section__footer}>
          <p>Loading more services...</p>
        </div>
      )}

      {hasNext && !loadingMore && (
        <div className={styles.section__footer}>
          <button
            onClick={loadMore}
            className={styles.section__viewMore}
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

