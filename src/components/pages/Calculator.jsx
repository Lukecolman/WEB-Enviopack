// import React from 'react';

// const Calculator = () => {
//     return (
//         <div className='w-[312px] h-[517px] px-4 py-8 bg-white rounded-lg shadow flex-col justify-start items-start gap-8 inline-flex'>
//             <div className='self-stretch h-16 flex-col justify-start items-start gap-2 flex'>
//                 <div className="text-gray-700 text-base font-bold font-['SF Pro Text'] leading-tight">
//                     Compará, ahorrá y enviá
//                 </div>
//                 <div className="self-stretch text-slate-500 text-sm font-normal font-dmSans leading-[18px]">
//                     Simulá el envío que quieras realizar para conocer nuestras tarifas.
//                 </div>
//             </div>
//             <div className='self-stretch h-[357px] flex-col justify-start items-start gap-4 flex'>
//                 <div className='self-stretch h-[60px] flex-col justify-start items-start gap-1 flex'>
//                     <div className="text-neutral-700 text-sm font-medium font-dmSans leading-none">Origen</div>
//                     <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
//                         <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
//                             <div className="self-stretch text-neutral-700 text-sm font-medium font-dmSans leading-[18px]">
//                                 1426
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='self-stretch h-[60px] flex-col justify-start items-start gap-1 flex'>
//                     <div className="text-neutral-700 text-sm font-medium font-dmSans leading-none">Destino</div>
//                     <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
//                         <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
//                             <div className="self-stretch text-neutral-700 text-sm font-medium font-dmSans leading-[18px]">
//                                 1900
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='self-stretch justify-start items-start gap-4 inline-flex'>
//                     <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
//                         <div className="text-neutral-700 text-sm font-medium font-dmSans leading-none">Largo</div>
//                         <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
//                             <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
//                                 <div className='self-stretch text-right'>
//                                     <span className="text-neutral-700 text-sm font-medium font-dmSans leading-[18px]">
//                                         45{' '}
//                                     </span>
//                                     <span className="text-slate-500 text-sm font-medium font-dmSans leading-[18px]">
//                                         {' '}
//                                         cm
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
//                         <div className="text-neutral-700 text-sm font-medium font-dmSans leading-none">Alto</div>
//                         <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
//                             <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
//                                 <div className='text-right'>
//                                     <span className="text-neutral-700 text-sm font-medium font-dmSans leading-[18px]">
//                                         45
//                                     </span>
//                                     <span className="text-slate-500 text-sm font-medium font-dmSans leading-[18px]">
//                                         {' '}
//                                         cm
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
//                         <div className="text-neutral-700 text-sm font-medium font-dmSans leading-none">Ancho</div>
//                         <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
//                             <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
//                                 <div className='self-stretch'>
//                                     <span className="text-neutral-700 text-sm font-medium font-dmSans leading-[18px]">
//                                         45
//                                     </span>
//                                     <span className="text-slate-500 text-sm font-medium font-dmSans leading-[18px]">
//                                         {' '}
//                                         cm
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='self-stretch px-6 py-7 bg-slate-50 rounded-lg justify-between items-center inline-flex'>
//                     <div className='justify-start items-center gap-2 flex'>
//                         <div className="text-neutral-700 text-sm font-bold font-dmSans">Peso aforado</div>
//                     </div>
//                     <div className="text-right text-neutral-700 text-base font-bold font-dmSans">5 kg</div>
//                 </div>
//                 <div className='self-stretch px-3.5 py-2 bg-blue-500 rounded-[40px] justify-center items-center gap-2 inline-flex'>
//                     <div className="text-white text-sm font-medium font-dmSans leading-tight">Buscar</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Calculator;

import React, { useState } from 'react';

const Calculator = () => {
    const [numeroOrigen, setNumeroOrigen] = useState('');

    return (
        <div className='w-[312px] px-4 py-8 bg-violet-200 rounded-lg shadow flex-col justify-start items-start gap-8 inline-flex'>


            <div className='self-stretch h-16 flex-col justify-start items-start gap-2 flex'>
                <div className="text-gray-700 text-base font-bold font-['SF Pro Text'] leading-tight">
                    Compará, ahorrá y enviá
                </div>
                <div className='self-stretch text-slate-500 text-sm font-normal font-dmSans leading-[18px]'>
                    Simulá el envío que quieras realizar para conocer nuestras tarifas.
                </div>
            </div>

            <div className='self-stretch  flex-col justify-start items-start gap-4 flex bg-green-200'>
                <div className='self-stretch flex-col justify-start items-start gap-1 flex'>
                    <div className='text-neutral-700 text-sm font-medium font-dmSans leading-none'>Origen</div>
                    <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
                        <input
                            type='text'
                            className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 text-neutral-700 text-sm font-medium font-dmSans leading-[18px]'
                            value={numeroOrigen}
                            onChange={(e) => setNumeroOrigen(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='self-stretch  flex-col justify-start items-start gap-1 flex bg-green-200'>
                <div className='text-neutral-700 text-sm font-medium font-dmSans leading-none'>Destino</div>
                <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
                    <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
                        <div className='self-stretch text-neutral-700 text-sm font-medium font-dmSans leading-[18px]'>
                            1900
                        </div>
                    </div>
                </div>
            </div>

            <div className='self-stretch justify-start  items-start gap-4 inline-flex bg-green-200'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
                    <div className='text-neutral-700 text-sm font-medium font-dmSans leading-none'>Largo</div>
                    <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
                        <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
                            <div className='self-stretch text-right'>
                                <span className='text-neutral-700 text-sm font-medium font-dmSans leading-[18px]'>
                                    45{' '}
                                </span>
                                <span className='text-slate-500 text-sm font-medium font-dmSans leading-[18px]'>
                                    {' '}
                                    cm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
                    <div className='text-neutral-700 text-sm font-medium font-dmSans leading-none'>Alto</div>
                    <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
                        <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
                            <div className='text-right'>
                                <span className='text-neutral-700 text-sm font-medium font-dmSans leading-[18px]'>
                                    45
                                </span>
                                <span className='text-slate-500 text-sm font-medium font-dmSans leading-[18px]'>
                                    {' '}
                                    cm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex'>
                    <div className='text-neutral-700 text-sm font-medium font-dmSans leading-none'>Ancho</div>
                    <div className='self-stretch h-10 p-px bg-white flex-col justify-start items-start gap-2.5 flex'>
                        <div className='self-stretch h-[38px] p-2.5 rounded border border-gray-300 flex-col justify-start items-start gap-2.5 flex'>
                            <div className='self-stretch'>
                                <span className='text-neutral-700 text-sm font-medium font-dmSans leading-[18px]'>
                                    45
                                </span>
                                <span className='text-slate-500 text-sm font-medium font-dmSans leading-[18px]'>
                                    {' '}
                                    cm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='self-stretch px-6 py-7 rounded-lg justify-between items-center inline-flex bg-yellow-200'>
                <div className='justify-start items-center gap-2 flex'>
                    <div className='text-neutral-700 text-sm font-bold font-dmSans'>Peso aforado</div>
                </div>
                <div className='text-right text-neutral-700 text-base font-bold font-dmSans'>5 kg</div>
            </div>


            <div className='self-stretch px-3.5 py-2 bg-blue-500 rounded-[40px] justify-center items-center gap-2 inline-flex'>
                <div className='text-white text-sm font-medium font-dmSans leading-tight'>Buscar</div>
            </div>

            
        </div>
    );
};

export default Calculator;
