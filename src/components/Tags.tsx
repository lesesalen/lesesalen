import React from "react";
import styled from "styled-components";

const StyledSmall = styled.small`
  margin-right: 5px;
`;

interface Props {
  tags: string;
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <ul style={{ marginBottom: 0, marginLeft: 0, display: "inline-flex" }}>
      {tags.split(", ").map((t) => (
        <StyledSmall key={t}>{t}</StyledSmall>
      ))}
    </ul>
  );
};

export default Tags;
