import React from "react";
import styled from "styled-components";

const StyledSmall = styled.small`
  margin-right: 5px;
  color: gray;
`;

const Tags = ({ children }) =>
  children && (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {children.split(", ").map((t) => (
        <StyledSmall key={t}>{t}</StyledSmall>
      ))}
    </ul>
  );

export default Tags;
