import React from "react";
import "../style.css";
import Vector from "../images/Vector.png";

import Datas from "../data/logements.json";

import { useParams} from 'react-router-dom';







function Content() {



/* Récupère la bonne fiche */
const id = useParams();
const ficheLogement = Datas.find(logement => logement.id === id.id);


/* Équipements */
const equipementsLogement = ficheLogement.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})






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
              {ficheLogement.description}
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
          {equipementsLogement}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
