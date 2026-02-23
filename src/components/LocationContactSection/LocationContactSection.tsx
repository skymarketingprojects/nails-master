import React from "react";
import styles from "./LocationContactSection.module.css";
import type { Location } from "../../data/locations";

interface Props {
  location: Location;
}

export const LocationContactSection: React.FC<Props> = ({
  location,
}) => {
  return (
    <section className={styles.section}>
      {/* INFO SECTION */}
      <div className={styles.info}>
        <div className={styles.infoContent}>
          <h2 className={styles.title}>{location.title}</h2>

          {location.description && (
            <p className={styles.description}>
              {location.description}
            </p>
          )}

          <p className={styles.rating}>
            ⭐ {location.rating} / 5
          </p>

          <a
            href={location.link}
            className={styles.link}
          >
            Visit Location Page
          </a>

          {location.phone && (
            <p className={styles.contact}>
              📞 {location.phone}
            </p>
          )}

          {location.email && (
            <p className={styles.contact}>
              ✉ {location.email}
            </p>
          )}
        </div>
      </div>

      {/* FORM SECTION */}
      <div className={styles.formWrapper}>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
          />

          <select name="service" required>
            <option value="">Select Service</option>
            <option value="Nail Extension">
              Nail Extension
            </option>
            <option value="Manicure">
              Manicure
            </option>
            <option value="Pedicure">
              Pedicure
            </option>
            <option value="Facial">
              Facial
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
