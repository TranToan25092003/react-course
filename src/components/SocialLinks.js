import React from "react";
import { socialLink } from "../data";

const SocialLinks = ({ className, classCss }) => {
  return (
    <>
      <ul className={className}>
        {socialLink.map((item) => {
          const { id, href, icon } = item;

          return (
            <>
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={classCss}
                >
                  <i className={icon}></i>
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default SocialLinks;
