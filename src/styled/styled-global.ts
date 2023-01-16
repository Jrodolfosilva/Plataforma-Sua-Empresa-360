import { createGlobalStyle } from "styled-components";

export const GlobalStyledSite =  createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
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

}


@media (min-width:768px) {
    html{
        font-size: 60%;
    }
}

`
