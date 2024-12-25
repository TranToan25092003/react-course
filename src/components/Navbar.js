import React from "react";
import { pageLink, socialLink } from "../data";
import logo from "../images/logo.svg";

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
          <ul className="nav-links" id="nav-links">
            {pageLink.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <a href={item.link} rel="noreferrer" className="nav-link">
                      {item.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLink.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-icon"
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
