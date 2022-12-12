import React from "react";

import "../styles/style.css";

import Styled from "styled-components";
import Collapse from "./Collapse";

const StyledContent = Styled.section`
margin-left: 5%;
margin-right: 5%;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`;

const StyledElement = Styled.div`
width: 48%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

function Content({ ficheLogement }) {
  /* Équipements */
  const equipements = ficheLogement.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <StyledContent>
      <StyledElement>
        <Collapse titre="Description">{ficheLogement.description}</Collapse>
      </StyledElement>

      <StyledElement>
        <Collapse titre="Équipements">{<ul>{equipements}</ul>}</Collapse>
      </StyledElement>
    </StyledContent>
  );
}

export default Content;
