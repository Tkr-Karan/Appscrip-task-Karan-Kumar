import React from "react";
import AppScripLogo from "../../../Assets/Logo.svg";
import styles from "./NavHeader.module.css";
import MagnifyGlassIcon from "../../../Assets/magnifyGlass.svg";
import DefaultHeartIcon from "../../../Assets/defaultheart.svg";
import BucketIcon from "../../../Assets/bucket.svg";
import ProfileIcon from "../../../Assets/profile.svg";
import HamburgerIcon from "../../../Assets/hamburger.svg";

const NavHeader = () => {
  const navCtaIcons = [
    { ctaName: "magnifiy glass", ctaImageUrl: MagnifyGlassIcon },
    { ctaName: "like item", ctaImageUrl: DefaultHeartIcon },
    { ctaName: "bucket list", ctaImageUrl: BucketIcon },
    { ctaName: "profile image", ctaImageUrl: ProfileIcon },
  ];

  return (
    <div className={styles["nav__header-container"]}>
      <div className={styles["nav__header-logo-icons"]}>
        <img
          src={HamburgerIcon}
          alt="menu"
          className={styles["hamburger-icon-mobile"]}
        />

        <img src={AppScripLogo} alt="logo" />
      </div>

      <div className={styles["nav__header-logo-title"]}>LOGO</div>

      <div className={styles["nav_header-cta-icons"]}>
        {navCtaIcons.map((icon, index) => (
          <div key={index} className={styles["nav__cta-icons"]}>
            <img src={icon.ctaImageUrl} alt={icon.ctaName} />
          </div>
        ))}
        <div className={styles["nav__language"]}>
          ENG <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
