import React from "react";
import "./Info.css";
import map from "../images/map.png";

const Info = () => {
  return (
    <div className="Info" id="info">
      <div className="left-i">
        <img src={map} alt="" srcset="" className="info-map" />
      </div>
      <div className="right-i">
        <div>
          <span>
            O firmie <span className="stroke-text">FILDEX</span>
          </span>
        </div>

        <p className="description">
          Firma FILDEX została założona w 2021r. i działa w województwie
          podkarpackim. Wyróżniamy się szeroką gamą usług montażowych,
          serwisowych oraz naprawczych. Nasze specjalizacje to: elektryka,
          hydraulika, montaż : okien, drzwi oraz mebli, wyposażenie, serwis
          AGD/RTV, serwis rowerowy. <br />
          <br />
          W roku 2022 działalność została rozszerzona o sklep internetowy, na
          którym można znaleźć wiele ciekawych ofert.
          <br />
          <br />
          Nasza firma działa na obszarze całego województwa podkarpackiego.
          Głównie w miejscowościach: gm. Korczyna, Krosno, Sanok, Jasło,
          Rzeszów.
        </p>
      </div>
    </div>
  );
};

export default Info;
