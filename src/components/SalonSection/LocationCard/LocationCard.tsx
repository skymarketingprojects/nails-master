// import React from "react";
// import styles from "./LocationCard.module.css";
// import type { Location } from "../../../data/locations";
// import { FcGoogle } from "react-icons/fc";

// interface Props {
//   location: Location;
// }

// export const LocationCard: React.FC<Props> = ({ location }) => {
//   return (
//     <article className={styles.card}>
//       <a
//         href={location.link}
//         className={styles.card__link}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src={location.icon}
//           alt={`${location.title} salon`}
//           className={styles.card__image}
//         />

//         <h3 className={styles.card__title}>{location.title}</h3>

//         <div className={styles.card__rating}>
//           <FcGoogle className={styles.googleIcon} />
//           <span className={styles.star}>★</span>
//           <span>{location.rating.toFixed(1)} / 5</span>
//         </div>
//       </a>
//     </article>
//   );
// };
import React from "react";
import styles from "./LocationCard.module.css";
import type { Location } from "../../../api/types";
import { FcGoogle } from "react-icons/fc";
import { FaMapMarkerAlt, FaWhatsapp, FaLocationArrow } from "react-icons/fa";
import config from "../../../config/config";
interface Props {
  location: Location;
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img
          src={config.BASE_URL.slice(0, -1) + location.icon}
          alt={`${location.title} salon`}
          className={styles.card__image}
        />
      </div>

      <div className={styles.card__infoContainer}>
        <div className={styles.card__metaRow}>
          <div className={styles.card__address}>
            <FaMapMarkerAlt className={styles.metaIconRed} /> 
            <span>{location.title}</span>
          </div>
          <div className={styles.card__phone}>
            <FaWhatsapp className={styles.metaIconGreen} />
            <a href={`https://wa.me/91${location.phone}`}>{location.phone}</a>
          </div>
        </div>

        <a
          href={location.link || "#"}
          className={styles.btnBlack}
        >
          <FaMapMarkerAlt /> Visit Branch
        </a>

        <a
          href={location.locationlink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnOutlined}
        >
          <FcGoogle /> Review Us
        </a>

        <a
          href={location.brochure ? (location.brochure.startsWith("http") ? location.brochure : config.BASE_URL.slice(0, -1) + location.brochure) : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkDirection}
          download
        >
          <FaLocationArrow /> Download Brochure
        </a>
      </div>
    </article>
  );
};