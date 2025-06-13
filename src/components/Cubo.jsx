import React, { useState } from "react"

export const Cubo = () =>{
    const [rotY, setRotY] = useState(0)
    const [rotX, setRotX] = useState(0)
    const [rotZ, setRotZ] = useState(0)
    const [giro, setGiro] = useState(0)

    console.log("rotY: ", rotY)
    console.log("rotX: ", rotX)
    console.log("rotZ: ", rotZ)
    console.log("//////////////")

    if(giro === 1){
        {/*seta D rotX -1 */}
        if (rotY % 2 === 0) {
        setRotX(rotX+1)
        } else {
        setRotZ(rotZ+1)
        }
        setGiro(0)
    }
    if(giro === 2){
        {/*seta B rotY +1 */}
        setRotY(rotY-1)
        setGiro(0)
    }
    if(giro === 3){
        {/*seta E rotX +1 */}
        if (rotY % 2 === 0) {
        setRotX(rotX-1)
        } else {
        setRotZ(rotZ-1)
        }
        setGiro(0)
    }
    if(giro === 4){
        {/*seta T rotY -1 */}
        setRotY(rotY+1)
        setGiro(0)
    }

    return (<>
        <div className="container-cubo">
            <div class="cubo" style={{transform: 'rotateX('+rotY*90+'deg) rotateY('+rotX*90+'deg) rotateZ('+rotZ*90+'deg)'}}>
                <img class="face face-frente" src="frente.png"/>
                <img class="face face-ladoD" src="ladoD.png"/>
                <img class="face face-verso" src="verso.png"/>
                <img class="face face-ladoE" src="ladoE.png"/>
                <img class="face face-topo" src="topo.png"/>
                <img class="face face-baixo" src="baixo.png"/>
            </div>
            <div className="setasCubo">
                <div className="contSeta setaD" onClick={() => {setGiro(1) }} style={{transform:'rotateZ(-90deg)'}}>
                    <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                    </svg>
                </div>

                <div className="contSeta setaB" onClick={() => {setGiro(2) }}>
                    <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                    </svg>
                </div>
                
                <div className="contSeta setaE" onClick={() => {setGiro(3) }} style={{transform:'rotateZ(90deg)'}}>
                    <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                    </svg>
                </div>
                
                <div className="contSeta setaT" onClick={() => {setGiro(4) }} style={{transform:'rotateZ(180deg)'}}>
                    <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                    </svg>
                </div>
            </div>
        </div>
    </>)
}