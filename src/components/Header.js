import React from "react";
import "../style.css";
import Logo from "../images/LOGO.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <ul id="navUl">
          <li className="li">
            <Link to={"/"}>Accueil</Link>
          </li>
          <li className="li">
            <Link to={"/A Propos"}>A propos</Link>
          </li>
        </ul>
      </div>

      <div>
        <div id="logo">
          <img id="logo-img" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
