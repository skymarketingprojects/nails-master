import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsappButton.module.css";

interface Props {
  phoneNumber: string; // without +
}

export const FloatingWhatsappButton: React.FC<Props> = ({
  phoneNumber,
}) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
};
