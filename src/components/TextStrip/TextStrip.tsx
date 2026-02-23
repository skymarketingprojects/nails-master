import React from "react";
import styles from "./textStrip.module.css";

interface TextStripProps {
  text?: string;
}

export const TextStrip: React.FC<TextStripProps> = ({
  text = "GET 20% OFF ON ALL SERVICES",
}) => {
  return (
    <div className={styles.strip} role="banner">
      <p className={styles.strip__text}>{text}</p>
    </div>
  );
};
