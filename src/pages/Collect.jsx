import React, { useEffect } from 'react';
import { Header, SubBeneficios, Steps, Carousel, CTAPages } from '../components';
import { beneficiosColectaIcon, collectSteps } from '../constants';
import { collectPage } from '../lang/es_AR.json';
import { useTranslation } from 'react-i18next';

function Collect() {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [0, 2];

    // FUNCIONES
    const scrollToTop = () => {
        window.scrollTo({ top: 0 , behavior: 'instant' })
      }
      useEffect(() => {
        scrollToTop()
      },[])


    return (
        <>
            {/* Pasa la cadena correspondiente para el servicio actual ('collect', 'fullpack', o 'dispatch'*/}
            <Header currentService='collect' />

            <SubBeneficios sectionTitle='Beneficios' itemsIcon={beneficiosColectaIcon} itemsText={collectPage} />

            <Steps icons={collectSteps} description={collectPage} />

            <section className='sectionCenter servicios-section-light '>
                <div className='servicios-container '>
                    <div className='section-header'>
                        <span>{t('servicios.conoce')}</span>
                        <h2>{t('servicios.ourServices')}</h2>
                    </div>

                    <div className='servicios-cards-container pages-servicios'>
                        <Carousel visibleItems={visibleItems} fillColor={fillColor} />
                    </div>
                </div>
            </section>

            <CTAPages />
        </>
    );
}

export default Collect;
