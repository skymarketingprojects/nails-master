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
  const imgSrc = testimonial.image || "";
  
  const videoSrc = testimonial.video
    ? testimonial.video.startsWith("http")
      ? testimonial.video
      : config.BASE_URL.slice(0, -1) + testimonial.video
    : "";

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
