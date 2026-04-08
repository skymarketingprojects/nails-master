import React, { useState } from "react";
import { FaWhatsapp, FaChevronDown, FaPaperPlane } from "react-icons/fa";
import styles from "./WhatsAppBot.module.css";

interface WhatsAppBotProps {
  phoneNumber: string;
}

const CHANT_QUESTIONS = [
  "I'd like to book an appointment",
  "What are your services?",
  "Can I see a price list?",
  "Where are you located?",
];

export const WhatsAppBot: React.FC<WhatsAppBotProps> = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage("");
    // We keep the window open for a bit or close it? 
    // Usually user leaves the page anyway.
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend(message);
    }
  };

  return (
    <div className={styles.botContainer}>
      {/* Bot Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>
                <FaWhatsapp />
              </div>
              <div className={styles.statusInfo}>
                <span className={styles.botName}>Nails Master Support</span>
                <span className={styles.botStatus}>Online</span>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <FaChevronDown />
            </button>
          </div>

          <div className={styles.chatBody}>
            <div className={styles.welcomeMsg}>
              Hi there! 👋<br />
              How can we help you today?
            </div>
            <div className={styles.chants}>
              {CHANT_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  className={styles.chantBtn}
                  onClick={() => handleSend(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.chatFooter}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className={styles.messageInput}
            />
            <button className={styles.sendBtn} onClick={() => handleSend(message)}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Icon */}
      <button
        className={`${styles.toggleBtn} ${isOpen ? styles.hidden : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Chat"
      >
        <FaWhatsapp className={styles.whatsappIcon} />
        <span className={styles.tooltip}>Need Help?</span>
      </button>
    </div>
  );
};
