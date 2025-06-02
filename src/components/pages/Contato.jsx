import React, {useState} from "react"
import emailjs from "@emailjs/browser"

export const Contato = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === ''){
            alert("Preencha o nome")
            return;
        }else if(email === ''){
            alert("Preencha o email")
            return;
        }else if(message === ''){
            alert("Escreva uma mensagem")
            return;
        }


        const templateParams = {
            name: name,
            email: email,
            message: message
        }

        emailjs.send("service_9h0lgdn", "template_339tj58", templateParams, "h73Evimw0D37lD_Oi")
        .then((response) => { /*não reconheceu response e err*/
            console.log("Email enviado", response.status, response,text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("Erro: ", err)
        })
        setName('')
        setEmail('')
        setMessage('')
    }

    return (<>
        <div className="pagina">
            <div className="flx">
                <div className="pagn">
                    <h1>Contato</h1>
                </div>
            </div>
            <div className="pcontainer">
                <form className="formulario" onSubmit={sendEmail}>
                    <div className="formItem">
                        <label>Nome</label>
                        <input
                        className="input"
                        type="text"
                        placeholder="Digite seu nome completo"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </div>

                    <div className="formItem">
                        <label>E-mail</label>
                        <input
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>

                    <div className="formItem">
                        <label>Mensagem</label>
                        <textarea
                        className="textarea"
                        placeholder="Digite sua mensagem"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />
                    </div>

                        <input className="button" type="submit" value="Enviar"/>
                </form>
            </div>
        </div>
    </>)
}