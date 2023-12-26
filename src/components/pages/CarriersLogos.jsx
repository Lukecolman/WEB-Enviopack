import React from 'react';
import { useTranslation } from 'react-i18next';

import { carriersIcons } from '../../constants/index';

const CarriersLogos = () => {
    const { t } = useTranslation();

    // Obtiene la lista de operadores y la lista de íconos de operadores
    const carriers = t('carriersPage.header.carriers', { returnObjects: true });

    // Función para obtener el ícono correspondiente al operador
    const getCarrierIcon = (carrierName) => {
        const icon = carriersIcons.find((icon) => icon.img.includes(`${carrierName}.svg`));
        return icon ? icon.img : null;
    };

    // Función para renderizar la lista de operadores logísticos
    const renderCarriersList = () => {
        return carriers.map((carrier, index) => (
            <div key={index} className='carrier-item'>
                <img src={getCarrierIcon(carrier.carrier)} alt={carrier.carrier} />
                <p>{t(`carriersPage.header.carriers.${index}.carrier`)}</p>
            </div>
        ));
    };

    return (
        <div className='carriers-logos'>
            <div className='carriers-list'>{renderCarriersList()}</div>
        </div>
    );
};

export default CarriersLogos;
