import React from "react";
import styles from "./TestimonialCard.module.css";
import type { Testimonial } from "../../../data/testimonials";
import { FcGoogle } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import config from "../../../config/config";

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const formatMediaUrl = (url: string | undefined | null) => {
    if (!url || url === "null" || url === "None" || url === "") return "";
    
    // If the URL contains an absolute protocol anywhere
    if (url.includes("http://") || url.includes("https://") || url.includes("http%3A") || url.includes("https%3A")) {
      // If it's prefixed by /media/, extract only the absolute URL part
      if (url.startsWith("/media/")) {
        const extracted = url.replace("/media/", "");
        return extracted.includes("%3A") ? decodeURIComponent(extracted) : extracted;
      }
      return url;
    }
    
    // For local relative paths, prepend the base URL
    return config.BASE_URL.slice(0, -1) + url;
  };

  const videoSrc = formatMediaUrl(testimonial.video);
  const imgSrc = formatMediaUrl(testimonial.image);

  // Hierarchy: Video testimonial takes absolute precedence over text testimonial
  if (videoSrc) {
    return (
      <article className={`${styles.card} ${styles.videoCard}`}>
        <a href={videoSrc} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
          {imgSrc && (
            <img src={imgSrc} alt={testimonial.name} className={styles.videoCover} />
          )}
          <div className={styles.playOverlay}>
            <FaPlay className={styles.playIcon} />
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      {imgSrc && (
        <img src={imgSrc} alt={testimonial.name} className={styles.card__image} />
      )}

      <p className={styles.card__feedback}>{testimonial.feedback}</p>

      <h3 className={styles.card__name}>{testimonial.name}</h3>

      {testimonial.designation && (
        <span className={styles.card__designation}>
          <FcGoogle className={styles.googleIcon} />
          {testimonial.designation}
        </span>
      )}
    </article>
  );
};
