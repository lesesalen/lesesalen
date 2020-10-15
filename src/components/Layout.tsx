import React, { useState } from "react";
import { Link, withPrefix } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./Nav";
import StyledHeader from "./Header";

interface Props {
  location: Record<string, string>;
  title: string;
  children: React.ReactNode;
}

interface SpookSetting {
  x: number;
  y: number;
};

const Layout: React.FC<Props> = ({ location, title, children }) => {
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
  
  let [spook, setSpooks] = useState<SpookSetting | null>(null);

  const renderSpook = (setting: SpookSetting) => {
    return (
      <div style={{
        position: "fixed",
        left: setting.x,
        top: setting.y,
        zIndex: 10
      }}>
        Spook!
      </div>
    );
  };

  const clickEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSpooks({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      onClick={clickEvent}
    >
      <header>{header}</header>
      <Nav />
      <main>{spook && renderSpook(spook)}{children}</main>
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
