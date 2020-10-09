import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
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

const StyledLink = styled.a.attrs(props => {
  href: props.href
})`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 14pt;
  font-weight: 700;
  font-family: 'Roboto Slab',sans-serif;
  text-transform: uppercase;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledLink href="/">
        Home
      </StyledLink>
      <StyledLink href="/notes/">
        Notes
      </StyledLink>
      <StyledLink href="/info/">
        Info
      </StyledLink>
      <StyledLink href="/other/">
        Other
      </StyledLink>
    </StyledNav>
  );
}
