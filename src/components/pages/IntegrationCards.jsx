import React from 'react';
import { useTranslation } from 'react-i18next';

const IntegrationCards = () => {
    const { t } = useTranslation();

    const integrationCardsData = [
        {
            title: t('integrationsPage.integrationCards.card-1.title'),
            logoBgColor: 'bg-[#FFE900]',
            logoImg: 'assets/marketLogos/MercadoLibre.svg',
            marketName: t('integrationsPage.integrationCards.card-1.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-2.title'),
            logoBgColor: 'bg-[#2C3357]',
            logoImg: 'assets/marketLogos/Tiendanube.svg',
            marketName: t('integrationsPage.integrationCards.card-2.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-3.title'),
            logoBgColor: 'bg-[#FF3366]',
            logoImg: 'assets/marketLogos/Vtex.svg',
            marketName: t('integrationsPage.integrationCards.card-3.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-4.title'),
            logoBgColor: 'bg-[#96C04A]',
            logoImg: 'assets/marketLogos/Shopify.svg',
            marketName: t('integrationsPage.integrationCards.card-4.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-5.title'),
            logoBgColor: 'bg-[#ADE3F0]',
            logoImg: 'assets/marketLogos/PrestaShop.svg',
            marketName: t('integrationsPage.integrationCards.card-5.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-6.title'),
            logoBgColor: 'bg-[#7F54B3]',
            logoImg: 'assets/marketLogos/Woocommerce.svg',
            marketName: t('integrationsPage.integrationCards.card-6.marketName'),
        },
        {
            title: t('integrationsPage.integrationCards.card-7.title'),
            logoBgColor: 'bg-[#E4713A]',
            logoImg: 'assets/marketLogos/Magento.svg',
            marketName: t('integrationsPage.integrationCards.card-7.marketName'),
        },
    ];

    return (
        <section className='integration-cards-section'>
            <div className='integration-cards-container'>
                {/* Mapeo sobre el array de datos para renderizar tarjetas */}
                {integrationCardsData.map((card, index) => (
                    <div key={index} className='integration-card'>
                        {/* CAJA SUPERIOR */}
                        <div className='integration-card-top'>
                            <div className='integration-card-logo'>
                                {/* LOGO */}
                                <div className={`integration-logo-container ${card.logoBgColor}`}>
                                    <img src={card.logoImg} alt={card.title} className='integration-logo-img' />
                                </div>
                                <div className='integration-market-details'>
                                    <div className='integration-card-title'>{card.title}</div>
                                    <div className='integration-card-market-name'>{card.marketName}</div>
                                </div>
                            </div>
                        </div>
                        {/* CAJA INFERIOR */}
                        <div className='integration-card-bottom'>
                            <a className='integration-connect-box integration-connect-text '>
                                <p className='integration-connect-text'>
                                    {t('integrationsPage.integrationCards.connect')}
                                </p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IntegrationCards;
