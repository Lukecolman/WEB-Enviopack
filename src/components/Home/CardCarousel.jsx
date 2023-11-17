// import React, { useEffect, useCallback, useState } from 'react';
// import { useTranslation } from 'react-i18next';

// /*
//  * Read the blog post here:
//  * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
//  */

// /*Colocar 2 titulos
// -1 dentro del componente
// -2 otro fuera

// cambiar de vista los titulos para que uno se muestre y otro se esconda dependiendo de si es mobile o desktop

// */
// const { t } = useTranslation();

// const cardItems = [
    
//     {
//         id: 1,
//         title: 'Stacked Card Carousel',
//         copy: t("testimonials.third.title"),
//         name: 'Nombre apellido, CEO de Frâvega',
//         web: 'www.fravega.com',
//         img: 'src/assets/testimonials/Imagotipo_Fravega.svg',
//     },
//     {
//         id: 2,
//         title: 'Second Item1',
//         copy: 'Nuestra logística estaba dividida entre múltiples canales de venta, proveedores y soluciones tecnológicas. Sabíamos que para apostar al comercio online, debíamos comenzar a unificar las herramientas y armar una estrategia logística que se adapte a las necesidades del e-commerce. Envíopack nos proporciona la tecnología y las opciones necesarias para nuestro negocio',
//         name: 'Nombre apellido, CEO de BGH',
//         web: 'www.bgh.com',
//         img: 'src/assets/testimonials/logo_BGH.svg',
//     },
//     {
//         id: 3,
//         title: 'A Third Card',
//         copy: 'Somos más flexibles gracias a Envíopack. Necesitábamos una plataforma que nos diera acceso a muchas opciones de distribución con distintos proveedores logísticos. Lo bueno es que con una sola integración ahora podemos elegir entre más de 20 proveedores con un sólo click, y nos permitió adaptarnos rápidamente a las necesidades de nuestros clientes',
//         name: 'Nombre apellido, CEO de This is feliz navidad',
//         web: 'www.thisisnavidad.com',
//         img: 'src/assets/testimonials/logo_TIFN.svg',
//     },
//     {
//         id: 4,
//         copy: 'Nuestro foco está en hacer crecer nuestro canal E-commerce y para ello, necesitábamos una herramienta tecnológica que nos permitiera crecer y ser más ágiles. También nos facilitó la toma decisiones, contando con información en tiempo real. Es clave poder contar con partners como Envíopack para poder armar una estrategia de crecimiento de largo plazo.',
//         name: 'Nombre apellido, CEO de Wallmart',
//         web: 'www.wallmart.com',
//         img: 'src/assets/testimonials/logo_Wallmart.svg',
//     },
// ];

// function determineClasses(indexes, cardIndex) {
//     if (indexes.currentIndex === cardIndex) {
//         console.log('🚀 ~ file: CardCarousel.jsx:33 ~ determineClasses ~ indexes.currentIndex:', indexes.currentIndex);
//         return 'active';
//     } else if (indexes.nextIndex === cardIndex) {
//         return 'next';
//     } else if (indexes.previousIndex === cardIndex) {
//         return 'prev';
//     }
//     return 'inactive';
// }

// const CardCarousel = () => {
//     const [indexes, setIndexes] = useState({
//         previousIndex: 0,
//         currentIndex: 0,
//         nextIndex: 1,
//     });

//     const handleCardTransition = useCallback(() => {
//         // If we've reached the end, start again from the first card,
//         // but carry previous value over
//         if (indexes.currentIndex >= cardItems.length - 1) {
//             console.log(
//                 '🚀 ~ file: CardCarousel.jsx:53 ~ handleCardTransition ~ indexes.currentIndex:',
//                 indexes.currentIndex
//             );
//             setIndexes({
//                 previousIndex: cardItems.length - 1,
//                 currentIndex: 0,
//                 nextIndex: 1,
//             });
//         } else {
//             setIndexes((prevState) => ({
//                 previousIndex: prevState.currentIndex,
//                 currentIndex: prevState.currentIndex + 1,
//                 nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2,
//             }));
//         }
//     }, [indexes.currentIndex]);

//     useEffect(() => {
//         const transitionInterval = setInterval(() => {
//             handleCardTransition();
//         }, 4000);

//         return () => clearInterval(transitionInterval);
//     }, [handleCardTransition, indexes]);

//     return (
//         <div className='flex '>
//             {/* IMAGE CAROUSEL */}
//             <div className=' w-[450px] relative mt-24 mr-12'>
//                 <ul className='card-carousel justify-center flex '>
//                     {cardItems.map((card, index) => (
//                         <li key={card.id} className={`card ${determineClasses(indexes, index)} `}>
//                             <img className='w-max h-max absolute top-[50%] translate-y-[-50%]' src={card.img} alt='' />
//                         </li>
//                     ))}
//                 </ul>
//                 <ul className='card-dot flex flex-row justify-center pt-4 absolute left-[45%]'>
//                     {cardItems.map((card, index) => (
//                         <li
//                             className={`${
//                                 index === indexes.currentIndex ? 'bg-blue-500' : 'bg-blue-300'
//                             } w-2.5 h-2.5 rounded-full mx-1`}
//                             key={card.id}></li>
//                     ))}
//                 </ul>
//             </div>

//             {/* TEXT CAROUSEL */}
//             <div className=''>
//                 <div className='text-sky-950  hidden flex-col  gap-6   sm:flex'>
//                     <span className=' text-lg font-bold  leading-[18px]bg-slate-600 '>🚀 CRECÉ</span>
//                     <h1 className='text-5xl font-semibold font-outfit leading-[55px] '>
//                         Cómo te ayudamos a <br />
//                         potenciar tu negocio
//                     </h1>
//                 </div>

//                 <div>
//                     {cardItems.map((card, index) => (
//                         <div
//                             className={`${
//                                 index === indexes.currentIndex ? 'block' : 'hide'
//                             } max-w-[556.43px] min-w-[556.43px] pt-8  
//                         text-lg

//                         leading-9`}
//                             key={index}>
//                             <img className='w-[23.50px] h-[18.75px]' src='src\assets\comillas.svg' alt='' />
//                             <p className=' font-outfit leading-[30px] my-8'>{card.copy}</p>

//                             <p className=' mb-8 font-dmSans italic'>{card.name}</p>

//                             <a className='font-medium text-ep-400' href={card.web}>
//                                 {card.web}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardCarousel;

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
        <div className='flex '>
            {/* IMAGE CAROUSEL */}
            <div className=' w-[450px] relative mt-24 mr-12'>
                <ul className='card-carousel justify-center flex '>
                    {cardItems.map((card, index) => (
                        <li key={card.id} className={`card ${determineClasses(indexes, index)} `}>
                            <img className='w-max h-max absolute top-[50%] translate-y-[-50%]' src={card.img} alt='' />
                        </li>
                    ))}
                </ul>
                <ul className='card-dot flex flex-row justify-center pt-4 absolute left-[45%]'>
                    {cardItems.map((card, index) => (
                        <li
                            className={`${
                                index === indexes.currentIndex ? 'bg-blue-500' : 'bg-blue-300'
                            } w-2.5 h-2.5 rounded-full mx-1`}
                            key={card.id}></li>
                    ))}
                </ul>
            </div>

            {/* TEXT CAROUSEL */}
            <div className=''>
                <div className='text-sky-950  hidden flex-col  gap-6   sm:flex'>
                    <span className=' text-lg font-bold  leading-[18px]bg-slate-600 '>🚀 CRECÉ</span>
                    <h1 className='text-5xl font-semibold font-outfit leading-[55px] '>
                        Cómo te ayudamos a <br />
                        potenciar tu negocio
                    </h1>
                </div>

                <div>
                    {cardItems.map((card, index) => (
                        <div
                            className={`${
                                index === indexes.currentIndex ? 'block' : 'hide'
                            } max-w-[556.43px] min-w-[556.43px] pt-8  
                        text-lg

                        leading-9`}
                            key={index}>
                            <img className='w-[23.50px] h-[18.75px]' src='src\assets\comillas.svg' alt='' />
                            <p className=' font-outfit leading-[30px] my-8'>{t(card.copy)}</p>

                            <p className=' mb-8 font-dmSans italic'>{card.name}</p>

                            <a className='font-medium text-ep-400' target="_blank" href={`http://${card.web}`} rel="noopener noreferrer">
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