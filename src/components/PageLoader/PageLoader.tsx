import React from "react";
import styles from "./PageLoader.module.css";

const PageLoader: React.FC = () => {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader__spinner}></div>
    </div>
  );
};

export default PageLoader;
