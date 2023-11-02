import React, { useEffect, useCallback, useState } from 'react';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
    {
        id: 1,
        title: 'Stacked Card Carousel',
        copy: 'Envíopack nos permitió potenciar nuestro e-commerce, en especial cuando quisimos armar nuestro marketplace, para el cual teníamos un proyecto muy ambicioso. La tecnología es muy sólida, pero además, el equipo es muy profesional y flexible lo que nos permitió cubrir todas nuestras expectativas y necesidades.',
        name:"Nombre apellido, CEO de Frâvega",
        web:"www.fravega.com",
        img:"https://via.placeholder.com/160x32",
    },
    {
        id: 2,
        title: 'Second Item1',
        copy: 'Nuestra logística estaba dividida entre múltiples canales de venta, proveedores y soluciones tecnológicas. Sabíamos que para apostar al comercio online, debíamos comenzar a unificar las herramientas y armar una estrategia logística que se adapte a las necesidades del e-commerce. Envíopack nos proporciona la tecnología y las opciones necesarias para nuestro negocio',
        name:"Nombre apellido, CEO de BGH",
        web:"www.google.com",
        img:"https://via.placeholder.com/159x22",
    },
    {
        id: 3,
        title: 'A Third Card',
        copy: 'Somos más flexibles gracias a Envíopack. Necesitábamos una plataforma que nos diera acceso a muchas opciones de distribución con distintos proveedores logísticos. Lo bueno es que con una sola integración ahora podemos elegir entre más de 20 proveedores con un sólo click, y nos permitió adaptarnos rápidamente a las necesidades de nuestros clientes',
        name:"Nombre apellido, CEO de This is feliz navidad",
        web:"www.taringa.com",
        img:"https://via.placeholder.com/170x29",
    },
    {
        id: 4,
        title: 'Fourth1',
        copy: 'Nuestro foco está en hacer crecer nuestro canal E-commerce y para ello, necesitábamos una herramienta tecnológica que nos permitiera crecer y ser más ágiles. También nos facilitó la toma decisiones, contando con información en tiempo real. Es clave poder contar con partners como Envíopack para poder armar una estrategia de crecimiento de largo plazo.',
        name:"Nombre apellido, CEO de Wallmart",
        web:"www.facebook.com",
        img:"https://via.placeholder.com/179x27",
    },
];

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        console.log("🚀 ~ file: CardCarousel.jsx:33 ~ determineClasses ~ indexes.currentIndex:", indexes.currentIndex)
        return 'active';
    } else if (indexes.nextIndex === cardIndex) {
        return 'next';
    } else if (indexes.previousIndex === cardIndex) {
        return 'prev';
    }
    return 'inactive';
}

const CardCarousel = () => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

    const handleCardTransition = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= cardItems.length - 1) {
          console.log("🚀 ~ file: CardCarousel.jsx:53 ~ handleCardTransition ~ indexes.currentIndex:", indexes.currentIndex)
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
    }, [indexes.currentIndex]);
 
    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 4000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    return (
        <div className='  bg-emerald-300 w-[1512px] h-[890px] flex '>

            <div className='bg-green-600 w-[450px]'>
                <ul className='card-carousel justify-center flex'>
                    {cardItems.map((card, index) => (
                        <li key={card.id} className={`card ${determineClasses(indexes, index)} `}>
                            <img className='w-max h-max absolute top-[50%] translate-y-[-50%]' src={card.img} alt="" />
                        </li>
                    ))}
                </ul>
                <ul className='card-dot flex flex-row justify-center '>
                {cardItems.map((card, index) => (
                         <li className={`${(index === indexes.currentIndex) ? 'bg-blue-500' : 'bg-blue-300'} w-[7px] h-[7px] rounded-full mx-1`}  key={card.id}></li>
                    ))}

                </ul>
            </div>

            <div className='bg-orange-400'>
                <div>
                    {cardItems.map((card, index) => (
                        <div className={`${index === indexes.currentIndex ? 'block' : 'hide'} max-w-[556.43px] min-w-[556.43px] pt-8 `} key={index}>
                            <img className='w-[23.50px] h-[18.75px]' src="src\assets\comillas.svg" alt="" />
                            <p className='w-[100%] py-8'>{card.copy}</p>
                            <p className='bg-red-200 pb-8'>{card.name}</p>
                            <a className='bg-gray-400 pb-8'href={card.web}>{card.web}</a>
                        </div>
                    ))}
                </div>
            </div>

            </div>

        


    );
};

export default CardCarousel;