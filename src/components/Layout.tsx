import React, { useState } from "react";
import { Link, withPrefix } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./Nav";
import StyledHeader from "./Header";
import axios from "axios";

interface Props {
  location: Record<string, string>;
  title: string;
  children: React.ReactNode;
}

interface SpookSetting {
  x: number;
  y: number;
  url: string;
};

interface GiphyResponse {
  data: { images: { original: { url: string } } };
}

// Spooky global! :o
var spookTimer: number;

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
        <img src={setting.url} />
        <div style={{
            position: "absolute",
            left: 10,
            bottom: 40
          }}>
            Powered by Giphy
          </div>
      </div>
    );
  };

  const clickEvent = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!Math.floor(Math.random() * 5)) {
      event.persist();
      const gif = await axios.get<GiphyResponse>(
        `https://api.giphy.com/v1/gifs/random?tag=skeleton&api_key=${"Vbv8aoOCaGFKohQSoW0jIjrCN9yvbzsz"}`,
      );
      setSpooks({ x: event.clientX, y: event.clientY, url: gif.data.data.images.original.url});
      clearTimeout(spookTimer);
      spookTimer = setTimeout(setSpooks, 2000, null);
    }
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
