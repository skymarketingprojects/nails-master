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
import { FaMapMarkerAlt, FaLocationArrow, FaStar, FaPhoneAlt } from "react-icons/fa";
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

      <div className={styles.card__content}>
        <a 
          href={location.locationlink || "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.card__titleRow}
        >
          <FaMapMarkerAlt className={styles.mapIcon} />
          <h3 className={styles.card__title}>{location.title}</h3>
        </a>
        
        <div className={styles.card__metaRow}>
          <a href={`tel:${location.phone.replace(/\s+/g, "")}`} className={styles.card__phoneBadge}>
            <FaPhoneAlt size={10} className={styles.phoneIcon} /> {location.phone}
          </a>
          <div className={styles.card__stars}>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className={styles.starIcon} />
            ))}
            <span className={styles.ratingText}>4.0 / 5</span>
          </div>
        </div>


        <hr className={styles.card__separator} />

        <div className={styles.card__btnGroup}>
          <a
            href={location.link || "#"}
            className={styles.btnBlack}
          >
            Visit Branch
          </a>

          <a
            href={location.locationlink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutlined}
          >
            <FcGoogle className={styles.googleIcon} />
            Review Us
          </a>
        </div>

        <a
          href={location.broucher ? (location.broucher.startsWith("http") ? location.broucher : config.BASE_URL.slice(0, -1) + location.broucher) : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkDownload}
          download
        >
          <FaLocationArrow size={10} /> Download Brochure
        </a>
      </div>
    </article>
  );
};