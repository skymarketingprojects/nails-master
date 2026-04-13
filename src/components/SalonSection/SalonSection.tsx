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

//         <div className={`${styles.section__cards} ${styles.animate}`} key={currentPage}>
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
import React, { useEffect, useState } from "react";
import styles from "./SalonSection.module.css";
import { api } from "../../api/baseApi";
import { type Location } from "../../api/types";
import { LocationCard } from "./LocationCard/LocationCard";

export const SalonSection: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await api.getLocations();
        setLocations(data);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1200) setItemsPerView(3);
      else if (width >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(locations.length / itemsPerView);

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [itemsPerView, totalPages, currentPage]);

  if (loading) return null;

  const startIndex = currentPage * itemsPerView;
  const visibleLocations = locations.slice(startIndex, startIndex + itemsPerView);

  const goToPage = (page: number) => {
    let targetPage = page;
    if (page < 0) targetPage = totalPages - 1;
    if (page >= totalPages) targetPage = 0;
    setCurrentPage(targetPage);
  };

  const goPrev = () => goToPage(currentPage - 1);
  const goNext = () => goToPage(currentPage + 1);

  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="salon-heading"
    >
      {/* Heading */}
      <div className={styles.section__header}>
        <h2 id="salon-heading" className={styles.section__title}>
          Our Salons:
        </h2>
      </div>

      {/* Cards Container */}
      <div className={styles.section__carousel}>
        <div 
          className={styles.section__cards}
          style={{ transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * 30}px))` }}
        >
          {locations.map((loc) => (
            <div 
              key={loc.id} 
              className={styles.cardWrapper}
              style={{ width: `calc((100% - ${(itemsPerView - 1) * 30}px) / ${itemsPerView})` }}
            >
              <LocationCard location={loc} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.paginationRow}>
          <button
            className={styles.arrowBtn}
            onClick={goPrev}
            aria-label="Previous locations"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={styles.arrowBtn}
            onClick={goNext}
            aria-label="Next locations"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </section>
  );
};

