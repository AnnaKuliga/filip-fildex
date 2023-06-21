import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="left-c">LEFT IMG</div>
      <div className="right-c">
        <div>
          <h6>Zainteresowany?</h6>
          <h4>Skontaktuj się z nami</h4>
          <div class="icons">
            <span>
              <a href="" title="Zadzwoń">
                <i class="fa-solid fa-phone-volume fa-beat-fade info__icon"></i>
                +48 514 927 892
              </a>
            </span>
            <span>
              <a href="mailto:fildex@wp.pl" title="Napisz do nas">
                <i class="fa-solid fa-paper-plane fa-beat-fade info__icon"></i>
                fildex@wp.pl
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
