import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerCTA = () => {
    const { t } = useTranslation();

    return (
        <section className=' ctaPages-section   '>
            <div className='cta-container ctaPages-container '>
                <div className='ctaPages-title '>{t('ctaPages.tittle')}</div>
                <div className='ctaPages-content'>{t('ctaPages.content')}</div>
                <div className='ctaPages-button-container'>
                    <div className='ctaPages-button'>
                        <span>{t('ctaPages.button')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerCTA;
