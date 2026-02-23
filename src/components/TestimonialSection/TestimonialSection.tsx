import React, { useState, useEffect } from "react";
import styles from "./TestimonialSection.module.css";
import { testimonials } from "../../data/testimonials";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";

export const TestimonialSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;

      if (width >= 1200) {
        setItemsPerView(3);
      } else if (width >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);
  
  
  const totalPages = Math.ceil(testimonials.length / itemsPerView);
  
  useEffect(() => {
        if (currentPage >= totalPages) {
            setCurrentPage(0);
        }
    }, [itemsPerView, totalPages, currentPage]);

  const startIndex = currentPage * itemsPerView;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerView
  );

  return (
    <section className={styles.section} aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className={styles.section__title}>
        Clients Testimonial
      </h2>

      <div className={styles.section__grid}>
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>

      <div className={styles.section__dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`${styles.dot} ${
              currentPage === index ? styles.dotActive : ""
            }`}
            aria-label={`Go to testimonial page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
