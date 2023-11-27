// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { footerLinks, socialMedia } from '../constants';

// const Footer = () => {
//     const { t } = useTranslation();

//     // Función para mapear los enlaces
//     const mapLinks = (sectionKey) => {
//         const links = t(`footer.sections.${sectionKey}.links`, { returnObjects: true });

//         return links.map((link) => (
//             <li
//                 key={link.name}
//                 className={`footer-link ${link === links.slice(-1)[0] ? 'footer-link-last' : ''}`}
//             >
//                 {link.name}
//             </li>
//         ));
//     };

//     return (
//         <section className='footer-container'>
//             <div className='footer-top'>
//                 <div className='footer-logo-container'>
//                     <img
//                         src='./src/assets/Isotipo_Envíopack.svg'
//                         alt='enviopack'
//                         className='footer-logo'
//                     />
//                 </div>
//                 <div className='footer-links-container'>
//                     {Object.keys(t('footer.sections')).map((sectionKey) => (
//                         <div key={sectionKey} className='footer-link-section'>
//                             <h4 className='footer-link-title'>
//                                 {t(`footer.sections.${sectionKey}.title`)}
//                             </h4>
//                             <ul>{mapLinks(sectionKey)}</ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className='footer-bottom'>
//                 <div className='footer-social'>
//                     {socialMedia.map((social) => (
//                         <img
//                             key={social.id}
//                             src={social.icon}
//                             alt={social.id}
//                             className='footer-social-icon'
//                             onClick={() => window.open(social.link)}
//                         />   
//                     ))}
//                     <a className='footer-privacy'>Privacy policy</a>
//                 </div>

//                 <p className='footer-rights'>{t('footer.allRightsReserved')}</p>
//             </div>
//         </section>
//     );
// };

// export default Footer;


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
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`footer-link ${index === footerLink.links.length - 1 ? 'footer-link-last' : ''}`}
                  >
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.name}
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
                        <a className='footer-privacy'>Privacy policy</a>
                    </div>

                    <p className='footer-rights'>{t('footer.allRightsReserved')}</p>
                </div>
            </section>
        </>
    );
};

export default Footer;