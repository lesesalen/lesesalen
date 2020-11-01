import React from "react";
import { Link, withPrefix } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./Nav";
import StyledHeader from "./Header";
import { Theme } from "../theme/theme";

interface Props {
  location: Record<string, string>;
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ location, children }) => {
  const rootPath = withPrefix("/");
  const notesPath = withPrefix("/notes/");
  const infoPath = withPrefix("/info/");
  const otherPath = withPrefix("/other/");
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
    <Theme>
      {/* TODO: Remove these once we remove the spooky ghost */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
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
    </Theme>
  );
};

export default Layout;
