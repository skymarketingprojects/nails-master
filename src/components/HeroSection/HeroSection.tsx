// import React from "react";
// import styles from "./HeroSection.module.css";
// import heroImage from "../../assets/hero.png"; // replace with actual image path

// export const HeroSection: React.FC = () => {
//   return (
//     <section id="home" className={styles.hero}>
//       <img
//         src={heroImage}
//         alt="Spa and beauty services"
//         className={styles.hero__image}
//       />
//       <div className={styles.hero__overlay} />
//     </section>
//   );
// };
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";
import { api } from "../../api/baseApi";
import type { HeroBanner } from "../../api/types";

interface HeroSectionProps {
  image: string;
  alt?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  image: defaultImage,
  alt: defaultAlt = "Hero image",
}) => {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await api.getHeroBanners("home");
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) return null;

  const displayImage = banners.length > 0 ? `http://127.0.0.1:8000${banners[0].image}` : defaultImage;
  const displayLink = banners.length > 0 ? banners[0].link : null;

  return (
    <section id="home" className={styles.hero}>
      {displayLink ? (
        <a href={displayLink} target="_blank" rel="noopener noreferrer">
          <img
            src={displayImage}
            alt={defaultAlt}
            className={styles.hero__image}
          />
        </a>
      ) : (
        <img
          src={displayImage}
          alt={defaultAlt}
          className={styles.hero__image}
        />
      )}
      <div className={styles.hero__overlay} />
    </section>
  );
};