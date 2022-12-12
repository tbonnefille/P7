import React from "react";

import "../styles/style.css";

import background from "../images/IMG.jpg";
import backgroundS from "../images/IMGs.jpg";

import Styled from "styled-components";


const StyledBannerBox = Styled.section`
margin-bottom: 4%;
margin-left: 5%;
margin-right: 5%;

@media (max-width: 768px) {
  margin-bottom: 0%;
}

`;

const StyledBanner = Styled.div`
height: 223px;
border-radius: 25px;
display: flex;
align-items: center;
justify-content: center;
color: white;
background: url(${background});
background-color: #B0B0B0;
background-blend-mode: multiply;
background-size: cover;
background-position: center center;

  @media all and (min-width:769px) and (max-width:992px) {

    height: 167px;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    height: 111px;
    border-radius: 10px;
    background: url(${backgroundS});
    background-color: #B0B0B0;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: top top;
  }
`;

const StyledBannerText = Styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
   
  @media all and (min-width:769px) and (max-width:992px) {
  font-size: 36px;
  padding-left: 5%;
  padding-right: 5%;
}

  @media (max-width: 768px) {
    font-size: 24px;
  line-height: 100%;
  padding-left: 5%;
  padding-right: 5%;
      
  }
`;

function Banner() {
  return (
    <StyledBannerBox>
      <StyledBanner>
        <StyledBannerText>Chez vous, partout et ailleurs</StyledBannerText>
      </StyledBanner>
    </StyledBannerBox>
  );
}

export default Banner;
