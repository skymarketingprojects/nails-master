import React, { useState, useEffect } from "react";
import styles from "./textStrip.module.css";
import { api } from "../../api/baseApi";
import type { TopBar } from "../../api/types";

interface TextStripProps {
  text?: string;
}

export const TextStrip: React.FC<TextStripProps> = ({
  text: defaultText = "GET 20% OFF ON ALL SERVICES",
}) => {
  const [topBarData, setTopBarData] = useState<TopBar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopBar = async () => {
      try {
        const data = await api.getTopBar();
        setTopBarData(data);
      } catch (error) {
        console.error("Failed to fetch top bar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBar();
  }, []);

  if (loading) return null;

  const content = topBarData.length > 0 ? topBarData[0].title : defaultText;
  const link = topBarData.length > 0 ? topBarData[0].link : null;

  return (
    <div className={styles.strip} role="banner">
      {link ? (
        <a href={link} className={styles.strip__link} target="_blank" rel="noopener noreferrer">
          <p className={styles.strip__text}>{content}</p>
        </a>
      ) : (
        <p className={styles.strip__text}>{content}</p>
      )}
    </div>
  );
};

