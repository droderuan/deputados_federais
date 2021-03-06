import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }
  
  html, body, #root, .App {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f6f6f6;
    -webkit-font-smoothing: antialiased;
  }


  button {
    cursor: pointer;
  }
`;
