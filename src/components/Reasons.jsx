import React from "react";
import "./Reasons.css";
import agd from "../../src/images/agd.jpg";
import meble from "../../src/images/meble.jpg";
import rower from "../../src/images/rower.jpg";
import gniazdko from "../../src/images/gniazdko.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={agd} alt="" />
        <img src={rower} alt="" />
        <img src={meble} alt="" />
        <img src={gniazdko} alt="" />
      </div>
      <div className="right-r"></div>
    </div>
  );
};

export default Reasons;
