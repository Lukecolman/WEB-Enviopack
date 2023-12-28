import React from 'react';
import { WorkInProgress, TextHeader, HighlightSection } from '../components';
import { integrationsPage, carriersPage } from '../lang/es_AR.json';

import { integrationsHighlight, carriersSteps, integrationsHighlightContentLink } from '../constants';


const Integrations = () => {
    return (
        <div>
            Integrations
            <section className='text-header-color-section'>
                <div className='text-header-color-container'>
                    <TextHeader currentTextHeader={integrationsPage} />
                </div>
            </section>
            <WorkInProgress />
            <section className='highlight-section-bg'>
            <HighlightSection currentHighlight={integrationsPage} highlightImg={integrationsHighlight} highlightImgClass={"integrations-img"} highlightURL={integrationsHighlightContentLink}/>
            </section>
        
        </div>
    );
};

export default Integrations;
