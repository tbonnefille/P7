import React from "react";
import "../style.css";
import Vector from "../images/Vector.png";

function Content() {
  return (
    <section className="Content">
      <div className="c-element">
        <div className="dropdown-open">
          <div className="dropdown">
            <p>Description</p>
            <img src={Vector} alt="" />
          </div>
          <div className="ddp">
            <p>
              Vous serez à 50m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à1 station de la gare de l'est (7 minutes à pied).
            </p>
          </div>
        </div>
      </div>

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
    </section>
  );
}

export default Content;
