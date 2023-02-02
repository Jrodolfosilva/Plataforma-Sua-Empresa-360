import React from "react";
import {ContainerHome} from "./styled"
import Banner from "../../components/banner/Banner";


const Home = ()=>{

    return(
        <ContainerHome>
            <Banner/>
            <h1>Está é a página home, onde deve conter informações do serviço de tour virtual e CTAs para contato</h1>
        </ContainerHome>
    )
}

export default Home