import React, { useState } from "react"

export const Cubo = () =>{
    const [rotY, setRotY] = useState(0)
    const [rotX, setRotX] = useState(0)
    const [rotZ, setRotZ] = useState(0)
    const [giro, setGiro] = useState(0)
    let x = 0
    let y = 0
    let z = 0

    z = rotZ % 4
    if (z < 0)
        z = z+4

    x = rotX % 4
    if (x < 0)
        x = x+4

    y = rotY % 4
    if (y < 0)
        y = y+4

    if(giro === 1){
        {/* rotY +1 */}
        if (x === 2) {
        setRotY(rotY-1)
        } else {
        setRotY(rotY+1)
        }
        setGiro(0)
    }

    if(giro === 2){
        {/* rotY -1 */}
        if (x === 2) {
        setRotY(rotY+1)
        } else {
        setRotY(rotY-1)
        }
        setGiro(0)
    }

    return (<>
        <div className="container-cubo">
            <div className="setasCubo">
                <div className="rot X">
                    <div className="contSeta setaX+" onClick={() => {setRotX(rotX+1) }} style={{transform:'rotateZ(180deg)'}}>
                        <svg viewBox="0 0 130 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78 187.5L78 225H39.5L31.5 221.5L23 213L16 202L10 187L2.5 154.5L0 130V95.5L2.5 71.5L7.5 47L16 24.5L20.5 17L25 10.5L30.5 5L35 2.5L43 0.5H79L85.5 3L91 6L101 19L111 43L118 73.5L121 113H129.5L96 139L61.5 113H71L70 91.5L65 66.5L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5Z"/>
                            <path d="M55 46L58 50L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5H43L36 185.5L32 182L25.5 172L18.5 152L15 130.5L15.5 95L17 82L21.5 65L25.5 53.5L32.5 44.5L36 41L42.5 39L48.5 40L55 46Z" fill="black" fill-opacity="0.3"/>
                            <path d="M91 6L101 19L111 43L118 73.5L121 113H86L85 89L83 74L79 52L74.5 37L65.5 18L59 8.5L52 3.5L43 0.5H79L85.5 3L91 6Z" fill="black" fill-opacity="0.1"/>
                            <path d="M82 113L96 139L61.5 113H82Z" fill="black" fill-opacity="0.2"/>
                            <path d="M129.5 113H82L96 139L129.5 113Z" fill="black" fill-opacity="0.3"/>
                            <path d="M43 187.5H78V225H43V187.5Z" fill="black" fill-opacity="0.2"/>
                        </svg>
                    </div>
                    <div className="contSeta setaX-" onClick={() => {setRotX(rotX-1) }}>
                        <svg viewBox="0 0 130 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78 187.5L78 225H39.5L31.5 221.5L23 213L16 202L10 187L2.5 154.5L0 130V95.5L2.5 71.5L7.5 47L16 24.5L20.5 17L25 10.5L30.5 5L35 2.5L43 0.5H79L85.5 3L91 6L101 19L111 43L118 73.5L121 113H129.5L96 139L61.5 113H71L70 91.5L65 66.5L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5Z"/>
                            <path d="M55 46L58 50L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5H43L36 185.5L32 182L25.5 172L18.5 152L15 130.5L15.5 95L17 82L21.5 65L25.5 53.5L32.5 44.5L36 41L42.5 39L48.5 40L55 46Z" fill="black" fill-opacity="0.3"/>
                            <path d="M91 6L101 19L111 43L118 73.5L121 113H86L85 89L83 74L79 52L74.5 37L65.5 18L59 8.5L52 3.5L43 0.5H79L85.5 3L91 6Z" fill="black" fill-opacity="0.1"/>
                            <path d="M82 113L96 139L61.5 113H82Z" fill="black" fill-opacity="0.2"/>
                            <path d="M129.5 113H82L96 139L129.5 113Z" fill="black" fill-opacity="0.3"/>
                            <path d="M43 187.5H78V225H43V187.5Z" fill="black" fill-opacity="0.2"/>
                        </svg>
                    </div>
                </div>

                <div className="rot Y">
                    <div className="contSeta setY+" onClick={() => {setGiro(1) }} style={{transform:'rotateZ(-90deg)'}}>
                        <svg viewBox="0 0 130 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78 187.5L78 225H39.5L31.5 221.5L23 213L16 202L10 187L2.5 154.5L0 130V95.5L2.5 71.5L7.5 47L16 24.5L20.5 17L25 10.5L30.5 5L35 2.5L43 0.5H79L85.5 3L91 6L101 19L111 43L118 73.5L121 113H129.5L96 139L61.5 113H71L70 91.5L65 66.5L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5Z"/>
                            <path d="M55 46L58 50L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5H43L36 185.5L32 182L25.5 172L18.5 152L15 130.5L15.5 95L17 82L21.5 65L25.5 53.5L32.5 44.5L36 41L42.5 39L48.5 40L55 46Z" fill="black" fill-opacity="0.3"/>
                            <path d="M91 6L101 19L111 43L118 73.5L121 113H86L85 89L83 74L79 52L74.5 37L65.5 18L59 8.5L52 3.5L43 0.5H79L85.5 3L91 6Z" fill="black" fill-opacity="0.1"/>
                            <path d="M82 113L96 139L61.5 113H82Z" fill="black" fill-opacity="0.2"/>
                            <path d="M129.5 113H82L96 139L129.5 113Z" fill="black" fill-opacity="0.3"/>
                            <path d="M43 187.5H78V225H43V187.5Z" fill="black" fill-opacity="0.2"/>
                        </svg>
                    </div>
                    <div className="contSeta setaY-" onClick={() => {setGiro(2) }} style={{transform:'rotateZ(90deg)'}}>
                        <svg viewBox="0 0 130 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78 187.5L78 225H39.5L31.5 221.5L23 213L16 202L10 187L2.5 154.5L0 130V95.5L2.5 71.5L7.5 47L16 24.5L20.5 17L25 10.5L30.5 5L35 2.5L43 0.5H79L85.5 3L91 6L101 19L111 43L118 73.5L121 113H129.5L96 139L61.5 113H71L70 91.5L65 66.5L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5Z"/>
                            <path d="M55 46L58 50L60 54.5L53 74.5L50 96.5V129L50.5 136.5L54.5 155L58 166L61.5 173.5L67.5 183L72.5 185.5L78 187.5H43L36 185.5L32 182L25.5 172L18.5 152L15 130.5L15.5 95L17 82L21.5 65L25.5 53.5L32.5 44.5L36 41L42.5 39L48.5 40L55 46Z" fill="black" fill-opacity="0.3"/>
                            <path d="M91 6L101 19L111 43L118 73.5L121 113H86L85 89L83 74L79 52L74.5 37L65.5 18L59 8.5L52 3.5L43 0.5H79L85.5 3L91 6Z" fill="black" fill-opacity="0.1"/>
                            <path d="M82 113L96 139L61.5 113H82Z" fill="black" fill-opacity="0.2"/>
                            <path d="M129.5 113H82L96 139L129.5 113Z" fill="black" fill-opacity="0.3"/>
                            <path d="M43 187.5H78V225H43V187.5Z" fill="black" fill-opacity="0.2"/>
                        </svg>
                    </div>
                </div>
                
  
            </div>
            <div class="cubo" style={{transform: 'rotateX('+rotX*90+'deg) rotateY('+rotY*90+'deg) rotateZ('+rotZ*90+'deg)'}}>
                <img class="face face-frente" src="frente.png"/>
                <img class="face face-ladoD" src="ladoD.png"/>
                <img class="face face-verso" src="verso.png"/>
                <img class="face face-ladoE" src="ladoE.png"/>
                <img class="face face-topo" src="topo.png"/>
                <img class="face face-baixo" src="baixo.png"/>
            </div>
        </div>
    </>)
}