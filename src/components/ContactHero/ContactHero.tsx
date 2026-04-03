import React from "react";
import styles from "./ContactHero.module.css";
import config from "../../config/config";

interface ContactHeroProps {
  title: string;
  image: string;
  timing: Array<{ day: string; time: string }>;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  title,
  image,
  timing = [
    { day: "Mon-Sat", time: "10:30am - 7:30pm" },
    { day: "Sun", time: "11:30am - 5:30pm" },
  ],
}) => {
  return (
    <section className={styles.hero}>
      <img
        src={config.BASE_URL.slice(0, -1) + image}
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
            {timing.map((item, index) => (
              <div key={index} className={styles.hoursRow}>
                <span className={styles.days}>{item.day}:</span>
                <span className={styles.timings}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
