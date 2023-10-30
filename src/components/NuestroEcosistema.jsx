import React from 'react';

const NuestroEcosistema = () => {
    return (
            <section className='w-[1512px] h-[784px] p-[124px] bg-white justify-between items-start inline-flex font-dmSans'>
                <div className='flex-col justify-start items-start gap-12 inline-flex bg-emerald-300'>

                    <div className='text-sky-950 flex-col justify-start items-start gap-6 flex bg-violet-300'>
                        <span className=' text-base font-bold  leading-[18px]'>🌎 NUESTRO ECOSISTEMA</span>
                        <h1 className='text-[40px] font-semibold font-outfit leading-[52px]'>
                                Integraciones nativas con
                                <br />
                            <span className="text-sky-500 ">
                                e-Commerces y Marketplaces
                            </span>
                        </h1>
                        <div className='w-[363.33px] text-gray-700 text-lg font-normal font-dmSans leading-[30px]'>
                            Conectá tus canales de venta online y resolvé toda la logística desde un sólo lugar. Rápido
                            y simple.
                        </div>
                    </div>

                    <button className='px-5 py-3 bg-ep-500 hover:bg-ep-600 rounded-[40px] justify-center items-center gap-2 inline-flex'>
                        <div className='text-white text-base font-medium  leading-normal'>Conectar</div>
                    </button>

                </div>
                
                <div className='w-[633px] h-[536px] relative bg-red-300'>
                    <img src='src\assets\logos.png' alt='' />
                </div>
            </section>
    );
};

export default NuestroEcosistema;
