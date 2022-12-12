import React from "react";

import "../styles/style.css";

import Logo from "../images/LOGO.svg";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";


const StyledHeader = Styled.header`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
padding-left: 5%;
padding-right: 5%;
margin-bottom: 4%;

  @media (max-width: 768px) {
    font-size: 28px;      
  }
`;

const StyledNav = Styled.nav`
width: 30%;
display: flex;
align-items: center;
text-align: center;

  @media (max-width: 768px) {
    width: 40%;   
  }
`;

const StyledNavUl = Styled.ul`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-content: center;
width: 100%;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;

  @media all and (min-width:769px) and (max-width:992px) {
    font-size: 18px; 
  }

  @media (max-width: 768px) {
    font-size: 12px;      
  }
`;

const StyledLi = Styled.li`
&:hover {
text-decoration-line: underline;
color: #FF6060;
}
`;

const StyledLogo = Styled.div`
width: auto;
text-align: center;
padding-top: 5%;
padding-bottom: 5%;
margin-right; 5%;
`;

const StyledLogoImg = Styled.img`
max-width: 100%;
height: auto;
`;

function Header() {
  let activeStyle = { color: "#FF6060", textDecoration: "underline" };

  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavUl>
          <StyledLi>
            <NavLink
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Accueil
            </NavLink>
          </StyledLi>

          <StyledLi>
            <NavLink
              to={"/apropos"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              A propos
            </NavLink>
          </StyledLi>
        </StyledNavUl>
      </StyledNav>

      <div>
        <StyledLogo>
          <StyledLogoImg src={Logo} alt="logo" />
        </StyledLogo>
      </div>
    </StyledHeader>
  );
}

export default Header;
