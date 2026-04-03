import React from "react";
import styles from "./ContactHero.module.css";
import config from "../../config/config";

interface ContactHeroProps {
  title: string;
  image: string;
  mon_sat_hours?: string;
  sun_hours?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  image,
  mon_sat_hours = "10:30am - 7:30pm",
  sun_hours = "11:30am - 5:30pm",
}) => {
  return (
    <section className={styles.hero}>
      <img
        src={config.BASE_URL + image}
        alt={title}
        className={styles.heroImage}
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.mainTitle}>{title}</h1>
            <p className={styles.subTitle}>MANICURE · PEDICURE · WAXING</p>
          </div>
          <div className={styles.hoursBox}>
             <h3 className={styles.hoursTitle}>HOURS</h3>
             <div className={styles.hoursRow}>
                <span className={styles.days}>Mon-Sat:</span>
                <span className={styles.timings}>{mon_sat_hours}</span>
             </div>
             <div className={styles.hoursRow}>
                <span className={styles.days}>Sun:</span>
                <span className={styles.timings}>{sun_hours}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
