import React from 'react';

import Steps from '../components/Colecta/Steps';
import CTA from '../components/CTA';
import HighlightSection from '../components/pages/HighlightSection';
import TextHeader from '../components/pages/TextHeader';
import CarriersLogos from '../components/pages/CarriersLogos';

import { carriersHighlight, carriersSteps } from '../constants';

import { carriersPage } from '../lang/es_AR.json';
import { useTranslation } from 'react-i18next';

function Collect() {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [1, 2];

    return (
        <>
            <div className='textHeader-container'>
                <TextHeader currentTextHeader={carriersPage} />
                <CarriersLogos />
                <img className='big-circle' src='assets\circle-big.png' />
                <img className='small-circle' src='assets\circle-small.png' />
            </div>
            <HighlightSection currentHighlight={carriersPage} highlightImg={carriersHighlight} />

            <Steps icons={carriersSteps} description={carriersPage} />

            <CTA />
        </>
    );
}

export default Collect;
