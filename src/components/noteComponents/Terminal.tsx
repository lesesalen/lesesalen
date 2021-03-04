import React from "react";
import styled from "styled-components";

const TerminalWindow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  background-color: #2e2e2e;
  border: 2px solid gray;
`;

const TerminalHeader = styled.div`
  width: 100%;
  height: 28px;
  background: rgb(6, 0, 99);
  background: linear-gradient(
    90deg,
    rgba(6, 0, 99, 1) 0%,
    rgba(14, 14, 193, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const TerminalTitleText = styled.p`
  color: white;
  padding-left: 12px;
`;

const TerminalHeaderMenu = styled.div``;

const TerminalText = styled.p`
  margin: 12px;
  margin-bottom: 0px;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
  color: white;
`;

const BlinkingText = styled.p`
  -webkit-animation: blink 1.5s linear infinite;
  -moz-animation: blink 1.2s linear infinite;
  -ms-animation: blink 1.2s linear infinite;
  -o-animation: blink 1.2s linear infinite;
  animation: blink 1.2s linear infinite;
  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @-ms-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @-o-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    50.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledBottomText = styled.p`
  display: flex;
  font-family: "Courier New", Courier, monospace;
  font-size: 12px;
  color: #0cb80c;
  height: 28px;
`;

type TerminalProps = {
  title?: string;
  runline?: string;
  children: string;
};

export default function Terminal({
  title,
  runline,
  children,
}: TerminalProps): JSX.Element {
  return (
    <TerminalWindow>
      <TerminalHeader>
        <TerminalTitleText>{title ? title : "Terminal"}</TerminalTitleText>
      </TerminalHeader>
      <TerminalText>
        {children}
        <StyledBottomText>
          <p style={{ marginBottom: "0px", color: "red" }}>lesesalen</p>
          <p style={{ marginBottom: "0px", color: "white" }}>
            @{navigator ? navigator.userAgent.split("/")[0] : ""}{" "}
          </p>
          <p>&nbsp;~</p>
          {window.location.href
            .replace("https://www.lesesalen.com", "")
            .replace("http://localhost:8000", "")
            .trim()}
          <p style={{ color: "white" }}>(master)</p>
          &nbsp;
          {">"}
          &nbsp;
          {runline}
          <BlinkingText>▋</BlinkingText>
        </StyledBottomText>
      </TerminalText>
    </TerminalWindow>
  );
}
