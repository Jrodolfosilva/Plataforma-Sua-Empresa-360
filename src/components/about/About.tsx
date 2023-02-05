import React from "react";
import {ContainerAbout} from "./styled"
import about from "../../assets/about.png"


const About = ()=>{

return(
    <ContainerAbout>
        <div>
            <picture>
                <img src={about} alt="" />
            </picture>
        </div>
        <div>
            <span>Sobre a Dawp</span>
            <h2>
                Impulsionamos o sucesso do seu negócio através de soluções digitais
            </h2>
            <p>
            Acreditamos que o sucesso de um negócio está diretamente ligado à sua presença online e à sua capacidade de se conectar e se relacionar com seus clientes. É por isso que investimos em tecnologias de ponta e equipes altamente capacitadas para fornecer soluções personalizadas e eficazes para cada um de nossos clientes.
            </p>
            <p>
            Trabalhamos com paixão e dedicação para transformar sonhos em realidade, ajudando nossos clientes a alcançar seus objetivos e a crescer ainda mais. Se você está procurando uma parceira confiável e experiente para impulsionar o sucesso do seu negócio, a DAWP é a escolha certa. Entre em contato conosco hoje mesmo para saber mais sobre como podemos ajudá-lo a alcançar o sucesso
            </p>
            <button>Falar com um Especialista</button>
        </div>


    </ContainerAbout>

);

}

export default About