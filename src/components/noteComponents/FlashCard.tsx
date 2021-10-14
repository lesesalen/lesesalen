import React from "react";
import styled from "styled-components";
import Show from "../../../content/assets/icons/show.svg";
import Hide from "../../../content/assets/icons/hide.svg";

const FlashCardWindow = styled.div`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  background-color: red;
  min-height: 50px;
  height: fit-content;
  border-radius: 5px;
`;

const Question = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Answer = styled.div<FlashCardProps>`
  margin: 12px;
  padding: 12px;
  overflow-wrap: break-word;
  color: white;
  background: darkred;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  padding-top: 4px;
  border-radius: 5px;
  border: 0px;
  background: transparent;
`;

type FlashCardProps = {
  question?: string;
  children: string;
};

export default function FlashCard({
  question,
  children,
}: FlashCardProps): JSX.Element {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const onClick = () => setShowAnswer(!showAnswer);
  return (
    <FlashCardWindow>
      <Question>
        <h4
          style={{
            lineHeight: "185%",
            margin: "0",
            color: "white",
          }}
        >
          {question}
        </h4>
        <StyledButton onClick={onClick}>
          {showAnswer ? <Hide /> : <Show />}
        </StyledButton>
      </Question>
      {showAnswer ? <Answer>{children}</Answer> : null}
    </FlashCardWindow>
  );
}
