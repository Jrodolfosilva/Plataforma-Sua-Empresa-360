import React from "react";
import {ContainerBanner} from "./styled"

const Banner = ()=>{
    return(
        <ContainerBanner>
           <div>

            <h1>
                <span>Soluções </span>
                 personalizadas para <span>impulsinar</span>
                 o seu <span>négocio</span> no mundo <span>Digital.</span>
            </h1>
            <h3>
                Investir em serviços especializados para impulsionar negócio digital é fundamental. Ajuda a aumentar visibilidade e alcance, garantir funcionalidade e eficiência dos sistemas, e fornecer insights valiosos para estratégias de sucesso online.
    </h3>
            <div>
                <button>Conhecer Soluções</button>
                <button>Impulsinar meu Negócio</button>
            </div>
           </div>

        </ContainerBanner>
    )
}

export default Banner