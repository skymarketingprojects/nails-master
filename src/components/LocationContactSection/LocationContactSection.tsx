import styles from "./LocationContactSection.module.css";
import type { Location } from "../../data/locations";
import { FaLocationDot } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  location: Location;
}

export const LocationContactSection: React.FC<Props> = ({ location }) => {
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

  // Sync index when user manually scrolls
  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;

    const handleScroll = () => {
      const newIndex = Math.round(
        container.scrollLeft / container.clientWidth
      );
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.leftColumn}>
        {/* GALLERY WITH ARROWS */}
        <div className={styles.galleryContainer}>
          <button
            className={styles.arrowBtn}
            onClick={goPrev}
            aria-label="Previous image"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          <div className={styles.galleryWrapper} ref={galleryRef}>
            <div className={styles.gallery}>
              {location.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${location.title} gallery ${index + 1}`}
                  className={styles.image}
                />
              ))}
            </div>
          </div>

          <button
            className={styles.arrowBtn}
            onClick={goNext}
            aria-label="Next image"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6L15 12L9 18" />
            </svg>
          </button>
        </div>

        {/* DOT PAGINATION */}
        <div className={styles.dots}>
          {Array.from({ length: totalImages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`${styles.dot} ${
                currentIndex === i ? styles.dotActive : ""
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* INFO SECTION */}
        <div className={styles.infoContent}>
          <h2 className={styles.title}>{location.title}</h2>

          {location.description && (
            <p className={styles.description}>{location.description}</p>
          )}

          <div className={styles.ratingBlock}>
            <span className={styles.ratingText}>
            <FcGoogle seed={23} className={styles.googleIcon} />
              {location.rating.toFixed(1)} / 5
            </span>

            <div className={styles.starsWrapper}>
              {[...Array(5)].map((_, i) => {
                const rating = location.rating;

                if (rating >= i + 1) {
                  return (
                    <span key={i} className={styles.starFull}>
                      ★
                    </span>
                  );
                }

                if (rating > i && rating < i + 1) {
                  return (
                    <span key={i} className={styles.starHalf}>
                      ★
                    </span>
                  );
                }

                return (
                  <span key={i} className={styles.starEmpty}>
                    ★
                  </span>
                );
              })}
            </div>
          </div>

          <a
            href={location.locationlink}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLocationDot className={styles.locationIcon} />
            Visit Location Page
          </a>

          {location.phone && (
            <a href={`https://wa.me/${location.phone}`} className={styles.contact}>
              <FaPhoneAlt className={styles.contactIcon} />
              {location.phone}
            </a>
          )}

          {location.email && (
            <a href={`mailto:${location.email}`} className={styles.contact}>
              <MdEmail className={styles.contactIcon} />
              {location.email}
            </a>
          )}
        </div>
      </div>

      {/* FORM COLUMN */}
      <div className={styles.formWrapper}>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className={styles.form}
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone No" />

          <select name="service" required>
            <option value="">Select Service</option>
            <option value="Nail Extension">Nail Extension</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Facial">Facial</option>
          </select>

          <textarea name="message" placeholder="Message" rows={5} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};