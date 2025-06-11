import React, { useState } from "react"
import { Radio } from '../RadioSts';

export const Home = () =>{
    const [rotY, setRotY] = useState(0)
    const [rotX, setRotX] = useState(0)
    console.log("rotY: ", rotY)
    console.log("rotX: ", rotX)

    return (<>
        <div className="pagina">
            <div className="flx">
                <div className="pagn">
                    <h1>Home</h1>
                    <p>Comunicação off-grid fácil e prática</p>
                </div>
            </div>
            
            <div className="video">
                <iframe src="https://www.youtube.com/embed/UE5dV_HRGH0?si=6x7RTiMtyuyWeovS&rel=0&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    <div className="contSeta setaD" onClick={() => {setRotX(rotX-1) }} style={{transform:'rotateZ(-90deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>

                    <div className="contSeta setaB" onClick={() => {setRotY(rotY+1) }}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                    
                    <div className="contSeta setaE" onClick={() => {setRotX(rotX+1) }} style={{transform:'rotateZ(90deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                    
                    <div className="contSeta setaT" onClick={() => {setRotY(rotY-1) }} style={{transform:'rotateZ(180deg)'}}>
                        <svg viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <Radio />
            
            <div className="pcontainer">
                <h2>RadiOne:</h2>
                <p>O <strong>RadiOne</strong> é um dispositivo compacto e revolucionário que combina a simplicidade de um rádio com a conectividade moderna de um smartphone. Ao conectar o RadiOne ao seu celular via cabo micro-USB, o usuário ganha acesso a uma plataforma de comunicação por texto, permitindo a troca de mensagens em tempo real em diversas salas de chat. Essa funcionalidade é ideal para manter a comunicação em situações onde a conectividade tradicional, como internet ou redes de telefonia, não está disponível, oferecendo uma solução prática e confiável.</p>
    
                <p><br/>Uma das características mais marcantes do RadiOne é sua capacidade de operar em uma <strong>rede Mesh</strong>. Cada dispositivo funciona como um nó, retransmitindo sinais para outros RadiOnes próximos, criando uma rede expansível que pode cobrir grandes áreas. Em ambientes urbanos, o alcance de comunicação varia de <strong>1 a 3 km</strong>, enquanto em áreas abertas, como campos ou zonas rurais, pode atingir até <strong>6 km</strong>. O alcance total da rede é limitado apenas pelo número de dispositivos conectados, o que permite uma cobertura ampla e flexível, adaptada às necessidades dos usuários.</p>
                
                <p><br/>Para garantir privacidade e segurança, o RadiOne oferece <strong>salas de chat protegidas por senha</strong>, permitindo que grupos específicos se comuniquem sem interferências externas. Essa funcionalidade é especialmente útil para equipes de trabalho, grupos de amigos ou situações que exigem confidencialidade. Além disso, a interface amigável do aplicativo associado ao RadiOne facilita a criação e o gerenciamento dessas salas, tornando a experiência de uso intuitiva até para usuários menos familiarizados com tecnologia.</p>
                
                <p><br/>O RadiOne é uma ferramenta indispensável para <strong>comunicações de emergência</strong>. Em cenários como desastres naturais, apagões de rede ou expedições em áreas remotas, o dispositivo garante que as pessoas possam se comunicar sem depender de infraestrutura externa. Por exemplo, em uma enchente, equipes de resgate podem coordenar esforços por texto, ou, em uma trilha em áreas sem sinal, aventureiros podem manter contato com seu grupo. O RadiOne também é perfeito para eventos ao ar livre, como festivais ou acampamentos, onde a cobertura de internet é limitada ou inexistente.</p>
                
                <p><br/>Com sua combinação de tecnologia de rede Mesh, facilidade de uso e foco em situações críticas, o <strong>RadiOne</strong> redefine a comunicação em ambientes desafiadores. Seja para emergências, aventuras ao ar livre ou simplesmente para manter contato em áreas sem conectividade, o RadiOne oferece uma solução robusta e versátil, garantindo que você esteja sempre conectado, não importa onde esteja.</p>
            </div>
        </div>
    </>)
}