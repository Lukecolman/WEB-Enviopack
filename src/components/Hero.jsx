import React from 'react';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';
import { carriersLogos } from '../constants';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='hero-container'>
                <img className='hero-bg' src='assets\hero-circle-bg.svg' alt='' />
                <div
                    className='hero-title'
                    dangerouslySetInnerHTML={{ __html: t('hero.solutionTechnology') }}
                />
                <div    
                    className='hero-subtitle'
                    dangerouslySetInnerHTML={{ __html: t('hero.iaOrganizeShipments') }}
                />
                <button className='hero-button buttonBasics'>
                    <span className='hero-button-text'>{t('hero.createFreeAccount')}</span>
                </button>
                <img className='hero-image' src='assets/hero.png' alt={t('hero.herobanner')} />

                <div className='text-container'>{t('hero.carriers')}</div>

                <Marquee className='marquee-container'>
                    {carriersLogos.map((carrier) => (
                        <div className='marquee-item' key={carrier.name}>
                            <img src={carrier.img} alt={carrier.name} />
                        </div>
                    ))}
                </Marquee>
            </section>
        </>
    );
};

export default Hero;
