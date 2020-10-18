import React from "react";
import styled, { css } from "styled-components";

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`;

const primaryCss = css`
  background-color: ${(props) => props.theme.colors.blue};
  color: #fff;
`;

const important = css`
  background-color: ${(props) => props.theme.colors.red};
  color: #fff;
`;

const newsCss = css`
  background-color: ${(props) => props.theme.colors.darkRed};
  color: #fff;
`;

const otherCss = css`
  background-color: ${(props) => props.theme.colors.green};
  color: #fff;
`;

const notesCss = css`
  background-color: ${(props) => props.theme.colors.gray};
  color: #fff;
`;

const tagCss = css`
  background-color: ${(props) => props.theme.colors.green};
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
  margin: 0 auto;
  margin-bottom: 12px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 1);
  background-color: ${(props) => props.theme.colors.lightGray};
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
