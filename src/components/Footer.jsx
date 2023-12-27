import React from 'react';
import { footerLinks, socialMedia } from '../constants';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo-container'>
                        <img
                            src='assets\Isotipo_Envíopack.svg'
                            alt='enviopack'
                            className='footer-logo'
                        />
                    </div>
                    
                    <div className='footer-links-container'>
                        {footerLinks.map((footerLink) => (
                            <div key={footerLink.title} className='footer-link-section'>
                                <h4 className='footer-link-title'>
                                    {t(`footer.sections.${footerLink.title}.title`)}
                                </h4>
                                <ul>
                                    {footerLink.links.map((link) => (
                                        <li
                                            key={link.id}
                                            className='footer-link'
                                        >
                                            <a href={link.linkUrl} target="_blank" rel="noopener noreferrer">
                                                {t(link.linkKey)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SOCIAL MEDIA */}
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
                        <a className='footer-privacy'>{t('footer.privacyPolicy')}</a>
                    </div>

                    <p className='footer-rights'>{t('footer.allRightsReserved')}</p>
                </div>
            </section>
        </>
    );
};

export default Footer;
