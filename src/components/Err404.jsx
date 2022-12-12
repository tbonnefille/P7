import React from "react";

import "../styles/style.css";

import { Link } from "react-router-dom";
import Styled from "styled-components";


const StyledErr404 = Styled.div`
margin-left: 5%;
margin-right: 5%;
color: #FF6060;
`;

const StyledErr404Wrap = Styled.div`
color: #FF6060;
margin-bottom: 10%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;

`;

const StyledErr404Big = Styled.div`
font-style: normal;
font-weight: 700;
font-size: 288px;
line-height: 142.6%;
text-align: center;
width: 100%;
    
@media all and (min-width:769px) and (max-width:992px) {

  font-size: 192px;
  margin-top: 20%;

}

@media all and (max-width: 768px) {

  font-size: 96px;
  margin-top: 20%;
 
}
`;

const StyledErrOups = Styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
margin-bottom: 15%;
text-align: center;
width: 100%;

@media all and (min-width:769px) and (max-width:992px) {

  font-size: 24px;
  margin-bottom: 15%;
}

@media all and (max-width: 768px) {

  font-size: 18px;
  margin-bottom: 30%;
  width: 60%;
}
`;

const StyledErrLink = Styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
text-decoration-line: underline;
text-align: center;
margin-bottom: 10%;
width: 100%;

@media all and (min-width:769px) and (max-width:992px) {

  font-size: 21px;
  margin-bottom: 25%;
}

@media all and (max-width: 768px) {

  font-size: 14px;
  margin-bottom: 50%;
}
`;

function Err404page() {
  return (
    <StyledErr404>
      <StyledErr404Wrap>
        <StyledErr404Big>404</StyledErr404Big>

        <StyledErrOups>
          Oups! La page que vous demandez n'existe pas.
        </StyledErrOups>

        <StyledErrLink>
          <Link to={"/"}>Retourner sur la page d’accueil</Link>
        </StyledErrLink>
      </StyledErr404Wrap>
    </StyledErr404>
  );
}

export default Err404page;
