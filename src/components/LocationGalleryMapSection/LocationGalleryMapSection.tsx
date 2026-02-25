import React from "react";
import styles from "./LocationGalleryMapSection.module.css";
import type { Location } from "../../data/locations";

interface Props {
  location: Location;
}

export const LocationGalleryMapSection: React.FC<Props> = ({
  location,
}) => {
  return (
    <section className={styles.section}>
      {/* IMAGE GALLERY */}
      <div className={styles.galleryWrapper}>
        <div className={styles.gallery}>
          {location.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${location.title} gallery ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>
      {/* GOOGLE MAP */}
      <div className={styles.mapWrapper}>
        <iframe
          src={location.mapLink}
          className={styles.map}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`${location.title} Map`}
        />
      </div>

      
    </section>
  );
};
