import React from "react";
import style from "./FooterLink.module.css";
import MettaMuse from "../MettaMuse/MettaMuse";
import QuickLink from "../QuickLink/QuickLink";
import FollowUs from "../FollowUs/FollowUs";

const FooterLink = () => {
  return (
    <div className={style["footer__link-meta-container"]}>
      <div className={style["footer__link-meta-and-quick"]}>
        <MettaMuse />
        <QuickLink />
      </div>
      <FollowUs />
    </div>
  );
};

export default FooterLink;
