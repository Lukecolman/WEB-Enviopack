import React from 'react';

const Hero = () => {
    return (
        <>
            <div>Herobanner</div>

            <div className=' bg-red-300 ml-auto mr-auto w-[100%] h-[984.98px] flex-col justify-start items-center gap-8 inline-flex'>
                <div className="w-[848px] text-center text-gray-700 text-[64px] font-bold font-['DM Sans'] leading-[74px]">
                    La solución tecnológica
                    <br />
                    para optimizar tu logística e-commerce
                </div>
                <div className="w-[709.14px] text-center text-gray-700 text-xl font-normal font-['DM Sans'] leading-loose">
                    IA para organizar todos tus envíos, darles seguimiento en tiempo real
                    <br />y conocer tu rendimiento.
                </div>
                <div className='px-7 py-4 bg-blue-500 rounded-[40px] justify-center items-center gap-2 inline-flex'>
                    <div className="text-white text-lg font-medium font-['DM Sans'] leading-7">
                        Creá tu cuenta gratis
                    </div>
                </div>
                <img className='w-[932.87px] h-[542.98px]' src='./src/assets/hero.png' />
            </div>
        </>
    );
};

export default Hero;
