import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>jesteś</span>
          <span className="stroke-text"> ciekawy </span>
          <span>
            naszej oferty <span className="stroke-text">?</span>
          </span>
        </div>
        <div>
          <span>sprawdź nasz</span>
          <span>
            {" "}
            <a
              href="https://allegro.pl/uzytkownik/ShareOutlet?fbclid=IwAR2pFzbQsHKsi6XnfbGSskmu1qC-UIMMpeQXGpKBpElj-fK__jaHiT57NeM&order=n&strategy=NO_FALLBACK"
              target="_blank"
              className="shop stroke-textnpm"
            >
              sklep internetowy
            </a>{" "}
          </span>
        </div>
      </div>
      <div className="right-j"></div>
    </div>
  );
};

export default Join;
