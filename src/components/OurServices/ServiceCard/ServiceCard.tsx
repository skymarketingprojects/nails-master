import React from "react";
import styles from "./ServiceCard.module.css";
import type { Service } from "../../../data/services";

interface Props {
  service: Service;
}

export const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <article className={styles.card}>
      <img
        src={service.image}
        alt={service.title}
        className={styles.card__image}
      />

      <h3 className={styles.card__title}>{service.title}</h3>

      <p className={styles.card__price}>₹{service.price}/-</p>

      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card__button}
      >
        Book Now
      </a>
    </article>
  );
};
