import React, { useState, useEffect } from "react";
import styles from "./TestimonialSection.module.css";
import { testimonials as staticTestimonials } from "../../data/testimonials";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";
import { api } from "../../api/baseApi";
import type { Testimonial } from "../../api/types";

export const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(staticTestimonials);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await api.getTestimonials();
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

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
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [itemsPerView, totalPages, currentPage]);

  const startIndex = currentPage * itemsPerView;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerView
  );

  const goToPage = (page: number) => {
    let targetPage = page;
    if (page < 0) targetPage = totalPages - 1;
    if (page >= totalPages) targetPage = 0;
    setCurrentPage(targetPage);
  };

  const goPrev = () => goToPage(currentPage - 1);
  const goNext = () => goToPage(currentPage + 1);

  if (loading && testimonials.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className={styles.section__title}>
        Clients Testimonial
      </h2>

      <div className={styles.carouselRow}>
        <button
          className={styles.arrowBtn}
          onClick={goPrev}
          aria-label="Previous testimonials"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>

        <div className={styles.section__grid}>
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        <button
          className={styles.arrowBtn}
          onClick={goNext}
          aria-label="Next testimonials"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6L15 12L9 18" />
          </svg>
        </button>
      </div>

      <div className={styles.section__dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
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