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
        font-family: 'KOTRAHOPE', 'NotoSansCJK', -apple-system, sans-serif;
        overflow: hidden;
        -ms-overflow-style: none; 
        letter-spacing: 0.8px;
    } 
    p, h1, h2, h3, h4, h5, h6, span {
      color: #333;
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
    }
`;

export default GlobalStyles;
