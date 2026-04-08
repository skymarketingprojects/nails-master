import React from "react";
import styles from "./WelcomeSection.module.css";

export const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.smallHeading}>Welcome to</h3>
        <h1 className={styles.largeHeading}>Nails Master</h1>
        <p className={styles.paragraph}>
          At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look.
        </p>
      </div>
    </section>
  );
};
