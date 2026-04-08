import React from "react";
import styles from "./Layout.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { TextStrip } from "../../components/TextStrip/TextStrip";
import { Footer } from "../../components/Footer/Footer";
import { WhatsAppBot } from "../../components/WhatsAppBot/WhatsAppBot";
import { useContact } from "../../context/ContactContext";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({
  children,
}) => {
  const { phone } = useContact();

  return (
    <div className={styles.layout}>
      <TextStrip />
      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />

      <WhatsAppBot phoneNumber={phone} />
    </div>
  );
};

