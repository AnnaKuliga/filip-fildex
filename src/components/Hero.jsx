import React from "react";
import "./Hero.css";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best">
          <div></div>
          <span>Najlepsi fachowcy w okolicy</span>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};
export default Hero;
