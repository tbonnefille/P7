import React from "react";

import "../styles/style.css";
import Data from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import Content from "../components/Content";
import Rater from "./Rater";
import { useParams } from "react-router-dom";
import Styled from "styled-components";

const StyledWrapper = Styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-left: 5%;
margin-right: 5%;
color: #FF6060;

  @media (max-width: 768px) {
        
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  color: #FF6060;
  flex-wrap: wrap;
  }
`;

const StyledTitleTag = Styled.div`
width: 75%;

  @media (max-width: 768px) {
    width: 100%;     
  }
`;

const StyledTagWrap = Styled.div`
display: flex;
flex-direction: row;
text-align: center;
width: 100%;
`;

const StyledTag = Styled.div`
background: #FF6060;
border-radius: 10px;
height: 25px;
color: #FFFFFF;
font-size: 14px;
margin-right: 1%;
display: flex;
align-items: center;
justify-content: center;
padding-left: 3%;
padding-right: 3%;
`;

const StyledHostRating = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-end;
width: 25%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    margin-top: 2%;  
  }
`;

const StyledHost = Styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: flex-end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;     
  }
`;

const StyledName = Styled.div`
padding-right: 2%;
`;

const StyledCircle = Styled.div`
background-color: #C4C4C4;
border-radius: 50%;
height: 64px;
width: 64px;

  @media (max-width: 768px) {
    background-color: #C4C4C4;
    border-radius: 50%;
    height: 32px;
    width: 32px;      
  }
`;

const StyledPortrait = Styled.img`
border-radius: 50%;
object-fit: cover;
height: 64px;
width: 64px;
}

  @media (max-width: 768px) {
    border-radius: 50%;
    object-fit: cover;
    height: 32px;
    width: 32px; 
  }
`;

function Wrapper() {

  /* Récupère la bonne fiche */
  const id = useParams();
  const ficheLogement = Data.find(logement => logement.id === id.id);

  if (ficheLogement === undefined) {
    window.location.replace("/Err404");

  } else {

    /* Tags */
    const tagsLogement = ficheLogement.tags.map((tags, index) => {
      return <StyledTag key={index}> {tags}</StyledTag>;
    });

    return (
      <div>
        <Carrousel ficheLogement={ficheLogement} />

        <StyledWrapper>
          <StyledTitleTag>
            <div>
              <h1>{ficheLogement.title}</h1>
              <p>{ficheLogement.location}</p>
            </div>

            <StyledTagWrap>{tagsLogement}</StyledTagWrap>
          </StyledTitleTag>

          <StyledHostRating>
            <StyledHost>
              <StyledName>{ficheLogement.host.name}</StyledName>
              <StyledCircle>
                <StyledPortrait
                  src={ficheLogement.host.picture}
                  alt="portrait"
                />
              </StyledCircle>
            </StyledHost>

            <Rater rating={ficheLogement.rating} />
          </StyledHostRating>
        </StyledWrapper>

        <Content ficheLogement={ficheLogement} />
      </div>
    );
  }
}

export default Wrapper;
