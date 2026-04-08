import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { footerChips as staticChips } from "../../data/footer";
import { FooterChip } from "./FooterChip/FooterChip";
import { FooterAddress } from "./FooterAddress/FooterAddress";
import { FooterFollow } from "./FooterFollow/FooterFollow";
import { api } from "../../api/baseApi";
import type { FooterChipData } from "../../api/types";

export const Footer: React.FC = () => {
  const [chips, setChips] = useState<FooterChipData[]>(staticChips);

  useEffect(() => {
    const fetchChips = async () => {
      try {
        const data = await api.getFooterChips();
        if (data && data.length > 0) {
          setChips(data);
        }
      } catch (error) {
        console.error("Failed to fetch footer chips:", error);
      }
    };

    fetchChips();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <h3 className={styles.logoDark}>NAILS MASTER</h3>
            <p className={styles.logoLight}>the studio</p>
          </div>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          </p>
        </div>

        <div className={styles.menu}>
          <h4>MENU</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Treatments</Link></li>
            <li><Link to="/#problems">Problems</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.addressAndSocial}>
          <FooterAddress />
          <FooterFollow />
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryBox}></div>
            <div className={styles.galleryBox}></div>
            <div className={styles.galleryBox}></div>
            <div className={styles.galleryBox}></div>
          </div>
        </div>
      </div>

      <div className={styles.chips}>
        {chips.map((chip) => (
          <FooterChip key={chip.id} chip={chip} />
        ))}
      </div>

      <div className={styles.actionRow}>
        <a className={styles.actionPill}>Call Us Now</a>
        <a className={styles.actionPill}>Book Appoitment</a>
        <a className={styles.actionPill}>Mail Us</a>
        <a className={styles.actionPill}>Contact & Review</a>
      </div>

      <div className={styles.bottom}>
        @NailsMaster. All Rights Reserved
      </div>
    </footer>
  );
};

