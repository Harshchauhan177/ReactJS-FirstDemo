import React from "react";
import footerStyles from "../../assets/css/Footer.module.css";
function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.footerLinks}>
        <li>
          <a href="/">Privacy police</a>
        </li>
        <li>
          <a href="/">Terms of service</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
