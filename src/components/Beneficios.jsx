import React from 'react';
import { beneficiosItems } from '../constants';

const Beneficios = () => {
    return (
        <>
            Beneficios
            <section className='sectionCenter'>
                <div className='beneficios-container'>
                    <div className='beneficios-inner'>
                        <div className='beneficios-content'>
                            <div className='section-header'>
                                <span>💡 CONOCÉ</span>
                                <h2>Por qué operar con Envíopack</h2>
                            </div>

                            <div className='beneficios-title-container'>
                                <div className='beneficios-cards-container'>
                                    {beneficiosItems.map((beneficio) => (
                                        <div className='beneficios-card'>
                                            <div className='beneficios-icon-container'>
                                                <div className='beneficios-icon-background'>
                                                    <div className='beneficios-icon'>
                                                        <div className='beneficios-icon-img'>
                                                            <img src={beneficio.icon} alt='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="beneficios-title font-['DM Sans']">{beneficio.title}</div>
                                            <div className="beneficios-content-text font-['DM Sans']">
                                                {beneficio.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Beneficios;
