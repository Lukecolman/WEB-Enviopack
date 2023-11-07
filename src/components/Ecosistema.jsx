import React from 'react';


const Ecosistema = () => {
    return (
        <section className='sectionCenter'>
            <div className='ecosistema-container'>
                <div className='ecosistema-content'>
                    <div className='ecosistema-header'>
                        <span className='ecosistema-text'>🌎 NUESTRO ECOSISTEMA</span>
                        <h1 className='ecosistema-title'>
                            Integraciones nativas con
                            <br />
                            <span className='ecosistema-highlight'>e-Commerces y Marketplaces</span>
                        </h1>
                        <div className='ecosistema-description'>
                            Conectá tus canales de venta online y resolvé toda la logística desde un sólo lugar. Rápido
                            y simple.
                        </div>
                    </div>

                    <button className='buttonSm'>
                        <span>Conectar</span>
                    </button>
                </div>

                <div className='ecosistema-image-container'>
                    <img src='src\assets\logos.png' alt='Ecosistema logos' />
                </div>
            </div>
        </section>
    );
};

export default Ecosistema;
