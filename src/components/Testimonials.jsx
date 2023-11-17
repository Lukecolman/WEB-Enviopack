import React from 'react';
import CardCarousel from './Home/CardCarousel';


const Testimonials = () => {
    return (
        <>
            Testimonials
            <section className='sectionCenter bg-red-200'>
                <div className='w-[1512px] h-[890px] relative bg-blue-200'>
                    <img
                        className='w-[597.45px] h-[597.45px] left-[-170px] top-[-150px] absolute'
                        src='src\assets\circle-big.png'
                    />
                    <img
                        className='w-[313.32px] h-[313.32px] left-[1358.12px] top-[480.31px] absolute'
                        src='src\assets\circle-small.png'
                    />
                    <div className='flex justify-center relative top-[173.10px] max-w-[1512px]'>
                        <CardCarousel />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
