import React from "react";
/*
import "../style.css";
*/
import Styled from "styled-components";

import Collapse from "./Collapse";

const StyledContainer = Styled.div`
margin-left: 5%;
margin-right: 5%;
background:color: #FF6060;

@media all and (max-width: 768px) {

  margin-bottom: 25%;
}

`;

const StyledAbout = Styled.div`
display: flex;
    justify-content: center;
`;

const StyledCollapseWrap = Styled.div`
display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
`;

const StyledMiguel = Styled.div`
width: 100px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 142.6%;
    /* or 19px */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #FFFFFF;
    margin-left: 15%;
    margin-top: 10%;

    @media all and (max-width: 768px) {

      display: none;
    }
`;

function About() {
  return (
    <StyledContainer>
      <StyledAbout>
        <StyledCollapseWrap>
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
        </StyledCollapseWrap>
      </StyledAbout>

      <StyledMiguel>Miguel</StyledMiguel>
    </StyledContainer>
  );
}

export default About;
