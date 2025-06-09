import React from "react"

export const Radio = () =>{
    return (<>
            <div className="setaResp">

                <div className="fundo">
                    <div className="esq">
                        <div className="expl">Mostrar <br/>Display</div>
                        <div className="expl">Reset</div>
                    </div>
                    
                    <div className="radioRes">
                        <img src="case.svg"></img>
                    </div>
                    
                    <div className="dir">
                        <div className="expl">Nome da Rede</div>
                        <div className="expl">Endereço IP</div>
                        <div className="expl">Número de Salas</div>
                        <div className="expl">Histórico</div>
                    </div>
                </div>

                <div className="setasFlu">
                    <svg viewBox="0 0 1321 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M155 134.5L164 143.5L155 152.5V146.5H111.5L111.5 139L65 139V133L117.5 133V140.5H155V134.5Z"/>

                        <path d="M150.5 295.5L159.5 304.5L150.5 313.5V307.5H48V322H0.5V316H42V301.5H150.5V295.5Z"/>

                        <path d="M606.5 169L597.5 178L606.5 187V181H949V79H1057V6L1168 6V0H1051V73H943V175H606.5V169Z"/>

                        <path d="M542.5 185.5L533.5 194.5L542.5 203.5V197.5H1042V138H1244V132H1036V191.5H542.5V185.5Z"/>

                        <path d="M537 209L528 218L537 227V221H1009V272L1107 272V266L1016 266V215H537V209Z"/>

                        <path d="M568.5 230L559.5 239L568.5 248V242H943V408H1321V402H949V236H568.5V230Z"/>
                    </svg>
                </div>
            </div>
    </>)
}