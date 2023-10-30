import React from 'react';
import { beneficiosItems } from '../constants';

const Beneficios = () => {
    return (
        <>
            <div>Beneficios</div>
            {beneficiosItems.map((beneficio) => (
                    <>
            <div className='w-[386px] h-36 px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex drop-shadow-lg'>

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
                    </>
                ))}

        </>
    );
};

export default Beneficios;
