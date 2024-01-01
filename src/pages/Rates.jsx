import React from 'react';
import { useTranslation } from 'react-i18next';
import { ratesPage } from '../lang/es_AR.json';
import Marquee from 'react-fast-marquee';
import { WorkInProgress, Carousel, TextHeader, Calculator } from '../components';
import { brandsLogos } from '../constants';

const Rates = () => {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [0, 1, 2];

    return (
        <>
            <div>Rates</div>
            <TextHeader currentTextHeader={ratesPage} />
            <Calculator/>
            <WorkInProgress />

            <div className='text-container'>{t('ratesPage.brandLogosTitle')}</div>
            <Marquee className='marquee-container'>
                {brandsLogos.map((carrier, alt) => (
                    <div className='marquee-item' key={alt.name}>
                        <img src={carrier.img} alt={alt.name} />
                    </div>
                ))}
            </Marquee>
            <section className=' servicios-section-lightBlue '>
                <div className='servicios-container '>
                    <div className='section-header'>
                        <span>{t('servicios.conoce')}</span>
                        <h2>{t('servicios.ourServices')}</h2>
                    </div>

                    <div className='servicios-cards-container'>
                        <Carousel visibleItems={visibleItems} fillColor={fillColor} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Rates;
