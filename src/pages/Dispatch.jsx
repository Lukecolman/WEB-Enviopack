import React, { useEffect } from 'react';
import { Header, SubBeneficios, Steps, Carousel, CTAPages } from '../components';
import { dispatchBenefitsIcon, dispatchSteps } from '../constants';
import { dispatchPage } from '../lang/es_AR.json';
import { useTranslation } from 'react-i18next';

function Dispatch() {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [0, 1];

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
            <Header currentService='dispatch' />

            <SubBeneficios sectionTitle='Beneficios' itemsIcon={dispatchBenefitsIcon} itemsText={dispatchPage} />

            <Steps icons={dispatchSteps} description={dispatchPage} />

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

export default Dispatch;
