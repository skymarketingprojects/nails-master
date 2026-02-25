import React from "react";
import styles from "./TestimonialCard.module.css";
import type { Testimonial } from "../../../data/testimonials";
import { FcGoogle } from "react-icons/fc";

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <article className={styles.card}>
      {testimonial.image && (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={styles.card__image}
        />
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