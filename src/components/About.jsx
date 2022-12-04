import React from "react";
/*
import "../style.css";
*/
import Collapse from "./Collapse";

function About() {
  return (
    <main>
      <div id="about">
        <div className="collapse-wrap">
          <Collapse titre="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Collapse>

          <Collapse titre="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </Collapse>

          <Collapse titre="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </Collapse>

          <Collapse titre="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </Collapse>
        </div>
      </div>

      <div id="Miguel">
        <p>Miguel</p>
      </div>
    </main>
  );
}

export default About;
