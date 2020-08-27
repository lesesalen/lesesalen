import React from "react";
import styled, { css } from "styled-components";

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: #008bf8;
  color: #fff;
`;

const important = css`
  background-color: red;
  color: #fff;
`;

const newsCss = css`
  background-color: #e50003;
  color: #fff;
`;

const otherCss = css`
  background-color: #00e557;
  color: #fff;
`;

const notesCss = css`
  background-color: #161616;
  color: #fff;
`;

const tagCss = css`
  background-color: #00e557;
  color: #fff;
`;

interface Props {
  delay?: number;
  big?: boolean;
  noMargin?: boolean;
  animated?: boolean;
  primary?: boolean;
  important?: boolean;
  news?: boolean;
  other?: boolean;
  notes?: boolean;
  tags?: boolean;
}

type StyledProps = Omit<Props, "delay">;

const StyledCard = styled.div<StyledProps>`
    width: ${(props) => (props.big ? "90%" : "70%")};
    border-radius: 8px;
    padding: 15px;
    opacity: 0;
    transition: 250ms all ease-in-out;
    margin: ${(props) => (props.noMargin ? 0 : "12px")};
		box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 1);
    background-color: #F1F1F1;
    ${(props) => props.animated && animatedCss}
		${(props) => props.primary && primaryCss}
		${(props) => props.important && important}
		${(props) => props.news && newsCss}
		${(props) => props.other && otherCss}
    ${(props) => props.notes && notesCss}
    ${(props) => props.tags && tagCss}
`;

const Card: React.FC<Props> = ({
  animated = true,
  primary,
  important,
  news,
  other,
  notes,
  noMargin,
  big,
  tags,
  children,
}) => {
  return (
    <StyledCard
      animated={animated}
      primary={primary}
      important={important}
      news={news}
      other={other}
      notes={notes}
      big={big}
      noMargin={noMargin}
      tags={tags}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
