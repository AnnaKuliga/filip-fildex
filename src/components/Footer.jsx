import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyright">
        <i className="fa-regular fa-copyright"></i> 2023 Coded by
        <a
          href="https://annakuliga.com"
          target="_blank"
          rel="noreferrer"
          title="Anna"
        >
          {" "}
          Anna Kuliga
        </a>
      </div>
    </div>
  );
};
export default Footer;
