import React from 'react';
import { serviciosItems } from '../constants';

const Servicios = (
    {
        // image
        // title
        // content
        // url
    }
) => {
    return (
        <>
            Servicios
            <section className='sectionCenter bg-blue-100'>
            <div className='servicios-container'>
                    <div className='section-header'>
                        <span>🔍 CONOCÉ</span>
                        <h2>
                            Nuestros servicios
                        </h2>
                    </div>

                    <div className='servicios-cards-container'>
                        {serviciosItems.map((servicio) => (
                            <div className='servicios-card'>
                                <img className='servicios-image' src={servicio.image} alt="Servicio" />
                                <div className='servicios-info'>
                                    <div className="servicios-title">
                                        {servicio.title}
                                    </div>
                                    <div className="servicios-content">
                                        {servicio.content}
                                    </div>
                                </div>
                                <div className='servicios-link-container'>
                                    <a
                                        href={servicio.url}
                                        className="servicios-link">
                                        Conocer más +
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Servicios;