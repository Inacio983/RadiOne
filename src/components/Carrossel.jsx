import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrossel = () =>{
    const images = [
        "baixo.png",
        "case.svg",
        "verso.png"]

    const titulos = [
        "um",
        "dois",
        "três"]

    const textos = [
        "primeiro texto",
        "segundo texto",
        "terceiro texto"]

    
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