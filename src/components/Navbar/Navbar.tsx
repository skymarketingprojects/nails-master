import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/nailslogo.png";
import { api } from "../../api/baseApi";
import type { SocialMedia, Location } from "../../api/types";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useContact } from "../../context/ContactContext";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [socials, setSocials] = useState<SocialMedia[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  const location = useLocation();
  const { phone } = useContact();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [socialsData, locationsData] = await Promise.all([
          api.getSocialMedia(),
          api.getLocations(),
        ]);
        setSocials(socialsData);
        setLocations(locationsData);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };
    fetchData();
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setContactOpen(false);
  };

  const renderIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <FaInstagram />;
      case "linkedin":
        return <FaLinkedinIn />;
      case "facebook":
        return <FaFacebookF />;
      case "twitter":
        return <FaTwitter />;
      default:
        return <FaFacebookF />;
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith("#")) {
      return location.hash === path;
    }
    return location.pathname === path;
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
      <nav className={`${styles.nav__links} ${mobileOpen ? styles.open : ""}`}>
        <Link to="/" className={isActive("/") ? styles.activeLink : ""} onClick={closeAll}>
          HOME
        </Link>
        <Link to="/#about" className={isActive("#about") ? styles.activeLink : ""} onClick={closeAll}>
          ABOUT
        </Link>
        <Link to="/#services" className={isActive("#services") ? styles.activeLink : ""} onClick={closeAll}>
          SERVICES
        </Link>
        {/* Contact Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => !mobileOpen && setContactOpen(true)}
          onMouseLeave={() => !mobileOpen && setContactOpen(false)}
        >
          <button
            className={`${styles.dropdown__button} ${location.pathname.startsWith("/contact") ? styles.activeLink : ""}`}
            onClick={() => mobileOpen && setContactOpen(!contactOpen)}
          >
            OUTLET
          </button>

          {contactOpen && (
            <div className={styles.dropdown__menu}>
              {locations.map((loc) => (
                <Link
                  key={loc.id}
                  to={loc.link}
                  onClick={closeAll}
                  className={`${styles.dropdown__item} ${location.pathname === loc.link ? styles.activeItem : ""}`}
                >
                  {loc.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link
          to="/blogs"
          className={isActive("/blogs") ? styles.activeLink : ""}
          onClick={closeAll}
        >
          BLOGS
        </Link>
        <Link
          to="/franchise"
          className={isActive("/franchise") ? styles.activeLink : ""}
          onClick={closeAll}
        >
          FRANCHISE
        </Link>
        <Link
          to="/academy"
          className={isActive("/academy") ? styles.activeLink : ""}
          onClick={closeAll}
        >
          ACADEMY
        </Link>




        {/* Mobile CTA (Socials & WhatsApp) */}
        <div className={styles.mobile__cta}>
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappPill}
          >
            <FaWhatsapp className={styles.whatsappIcon} />
            <span>+{phone}</span>
          </a>
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
          </div>
        </div>
      </nav>

      {/* Desktop CTA (Socials & WhatsApp) */}
      <div className={styles.nav__cta}>
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappPill}
        >
          <FaWhatsapp className={styles.whatsappIcon} />
          <span>+{phone}</span>
        </a>
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
        </div>
      </div>
    </header>
  );
};
