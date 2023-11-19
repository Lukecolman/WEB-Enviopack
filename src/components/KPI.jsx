import React from 'react';
import { useTranslation } from 'react-i18next';
import KpiGallery from './Home/KpiGallery';

const KPI = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>KPI</div>
            <section className='flexCenter'>
                <div className='kpi-container'>
                    <div className='kpi-text-box'>
                        <div className="kpi-title">
                            {t('kpi.title')}
                        </div>
                        <div className="kpi-content">
                            {t('kpi.content')}
                        </div>
                    </div>
                    <KpiGallery />
                </div>
            </section>
        </>
    );
};

export default KPI;
