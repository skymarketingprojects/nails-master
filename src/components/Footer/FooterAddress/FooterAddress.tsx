import React, { useState, useEffect } from "react";
import styles from "./FooterAddress.module.css";
import { footerAddress as staticAddress } from "../../../data/footer";
import { api } from "../../../api/baseApi";
import type { FooterAddressData } from "../../../api/types";

export const FooterAddress: React.FC = () => {
  const [addressData, setAddressData] = useState<FooterAddressData>(staticAddress);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const data = await api.getFooterAddress();
        if (data) {
          setAddressData(data);
        }
      } catch (error) {
        console.error("Failed to fetch footer address:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  if (loading && !addressData) return null;

  return (
    <div className={styles.address}>
      <h4 className={styles.title}>{addressData.title}</h4>

      {addressData.description.map((address, index) => (
        <p key={index} className={styles.text}>
          {address}
        </p>
      ))}
      
    </div>
  );
};