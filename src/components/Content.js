import React from "react";
import "../style.css";

import Datas from "../data/logements.json";
import { useParams } from "react-router-dom";

import Collapse from "./collapse";

function Content() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const ficheLogement = Datas.find(logement => logement.id === id.id);

  /* Équipements */
  const equipementsLogement = ficheLogement.equipments.map(
    (equipment, index) => {
      return <li key={index}>{equipment}</li>;
    }
  );

  return (
    <section className="Content">
      <div className="c-element">
        <Collapse titre="Description" texte={ficheLogement.description} />
      </div>

      <div className="c-element">
        <Collapse titre="Équipements" texte={<ul>{equipementsLogement}</ul>} />
      </div>
    </section>
  );
}

export default Content;
