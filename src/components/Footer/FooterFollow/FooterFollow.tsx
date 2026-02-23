import React from "react";
import styles from "./FooterFollow.module.css";
import { footerFollow } from "../../../data/footer";

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
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
