import React from "react";
import styles from "./Footer.module.css";
import { footerChips } from "../../data/footer";
import { FooterChip } from "./FooterChip/FooterChip";
import { FooterAddress } from "./FooterAddress/FooterAddress";
import { FooterFollow } from "./FooterFollow/FooterFollow";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>NAILS MASTER</h3>
          <p className={styles.desc}>
            At Nails Master The Studio, we blend creativity, precision, and care to give you flawless hair transformations and beautifully crafted nails. From seamless balayage to stunning acrylic extensions and detailed nail art, every service is designed to exceed expectations in a warm, welcoming space. Step in for a refreshing experience and walk out feeling confident, pampered, and absolutely in love with your look.
          </p>
        </div>

        <div className={styles.menu}>
          <h4>MENU</h4>
          <ul>
            <li>Home</li>
            <li>Treatments</li>
            <li>Problems</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        <FooterAddress />
        <FooterFollow />
      </div>

      <div className={styles.chips}>
        {footerChips.map((chip) => (
          <FooterChip key={chip.id} chip={chip} />
        ))}
      </div>

      <div className={styles.bottom}>
        @NailsMaster. All Rights Reserved
      </div>
    </footer>
  );
};
