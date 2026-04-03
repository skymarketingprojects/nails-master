import React from "react";
import styles from "./ContactMapSection.module.css";

interface ContactMapSectionProps {
  mapLink: string;
  title: string;
}

export const ContactMapSection: React.FC<ContactMapSectionProps> = ({ mapLink, title }) => {
  return (
    <section className={styles.section}>
      <iframe
        src={mapLink}
        className={styles.map}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={`${title} Map`}
      />
    </section>
  );
};
