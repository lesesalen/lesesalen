import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDetails = styled.details`
  padding: 0.5em 0.5em 0;
  outline: none;
  list-style-type: normal;
`;

const StyledSummary = styled.summary`
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
  position: sticky;
  top: 0;
  background-color: white;
  outline: none;
`;

export interface Item {
  url: string;
  title: string;
  items?: Item[];
}

function getIds(items: Item[]): string[] {
  return items.reduce<string[]>((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState(`test`);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element === null) return;
      observer.observe(element);
    });

    return () => {
      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element === null) return;
        observer.unobserve(element);
      });
    };
  }, [itemIds]);
  return activeId;
}

function renderItems(items: Item[], activeId: string) {
  return (
    <ul
      style={{
        listStyle: "none",
        marginLeft: "6px",
        paddingLeft: "6px",
        borderLeft: "1px solid lightgray",
      }}
    >
      {items.map((item) => {
        return (
          <li key={item.url}>
            <a
              href={item.url}
              style={{
                color: activeId === item.url.slice(1) ? "red" : "black",
              }}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  items: Item[];
}

function TableOfContents({ items }: Props): JSX.Element {
  const idList = getIds(items);
  const activeId = useActiveId(idList);
  return (
    <StyledDetails>
      <StyledSummary>Table of Contents</StyledSummary>
      {renderItems(items, activeId)}
    </StyledDetails>
  );
}

export default TableOfContents;
