import React from 'react'
import { footerLinks, socialMedia } from '../constants';


const Footer = () => {
  return (
    <>
<section className='h-[563px] flexCenter paddingY flex-col bg-[#2E3B4E]'>
    <div className='flexStart md:flex-row flex-col mb-8 w-full max-w-[1016px]'>
        <div className='flex-1 flex flex-col justify-start mr-10'>
            <img src="src\assets\Isotipo_Envíopack.svg" alt="enviopack" className='w-[50px] object-contain' />
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
            {footerLinks.map((footerLinks) => (
                <div key={footerLinks.key} className='flex flex-col ss:my-0 my-4'>
                    <h4 className='font-inter text-white text-lg font-normal mb-[30px]  hover'>
                        {footerLinks.title}
                    </h4>
                    <ul>
                        {footerLinks.links.map((link, name) =>
                        <li key={link.name} className={`cursor-pointer font-inter text-[#ACB1BB]  ${name === footerLinks.links.length - 1 ? "mb-0" : "mb-[20px]"}`}>
                            {link.name}
                        </li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>

    <div className=" max-w-[1016px] w-full flex justify-between items-center md:flex-row flex-col pt-6">
  

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
            onClick={() => window.open(social.link)}
          />
        ))}
        <a  className={`cursor-pointer font-inter text-[#6E7D91]`}>
        Privacy policy
                        </a>
      </div>

          <p className="font-openSans font-normal text-center text-[14px] leading-[28px] text-white">
          © 2023 Envíopack. Todos los derechos reservados.      </p>
    </div>

</section>



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