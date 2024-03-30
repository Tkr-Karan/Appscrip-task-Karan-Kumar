import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navBarLinks = ["Shop", "Skills", "Stories", "About", "Contact Us"];

  return (
    <div className={styles["nav__bar-container"]}>
      {navBarLinks.map((navLink, index) => (
         <div className={styles['nav__bar-nav-links']} key={index}>{navLink.toUpperCase()}</div>
      ))}
    </div>
  );
};

export default NavBar;
