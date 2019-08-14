import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

// import './spectre.scss';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  #root {
    font-family: 'Lato', Helvetica, sans-serif;
    button::-moz-focus-inner {
      border: 0;
    }
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
