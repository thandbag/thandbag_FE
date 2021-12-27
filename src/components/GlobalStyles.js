import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        color: #333333
        overflow: hidden;
        -ms-overflow-style: none; 
    } 
    ::-webkit-scrollbar { 
      display: none;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
      border-bottom: 1.5px solid #FF5454;
      transition: 1s;
    }
`;

export default GlobalStyles;
