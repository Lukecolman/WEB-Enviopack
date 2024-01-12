import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ currentService }) => {
    const { t } = useTranslation();

    const services = {
        collect: [
            {
                title: t('collectPage.header.title'),
                subtitle: t('collectPage.header.subtitle'),
                content: t('collectPage.header.content'),
                img: './assets/image 165.png',
            },
        ],
        fullpack: [
            {
                title: t('fullpackPage.header.title'),
                subtitle: t('fullpackPage.header.subtitle'),
                content: t('fullpackPage.header.content'),
                img: './assets/Rectangle 3643.png',
            },
        ],
        dispatch: [
            {
                title: t('dispatchPage.header.title'),
                subtitle: t('dispatchPage.header.subtitle'),
                content: t('dispatchPage.header.content'),
                img: './assets/image_112.png',
            },
        ],
    };

    const currentServiceData = services[currentService];

    if (!currentServiceData || !currentServiceData.length) {
        return null;
    }

    const currentServiceItem = currentServiceData[0];

    return (
        <div>
            <div className='header-section '>
                <div className='header-container '>
                    <div className='header-content'>
                        <div className='header-title'>
                            <span className='header-title-bold'>
                                {currentServiceItem.title}
                                <br />
                            </span>
                            <span>{currentServiceItem.subtitle}</span>
                        </div>
                        <div className='header-description'>{currentServiceItem.content}</div>
                        <button className='header-button'>
                            <div className='button-text'>{t('pagesHeaderButton')}</div>
                        </button>
                    </div>

                    <div className='header-image relative'>
                        <img
                            className='header-image-content'
                            src={currentServiceItem.img}
                            alt={currentServiceItem.title}
                        />
                        <img className='header-bg-circle' src='public\assets\circle-small.png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
