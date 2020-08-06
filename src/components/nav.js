import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: -webkit-sticky;
  position: sticky;
  justify-content: space-evenly;
  top: 0px;
  width 100%;
  background-color: white;
  z-index: 10;
`

const StyledH4 = styled.h4`
  margin-top: 24px;
  margin-bottom: 24px;
`

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">
        <StyledH4>HOME</StyledH4>
      </Link>
      <Link to="/notes/">
        <StyledH4>NOTES</StyledH4>
      </Link>
      <Link to="/bedpress/">
        <StyledH4>BEDPRESS</StyledH4>
      </Link>
      <Link to="/info/">
        <StyledH4>INFO</StyledH4>
      </Link>
    </StyledNav>
  )
}
