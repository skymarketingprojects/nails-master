import React from "react";
import styles from "./FooterFollow.module.css";
import { footerFollow } from "../../../data/footer";
import type { SocialPlatform } from "../../../data/footer";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const iconMap: Record<SocialPlatform, React.ReactNode> = {
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
};

export const FooterFollow: React.FC = () => {
  return (
    <div className={styles.follow}>
      <h4 className={styles.title}>FOLLOW</h4>
      <div className={styles.icons}>
        {footerFollow.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={styles.icon}
            aria-label={item.platform}
            target="_blank"
            rel="noopener noreferrer"
          >
            {iconMap[item.platform]}
          </a>
        ))}
      </div>
    </div>
  );
};