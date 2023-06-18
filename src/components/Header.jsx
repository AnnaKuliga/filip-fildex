import React from "react";
import "./Header.css";
import Logo from "../../src/images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>o nas</li>
        <li>usługi</li>
        <li>kontakt</li>
        <li>
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
    </div>
  );
};

export default Header;
