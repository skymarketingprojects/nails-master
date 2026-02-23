import React from "react";
import styles from "./FooterAddress.module.css";
import { footerAddress } from "../../../data/footer";

export const FooterAddress: React.FC = () => {
  return (
    <div className={styles.address}>
      <h4 className={styles.title}>{footerAddress.title}</h4>

      {footerAddress.description.map((address, index) => (
        <p key={index} className={styles.text}>
          {address}
        </p>
      ))}
      
    </div>
  );
};