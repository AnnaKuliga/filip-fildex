import React from "react";
import "./Contact.css";
import contact from "../images/contact.png";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="left-c">
        <div>
          <h6>Zainteresowany?</h6>
          <h4>Skontaktuj się z nami</h4>
          <div className="icons">
            <span>
              <a href="" title="Zadzwoń">
                <i className="fa-solid fa-phone-volume fa-beat-fade info__icon"></i>
                +48 514 92 78 92
              </a>
            </span>
            <span>
              <a href="mailto:fildex@wp.pl" title="Napisz do nas">
                <i className="fa-solid fa-paper-plane fa-beat-fade info__icon"></i>
                fildex@wp.pl
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="right-c">
        <img src={contact} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Contact;
