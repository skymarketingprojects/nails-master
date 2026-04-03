import React, { useState } from "react";
import styles from "./ContactServicesSection.module.css";
import { type Location } from "../../api/types";
import config from "../../config/config";

interface ContactServicesSectionProps {
  location: Location;
}

export const ContactServicesSection: React.FC<ContactServicesSectionProps> = ({ location }) => {
  const [activeTab, setActiveTab] = useState("View All");

  const tabs = ["View All", "Nail extension", "Hair color", "Acrylic gel", "Makeup"];

  // Use the location images for the grid
  const displayImages = location.images?.slice(0, 8) || [];

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
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className={styles.grid}>
          {displayImages.map((img, index) => (
            <div key={index} className={styles.gridItem}>
              <img
                src={config.BASE_URL + img}
                alt={`Service ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
          {/* Fill remaining slots if less than 8 images */}
          {Array.from({ length: Math.max(0, 8 - displayImages.length) }).map((_, index) => (
             <div key={`placeholder-${index}`} className={styles.gridItemPlaceholder}></div>
          ))}
        </div>
      </div>
    </section>
  );
};
