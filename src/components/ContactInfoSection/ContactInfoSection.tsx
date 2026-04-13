import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  const { slug } = useParams<{ slug: string }>();
  const [fallbackBrochure, setFallbackBrochure] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrochureFromServices = async () => {
      try {
        const servicesData = await api.getServices({ location: slug, page_size: 1 });
        if (servicesData && servicesData.results.length > 0 && servicesData.results[0].brochure) {
          setFallbackBrochure(servicesData.results[0].brochure);
        }
      } catch (e) {
        console.error("Failed to fetch brochure from services:", e);
      }
    };
    if (!location.broucher) {
      fetchBrochureFromServices();
    }
  }, [location.broucher, slug]);

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
            {/* Phone Number */}
            <a href={`tel:${location.phone}`} className={styles.btnPhone}>
              <FaPhoneAlt className={styles.btnIcon} />
              {location.phone}
            </a>


            {/* Download Brochure */}
            <a
              href={
                location.broucher
                  ? (location.broucher.startsWith("http") ? location.broucher : config.BASE_URL.slice(0, -1) + location.broucher)
                  : (fallbackBrochure
                    ? (fallbackBrochure.startsWith("http") ? fallbackBrochure : config.BASE_URL.slice(0, -1) + fallbackBrochure)
                    : "#"
                  )
              }
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnBrochure}
              onClick={(e) => {
                if (!location.broucher && !fallbackBrochure) {
                  e.preventDefault();
                  alert("Brochure is being updated. Please check back later.");
                }
              }}
            >
              <FaDownload className={styles.btnIcon} />
              Download Brochure
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
