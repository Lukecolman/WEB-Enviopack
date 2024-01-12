import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { carrierSimpleIcons } from '../../constants';

const OverlayService = () => {
    const { t } = useTranslation();

    const menuItems = [
        {
            orden: 1,
            type: 'texto',
            title: t('overlayService.Fullpack.title'),
            tag: {
                text: t('overlayService.Fullpack.text'),
                color: '',
            },
            description: t('overlayService.Fullpack.description'),
            url: '/fullpack',
            icon: 'assets/icons/fullpack-icon.svg',
        },
        {
            orden: 2,
            type: 'texto',
            title: t('overlayService.Collection.title'),
            tag: {
                text: t('overlayService.Collection.text'),
                color: '',
            },
            description: t('overlayService.Collection.description'),
            url: '/collect',
            icon: 'assets/icons/collect-Icon.svg',
        },
        {
            orden: 3,
            type: 'texto',
            title: t('overlayService.BranchDispatch.title'),
            tag: {
                text: t('overlayService.BranchDispatch.text'),
                color: '',
            },
            description: t('overlayService.BranchDispatch.description'),
            url: '/dispatch',
            icon: 'assets/icons/dispatch-icon.svg',
        },
        {
            orden: 4,
            type: 'texto',
            title: t('overlayService.SameDay.title'),
            tag: {
                text: t('overlayService.SameDay.text'),
                color: 'text-emerald-700 bg-emerald-50',
            },
            description: t('overlayService.SameDay.description'),
            url: '#',
            icon: 'assets/icons/sameDay-icon.svg',
        },
    ];

    // ICONOS DE LOS CARRIERS
    const logisticPartners = [
        {
            bgColor: 'bg-red-600',
            image: carrierSimpleIcons[1].img,
            alt: carrierSimpleIcons[1].name,
        },
        {
            bgColor: 'bg-gradient-to-tl from-cyan-600 to-blue-800',
            image: carrierSimpleIcons[12].img,
            alt: carrierSimpleIcons[12].name,
        },
        {
            bgColor: 'bg-purple-800',
            image: carrierSimpleIcons[11].img,
            alt: carrierSimpleIcons[11].name,
        },
        {
            bgColor: 'bg-blue-800',
            image: carrierSimpleIcons[13].img,
            alt: carrierSimpleIcons[13].name,
        },
        {
            bgColor: 'bg-red-600',
            image: carrierSimpleIcons[0].img,
            alt: carrierSimpleIcons[0].name,
        },
        {
            bgColor: 'bg-gradient-to-b from-cyan-500 to-blue-600',
            image: carrierSimpleIcons[10].img,
            alt: carrierSimpleIcons[10].name,
        },
        {
            bgColor: 'bg-red-600',
            image: carrierSimpleIcons[14].img,
            alt: carrierSimpleIcons[14].name,
        },
        {
            bgColor: 'bg-fuchsia-800',
            image: carrierSimpleIcons[2].img,
            alt: carrierSimpleIcons[2].name,
        },
        {
            bgColor: 'bg-sky-800',
            image: carrierSimpleIcons[8].img,
            alt: carrierSimpleIcons[8].name,
        },
        {
            bgColor: 'bg-orange-600',
            image: carrierSimpleIcons[9].img,
            alt: carrierSimpleIcons[9].name,
        },
        {
            bgColor: 'bg-red-600',
            image: carrierSimpleIcons[5].img,
            alt: carrierSimpleIcons[5].name,
        },
        {
            bgColor: 'bg-blue-600',
            image: carrierSimpleIcons[3].img,
            alt: carrierSimpleIcons[3].name,
        },
        {
            bgColor: 'bg-teal-500',
            image: carrierSimpleIcons[7].img,
            alt: carrierSimpleIcons[7].name,
        },
        {
            bgColor: 'bg-blue-900',
            image: carrierSimpleIcons[4].img,
            alt: carrierSimpleIcons[4].name,
        },
        {
            bgColor: 'bg-red-600',
            image: carrierSimpleIcons[6].img,
            alt: carrierSimpleIcons[6].name,
        },
    ];

    // Ordena los elementos
    const elementosOrdenados = menuItems.sort((a, b) => a.orden - b.orden);

    const filas = Array.from({ length: Math.ceil(logisticPartners.length / 3) }, (v, i) =>
        logisticPartners.slice(i * 3, i * 3 + 3)
    );

    return (
        <div className='overlay-service'>
           
            {/* SERVICIOS */}
            <div className='overlay-service-menu'>
                {elementosOrdenados.map((elemento, index) => (
                    <div key={index} className='overlay-service-item-container'>
                        {elemento.type === 'texto' && (
                            <Link to={elemento.url}>
                                <div className='overlay-service-item'>
                                    <div className='overlay-service-icon'>
                                        <img src={elemento.icon} alt='' />
                                    </div>
                                    <div className='overlay-service-details'>
                                        <div className='overlay-service-title'>
                                            {elemento.title}
                                            {elemento.tag && (
                                                <span className={`overlay-service-tag ${elemento.tag.color}`}>
                                                    {elemento.tag.text}
                                                </span>
                                            )}
                                        </div>
                                        <div className='overlay-service-description'>{elemento.description}</div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            
            
            {/* PARTNERS */}
            <div className='overlay-service-partners'>
                <div className='overlay-service-logistic-title'>
                    <div className='overlay-service-logistic-icon'>
                        <img src='assets\icons\logisticPartners-icon.svg' alt='' />
                    </div>
                    <div className='overlay-service-title'>{t('overlayService.LogisticPartners.title')}</div>
                </div>
                <div className='overlay-service-logistic-partners'>
                    {filas.map((fila, index) => (
                        <div key={index} className='overlay-service-logistic-row'>
                            {fila.map((partner, subIndex) => (
                                <div key={subIndex} className={`overlay-service-logistic-item ${partner.bgColor}`}>
                                    <img src={partner.image} alt={partner.alt} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <Link to='/carriers'>
                    <div className='overlay-service-link'>
                        {t('overlayService.LogisticPartners.link')}
                        <img
                            src='./assets/icons/ep-forward-arrow-outline.svg'
                            className='overlay-service-forward-icon'
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default OverlayService;