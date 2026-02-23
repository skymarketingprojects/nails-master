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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
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
