import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/nailslogo.png";
import { api } from "../../api/baseApi";
import type { SocialMedia } from "../../api/types";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [socials, setSocials] = useState<SocialMedia[]>([]);

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const data = await api.getSocialMedia();
        setSocials(data);
      } catch (error) {
        console.error("Failed to fetch social media data:", error);
      }
    };
    fetchSocials();
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
  };

  const renderIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <FaInstagram />;
      case "linkedin":
        return <FaLinkedinIn />;
      case "twitter":
      case "facebook":
      default:
        return <FaFacebookF />;
    }
  };

  return (
    <header className={styles.nav}>
      {/* Logo */}
      <div className={styles.nav__logo}>
        <Link to="/" aria-label="Nails Master Home" onClick={closeAll}>
          <img src={logo} className={styles.logoCircle} alt="Nails Master Logo" />
        </Link>
      </div>

      {/* Burger */}
      <button
        className={styles.burger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {/* Navigation */}
      <nav
        className={`${styles.nav__links} ${
          mobileOpen ? styles.open : ""
        }`}
      >
        <Link to="/" onClick={closeAll}>HOME</Link>
        <a href="#services" onClick={closeAll}>OUR SERVICES</a>
        <a href="#testimonial" onClick={closeAll}>TESTIMONIAL</a>
        <a href="#contact" onClick={closeAll}>CONTACT</a>

        {/* Mobile CTA (Socials) */}
        <div className={styles.mobile__cta}>
          <div className={styles.socialIcons}>
            {socials.map((social) => (
              <a 
                key={social.id}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                {renderIcon(social.platform)}
              </a>
            ))}
            <a href="#" className={styles.socialIcon}><FaGlobe /></a>
          </div>
        </div>
      </nav>

      {/* Desktop CTA (Socials) */}
      <div className={styles.nav__cta}>
        <div className={styles.socialIconsDesktop}>
            {socials.map((social) => (
              <a 
                key={social.id}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                {renderIcon(social.platform)}
              </a>
            ))}
            <a href="#" className={styles.socialIcon}><FaGlobe /></a>
        </div>
      </div>
    </header>
  );
};

