import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoMarca from "../../assets/logo-marca-dawp.png"

import {ContainerHeader,ContainerMobile} from "./styled"


const Header = ()=>{


const [open, setOpen] = useState(false);



    return(
        <ContainerHeader mobile={open}>
            <picture>
                <img src={LogoMarca} alt={"logo-marca-da-dawp"}/>
            </picture>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                    <Link to={"/empresa"}>Sobre Nós</Link>
                    </li>
                    <li>
                    <Link to={"/solucao"}>Nossas Soluções</Link>
                    </li>
                    <li>
                    <Link to={"/blog"}>Blog</Link>
                    </li>
                    
                        <div>
                            <li><Link to={"/fale-conosco"}>Fale Conosco</Link></li>
                            <li><Link to={"/consultoria-gratis"}>Consultoria Grátis</Link>
                            </li>
                        </div>
                    
                </ul>
            </nav>
            <ContainerMobile  >
                <img src={""} alt="X" onClick={()=>{setOpen(!open)}} />
            </ContainerMobile>

        </ContainerHeader>
    );
}

export default Header