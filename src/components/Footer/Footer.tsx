import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { footerChips as staticChips } from "../../data/footer";
import { FooterChip } from "./FooterChip/FooterChip";
import { FooterAddress } from "./FooterAddress/FooterAddress";
import { FooterFollow } from "./FooterFollow/FooterFollow";
import { api } from "../../api/baseApi";
import type { FooterChipData } from "../../api/types";
import { FaPhone, FaCalendarAlt, FaEnvelope, FaStar } from "react-icons/fa";
import img1 from "../../assets/Footer/1.jpg";
import img2 from "../../assets/Footer/2.jpg";
import img3 from "../../assets/Footer/3.jpg";
import img4 from "../../assets/Footer/4.jpg";


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
            Nails Master provides nail extensions, gel nails, acrylic art, and salon care by technicians. Explore services, view styles, and download brochures for treatments and pricing.!
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
            <div className={styles.galleryBox}><img src={img1} alt="Footer Gallery 1" /></div>
            <div className={styles.galleryBox}><img src={img2} alt="Footer Gallery 2" /></div>
            <div className={styles.galleryBox}><img src={img3} alt="Footer Gallery 3" /></div>
            <div className={styles.galleryBox}><img src={img4} alt="Footer Gallery 4" /></div>
          </div>
        </div>
      </div>

      <div className={styles.chips}>
        {chips.map((chip) => (
          <FooterChip key={chip.id} chip={chip} />
        ))}
      </div>

      <div className={styles.actionRow}>
        <a className={styles.actionPill}><FaPhone /> Call Us Now</a>
        <a className={styles.actionPill}><FaCalendarAlt /> Book Appoitment</a>
        <a className={styles.actionPill}><FaEnvelope /> Mail Us</a>
        <a className={styles.actionPill}><FaStar /> Contact & Review</a>
      </div>

      <div className={styles.bottom}>
        @NailsMaster. All Rights Reserved
      </div>
    </footer>
  );
};

