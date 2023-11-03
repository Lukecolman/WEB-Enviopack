import React, { useState } from 'react';

const Navbar = () => {
    const [openService, setOpenSubItem] = useState(false);

    return (
        <nav className='sectionCenter bg-red-200'>
            <div className='w-[1512px] h-[72px] px-[148px] justify-between items-center inline-flex bg-green-200'>
                <div className='justify-start items-center gap-4 flex'>
                    <div className='w-[175px] h-9 relative'>
                        <img src='./src/assets/imagotipo_enviopack.png' alt='' />
                    </div>
                    <div className='justify-start items-center gap-4 flex'>
                        <div className='relative'>
                            <div
                                onClick={() => setOpenSubItem(!openService)}
                                className='cursor-pointer nav-item px-4 rounded-[5px] justify-center items-center gap-1 flex bg-purple-200'>
                                <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-loose">
                                    Servicios
                                </div>
                                <img src='./src/assets/arrow.png' alt='' />
                            </div>
                            {openService && (
                                <div className='sm:absolute sm:top-10 sm:bg-white sm:rounded-lg sm:w-[600px] px-10 py-6'>
                                    Acá ponemos los servicios
                                </div>
                            )}
                        </div>
                        <div className='px-4 rounded-[5px] justify-center items-center gap-2 flex'>
                            <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-loose">
                                Tarifas
                            </div>
                        </div>
                        <div className='px-4 rounded-[5px] justify-center items-center gap-2 flex'>
                            <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-loose">
                                Seguí tu envío
                            </div>
                        </div>
                        <div className='px-4 rounded-[5px] justify-center items-center gap-2 flex'>
                            <div className="text-gray-700 text-base font-normal font-['DM Sans'] leading-loose">
                                Contacto
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-start items-start gap-4 flex'>
                    <div className='px-4 py-2.5 rounded-[40px] border border-blue-500 justify-center items-center gap-2 flex'>
                        <div className="text-blue-500 text-sm font-medium font-['DM Sans'] leading-tight">
                            Iniciar sesión
                        </div>
                    </div>
                    <button className='px-4 py-2.5 buttonBasics'>
                        <div className="text-white text-sm font-medium font-['DM Sans'] leading-tight">
                            Crear cuenta
                        </div>
                    </button>
                    {/* <div className="pl-5 pr-3 py-3 bg-blue-100 rounded-3xl justify-center items-center gap-2.5 flex">
        <div className="w-7 h-4 relative" />
        <div className="w-3.5 h-3.5 relative" />
      </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
