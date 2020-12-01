import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap');

 
  body {
    background: #DCDCDC;
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
 
  html, body, #root {
    height: 100%
  }
  
  Link {
    cursor: pointer;
  }
`;
