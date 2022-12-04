import React from "react";
/*
import "../style.css";
*/
import Data from "../data/logements.json";
import { useParams } from "react-router-dom";

import Collapse from "./Collapse";

function Content() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const ficheLogement = Data.find(logement => logement.id === id.id);

  /* Équipements */
  const equipements = ficheLogement.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <section className="content">
      <div className="c-element">
        <Collapse titre="Description">{ficheLogement.description}</Collapse>
      </div>

      <div className="c-element">
        <Collapse titre="Équipements">{<ul>{equipements}</ul>}</Collapse>
      </div>
    </section>
  );
}

export default Content;
