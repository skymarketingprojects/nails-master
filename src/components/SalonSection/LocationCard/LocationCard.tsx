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
import type { Location } from "../../../data/locations";
import { FcGoogle } from "react-icons/fc";

interface Props {
  location: Location;
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <article className={styles.card}>
      <a
        href={location.link}
        className={styles.card__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={location.icon}
          alt={`${location.title} salon`}
          className={styles.card__image}
        />

        <h3 className={styles.card__title}>{location.title}</h3>

        <div className={styles.card__rating}>
          <FcGoogle seed={23} className={styles.googleIcon} />
          <span className={styles.star}>★</span>
          <span>{location.rating.toFixed(1)} / 5</span>
        </div>
        <div className={styles.starsWrapper}>
        {[...Array(5)].map((_, i) => {
          const rating = location.rating;
          if (rating >= i + 1) {
            return <span key={i} className={styles.starFull}>★</span>;
          }
          if (rating > i && rating < i + 1) {
            return <span key={i} className={styles.starHalf}>★</span>;
          }
          return <span key={i} className={styles.starEmpty}>★</span>;
        })}
      </div>
      </a>

      {/* OUTLINED VISIT BUTTON */}
      <a
        href={`https://wa.me/${location.phone}?text=I+want+to+book+an+appointment`}
        // target="_blank"
        // rel="noopener noreferrer"
        className={styles.card__visitBtn}
      >
        {location.phone}
      </a>
    </article>
  );
};