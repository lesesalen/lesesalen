import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  justify-content: space-evenly;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
`;

const StyledH1 = styled.h1`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 14pt;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <StyledH1>HOME</StyledH1>
      </Link>
      <Link to="/notes/">
        <StyledH1>NOTES</StyledH1>
      </Link>
      <Link to="/info/">
        <StyledH1>INFO</StyledH1>
      </Link>
      <Link to="/other/">
        <StyledH1>OTHER</StyledH1>
      </Link>
    </StyledNav>
  );
}
