import React, { useState } from "react";
import "./Header.css";
import Logo from "../../src/images/logo.png";
import bars from "../../src/images/bars.png";
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
          <li onClick={() => setMenuOpened(false)}>usługi</li>
          <li onClick={() => setMenuOpened(false)}>o nas</li>
          <li onClick={() => setMenuOpened(false)}>kontakt</li>
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
          <li onClick={() => setMenuOpened(false)}>
            <a
              class="nav-link"
              aria-current="page"
              href="#header-bgd"
              title="Strona Główna"
            >
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
