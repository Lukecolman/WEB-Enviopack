import React from 'react';

const ConoceServicios = () => {
    return (
        <div className='bg-blue-600'>
            ConoceServicios
            <div className='w-[1512px] h-[873px] p-[124px]  flex-col justify-start items-start gap-20 inline-flex'>

                <div className='flex-col justify-start items-start gap-6 flex'>
                    <div className="text-white text-base font-bold font-['DM Sans']">🔍 CONOCÉ</div>
                    <div className="text-white text-5xl font-semibold font-['Outfit'] leading-[52px]">
                        Nuestros servicios
                    </div>
                </div>

                <div className='self-stretch justify-between items-center inline-flex'>
                    <div className='flex-col justify-start items-start gap-8 inline-flex'>
                        <img className='w-[378px] h-[200px] rounded-3xl' src='https://via.placeholder.com/378x200' />
                        <div className='flex-col justify-start items-start gap-4 flex'>
                            <div className="w-[378px] text-white text-[28px] font-semibold font-['Outfit'] leading-9">
                                Fullpack
                            </div>
                            <div className="w-[378px] h-[104px] text-white text-lg font-normal font-['DM Sans'] leading-relaxed">
                                Nos ocupamos de toda tu cadena logística. Ofrecé tarifas más competitivas sin perder
                                tiempo en la gestión y armado de tus paquetes.
                            </div>
                        </div>
                        <div className='px-2 py-1 rounded-[40px] justify-center items-center gap-2 inline-flex'>
                            <div className="text-sky-300 text-sm font-medium font-['DM Sans'] leading-tight">
                                Conocer más +
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConoceServicios;
