import React from "react";

import "../styles/style.css";

import FooterLogo from "../images/LOGO_footer.svg";
import Styled from "styled-components";

const StyledFooter = Styled.footer`
height: 209px;
background: #000000;
color: white;
display: flex;
align-items: center;
justify-content: center;
`;

const StyledFooterWrap = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
text-align: center;
`;

const StyledFooterLogo = Styled.div`
width: 100%;
margin-bottom: 5%;
`;

const StyledFooterText = Styled.div`
font-weight: 500;
font-size: 24px;
line-height: 34.22px;

@media (max-width: 768px) {
  font-size: 12px;
  line-height: 17.11px;
}

`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrap>
        <StyledFooterLogo>
          <img src={FooterLogo} alt="logo footer" />
        </StyledFooterLogo>
        <StyledFooterText>© 2020 Kasa. All rights reserved</StyledFooterText>
      </StyledFooterWrap>
    </StyledFooter>
  );
}

export default Footer;
