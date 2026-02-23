import React from "react";
import styles from "./LocationCard.module.css";
import type { Location } from "../../../data/locations";

interface Props {
  location: Location;
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <article className={styles.card}>
      <a href={location.link} className={styles.card__link}>
        <img
          src={location.icon}
          alt={`${location.title} salon`}
          className={styles.card__image}
        />
        <h3 className={styles.card__title}>{location.title}</h3>
        <div className={styles.card__rating}>
          <span className={styles.star}>★</span>
          <span>{location.rating.toFixed(1)} / 5</span>
        </div>
      </a>
    </article>
  );
};
