import React from 'react';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <>
            <section className='h-[563px] flexCenter paddingY flex-col bg-[#2E3B4E]'>
                <div className='flexStart md:flex-row flex-col mb-8 w-full max-w-[1016px]'>
                    <div className='flex-1 flex flex-col justify-start mr-10'>
                        <img
                            src='src\assets\Isotipo_Envíopack.svg'
                            alt='enviopack'
                            className='w-[50px] object-contain'
                        />
                    </div>
                    <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                        {footerLinks.map((footerLinks) => (
                            <div key={footerLinks.key} className='flex flex-col ss:my-0 my-4'>
                                <h4 className='font-inter text-white text-lg font-normal mb-[30px]  hover'>
                                    {footerLinks.title}
                                </h4>
                                <ul>
                                    {footerLinks.links.map((link, name) => (
                                        <li
                                            key={link.name}
                                            className={`cursor-pointer font-inter text-[#ACB1BB]  ${
                                                name === footerLinks.links.length - 1 ? 'mb-0' : 'mb-[20px]'
                                            }`}>
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=' max-w-[1016px] w-full flex justify-between items-center md:flex-row flex-col pt-6'>
                    <div className='flex flex-row md:mt-0 mt-6'>
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                        <a className={`cursor-pointer font-inter text-[#6E7D91]`}>Privacy policy</a>
                    </div>

                    <p className='font-openSans font-normal text-center text-[14px] leading-[28px] text-white'>
                        © 2023 Envíopack. Todos los derechos reservados.{' '}
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;
