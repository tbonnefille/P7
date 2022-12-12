import React from "react";

import "../styles/style.css";

import Styled from "styled-components";
import background from "../images/kalen_emsley_Bkci_8qcdvQ_unsplash_2.jpg";
import backgroundS from "../images/gustavo-alves-YOXSC4zRcxw-unsplash-1.jpg";

const StyledBannerAPWrap = Styled.section`
   
margin-bottom: 4%;
margin-left: 5%;
margin-right: 5%;

`;

const StyledBannerAP = Styled.div`
   
  height: 223px;
  border-radius: 25px;
  background: url(${background});
  background-color: #B0B0B0;
    background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;

  @media all and (min-width:769px) and (max-width:992px) {

    border-radius: 15px;
    background-position: bottom bottom;

  }

  @media all and (max-width: 768px) {

    height: 223px;
    border-radius: 10px;
    background: url(${backgroundS});
    background-color: #B0B0B0;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center 90%;

  }  

`;

function BannerAP() {
  return (
    <StyledBannerAPWrap>
      <StyledBannerAP></StyledBannerAP>
    </StyledBannerAPWrap>
  );
}

export default BannerAP;
