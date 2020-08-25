import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #69B6DB;
    color: #000;
    -webkit-font-smoothing: antialiased;

    --color-label: #6B6B6B;
  }

  body, input, button {
    font-family: 'Bitter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
