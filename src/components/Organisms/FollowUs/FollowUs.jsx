import React from "react";
import LinkedInIcon from "../../../Assets/Linkedin.svg";
import InstaIcon from "../../../Assets/Insta.svg";
import styles from "./FollowUs.module.css";
import GpayIcon from "../../../Assets/gpay.svg";
import MasterCardIcon from "../../../Assets/mastercard.svg";
import PayPalIcon from "../../../Assets/paypal.svg";
import AmexIcon from "../../../Assets/amex.svg";
import ApplePayIcon from "../../../Assets/applepay.svg";
import OpayIcon from "../../../Assets/opay.svg";

const FollowUs = () => {
  const socialLinks = [
    { socialName: "LinkedIn", socialImageUrl: LinkedInIcon },
    { socialName: "Insta", socialImageUrl: InstaIcon },
  ];

  const paymentLinks = [
    { paymentGatewayName: "Gpay", paymentGatewayImageUrl: GpayIcon },
    {
      paymentGatewayName: "Master Card",
      paymentGatewayImageUrl: MasterCardIcon,
    },
    { paymentGatewayName: "Paypal", paymentGatewayImageUrl: PayPalIcon },
    { paymentGatewayName: "Amex", paymentGatewayImageUrl: AmexIcon },
    { paymentGatewayName: "Applepay", paymentGatewayImageUrl: ApplePayIcon },
    { paymentGatewayName: "Opay", paymentGatewayImageUrl: OpayIcon },
  ];

  return (
    <div className={styles["follow__us-container"]}>
      <h3>Follow Us</h3>

      <div className={styles["follow__us-social-icon"]}>
        {socialLinks.map((icon, index) => (
          <div className={styles["follow__us-icon"]} key={index}>
            <img src={icon.socialImageUrl} alt={icon.socialName} />
          </div>
        ))}
      </div>

      <h3 className={styles["follow__us-metta-accept"]}>mettā muse Accepts</h3>
      <div className={styles["follow__us-payments-gateway"]}>
        {paymentLinks.map((payment, index) => (
          <div className={styles["follow__us-payment"]} key={index}>
            <img
              src={payment.paymentGatewayImageUrl}
              alt={payment.paymentGatewayName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
