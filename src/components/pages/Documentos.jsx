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
            
            <Radio />
            
            <div className="pcontainer">
                <p>Os rádios utilizam a placa Heltec WiFi LoRa 32, seus principais componentes são:</p>
                <p><br/><strong>Microcontrolador ESP32:</strong> O ESP32-S3 oferece um processamento potente com Wi-Fi e Bluetooth 5.0 (LE) integrados. Isso permite que a Heltec se conecte a redes sem fio tradicionais e a outros dispositivos Bluetooth, sendo perfeita para uma ampla gama de aplicações IoT, desde automação residencial até monitoramento remoto.</p>
                <p><br/><strong>Transceptor LoRa:</strong>O transceptor LoRa (Long Range) permite a comunicação sem fio a longas distâncias com consumo de energia mínimo.</p>
            </div>
        </div>
    </>)
}