import React from "react";
import styles from './QuickLink.module.css';

const QuickLink = () => {
  const quickLink = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  return (
    <div className={styles['quick__link-container']}>
      <h3>Quick Link</h3>

      {quickLink.map((data, index) => (
        <div className={styles["quick__link-data"]} key={index}>{data}</div>
      ))}
    </div>
  );
};

export default QuickLink;
