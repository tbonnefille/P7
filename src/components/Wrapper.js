import React from "react";
import "../style.css";
import Rater from "./Rater";
import Data from "../data/logements.json";

import { useParams } from "react-router-dom";

function Wrapper() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const ficheLogement = Data.find(logement => logement.id === id.id);

  /* Tags */
  const tagsLogement = ficheLogement.tags.map((tags, index) => {
    return (
      <div className="tag" key={index}>
        {" "}
        {tags}
      </div>
    );
  });

  return (
    <section id="wrapper">
      <div id="title-tag">
        <div>
          <h1>{ficheLogement.title}</h1>
          <p>{ficheLogement.location}</p>
        </div>

        <div id="tag-wrap">{tagsLogement}</div>
      </div>

      <div id="host-rating">
        <div id="host">
          <div id="name">{ficheLogement.host.name}</div>
          <div id="circle">
            <img
              className="imgPortrait"
              src={ficheLogement.host.picture}
              alt="portrait"
            />
          </div>
        </div>

        <div id="rating">
          <Rater rating={ficheLogement.rating} />
        </div>
      </div>
    </section>
  );
}

export default Wrapper;
