import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        font-size: 16px;
    }
    body {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
 `;

export default GlobalStyle;
