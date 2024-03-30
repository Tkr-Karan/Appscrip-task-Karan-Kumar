import React from "react";
import styles from "./Footer.module.css";
import FooterContact from "../../Organisms/FooterContact/FooterContact";
import FooterLink from "../../Organisms/FooterLink/FooterLink";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <FooterContact />
      <FooterLink />
      

      <div className={styles["footer-copyright"]}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
