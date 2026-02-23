// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { locations } from "../../data/locations";

// export const Navbar: React.FC = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [contactOpen, setContactOpen] = useState(false);

//   const handleLocationClick = (path: string) => {
//     window.location.href = path;
//     setMobileOpen(false);
//   };

//   return (
//     <header className={styles.nav}>
//       {/* Logo */}
//       <div className={styles.nav__logo}>
//         <a href="/" aria-label="Nails Master Home">
//           <div className={styles.logoCircle}>NAILS MASTER</div>
//         </a>
//       </div>

//       {/* Burger */}
//       <button
//         className={styles.burger}
//         onClick={() => setMobileOpen(!mobileOpen)}
//         aria-label="Toggle menu"
//       >
//         {mobileOpen ? "✕" : "☰"}
//       </button>

//       {/* Navigation */}
//       <nav
//         className={`${styles.nav__links} ${
//           mobileOpen ? styles.open : ""
//         }`}
//       >
//         <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
//         <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
//         <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>

//         <div
//           className={styles.dropdown}
//           onMouseEnter={() => !mobileOpen && setContactOpen(true)}
//           onMouseLeave={() => !mobileOpen && setContactOpen(false)}
//         >
//           <button
//             className={styles.dropdown__button}
//             onClick={() => mobileOpen && setContactOpen(!contactOpen)}
//           >
//             Contact
//           </button>

//           {contactOpen && (
//             <div className={styles.dropdown__menu}>
//               {locations.map((loc) => (
//                 <button
//                   key={loc.id}
//                   onClick={() => handleLocationClick(loc.link)}
//                   className={styles.dropdown__item}
//                 >
//                   {loc.title}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Mobile CTA */}
//         <div className={styles.mobile__cta}>
//           <div className={styles.phone}>1500-2399-2020</div>
//           <a
//             href="https://example.com/book"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.bookBtn}
//           >
//             Book Now
//           </a>
//         </div>
//       </nav>

//       {/* Desktop CTA */}
//       <div className={styles.nav__cta}>
//         <div className={styles.phone}>1500-2399-2020</div>
//         <a
//           href="https://example.com/book"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.bookBtn}
//         >
//           Book Now
//         </a>
//       </div>
//     </header>
//   );
// };
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { locations } from "../../data/locations";
import logo from "../../assets/nailslogo.png";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleLocationClick = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setContactOpen(false);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setContactOpen(false);
  };

  return (
    <header className={styles.nav}>
      {/* Logo */}
      <div className={styles.nav__logo}>
        <Link to="/" aria-label="Nails Master Home" onClick={closeAll}>
          {/* <div className={styles.logoCircle}>NAILS MASTER</div> */}
          <img src={logo} className={styles.logoCircle} alt="" />
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
        <Link to="/" onClick={closeAll}>Home</Link>
        <a href="#about" onClick={closeAll}>About</a>
        <a href="#services" onClick={closeAll}>Services</a>

        <div
          className={styles.dropdown}
          onMouseEnter={() => !mobileOpen && setContactOpen(true)}
          onMouseLeave={() => !mobileOpen && setContactOpen(false)}
        >
          <button
            className={styles.dropdown__button}
            onClick={() => mobileOpen && setContactOpen(!contactOpen)}
          >
            Contact
          </button>

          {contactOpen && (
            <div className={styles.dropdown__menu}>
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => handleLocationClick(loc.link)}
                  className={styles.dropdown__item}
                >
                  {loc.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile CTA */}
        <div className={styles.mobile__cta}>
          <div className={styles.phone}>1500-2399-2020</div>
          <a
            href="https://example.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookBtn}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Desktop CTA */}
      <div className={styles.nav__cta}>
        <div className={styles.phone}>1500-2399-2020</div>
        <a
          href="https://example.com/book"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          Book Now
        </a>
      </div>
    </header>
  );
};
