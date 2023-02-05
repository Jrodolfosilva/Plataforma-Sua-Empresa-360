import styled from "styled-components";

interface Mobile{
    open:boolean
}

export const ContainerHeader = styled.div`
border-bottom: 2px solid var(--bord) ;
min-height: 90px;
padding: 015px 40px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--background);

width: 100%;
top: 0;
z-index: 9;
position: fixed;

picture {
    img{
        width: 170px;
    }
}

nav>ul{
    display: flex;
    gap: 1rem;


    li> a{
        display: block;
        padding: 12px 16px;
        font-size: var(--font-size-small);
        font-weight: 600;
        color: var(--white-ligth);

    }
    div{
        display: flex;
        gap:3rem;
    }
    div>li:first-child{
            
            border:1px solid var(--white-ligth);
            border-radius: var(--radiuscta);
           

            :hover{
                background-color: #2222;
                a{
                    text-decoration: none;
                }
            }
        }
    
    li:last-child{
        border:1px solid black;
        border-radius: var(--radiuscta);
        background-color: var(--destaque);

        a{
            color: var(--background);
        }

        :hover{
            background-color: var(--white-dark);

            a{
                text-decoration: none;
               
            }
        }
    }

}

/***Estilo Tablet 768px*** */

@media (max-width:768px) {


    nav{
        display: none;
        ${({mobile})=>mobile&&`
        display:block;
        position:absolute;
        top:90px;
        right:0;
        text-align:center;
        
        ul{
            flex-direction:column;
            align-items:center;
            background-color:var(--background);
            padding:3rem 5rem;
            gap:1rem;
            width:100vw;
            height:100vh;

            li{
                border-bottom:1px solid var(--white-dark);
                margin-bottom:1rem;
                padding:1rem 0rem;
                width:100%;
            }
            li>a{
                font-size:var(--font-size-h2);
            }

            div{
                display:flex;
                align-items:center;
                justify-content:center;
                gap:4rem;
                width:100%; 

                li{
                  max-width:40%
                }

            }

        }
        
        `}
    }
}


/*Estilo Mobile 450px*/

@media (max-width:450px) {
    padding:0.5rem 1rem; 
    picture {
    img{
        width: 9rem;
    }
}

    nav > ul {

    li{
        font-size:1.8rem ;
}

}



}




`




export const ContainerMobile = styled.div`
display: none;


@media (max-width:768px){
    display: block;

}


`


