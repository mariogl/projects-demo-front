import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Inter, Arial, sans-serif;
  }  

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyled;
