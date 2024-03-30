import React from "react";
import styles from "./MettaMuse.module.css";

const MettaMuse = () => {
  const mettaMuseLink = [
    "About Us",
    "Stories",
    "Artisana",
    "Boutiques",
    "Contact Us",
    "EU Compliances Docs",
  ];

  return (
    <div className={styles["metta__muse-container"]}>
      <h3>mettā muse</h3>

      {mettaMuseLink.map((museLink, index) => (
        <div className={styles['metta__muse-data']} key={index}>{museLink}</div>
      ))}
    </div>
  );
};

export default MettaMuse;
