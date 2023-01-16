import React from "react";
import { Link } from "react-router-dom";

import {ContainerHeader} from "./styled"


const Header = ()=>{

    return(
        <ContainerHeader>
            <picture>
                <img src={""} alt={"LOGO"}/>
            </picture>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre Nós</li>
                    <li>Tours Comercial</li>
                    <li>Tours Imóveis</li>
                    <li>Fale Conosco</li>
                    <li>WhatsApp</li>
                </ul>
            </nav>
        </ContainerHeader>
    );
}

export default Header