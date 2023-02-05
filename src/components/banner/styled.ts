import styled from "styled-components";


export const ContainerBanner = styled.section`
min-height: 100vh;
background-color: var(--background);
padding-top: 3rem;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 12rem;
    gap: 2rem;

    h1{
        font-size: var(--font-size-h1);
        line-height: 1.2;
    }
    h3{
        font-size: 2rem;
        font-weight: 400;        
    }
    span{
            font-size: var(--font-size-h1);
            font-weight: 700;
            color: var(--destaque);
        }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    button{
        margin: 3rem 1rem;
        padding: 1.3rem;
        border-radius: var(--radiuscta);
        font-size: var(--font-size-p);
        font-weight: 600;
        width: 25rem;
        cursor: pointer;
    }
}


@media (max-width:768px) {
    padding: 0rem;

    h1,span{
        font-size: 2.5rem;
    }
    h3{
        font-size: 1.4rem;
    }

    div{
        min-width: 100%;
        button:first-child{
            display: none;
        }
        button{
            font-size: 1.5rem;
            margin: 0rem;
        }
    }

}


}

@media (max-width:450px) {
    padding: 0px 1rem;
}

`