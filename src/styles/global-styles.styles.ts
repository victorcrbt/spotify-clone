import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${props => props.theme.color.background.default.main};
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.color.background.default.contrast};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
