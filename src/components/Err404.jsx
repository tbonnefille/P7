import React from "react";
/*
import "../style.css";
*/
import { Link } from "react-router-dom";

function Err404page() {
  return (
    <main>
      <div className="wrap_404-element">
        <div id="big_404">404</div>

        <div id="oups">
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        <div id="link_404">
          <p>
            {" "}
            <Link to={"/"}>Retourner sur la page d’accueil</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Err404page;
