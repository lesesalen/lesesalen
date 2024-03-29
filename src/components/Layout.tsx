import React, { useState } from "react";
import { Link, withPrefix } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./Nav";
import StyledHeader from "./Header";
import { Theme } from "../theme/theme";
import axios from "axios";

interface Props {
  location: Record<string, string>;
  title: string;
  children: React.ReactNode;
}

// Only enable spooktober features in october
const isSpooktober = new Date().getMonth() === 9;

interface SpookSetting {
  x: number;
  y: number;
  url: string;
}

interface GiphyResponse {
  data: { images: { original: { url: string } } };
}

// Spooky global! :o
let spookTimer: number;

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

  const [spook, setSpooks] = useState<SpookSetting | null>(null);

  const renderSpook = isSpooktober
    ? (setting: SpookSetting) => {
        return (
          <div
            style={{
              position: "fixed",
              left: setting.x,
              top: setting.y,
              zIndex: 10,
            }}
          >
            <img src={setting.url} alt="A spooky ghost" />
            <div
              style={{
                position: "absolute",
                left: 10,
                bottom: 40,
              }}
            >
              Powered by Giphy
            </div>
          </div>
        );
      }
    : undefined;

  const spookEvent = isSpooktober
    ? async (x: number, y: number) => {
        if (!process.env.GATSBY_GIPHY_KEY) {
          console.log("Missing GATSBY_GIPHY_KEY environment variable");
          return;
        }
        if (!Math.floor(Math.random() * 5)) {
          const gif = await axios.get<GiphyResponse>(
            `https://api.giphy.com/v1/gifs/random?tag=skeleton&api_key=${String(
              process.env.GATSBY_GIPHY_KEY
            )}`
          );
          setSpooks({
            x: x,
            y: y,
            url: gif.data.data.images.original.url,
          });
          clearTimeout(spookTimer);
          spookTimer = setTimeout(setSpooks, 2000, null);
        }
      }
    : undefined;

  return (
    <Theme>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
        role="button"
        {...(isSpooktober
          ? {
              tabIndex: 0,
              onMouseDown: async (e) => {
                e.persist();
                await spookEvent?.(e.clientX, e.clientY);
              },
              onKeyDown: async () => {
                const rects = document.activeElement?.getBoundingClientRect();
                await spookEvent?.(rects?.top ?? 0, rects?.left ?? 0);
              },
            }
          : {})}
      >
        <header>{header}</header>
        <Nav />
        <main>
          {isSpooktober && spook && renderSpook?.(spook)}
          {children}
        </main>
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
