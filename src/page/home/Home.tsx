import React from "react";
import {ContainerHome} from "./styled"
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Services from "../../components/services/Services";


const Home = ()=>{

    return(
        <ContainerHome>
            <Banner/>
            <About/>
            <Services/>
        </ContainerHome>
    )
}

export default Home