import React from "react";
import styled from "styled-components";
import { rhythm, scale } from "../utils/typography";
import { Link } from "gatsby";
import Logo from "../../content/assets/lesesalen-header.svg";

const getWeekNumber = () => {
  const now = new Date();
  const januaryFirst = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(
    ((now.valueOf() - januaryFirst.valueOf()) / 86400000 +
      januaryFirst.getDay() +
      1) /
      7
  );
};

const Clock: React.FC = () => {
  let date = new Date();

  return <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>;
};

const Week: React.FC = () => {
  const week = getWeekNumber();

  return <span>week {week}</span>;
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

export default function StyledHeader() {
  return (
    <StyledDiv>
      <h1
        style={{
          ...scale(1.3),
          marginBottom: rhythm(0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          <Logo />
        </Link>
      </h1>
      <>
        <p style={{ bottom: 0 }}>
          <Clock />
          &nbsp;-&nbsp;
          <Week />
        </p>
      </>
    </StyledDiv>
  );
}
