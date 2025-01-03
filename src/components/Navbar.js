import React from "react";

import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}

          <PageLinks className={"nav-links"} classCss={"nav-link"}></PageLinks>

          <SocialLinks
            className={"nav-icons"}
            classCss={"nav-icon"}
          ></SocialLinks>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
