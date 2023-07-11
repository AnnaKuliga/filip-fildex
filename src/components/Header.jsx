import React, { useState } from "react";
import "./Header.css";
import Logo from "../../src/images/logo.png";
import bars from "../../src/images/bars.png";
import { Link } from "react-scroll";
import { color } from "framer-motion";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="services"
              span={true}
              smooth={true}
            >
              usługi
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="info"
              span={true}
              smooth={true}
            >
              o nas
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              span={true}
              smooth={true}
            >
              kontakt
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a
              class="nav-link"
              aria-current="page"
              href="https://allegro.pl/uzytkownik/ShareOutlet?strategy=NO_FALLBACK&fbclid=IwAR2pFzbQsHKsi6XnfbGSskmu1qC-UIMMpeQXGpKBpElj-fK__jaHiT57NeM&order=n"
              target="_blank"
              title="Allegro Sklep"
            >
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              <a
                class="nav-link"
                aria-current="page"
                href="#header-bgd"
                title="Strona Główna"
                style={{ color: "#ffff" }}
              >
                <i class="fa-solid fa-house"></i>
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
