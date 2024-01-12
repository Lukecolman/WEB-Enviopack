import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ratesPage } from '../lang/es_AR.json';
import Marquee from 'react-fast-marquee';
import { Carousel, TextHeader, Calculator } from '../components';
import { brandsLogos } from '../constants';

const Rates = () => {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [0, 1, 2];

    // FUNCIONES
    const scrollToTop = () => {
        window.scrollTo({ top: 0 , behavior: 'instant' })
      }
      useEffect(() => {
        scrollToTop()
      },[])


    return (
        <>
            <TextHeader currentTextHeader={ratesPage} />
            <div className='sectionCenter'>
                <Calculator />
            </div>

            <div className='text-container'>{t('ratesPage.brandLogosTitle')}</div>
            <Marquee className='marquee-container mb-16 '>
                {brandsLogos.map((carrier) => (
                    <div className='marquee-item' key={carrier.name}>
                        <img src={carrier.img} alt={carrier.name} />
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
