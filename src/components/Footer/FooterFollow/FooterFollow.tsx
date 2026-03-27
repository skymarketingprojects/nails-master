import React, { useState, useEffect } from "react";
import styles from "./FooterFollow.module.css";
import { footerFollow as staticFollow } from "../../../data/footer";
import type { SocialMedia } from "../../../api/types";
import type { SocialPlatform } from "../../../data/footer";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { api } from "../../../api/baseApi";

const iconMap: Record<SocialPlatform, React.ReactNode> = {
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  twitter: <FaTwitter />,
};

export const FooterFollow: React.FC = () => {
  const [followItems, setFollowItems] = useState<SocialMedia[]>(staticFollow);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const data = await api.getSocialMedia();
        if (data && data.length > 0) {
          setFollowItems(data);
        }
      } catch (error) {
        console.error("Failed to fetch social media links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  if (loading && followItems.length === 0) return null;

  return (
    <div className={styles.follow}>
      <h4 className={styles.title}>FOLLOW</h4>
      <div className={styles.icons}>
        {followItems.map((item) => (
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