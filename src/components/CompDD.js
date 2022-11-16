import React from "react";
import "../style.css";
import Vector from "../images/Vector.png";
import ArrowBack from "../images/arrow_back_ios-24px 2.png";

function CompDD() {
  return (
    <div id="contentDDL">

        <div className="c-element">

            <div className="dropdown-open">

                <div className="dropdown">
                    <p>Équipements</p>
                    <img src={Vector} alt="" />
                </div>
                <div className="ddp">
                    <ul>
                    <li>Climatisation</li>
                    <li>Wi-Fi</li>
                    <li>Cuisine</li>
                    <li>Espace de travail</li>
                    <li>Fer à repasser</li>
                    <li>Sèche-cheveux</li>
                    <li>Cintres</li>
                    </ul>
                </div>
                    
            </div>

        </div>

      <div className="c-element">
            <div className="dropdown">
            <p>Équipements</p>
            <img src={ArrowBack} alt="" />
            </div>
      </div>

    </div>
  );
}

export default CompDD;
