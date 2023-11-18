import React, { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CardCarousel = () => {
    const { t } = useTranslation(); // Agrega esto aquí

    const cardItems = [
        {
            id: 1,
            title: t("testimonials.first.title"),
            copy: t("testimonials.first.copy"),
            name: t("testimonials.first.name"),
            web: t("testimonials.first.web"),
            img: 'src/assets/testimonials/Imagotipo_Fravega.svg',
        },
        {
            id: 2,
            title: t("testimonials.second.title"),
            copy: t("testimonials.second.copy"),
            name: t("testimonials.second.name"),
            web: t("testimonials.second.web"),
            img: 'src/assets/testimonials/logo_BGH.svg',
        },
        {
            id: 3,
            title: t("testimonials.third.title"),
            copy: t("testimonials.third.copy"),
            name: t("testimonials.third.name"),
            web: t("testimonials.third.web"),
            img: 'src/assets/testimonials/logo_TIFN.svg',
        },
        {
            id: 4,
            title: t("testimonials.fourth.title"),
            copy: t("testimonials.fourth.copy"),
            name: t("testimonials.fourth.name"),
            web: t("testimonials.fourth.web"),
            img: 'src/assets/testimonials/logo_Wallmart.svg',
        },
    ];
    
    function determineClasses(indexes, cardIndex) {
        if (indexes.currentIndex === cardIndex) {
            return 'active';
        } else if (indexes.nextIndex === cardIndex) {
            return 'next';
        } else if (indexes.previousIndex === cardIndex) {
            return 'prev';
        }
        return 'inactive';
    }

    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    const handleCardTransition = useCallback(() => {
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1,
            });
        } else {
            setIndexes((prevState) => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2,
            }));
        }
    }, [indexes.currentIndex, cardItems.length]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 4000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    return (
        <div className='card-carousel-container'>
            {/* IMAGE CAROUSEL */}
            <div className='card-carousel-image'>
                <ul className='card-image-stack'>
                    {cardItems.map((card, index) => (
                        <li key={card.id} className={`card ${determineClasses(indexes, index)} `}>
                            <img src={card.img} alt={card.title} />
                        </li>
                    ))}
                </ul>
                <ul className='card-dot'>
                    {cardItems.map((card, index) => (
                        <li className={`${index === indexes.currentIndex ? 'card-dot-active' : 'card-dot-inactive'
                            } `}
                            key={card.id}></li>
                    ))}
                </ul>
            </div>

            {/* TEXT CAROUSEL */}
            <div className='card-carousel-text'>
                <div className='card-titles'>
                    <span>🚀 CRECÉ</span>
                    <h1>
                        Cómo te ayudamos a <br />
                        potenciar tu negocio
                    </h1>
                </div>

                <div className='card-content'>
                    {cardItems.map((card, index) => (
                        <div
                            className={`${
                                index === indexes.currentIndex ? 'block' : 'hide' } 
                                card-content-testimonials`}
                            key={index}>
                            <img src='src\assets\comillas.svg' alt='' />
                            <p className='card-content-copy'>{t(card.copy)}</p>

                            <p className='card-content-ceo '>{card.name}</p>

                            <a className='card-content-url' target="_blank" href={`http://${card.web}`} rel="noopener noreferrer">
                                {card.web}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;