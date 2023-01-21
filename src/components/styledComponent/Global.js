import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300&display=swap');

    body{
        background : #151515;
        margin: 0;
        padding: 0 8em;
        font-family: 'Sofia Sans', sans-serif;
    }
    
    h1{
        color: white;
    }`;

export default GlobalStyles;
