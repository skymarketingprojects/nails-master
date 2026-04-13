import React, { useState, useRef, useEffect } from "react";
import styles from "./ContactInfoSection.module.css";
import { type Location } from "../../api/types";
import config from "../../config/config";
import { api } from "../../api/baseApi";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

interface ContactInfoSectionProps {
  location: Location;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ location }) => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = location.images?.length || 0;

  const goToIndex = (index: number) => {
    if (!galleryRef.current || !totalImages) return;
    const newIndex = (index + totalImages) % totalImages;
    setCurrentIndex(newIndex);
    galleryRef.current.scrollTo({
      left: galleryRef.current.clientWidth * newIndex,
      behavior: "smooth",
    });
  };

  const goPrev = () => goToIndex(currentIndex - 1);
  const goNext = () => goToIndex(currentIndex + 1);

  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;
    const handleScroll = () => {
      const newIndex = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(newIndex);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const [fallbackBrochure, setFallbackBrochure] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrochure = async () => {
      try {
        const data = await api.getBrochure("franchise");
        if (data && data.broucher) {
          setFallbackBrochure(data.broucher);
        }
      } catch (e) {
        console.error("Failed to fetch fallback brochure:", e);
      }
    };
    if (!location.brochure) {
      fetchBrochure();
    }
  }, [location.brochure]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column: Carousel */}
        <div className={styles.leftColumn}>
          <div className={styles.carouselWrapper}>
            <button className={styles.arrowPrev} onClick={goPrev}>
               <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M15 18L9 12L15 6" />
               </svg>
            </button>
            <div className={styles.carouselContainer} ref={galleryRef}>
              {location.images?.map((img, index) => (
                <div key={index} className={styles.carouselItem}>
                  <img
                    src={config.BASE_URL.slice(0, -1) + img}
                    alt={`${location.title} ${index + 1}`}
                    className={styles.blurredBg}
                  />
                  <img
                    src={config.BASE_URL.slice(0, -1) + img}
                    alt={`${location.title} ${index + 1}`}
                    className={styles.carouselImage}
                  />
                </div>
              ))}
            </div>
            <button className={styles.arrowNext} onClick={goNext}>
               <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M9 6L15 12L9 18" />
               </svg>
            </button>
          </div>
          <div className={styles.dots}>
            {Array.from({ length: totalImages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${currentIndex === i ? styles.dotActive : ""}`}
                onClick={() => goToIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Info & Actions */}
        <div className={styles.rightColumn}>
          <div className={styles.actionsBox}>
            {/* Download Brochure */}
            {(location.brochure || fallbackBrochure) && (
               <a href={config.BASE_URL.slice(0, -1) + (location.brochure || fallbackBrochure)} target="_blank" rel="noopener noreferrer" className={styles.btnBrochure}>
                 <FaDownload className={styles.btnIcon} />
                 Download Brochure
               </a>
            )}

            {/* Phone Number */}
            <a href={`tel:${location.phone}`} className={styles.btnPhone}>
               <FaPhoneAlt className={styles.btnIcon} />
               {location.phone}
            </a>

            {/* Google Review */}
            <a href={location.locationlink} target="_blank" rel="noopener noreferrer" className={styles.btnReview}>
               <FcGoogle className={styles.btnIcon} />
               Review Us
            </a>

            {/* Address */}
            <div className={styles.addressBlock}>
               <FaLocationDot className={styles.addressIcon} />
               <p className={styles.addressText}>{location.description || location.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
