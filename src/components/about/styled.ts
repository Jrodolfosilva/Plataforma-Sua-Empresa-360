import styled from "styled-components";


export const ContainerAbout = styled.section`

min-height: 100vh;
padding: 10rem 4rem;
justify-content: space-between;
align-items: center;
display: flex;
background-image:var(--gradiente);

div:first-child{
    picture > img{
        width: 60rem;
    }
}

div:last-child{
    width: 50vw;
    padding-left: 5vw;
    span{
        font-weight: 600;
        color: var(--color-texto);
    }
    h2{
        color: var(--background);
        font-size: var(--font-size-h1);
        line-height: 4rem;
        margin-bottom: 2rem;
    }
    p{
        font-size: var(--font-size-p);
        margin-bottom: 1rem;
        text-align: justify;
        color: #4E506B;
    }
    button{
        margin-top: 2rem;
        padding: 1.4rem 3rem;
        border-radius: var(--radiuscta);
        font-size: var(--font-size-p);
        font-weight: 600;
        cursor: pointer;
        background-color: var(--background);
        color: var(--white-ligth);
    }
}
`