import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  html, ::after, ::before {
    box-sizing: inherit;
  }

  html {
    background-color: #dddd;
  }
`;

export default GlobalStyles;
