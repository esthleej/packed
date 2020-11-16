import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5% !important;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 1.8rem;
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
  }



`;
