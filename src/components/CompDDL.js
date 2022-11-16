import React from "react";
import "../style.css";
import Vector from "../images/Vector.png";
import ArrowBack from "../images/arrow_back_ios-24px 2.png";

function CompDDL() {
  return (
    <div id="compDDL">
      <div className="dropdownlarge-close">
        <div className="dropdownlarge-close-shape">
          <p>Fiabilité</p>
          <img src={ArrowBack} alt="" />
        </div>
      </div>

      <div class="dropdownlarge">
        <div className="dropdownlarge-close-shape">
          <p>Respect</p>
          <img src={Vector} alt="" />
        </div>
        <div className="ddp">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompDDL;
