import React, { useState, useEffect } from 'react';

export const Carrossel = ( {images} ) =>{
    const [currentIndex, setCurrentIndex] = useState(0);

    // Função para ir para o slide anterior
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Função para ir para o próximo slide
    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Função para ir para um slide específico pelos dots
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Efeito para rolagem automática (opcional)
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [currentIndex, images.length]); // Reexecuta o efeito se o slide ou o número de imagens mudar

    return (
        <div className="carousel-container">
            <div
                className="carousel-slide"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </div>

            <button className="carousel-button prev" onClick={goToPrev}>
                &#10094;
            </button>
            <button className="carousel-button next" onClick={goToNext}>
                &#10095;
            </button>

            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}