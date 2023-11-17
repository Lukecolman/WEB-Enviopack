import React from 'react';
import { useTranslation } from 'react-i18next';
import { kpiImages } from '../../constants';


const KpiGallery = () => {
    const { t } = useTranslation();

    const kpiTexts = [
        {
            orden: 3,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.countries.title"),
            number: t("kpi.countries.number"),
        },
        {
            orden: 6,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.operators.title"),
            number: t("kpi.operators.number"),
        },
        {
            orden: 7,
            tipo: 'text',
            className: 'kpi-text kpi-box-wide',
            title: t("kpi.activeUsers.title"),
            number: t("kpi.activeUsers.number"),
        },
        {
            orden: 9,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.shipmentsPerMinute.title"),
            number: t("kpi.shipmentsPerMinute.number"),
        },
        // ... (otros elementos de texto)
    ];

    const kpiGalleryElements = [...kpiImages, ...kpiTexts].sort((a, b) => a.orden - b.orden);

    return (
        <div className='kpi-grid'>
            {kpiGalleryElements.map((elemento, index) => (
                <div key={index} className={elemento.className}>
                    {elemento.tipo === 'image' && (
                        <img src={elemento.src} alt={elemento.alt} />
                    )}
                    {elemento.tipo === 'text' && (
                        <div className='kpi-content'>
                            <div className="kpi-text-title">
                                {elemento.title}
                            </div>
                            <div className="kpi-text-number">
                                {elemento.number}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default KpiGallery;
