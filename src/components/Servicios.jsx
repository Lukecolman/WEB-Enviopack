import React from 'react';
import { useTranslation } from 'react-i18next';
import { serviciosItems } from '../constants';
import Carousel from '/src/components/Home/Carousel.jsx';

const Servicios = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='servicios-section '>
                <div className='servicios-container '>
                    <div className='section-header'>
                        <span>{t('servicios.conoce')}</span>
                        <h2>{t('servicios.ourServices')}</h2>
                    </div>
                    <div className='servicios-cards-container '>
                        <Carousel visibleItems={[0, 1, 2]} fillColor={'#fff'} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Servicios;
