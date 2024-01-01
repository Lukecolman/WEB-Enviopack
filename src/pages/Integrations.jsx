import React from 'react';
import { TextHeader, HighlightSection, IntegrationCards } from '../components';
import { integrationsPage} from '../lang/es_AR.json';

import { integrationsHighlight, carriersSteps, integrationsHighlightContentLink } from '../constants';


const Integrations = () => {
    return (
        <div>
            <section className='text-header-color-section'>
                <div className='text-header-color-container'>
                    <TextHeader currentTextHeader={integrationsPage} />
                </div>
            </section>
            <IntegrationCards/>
            <section className='highlight-section-bg'>
            <HighlightSection currentHighlight={integrationsPage} highlightImg={integrationsHighlight} highlightImgClass={"integrations-img"} highlightURL={integrationsHighlightContentLink}/>
            </section>
        
        </div>
    );
};

export default Integrations;
