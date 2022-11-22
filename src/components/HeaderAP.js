import React from "react";
import "../style.css";
import Logo from "../images/LOGO.svg";
import { Link } from "react-router-dom";

function HeaderAP() {
  return (
    <header className="header">
      <div className="nav">
        <ul id="navUl">
          <li className="li">
            <Link to={"/"}>Accueil</Link>
          </li>
          <li id="locationAP" className="li">
            <Link to={"/apropos"}>A propos</Link>
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

export default HeaderAP;
