import React from "react";
import styles from "./ServiceCard.module.css";
import type { Service } from "../../../data/services";
import { useContact } from "../../../context/ContactContext";
import config from "../../../config/config";
interface Props {
  service: Service;
}

export const ServiceCard: React.FC<Props> = ({ service }) => {
  const { phone } = useContact();
  
  // Update the WhatsApp link with the latest phone number if it's a WhatsApp link
  const waLink = service.link.includes("wa.me") 
    ? service.link.replace(/wa\.me\/[0-9]+/, `wa.me/${phone}`)
    : service.link;

  return (
    <article className={styles.card}>
      <img
        src={config.BASE_URL + service.image}
        alt={service.title}
        className={styles.card__image}
      />

      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{service.title}</h3>
        <p className={styles.card__price}>₹{service.price}/-</p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card__button}
        >
          Book Now
        </a>
      </div>
    </article>
  );
};