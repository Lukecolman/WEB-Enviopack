import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { kpiImages } from '../../constants';

const KpiGallery = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1060);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const kpiTexts = [
        {
            orden: 3,
            mobileOrder: isMobile ? 1.1 : undefined, // Solo aplica mobileOrder en dispositivos móviles
            tipo: 'text',
            className: 'kpi-gal-3',
            title: t('kpi.countries.title'),
            number: t('kpi.countries.number'),
        },
        {
            orden: 6,
            mobileOrder: isMobile ? 1 : undefined, // Solo aplica mobileOrder en dispositivos móviles
            tipo: 'text',
            className: 'kpi-gal-6',
            title: t('kpi.operators.title'),
            number: t('kpi.operators.number'),
        },
        {
            orden: 7,
            mobileOrder: isMobile ? 4.1 : undefined, // Solo aplica mobileOrder en dispositivos móviles
            tipo: 'text',
            className: 'kpi-gal-7',
            title: t('kpi.activeUsers.title'),
            number: t('kpi.activeUsers.number'),
        },
        {
            orden: 9,
            mobileOrder: isMobile ? 4 : undefined, // Solo aplica mobileOrder en dispositivos móviles
            tipo: 'text',
            className: 'kpi-gal-9',
            title: t('kpi.shipmentsPerMinute.title'),
            number: t('kpi.shipmentsPerMinute.number'),
        },
    ];

    const kpiGalleryElements = [...kpiImages, ...kpiTexts].sort((a, b) => {
        const orderA = a.mobileOrder !== undefined ? a.mobileOrder : a.orden;
        const orderB = b.mobileOrder !== undefined ? b.mobileOrder : b.orden;
        return orderA - orderB;
    });

    return (
        <div className='kpi-grid'>
            {kpiGalleryElements.map((elemento, index) => (
                <div key={index} className={elemento.className}>
                    {elemento.tipo === 'image' && <img src={elemento.src} alt={elemento.alt} />}
                    {elemento.tipo === 'text' && (
                        <div className='kpi-content'>
                            <div className='kpi-text-title'>{elemento.title}</div>
                            <div className='kpi-text-number'>{elemento.number}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default KpiGallery;
