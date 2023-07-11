import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <div className="blur join-blur-1"></div>
        <div className="blur join-blur-2"></div>
        <hr />
        <div>
          <span>jesteś</span>
          <span className="stroke-text"> ciekawy </span>
          <span>
            naszej oferty <span className="stroke-text">?</span>
          </span>
        </div>
        <div>
          <span>
            {" "}
            <span className="stroke-text">sprawdź</span> nasz
          </span>
          <span>
            {" "}
            <a
              href="https://allegro.pl/uzytkownik/ShareOutlet?fbclid=IwAR2pFzbQsHKsi6XnfbGSskmu1qC-UIMMpeQXGpKBpElj-fK__jaHiT57NeM&order=n&strategy=NO_FALLBACK"
              target="_blank"
            >
              sklep internetowy
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Join;
