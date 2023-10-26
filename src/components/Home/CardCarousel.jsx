import React, { useEffect, useCallback, useState } from 'react';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const cardItems = [
    {
        id: 1,
        title: 'Stacked Card Carousel',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
    },
    {
        id: 2,
        title: 'Second Item',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 3,
        title: 'A Third Card',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.',
    },
    {
        id: 4,
        title: 'Fourth',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        <div className='container'>
            <ul className='card-carousel'>
                {cardItems.map((card, index) => (
                    <li key={card.id} className={`card ${determineClasses(indexes, index)}`}>
                        <h2>{card.title}</h2>
                        <p>{card.copy}</p>
                    </li>
                ))}
            </ul>
            <div>{cardItems.map((card, index) => (
              <div className={`${(index === indexes.currentIndex)?"active":"hide"}`} key={index}>{card.title}</div>
            ))} 
            </div>
        </div>
    );
};

export default CardCarousel;