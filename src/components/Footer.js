import React from "react";
import "../style.css";
import FooterLogo from "../images/LOGO_footer.svg";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-wrap">
        <div id="logo_footer">
          <img src={FooterLogo} alt="" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
