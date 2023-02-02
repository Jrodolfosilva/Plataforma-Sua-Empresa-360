import { createGlobalStyle } from "styled-components";

export const GlobalStyledSite =  createGlobalStyle`

:root{
    --destaque:#4fed56;
    --background:#0d181e;
    --title: #324858;
    --white-dark:#CFD8DE;
    --white-ligth:#CFD8DE;
    --green-ligth:#cbf1d0;
    --azul:#0C4F7D;
    --borda:#0C4F7D;
    --radiuscta:20px;
    --font-size-p:16px;
    --font-size-h1:36px;
    --font-size-h2:20px;
    --font-size-small:14px;
}



*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
}

html{
    font-size: 62.2%;
}

h1{
    font-size: 3rem;
    font-weight: 700;
}
p,span,li{
    font-weight: 500;
    line-height: 2.5rem;
    font-family: sans-serif;
    font-size: 1.6rem;
    list-style: none;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: var(--color-title);
   :hover{
        text-decoration: underline;
       
    }
}



@media (min-width:768px) {
    html{
        font-size: 60%;
    }
}

`
