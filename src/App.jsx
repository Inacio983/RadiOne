//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Home, Casos_de_Uso, Documentos, Sobre, Contato } from './components/pages';

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/casos_de_uso" element={<Casos_de_Uso />} />
      <Route path="/documentos" element={<Documentos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </div>
}

export default App
