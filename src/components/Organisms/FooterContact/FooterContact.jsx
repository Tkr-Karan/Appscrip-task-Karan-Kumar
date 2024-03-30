import React from "react";
import ContactForm from "../../Atoms/ContactForm/ContactForm.jsx";
import ContactUs from "../../Atoms/ContactUs/ContactUs.jsx";
import styles from './FooterContact.module.css';

const FooterContact = () => {
  return (
    <div className={styles['footer__contact-container']}>
      <ContactForm />
      <ContactUs />
    </div>
  );
};

export default FooterContact;
