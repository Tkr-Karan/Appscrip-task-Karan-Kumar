import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles["contact__form-container"]}>
      <div className={styles["contact__form-heading"]}>
        <h3>Be the first to know</h3>
        <p>Sign up for updates from mettā muse.</p>
      </div>

      <div className={styles["contact__form-subscription-container"]}>
        <div className={styles["contact__form-input"]}>
          <input
            className={styles["contact__input"]}
            type="email"
            placeholder="Enter your e-mail..."
          />
        </div>
        <div className={styles["contact__form-btn"]}>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
