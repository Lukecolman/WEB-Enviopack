import React from 'react';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <>
            <section className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo-container'>
                        <img
                            src='src\assets\Isotipo_Envíopack.svg'
                            alt='enviopack'
                            className='footer-logo'
                        />
                    </div>
                    <div className='footer-links-container'>
                        {footerLinks.map((footerLink) => (
                            <div key={footerLink.key} className='footer-link-section'>
                                <h4 className='footer-link-title'>
                                    {footerLink.title}
                                </h4>
                                <ul>
                                    {footerLink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`footer-link ${index === footerLink.links.length - 1 ? 'footer-link-last' : ''}`}>
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='footer-social'>
                        {socialMedia.map((social) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className='footer-social-icon'
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                        <a className='footer-privacy'>Privacy policy</a>
                    </div>

                    <p className='footer-rights'>
                        © 2023 Envíopack. Todos los derechos reservados.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;