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
import React, { useState, useEffect, useCallback } from "react";
import styles from "./HeroSection.module.css";
import { api } from "../../api/baseApi";
import type { HeroBanner } from "../../api/types";
import config from "../../config/config";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface HeroSectionProps {
  page?: string;
  image?: string;
  alt?: string;
  skipFetch?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  page,
  image: defaultImage,
  alt: defaultAlt = "Hero image",
  skipFetch = false,
}) => {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [loading, setLoading] = useState(!skipFetch && !!page);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      if (skipFetch || !page) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await api.getHeroBanners(page);
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [page, skipFetch]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [banners.length, nextSlide]);

  if (loading) return <section className={styles.hero} style={{ minHeight: "400px" }} />;

  const getFullImageUrl = (img: string) => {
    if (!img) return "";
    if (img.startsWith("http") || img.startsWith("data:") || img.startsWith("blob:") || img.startsWith("static/")) return img;
    
    // Check if it's a relative path starting with / or media/
    if (img.startsWith("/") || img.startsWith("media/")) {
       const baseUrl = config.BASE_URL.endsWith("/") ? config.BASE_URL.slice(0, -1) : config.BASE_URL;
       const path = img.startsWith("/") ? img : `/${img}`;
       return `${baseUrl}${path}`;
    }
    
    return img;
  };

  if (banners.length === 0 && !defaultImage) return null;

  // Single Banner or Default Fallback
  if (banners.length <= 1) {
    const banner = banners[0];
    const displayImage = banner ? getFullImageUrl(banner.image) : (defaultImage ? getFullImageUrl(defaultImage) : "");
    const displayLink = banner?.link || null;


    return (
      <section id="home" className={styles.hero}>
        {displayLink ? (
          <a href={displayLink} target="_blank" rel="noopener noreferrer">
            <img src={displayImage} alt={defaultAlt} className={styles.hero__image} />
          </a>
        ) : (
          <img src={displayImage} alt={defaultAlt} className={styles.hero__image} />
        )}
        <div className={styles.hero__overlay} />
      </section>
    );
  }

  // Multi Banner Carousel
  return (
    <section id="home" className={styles.hero}>
      <div 
        className={styles.hero__container} 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={banner.id || index} className={styles.hero__slide}>
            {banner.link ? (
              <a href={banner.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={getFullImageUrl(banner.image)} 
                  alt={defaultAlt} 
                  className={styles.hero__image} 
                />
              </a>
            ) : (
              <img 
                src={getFullImageUrl(banner.image)} 
                alt={defaultAlt} 
                className={styles.hero__image} 
              />
            )}
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} aria-label="Previous slide">
        <IoChevronBack size={24} />
      </button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} aria-label="Next slide">
        <IoChevronForward size={24} />
      </button>

      {/* <div className={styles.hero__dots}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      
      <div className={styles.hero__overlay} />
    </section>
  );
};