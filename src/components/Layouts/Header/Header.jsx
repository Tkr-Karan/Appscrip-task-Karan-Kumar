import React from "react";
import NavHeader from "../../Organisms/NavHeader/NavHeader";
import NavBar from "../../Organisms/NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <NavHeader />
      <NavBar />
    </div>
  );
};

export default Header;
