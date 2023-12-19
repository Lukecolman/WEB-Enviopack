
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTranslation } from 'react-i18next';

const Carousel = ({ visibleItems, fillColor }) => {
    const { t } = useTranslation();

    const responsive = {
        0: { items: 1 },
        919: { items: 2, itemsFit: 'contain' },
        1380: { items: 3, itemsFit: 'undefined' },
    };

    const itemsToDisplay = [
        {
            key: '0',

            image: 'assets/Rectangle 3643.png',
            title: t('servicios.serviciosItems.0.title'),
            content: t('servicios.serviciosItems.0.content'),
            url: 'url1',
        },
        {
            key: '1',

            image: 'assets/image 165.png',
            title: t('servicios.serviciosItems.1.title'),
            content: t('servicios.serviciosItems.1.content'),
            url: 'url2',
        },
        {
            key: '2',
            image: 'assets/image_112.png',
            title: t('servicios.serviciosItems.2.title'),
            content: t('servicios.serviciosItems.2.content'),
            url: 'url3',
        },
    ].filter((_, index) => visibleItems.includes(index));

    const customPrevButton = (
        <div className='custom-arrow '>
            <svg width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='ep-forward-line-arrow-outline'>
                    <path
                        id='Vector'
                        d='M9.18568 14.8776C8.75174 15.3115 8.75173 16.015 9.18566 16.449L16.0141 23.2774C16.448 23.7113 17.1515 23.7113 17.5854 23.2774L18.1141 22.7488C18.5481 22.3149 18.5481 21.6113 18.1141 21.1774L12.5999 15.6633L18.1141 10.1496C18.5481 9.71564 18.5481 9.01207 18.1141 8.57815L17.5854 8.0495C17.1515 7.61562 16.448 7.61563 16.0141 8.04951L9.18568 14.8776Z'
                        fill={fillColor}
                    />
                </g>
            </svg>
        </div>
    );

    const customNextButton = (
        <div className='custom-arrow'>
            <svg width='31' height='31' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='ep-forward-line-arrow-outline'>
                    <path
                        id='Vector'
                        d='M21.3246 16.4486C21.7585 16.0147 21.7585 15.3111 21.3246 14.8772L14.4962 8.04876C14.0622 7.61485 13.3588 7.61484 12.9248 8.04872L12.3961 8.57738C11.9622 9.01129 11.9622 9.71484 12.3961 10.1488L17.9104 15.6629L12.3962 21.1766C11.9622 21.6105 11.9622 22.3141 12.3962 22.748L12.9249 23.2767C13.3588 23.7105 14.0622 23.7105 14.4961 23.2767L21.3246 16.4486Z'
                        fill={fillColor}
                    />
                </g>
            </svg>
        </div>
    );

    return (
        <AliceCarousel
            mouseTracking
            swipeExtraPadding={0}
            renderPrevButton={() => customPrevButton}
            renderNextButton={() => customNextButton}
            items={itemsToDisplay.map((servicio, index) => (
                <div className='servicios-card' key={index}>
                    <img className='servicios-image' src={servicio.image} alt={t('servicios.serviceImageAlt')} />
                    <div className='servicios-info'>
                        <div className='servicios-title'>{t(servicio.title)}</div>
                        <div className='servicios-content'>{t(servicio.content)}</div>
                    </div>
                    <div className='servicios-link-container'>
                        <a href={servicio.url} className='servicios-link'>
                            {t('servicios.learnMore')}
                        </a>
                    </div>
                </div>
            ))}
            responsive={responsive}
        />
    );
};

export default Carousel;
