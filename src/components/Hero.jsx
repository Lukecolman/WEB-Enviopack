import React from 'react';

const Hero = () => {
    return (
        <>
            <div>Herobanner</div>
            <div className='hero-container'>
                <div className="hero-title font-['DM Sans']">
                    La solución tecnológica
                    <br />
                    para optimizar tu logística e-commerce
                </div>
                <div className="hero-subtitle font-['DM Sans']">
                    IA para organizar todos tus envíos, darles seguimiento en tiempo real
                    <br />y conocer tu rendimiento.
                </div>
                <button className='hero-button buttonBasics'>
                    <span className="hero-button-text">
                        Creá tu cuenta gratis
                    </span>
                </button>
                <img className='hero-image' src='./src/assets/hero.png' alt="Herobanner" />
            </div>
        </>
    );
};

export default Hero;