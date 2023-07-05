import React, { useRef } from "react";
import "./Join.css";

const Join = () => {
  const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>nadal</span>
          <span className="stroke-text"> nie jesteś </span>
          <span>pewny?</span>
        </div>
        <div>
          <span className="stroke-text">oddzwonimy</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Wpisz swój numer telefonu lub e-mail"
          />
          <button className="btn btn-j">Wyślij</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
