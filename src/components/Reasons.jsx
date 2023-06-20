import React from "react";
import "./Reasons.css";
import agd from "../../src/images/agd.jpg";
import meble from "../../src/images/meble.jpg";
import rower from "../../src/images/rower.jpg";
import gniazdko from "../../src/images/gniazdko.jpg";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={agd} alt="" />
        <img src={rower} alt="" />
        <img src={meble} alt="" />
        <img src={gniazdko} alt="" />
      </div>
      <div className="right-r">
        <div>
          <span>
            Dlaczego <span className="stroke-text">FILDEX</span> ?
          </span>
        </div>
        <div className="details">
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Kompleksowe i profesjonalne doradztwo</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>
              Jesteśmy elastyczni i dopasowujemy się do indywidualnych potrzeb
              klienta
            </span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Zajmiemy się poszukiwaniem odpowiednich rozwiązań</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Nie musisz szukać poszczególnych wykonawców</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Nie tracisz czasu</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Wszystko fachowo i na czas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
