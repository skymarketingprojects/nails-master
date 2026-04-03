import React from "react";
import styles from "./ContactFormSection.module.css";

export const ContactFormSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Book Your<br />Appointment</h2>
        </div>
        <div className={styles.rightColumn}>
          <form className={styles.form}>
            <input type="text" placeholder="Name" className={styles.input} required />
            <input type="email" placeholder="Email" className={styles.input} required />
            <input type="tel" placeholder="Phone" className={styles.input} required />
            <textarea placeholder="Message" className={styles.textarea} rows={4}></textarea>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
