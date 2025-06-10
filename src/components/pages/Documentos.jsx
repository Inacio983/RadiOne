import React, { useState } from "react"
import { Radio } from '../RadioSts';


export const Documentos = () =>{
    const [rotY, setRotY] = useState(0)
    const [rotX, setRotX] = useState(0)

    return (<>
        <div className="pagina">
            <div className="flx">
                <div className="pagn">
                    <h1>Documentação<br/>& Suporte</h1>
                </div>
            </div>
            
            <div className="container-cubo">
                <div class="cubo" style={{transform: 'rotateX('+rotY*90+'deg) rotateY('+rotX*90+'deg)'}}>
                    <img class="face face-frente" src="frente.png"/>
                    <img class="face face-ladoD" src="ladoD.png"/>
                    <img class="face face-verso" src="verso.png"/>
                    <img class="face face-ladoE" src="ladoE.png"/>
                    <img class="face face-topo" src="topo.png"/>
                    <img class="face face-baixo" src="baixo.png"/>
                </div>
                <div className="setasCubo">
                    <div className="contSeta setaD" onClick={() => {setRotX(rotX+1) }} style={{transform:'rotateZ(-90deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>

                    <div className="contSeta setaB" onClick={() => {setRotY(rotY-1) }}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                    
                    <div className="contSeta setaE" onClick={() => {setRotX(rotX-1) }} style={{transform:'rotateZ(90deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                    
                    <div className="contSeta setaT" onClick={() => {setRotY(rotY+1) }} style={{transform:'rotateZ(180deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                </div>
            </div>

            
            <div className="pcontainer">
                <h2>Arquitetura e Tecnologia:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum finibus suscipit. Curabitur vulputate interdum velit, et pellentesque elit porttitor vitae. Aliquam eu gravida neque. Curabitur vestibulum fermentum nisi, non maximus lacus scelerisque a. Sed eu justo ante. Vivamus cursus consectetur odio et tincidunt. Sed posuere ullamcorper urna cursus scelerisque.</p>
            </div>
        </div>
    </>)
}