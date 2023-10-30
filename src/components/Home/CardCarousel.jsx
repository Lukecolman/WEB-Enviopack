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
        copy: 'Envíopack nos permitió potenciar nuestro e- muy sólida, pero además, el equipo es muy profesional y flexible lo que nos permitió cubrir todas nuestras expectativas y necesidades.',
        name:"Nombre apellido, CEO de Frâvega",
        web:"www.google.com",
        img:"https://via.placeholder.com/159x22",
    },
    {
        id: 3,
        title: 'A Third Card',
        copy: 'Envíopack nos permitió potenciar nuestro e-commerce, en especial cuando quisimos armar nuestro marketplace, para el cual teníamos un proyecto muy ambicioso.',
        name:"Nombre apellido, CEO de Frâvega",
        web:"www.taringa.com",
        img:"https://via.placeholder.com/170x29",
    },
    {
        id: 4,
        title: 'Fourth1',
        copy: 'Envíopack nos permitió potenciar nuestro e-commerce, en especial cuando quisimos armar nuestro marketplace, para el cual teníamos un proyecto muy ambicioso. La tecnología es muy sólida, pero además, el equipo es muy profesional y flexible lo que nos permitió cubrir todas nuestras expectativas y necesidades123333333333333333111111111111111.',
        name:"Nombre apellido, CEO de Frâvega123123123123123123123123213",
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
        }, 44000);

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
                        <div className={`${index === indexes.currentIndex ? 'block' : 'hide'} bg-violet-200 max-w-[556.43px] min-w-[556.43px]`} key={index}>
                            <p className='w-[100%]'>{card.copy}</p>
                            <p className='bg-red-200'>{card.name}</p>
                            <a className='bg-gray-400'href={card.web}>{card.web}</a>
                        </div>
                    ))}
                </div>
            </div>

            </div>

        


    );
};

export default CardCarousel;