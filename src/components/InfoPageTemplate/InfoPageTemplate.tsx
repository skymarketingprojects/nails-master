import React, { useEffect, useState } from "react";
import styles from "./InfoPageTemplate.module.css";
import { api } from "../../api/baseApi";
import config from "../../config/config";
import { type GalleryItem } from "../../api/types";
import { HeroSection } from "../HeroSection/HeroSection";

export interface InfoPageData {
  heroImage: string;
  buttons: {
    downloadBrochure: {
      label: string;
      name: string; // The name from the backend (used for API lookup)
      link: string; // Fallback link
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
  pageName: string;
}

export const InfoPageTemplate: React.FC<Props> = ({ data, pageName }) => {
  const [galleryImages, setGalleryImages] = useState<string[]>(data.gallery);
  const [brochureLink, setBrochureLink] = useState<string>(data.buttons.downloadBrochure.link);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const result: GalleryItem[] = await api.getGallery(pageName);
        if (result && result.length > 0) {
          const fullImageUrls = result.map(item => 
            item.image.startsWith("http") 
              ? item.image 
              : `${config.BASE_URL.replace(/\/$/, "")}${item.image.startsWith("/") ? "" : "/"}${item.image}`
          );
          setGalleryImages(fullImageUrls);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchGallery();
  }, [pageName]);

  useEffect(() => {
    const fetchBrochure = async () => {
      const brochureName = data.buttons.downloadBrochure.name;
      if (!brochureName) return;

      try {
        const result = await api.getBrochure(brochureName);
        if (result?.broucher) {
          const fullUrl = result.broucher.startsWith("http")
            ? result.broucher
            : `${config.BASE_URL.replace(/\/$/, "")}${result.broucher.startsWith("/") ? "" : "/"}${result.broucher}`;
          setBrochureLink(fullUrl);
        }
      } catch (error) {
        console.error("Failed to fetch brochure:", error);
      }
    };

    fetchBrochure();
  }, [data.buttons.downloadBrochure.name]);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <HeroSection page={pageName} image={data.heroImage} />

      {/* Action Buttons */}
      <section className={styles.actionSection}>
        <div className={styles.buttonContainer}>
          <a href={brochureLink} className={styles.btnOutline} target="_blank" rel="noopener noreferrer">
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
          {galleryImages.map((imgSrc, index) => (
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
