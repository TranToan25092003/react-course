import React from "react";

import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks
        classCss={"footer-link"}
        className={"footer-links"}
      ></PageLinks>

      <SocialLinks
        className={"footer-icons"}
        classCss={"footer-icon"}
      ></SocialLinks>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
