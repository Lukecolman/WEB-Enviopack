import React from 'react'

const Footer = () => {
  return (
    <>
    <div>Footer</div>
    <div className="w-[1512px] h-[563px] px-[248px] pt-[180px] pb-20 bg-slate-700 flex-col justify-start items-center gap-20 inline-flex">
    <div className="self-stretch justify-between items-start inline-flex">
        <div className="w-[50px] h-[50px] relative" />
        <div className="justify-start items-start gap-[60px] flex">
            <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-24 h-[21px] text-white text-lg font-normal font-['Inter'] leading-loose">Developers</div>
                <div className="py-1 flex-col justify-start items-start gap-5 flex">
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">API Documentation</div>
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Integraciones</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-[82px] h-[21px] text-white text-lg font-normal font-['Inter'] leading-loose">Empresa</div>
                <div className="py-1 flex-col justify-start items-start gap-5 flex">
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Partners</div>
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Blog</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-[90px] h-[21px] text-white text-lg font-normal font-['Inter'] leading-loose">Recursos</div>
                <div className="h-36 py-1 flex-col justify-start items-start gap-5 flex">
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Help Center</div>
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">FAQs</div>
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Contacto</div>
                    <div className="text-gray-400 text-base font-normal font-['Inter'] leading-[19px]">Trabajá con nosotros</div>
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-start gap-[26px] flex">
            <div className="p-0.5 flex-col justify-start items-start inline-flex" />
            <div className="p-0.5 justify-start items-start flex" />
            <div className="py-[3px] flex-col justify-center items-center inline-flex" />
            <div className="text-slate-500 text-base font-normal font-['Inter'] leading-[19px]">Privacy policy</div>
        </div>
        <div className="opacity-80 text-right text-white text-sm font-normal font-['Open Sans'] leading-7">© 2023 Envíopack. Todos los derechos reservados.</div>
    </div>
</div>

    </>
  )
}

export default Footer