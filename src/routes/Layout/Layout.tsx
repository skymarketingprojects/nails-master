import React from "react";
import styles from "./Layout.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { TextStrip } from "../../components/TextStrip/TextStrip";
import { Footer } from "../../components/Footer/Footer";
import { FloatingWhatsappButton } from "../../components/FloatingWhatsappButton/FloatingWhatsappButton";
interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <TextStrip />
      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />

      <FloatingWhatsappButton phoneNumber="1234567890" />
    </div>
  );
};
