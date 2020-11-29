import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Lato', sans-serif;
        -webkit-font-smoothing : antialiased;
        -moz-osx-font-smoothing : grayscale;
        background-color : black;
        color : #333333;
        font-size : 16px;
    }
    *,h1,h2,h3,h4,h5,h6,p{
        padding : 0;
        margin : 0;
        box-sizing : border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
`;
