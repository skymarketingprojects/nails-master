import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { footerChips as staticChips } from "../../data/footer";
import { FooterChip } from "./FooterChip/FooterChip";
import { FooterAddress } from "./FooterAddress/FooterAddress";
import { FooterFollow } from "./FooterFollow/FooterFollow";
import { api } from "../../api/baseApi";
import type { FooterChipData } from "../../api/types";
import { FaPhone, FaCalendarAlt, FaEnvelope, FaStar, FaDownload } from "react-icons/fa";
import { useContact } from "../../context/ContactContext";
import config from "../../config/config";
import img1 from "../../assets/Footer/1.jpg";
import img2 from "../../assets/Footer/2.jpg";
import img3 from "../../assets/Footer/3.jpg";
import img4 from "../../assets/Footer/4.jpg";


export const Footer: React.FC = () => {
  const { phone } = useContact();
  const [chips, setChips] = useState<FooterChipData[]>(staticChips);
  const [email, setEmail] = useState("info@nailsmaster.com");
  const [reviewLink, setReviewLink] = useState("#");
  const [brochureLink, setBrochureLink] = useState("#");

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const [chipsData, locationsData, addressData, servicesData] = await Promise.all([
          api.getFooterChips(),
          api.getLocations(),
          api.getFooterAddress().catch(() => null),
          api.getServices({ page_size: 1 }).catch(() => null)
        ]);

        if (chipsData && chipsData.length > 0) {
          setChips(chipsData);
        }

        if (addressData && (addressData as any).email) {
          setEmail((addressData as any).email);
        } else if (locationsData && locationsData.length > 0) {
          setEmail(locationsData[0].email);
        }

        if (locationsData && locationsData.length > 0) {
          const locationsWithLinks = locationsData.filter(loc => loc.locationlink);
          if (locationsWithLinks.length > 0) {
            const randomIndex = Math.floor(Math.random() * locationsWithLinks.length);
            setReviewLink(locationsWithLinks[randomIndex].locationlink);
          }
        }

        if (servicesData && servicesData.results.length > 0 && servicesData.results[0].brochure) {
           const brochureUrl = servicesData.results[0].brochure;
           setBrochureLink(brochureUrl.startsWith("http") ? brochureUrl : config.BASE_URL.slice(0, -1) + brochureUrl);
        }
      } catch (error) {
        console.error("Failed to fetch footer data:", error);
      }
    };

    fetchFooterData();
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
            Nails Master provides nail extensions, gel nails, acrylic art, and salon care by technicians. Explore services, view styles, and download brochures for treatments and pricing.
          </p>
        </div>

        <div className={styles.menu}>
          <h4>MENU</h4>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/#about">ABOUT</Link></li>
            <li><Link to="/#services">SERVICES</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
            <li><Link to="/franchise">FRANCHISE</Link></li>
            <li><Link to="/academy">ACADEMY</Link></li>
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
        <a href={`tel:${phone}`} className={styles.actionPill}>
          <FaPhone /> Call Us Now
        </a>
        <a 
          href={`https://wa.me/${phone}?text=Hello! I would like to book an appointment.`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.actionPill}
        >
          <FaCalendarAlt /> Book Appointment
        </a>
        <a href={`mailto:${email}`} className={styles.actionPill}>
          <FaEnvelope /> Mail Us
        </a>
        <a 
          href={reviewLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.actionPill}
        >
          <FaStar /> Review Us
        </a>
        <a 
          href={brochureLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.actionPill}
          onClick={(e) => {
            if (brochureLink === "#") {
              e.preventDefault();
              alert("Brochure not available at the moment.");
            }
          }}
        >
          <FaDownload /> Brochure
        </a>
      </div>

      <div className={styles.bottom}>
        @NailsMaster. All Rights Reserved
      </div>
    </footer>
  );
};

