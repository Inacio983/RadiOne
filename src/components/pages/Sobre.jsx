import React from "react"

export const Sobre = () =>{
    return (<>
        <div className="pagina">
            <div className="flx">
                <div className="pagn">
                    <h1>Sobre o RadiOne</h1>
                </div>
            </div>

            <div className="setaResp">

                <div className="esq">
                    <div className="expl">Mostrar <br/>Display</div>
                    <div className="expl">Reset</div>
                </div>
                
                <div className="radioRes">
                    <img src="heltec.svg"></img>
                </div>
                
                <div className="dir">
                    <div className="expl">Nome da Rede</div>
                    <div className="expl">Endereço IP</div>
                    <div className="expl">Número de Salas</div>
                    <div className="expl">Histórico</div>
                </div>

            </div>
        </div>
    </>)
}