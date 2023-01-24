import styled from "styled-components";

interface Mobile{
    open:boolean
}

export const ContainerHeader = styled.div`
background-color: #fff;
border-bottom: 2px solid #3333 ;
min-height: 90px;
padding: 010px 35px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--azul-background);

nav>ul{
    display: flex;
    gap: 2rem;


    li> a{
        display: block;
        padding: 12px 16px;
        font-size: var(--font-size-small);
        font-weight: 600;
        color: var(--color-white-ligth);

    }
    div>li:nth-child(1){
            
            border:1px solid var(--color-white-ligth);
            border-radius: 20px;
           

            :hover{
                background-color: #fff;
                a{
                    text-decoration: none;
                }
            }
        }
    
    li:last-child{
        border:1px solid black;
        border-radius: 20px;
        background-color: var(--verde-destaque);

        a{
            color: var(--azul-background);
        }

        :hover{
            background-color: var(--color-white-dark);

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
            background-color:var(--azul-background);
            padding:3rem 5rem;
            gap:1rem;
            width:100vw;
            height:100vh;

            li{
                border-bottom:1px solid var(--color-white-dark);
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
                gap:2rem;
                width:100%; 
            }

        }
        
        `}
    }
}


/*Estilo Mobile 450px*/

@media (max-width:450px) {
    
nav > ul {

li{
    font-size:18px ;
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


