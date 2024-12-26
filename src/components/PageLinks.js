import React from "react";
import { pageLink } from "../data";

const PageLinks = ({ className, classCss }) => {
  return (
    <>
      <ul className={className} id={className}>
        {pageLink.map((item) => {
          return (
            <>
              <li key={item.id}>
                <a href={item.link} rel="noreferrer" className={classCss}>
                  {item.title}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default PageLinks;
