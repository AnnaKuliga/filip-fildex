import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_img from "../../src/images/header img.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best">
          <div></div>
          <span>Najlepsi fachowcy w okolicy</span>
        </div>
        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Witamy!</span>
          </div>
          <div>
            <span>Firma usługowo - handlowa</span>
          </div>
          <div>
            <span>
              Zajmujemy się szeroką gamą usług. Jesteśmy pewni, że znajdziesz tu
              coś dla siebie!
            </span>
          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span>+500</span>
            <span>Zadowolonych klientów</span>
          </div>

          <div>
            <span>+200</span>
            <span>Ukończonych projektów</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <buttons className="btn">Dowiedź się więcej</buttons>
          <buttons className="btn">Skontaktuj się z nami</buttons>
        </div>
      </div>
      <div className="right-h">
        <div className="contact-info">
          <div className="tel">
            <span>Zadźwoń: </span>
            <span>
              <a href="tel:514 92 78 92">+48 514 92 78 92</a>
            </span>
          </div>
          <div className="mail">
            <span>Napisz: </span>
            <span>
              <a href="mailto:fildex@wp.pl" title="Napisz do nas">
                fildex@wp.pl
              </a>
            </span>
          </div>
        </div>
        {/*hero image*/}
        <img src={hero_img} alt="handyman" className="hero-img" />
      </div>
    </div>
  );
};
export default Hero;
