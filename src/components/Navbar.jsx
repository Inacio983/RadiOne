import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav>
        <Link to="/" className="logo" onClick={() => {setMenuOpen(false) }}>
            <img src="logoB.svg"></img>
        </Link>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="abas">
          <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/casos_de_uso">Casos de Uso</NavLink>
            </li>
            <li onClick={() => {setMenuOpen(false) }}>
              <NavLink to="/documentos">Documentação $ Suporte</NavLink>
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
    )
}