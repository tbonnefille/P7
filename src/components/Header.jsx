import React from "react";
/*
import "../style.css";
*/
import Logo from "../images/LOGO.svg";
import { NavLink } from "react-router-dom";

function HeaderH() {
  let activeStyle = { color: "#FF6060", textDecoration: "underline" };

  return (
    <header className="header">
      <div className="nav">
        <ul id="navUl">
          <li className="li">
            <NavLink
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Accueil
            </NavLink>
          </li>

          <li className="li">
            <NavLink
              to={"/apropos"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              A propos
            </NavLink>
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

export default HeaderH;
