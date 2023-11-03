import React from 'react';
import CardCarousel from './Home/CardCarousel';


const Testimonials = () => {
    return (
        <>
            Testimonials
            <section className='sectionCenter bg-red-200'>
                <div className='w-[1512px] h-[890px] relative bg-blue-200'>
                    <img
                        className='w-[573.46px] h-[597.45px] left-0 top-0 absolute'
                        src='https://via.placeholder.com/573x597'
                    />
                    <img
                        className='w-[162.38px] h-[313.32px] left-[1358.12px] top-[480.31px] absolute'
                        src='https://via.placeholder.com/162x313'
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
