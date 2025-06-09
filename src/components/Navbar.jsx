import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () =>{
    {/* true = menu aberto, false = menu fechado */}
    const [menuOpen, setMenuOpen] = useState(false);

    return (<>
    <nav>
        <div className="topo">
          <Link to="/" className="logo" onClick={() => {setMenuOpen(false) }}>
              <img src="logoB.svg"></img>
          </Link>
          <div className="menu" onClick={() => {{/* seta que abre o menu */}
            setMenuOpen(!menuOpen);
          }}>
              {/* muda o nome para inverter a seta no css */}
              <svg className={menuOpen ? "baixo" : ""} viewBox="0 0 92 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M81 0L92 11L46 57L0 11L11 0L46 35L81 0Z"/>
              </svg>
          </div>
        </div>

        <div className="abas">
          <ul className={menuOpen ? "open" : ""}>
            {/* quando menuOpen=true, o nome da classe muda para open e recebe as mudanças no css*/}
            {/* todas as opções redirecionam para a página e fecham o menu */}
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/casos_de_uso">Casos de Uso</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/documentos">Documentação & Suporte</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/sobre">Sobre o RadiOne</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </div>
    </nav>
    <div className={menuOpen ? "fino" : ""}  onClick={() => {setMenuOpen(false) }}></div>
    </>)
}