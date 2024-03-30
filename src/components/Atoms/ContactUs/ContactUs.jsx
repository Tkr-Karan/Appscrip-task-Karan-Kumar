import React from "react";
import styles from "./ContactUs.module.css";
import UsFlagIcon from "../../../Assets/usFlag.svg";

const ContactUs = () => {
  return (
    <div className={styles["contact__us-container"]}>
      <div className={styles['contact__us-details']}>
        <h3>Contact Us</h3>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
      </div>
      <div>
        <h3>Currency</h3>
        <div className={styles["country__us-flag"]}>
          <div className={styles["country__flag-country-flag"]}>
            <img src={UsFlagIcon} alt="country icon" />
          </div>
          <div className={styles['diamond-box']}></div>
          USD
        </div>
        <p className={styles["footer__contact-description"]}>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
