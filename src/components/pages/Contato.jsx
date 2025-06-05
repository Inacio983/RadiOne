import React, {useState} from "react"
import emailjs from "@emailjs/browser"

export const Contato = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [vazio, setVazio] = useState(true)

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            /*alert("Preencha todos os campos")*/
            return;
        }


        const templateParams = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send("service_9h0lgdn", "template_339tj58", templateParams, "h73Evimw0D37lD_Oi")
        .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
            setVazio(true)
        }, (err) => {
            console.log("Erro: ", err)
        })
        setName('')
        setEmail('')
        setMessage('')
        setVazio(true)
    }

    return (<>
        <div className="pagina">
            <div className="flx">
                <div className="pagn">
                    <h1>Contato</h1>
                </div>
            </div>
            <div className="pcontainer" id="cont">
                <form className="formulario" onSubmit={sendEmail}>
                    <div className={name || vazio ? "formItem" : "vazio"}>
                        <label>Nome</label>
                        <input
                        id={name ? "cNome" : ""}
                        className="input"
                        type="text"
                        placeholder="Digite seu nome completo"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                        <small className={name || vazio ? "ok" : ""}>Informe seu nome</small>
                    </div>

                    <div className={email || vazio ? "formItem" : "vazio"}>
                        <label>E-mail</label>
                        <input id={email ? "cEmail" : ""}
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                        <small className={email || vazio ? "ok" : ""}>Informe seu email para contato</small>
                    </div>

                    <div className={message || vazio ? "formItem" : "vazio"}>
                        <label>Mensagem</label>
                        <textarea id={message ? "cMsg" : ""}
                        className="textarea"
                        placeholder="Digite sua mensagem"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />
                        <small className={message || vazio ? "ok" : ""}>Escreva uma mensagem</small>
                    </div>

                        <input onClick={() => {setVazio(false)}} className="button" type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    </>)
}