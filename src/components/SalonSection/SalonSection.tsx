// import React, { useState } from "react";
// import styles from "./SalonSection.module.css";
// import { locations } from "../../data/locations";
// import { LocationCard } from "./LocationCard/LocationCard";

// export const SalonSection: React.FC = () => {
//   const itemsPerPage = 4;
//   const [page, setPage] = useState(0);

//   const totalPages = Math.ceil(locations.length / itemsPerPage);

//   const start = page * itemsPerPage;
//   const currentLocations = locations.slice(start, start + itemsPerPage);

//   return (
//     <section id="about" className={styles.section} aria-labelledby="salon-heading">
//       {/* Heading */}
//       <div className={styles.section__header}>
//         <h2 id="salon-heading" className={styles.section__title}>
//           Our Salons
//         </h2>
//       </div>

//       {/* Cards Container */}
//       <div className={styles.section__carousel}>
//         {/* {page > 0 && (
//           <button
//             className={styles.navBtn}
//             onClick={() => setPage((prev) => prev - 1)}
//             aria-label="Previous locations"
//           >
//             ‹
//           </button>
//         )} */}

//         <div className={styles.section__cards}>
//           {currentLocations.map((loc) => (
//             <LocationCard key={loc.id} location={loc} />
//           ))}
//         </div>

//         {/* {page < totalPages - 1 && (
//           <button
//             className={styles.navBtn}
//             onClick={() => setPage((prev) => prev + 1)}
//             aria-label="Next locations"
//           >
//             ›
//           </button>
//         )} */}
//       </div>

//       {/* Message Section */}
//       <div className={styles.section__message}>
//         <h3 className={styles.smallHeading}>Welcome to</h3>
//         <h1 className={styles.largeHeading}>Nails Master</h1>
//         <p className={styles.paragraph}>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text
//           ever since the 1500s.
//         </p>
//       </div>
//     </section>
//   );
// };
import React from "react";
import styles from "./SalonSection.module.css";
import { locations } from "../../data/locations";
import { LocationCard } from "./LocationCard/LocationCard";

export const SalonSection: React.FC = () => {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="salon-heading"
    >
      {/* Heading */}
      <div className={styles.section__header}>
        <h2 id="salon-heading" className={styles.section__title}>
          Our Salons
        </h2>
      </div>

      {/* Cards Container */}
      <div className={styles.section__carousel}>
        <div className={styles.section__cards}>
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>

      {/* Message Section */}
      <div className={styles.section__message}>
        <h3 className={styles.smallHeading}>Welcome to</h3>
        <h1 className={styles.largeHeading}>Nails Master</h1>
        <p className={styles.paragraph}>
          At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look.
          </p>
      </div>
    </section>
  );
};
