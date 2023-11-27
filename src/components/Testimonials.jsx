import React from 'react';
import CardCarousel from './Home/CardCarousel';


const Testimonials = () => {
    return (
        <>
            <section className=' testimonial-section '>
                <div className='testimonial-container  sectionCenter'>
                    <img
                        className='big-circle'
                        src='assets\circle-big.png'
                    />
                    <img
                        className='small-circle'
                        src='assets\circle-small.png'
                    />
                    <div className='card-carousel'>
                        <CardCarousel />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
