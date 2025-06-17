import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrossel = () =>{
    const images = [
        "case.svg",
        "logoB.svg",
        "aberto.jpg"]

    const titulos = [
        "Rádio",
        "Logo",
        "Case"]

    const textos = [
        "Rádio do usuário",
        "Logo da empresa nnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnn nnnnnnnnnnnnnnn nnnnnnnnnnnnnnn   nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
        "Case aberta"]

    
    const [idx, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
    <Carousel activeIndex={idx} onSelect={handleSelect}>
        {images.map((image, index) => (
        <Carousel.Item>
            <div className='cent'>
            <img src={image}/>
            </div>
            <Carousel.Caption>
            <h3>{titulos[index]}</h3>
            <p>{textos[index]}</p>
            </Carousel.Caption>
        </Carousel.Item>
                ))}
    </Carousel>
    );
}