import React from 'react';

const Header = () => {
    return (
        <div>
 <div className='header-section '>
                <div className='header-container '>
                    <div className="header-content">
                    <div className="header-title">
                            <span className="header-title-bold">
                                Colecta
                                <br />
                            </span>
                            <span>
                                Logística a tu medida
                            </span>
                        </div>
                        <div className="header-description">
                            Pasamos a buscar los paquetes por tu local o depósito con la frecuencia que elijas y sin mínimos requeridos. Entregá en el día en CABA o al día siguiente en todo AMBA.
                        </div>
                        <button className='header-button'>
                            <div className="button-text">
                                Crea tu cuenta gratis
                            </div>
                        </button>
                    </div>
                    
                <div className='header-image relative'>
                    <img className='header-image-content' src='public\assets\image 165.png' />
                    <img className='header-bg-circle' src='public\assets\circle-small.png' />

                </div>
                </div>

            </div>
        </div>
    );
};

export default Header;