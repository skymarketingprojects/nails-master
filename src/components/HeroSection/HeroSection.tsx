// import React from "react";
// import styles from "./HeroSection.module.css";
// import heroImage from "../../assets/hero.png"; // replace with actual image path

// export const HeroSection: React.FC = () => {
//   return (
//     <section id="home" className={styles.hero}>
//       <img
//         src={heroImage}
//         alt="Spa and beauty services"
//         className={styles.hero__image}
//       />
//       <div className={styles.hero__overlay} />
//     </section>
//   );
// };
import React from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  image: string;
  alt?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  alt = "Hero image",
}) => {
  return (
    <section id="home" className={styles.hero}>
      <img
        src={image}
        alt={alt}
        className={styles.hero__image}
      />
      <div className={styles.hero__overlay} />
    </section>
  );
};