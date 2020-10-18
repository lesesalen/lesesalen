import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  h1 {
    font-family: Montserrat, sans-serif;
  }
  @font-face {
    font-family: "Rockwell";
    src: url("Rockwell.woff") format("woff");
  } 
`;

export default GlobalStyle;
