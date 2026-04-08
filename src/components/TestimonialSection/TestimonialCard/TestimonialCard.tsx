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
        let formatted = extracted.includes("%3A") ? decodeURIComponent(extracted) : extracted;
        // Fix cases where https:/ or http:/ occurs after decoding instead of ://
        formatted = formatted.replace(/^(https?):\/([^\/])/, "$1://$2");
        return formatted;
      }
      return url;
    }
    
    // For local relative paths, prepend the base URL
    return config.BASE_URL.slice(0, -1) + url;
  };

  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const videoSrc = formatMediaUrl(testimonial.video);
  const imgSrc = formatMediaUrl(testimonial.image);
  const embedUrl = getEmbedUrl(videoSrc);

  return (
    <article className={`${styles.card} ${videoSrc && !testimonial.feedback ? styles.videoCard : ""}`}>
      {/* Video Section */}
      {videoSrc && (
        <div className={styles.videoContainer}>
          {embedUrl ? (
            <div className={styles.videoEmbed}>
              <iframe
                src={embedUrl}
                title={`Testimonial from ${testimonial.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <a href={videoSrc} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
              {imgSrc && (
                <img src={imgSrc} alt={testimonial.name} className={styles.videoCover} />
              )}
              <div className={styles.playOverlay}>
                <FaPlay className={styles.playIcon} />
              </div>
            </a>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={styles.cardTop}>
        {imgSrc && (
          <img src={imgSrc} alt={testimonial.name} className={styles.card__image} />
        )}
        <div className={styles.personInfo}>
          <h3 className={styles.card__name}>{testimonial.name}</h3>
          {testimonial.designation && (
            <span className={styles.card__designation}>
              <FcGoogle className={styles.googleIcon} />
              {testimonial.designation}
            </span>
          )}
        </div>
      </div>

      {testimonial.feedback && (
        <p className={styles.card__feedback}>{testimonial.feedback}</p>
      )}
    </article>
  );
};
