import React from "react";
import styles from "./InfoPageTemplate.module.css";
import heroPlaceholder from "../../assets/banner/Home-Banner.jpeg"; // Fallback image if JSON is empty

export interface InfoPageData {
  heroImage: string;
  buttons: {
    downloadBrochure: {
      label: string;
      link: string;
    };
    apply: {
      label: string;
      link: string;
    };
  };
  benefitsSectionTitle: string;
  benefits: {
    title: string;
    description: string;
  }[];
  gallery: string[];
}

interface Props {
  data: InfoPageData;
}

export const InfoPageTemplate: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img 
          src={data.heroImage || heroPlaceholder} 
          alt="Hero" 
          className={styles.heroImage} 
        />
      </section>

      {/* Action Buttons */}
      <section className={styles.actionSection}>
        <div className={styles.buttonContainer}>
          <a href={data.buttons.downloadBrochure.link} className={styles.btnOutline}>
            {data.buttons.downloadBrochure.label}
          </a>
          <a href={data.buttons.apply.link} className={styles.btnFilled}>
            {data.buttons.apply.label}
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>{data.benefitsSectionTitle}</h2>
        <div className={styles.benefitsGrid}>
          {data.benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p className={styles.benefitDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {data.gallery.map((imgSrc, index) => (
            <div key={index} className={styles.galleryBox}>
              {imgSrc ? (
                <img src={imgSrc} alt={`Gallery ${index + 1}`} className={styles.galleryImg} />
              ) : (
                <div className={styles.galleryPlaceholder} />
              )}
            </div>
          ))}
        </div>
        
        {/* Simple pagination dots */}
        <div className={styles.paginationDots}>
          <span className={`${styles.dot} ${styles.dotActive}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </section>
    </div>
  );
};
