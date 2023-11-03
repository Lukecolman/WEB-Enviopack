import React from 'react';
import { beneficiosItems } from '../constants';

const Beneficios = () => {
    return (
        <>
            Beneficios
            <section className='sectionCenter bg-blue-100'>
                <div className='w-[1512px] h-[784.17px] bg-green-500 '>
                    <div className=' flex bg-yellow-100 justify-center items-center content-center'>
                        <div className='w-[100%] h-[784.17px] p-[124px]  flex-col justify-start items-start gap-20 inline-flex bg-green-100'>
                            <div className='flex-col justify-start items-start gap-6 flex bg-gray-500'>
                                <div className="text-white text-base font-bold font-['DM Sans'] bg-gray-300">
                                    💡 CONOCÉ
                                </div>
                                <div className="text-white text-5xl font-semibold font-['Outfit'] leading-[52px] bg-gray-300">
                                    Por qué operar con Envíopack
                                </div>
                            </div>

                            <div className='self-stretch justify-between items-center inline-flex bg-red-400'>
                                <div className='w-[100%] mx-auto grid grid-cols-3 gap-[3.27rem] justify-center items-center content-center'>
                                    {beneficiosItems.map((beneficio) => (
                                        <div className='w-[386px] h-36 pt-12 pb-8 bg-blue-100 rounded shadow flex-col justify-start items-center gap-1 inline-flex drop-shadow-lg'>
                                            <div className='w-[55px] h-[55px] relative'>
                                                <div className='w-[55px] h-[55px] p-3 left-0 top-[-70px] absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex '>
                                                    <div className='self-stretch justify-start items-start inline-flex'>
                                                        <div className='w-[31px] h-[31px] relative'>
                                                            <img src={beneficio.icon} alt='' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-[27.45px] h-[24.17px] left-[14.12px] top-[16px] absolute' />
                                            </div>
                                            <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">
                                                {beneficio.title}
                                            </div>
                                            <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">
                                                {beneficio.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Beneficios;
