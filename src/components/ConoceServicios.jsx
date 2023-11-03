import React from 'react';
import { serviciosItems } from '../constants';

const ConoceServicios = (
    {
        // image
        // title
        // content
        // url
    }
) => {
    return (
        <>
            ConoceServicios
            <section className='sectionCenter bg-blue-100'>
                <div className='w-[1512px] h-[873px] p-[124px]  flex-col justify-start items-start gap-20 inline-flex bg-[#2E3B4E]'>
                    <div className='flex-col justify-start items-start gap-6 flex'>
                        <div className="text-white text-base font-bold font-['DM Sans']">🔍 CONOCÉ</div>
                        <div className="text-white text-5xl font-semibold font-['Outfit'] leading-[52px]">
                            Nuestros servicios
                        </div>
                    </div>

                    <div className='self-stretch justify-between items-center inline-flex bg-red-400'>
                        {serviciosItems.map((servicio) => (
                            <div className='flex-col justify-start items-start gap-8 inline-flex bg-red-800'>
                                <img className='w-[378px] h-[200px] rounded-3xl' src={servicio.image} />
                                <div className='flex-col justify-start items-start gap-4 flex'>
                                    <div className="w-[378px] text-white text-[28px] font-semibold font-['Outfit'] leading-9">
                                        {servicio.title}
                                    </div>
                                    <div className="w-[378px] h-[104px] text-white text-lg font-normal font-['DM Sans'] leading-relaxed">
                                        {servicio.content}
                                    </div>
                                </div>
                                <div className='px-2 py-1 rounded-[40px] justify-center items-center gap-2 inline-flex'>
                                    <a
                                        href={servicio.url}
                                        className="text-sky-300 text-sm font-medium font-['DM Sans'] leading-tight">
                                        Conocer más +
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConoceServicios;
