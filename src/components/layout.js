import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./nav";
import StyledHeader from "./header";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const notesPath = `${__PATH_PREFIX__}/notes/`;
  const infoPath = `${__PATH_PREFIX__}/info/`;
  const otherPath = `${__PATH_PREFIX__}/other/`;
  let header;

  if (
    location.pathname === rootPath ||
    location.pathname === notesPath ||
    location.pathname === otherPath ||
    location.pathname === infoPath
  ) {
    header = <StyledHeader />;
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Roboto, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Back to home
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Nav />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> |{" "}
        <Link to={"/about/"}>About</Link>
      </footer>
    </div>
  );
};

export default Layout;
