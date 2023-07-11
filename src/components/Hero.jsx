import React from "react";
import "./Hero.css";
import Header from "./Header";
import hero_img from "../../src/images/header img.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? "130" : "180px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
        <motion.div
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          className="contact-info"
        >
          <div className="tel">
            <span>
              <i class="fa-solid fa-phone fa-beat-fade"></i>{" "}
            </span>
            <span>
              <a href="tel:514 92 78 92">+48 514 92 78 92</a>
            </span>
          </div>
          <div className="mail">
            <span>
              <i class="fa-regular fa-envelope fa-beat-fade"></i>{" "}
            </span>
            <span>
              <a href="mailto:fildex@wp.pl" title="Napisz do nas">
                fildex@wp.pl
              </a>
            </span>
          </div>
        </motion.div>
        {/*hero image*/}
        <img src={hero_img} alt="handyman" className="hero-img" />
      </div>
    </div>
  );
};
export default Hero;
