import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { OverlayService } from './';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { t } = useTranslation();
    const [openService, setOpenService] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const handleBodyClick = () => {
            if (openService) {
                setOpenService(false);
            }
        };

        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [openService]);

    const handleMenuClick = (e) => {
        e.stopPropagation(); // Evita que el clic llegue al body y cierre el menú
        setOpenService(!openService);
    };

    return (
        <nav className='navbar-container'>
            <div className='navbar-inner'>
                <div className='logo-container'>
                    <Link to='/' className='logo z-50'>
                        <img src='assets/imagotipo_enviopack.svg' alt='Logotipo de Enviopack' />
                    </Link>
                </div>

                <div className='navbar-menu  flex-grow justify-between ml-3 hidden lg:flex'>
                    <div className='logo-container'>
                        <div className='relative'>
                            <div onClick={handleMenuClick} className='nav-item'>
                                <div className='nav-item-text'>{t('navbar.services')}</div>
                                <svg
                                    width='11'
                                    height='7'
                                    viewBox='0 0 11 7'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M0.700049 1.3762C0.700049 1.5903 0.773689 1.77095 0.92097 1.91814L4.89084 5.92578C5.0716 6.11312 5.26574 6.2001 5.50005 6.2001C5.73436 6.2001 5.9352 6.11312 6.10925 5.93248L10.0791 1.91814C10.2264 1.77095 10.3 1.5903 10.3 1.3762C10.3 0.948007 9.95863 0.600098 9.53017 0.600098C9.31595 0.600098 9.12181 0.687075 8.96114 0.840958L5.49335 4.36019L2.03227 0.840958C1.87829 0.687075 1.68415 0.600097 1.46992 0.600097C1.04147 0.600097 0.700049 0.948006 0.700049 1.3762Z'
                                        fill='#3D4550'
                                        className='icon-svg'
                                    />
                                </svg>
                            </div>
                            {openService && (
                                <div className='submenu'>
                                    <OverlayService />
                                </div>
                            )}
                        </div>
                        <div className='nav-link '>
                            <Link to='/rates' className='nav-item-text'>
                                {t('navbar.rates')}
                            </Link>
                        </div>

                        <div className='nav-link'>
                            <Link to='/tracking' className='nav-item-text'>
                                {t('navbar.trackShipment')}
                            </Link>
                        </div>

                        <div className='nav-link'>
                            <Link to='/contact' className='nav-item-text'>
                                {t('navbar.contact')}
                            </Link>
                        </div>
                    </div>

                    <div className='logo-container '>
                        <Link to='#' className='login-button'>
                            <div className='login-text'>{t('navbar.login')}</div>
                        </Link>

                        <Link to='#' className='signup-button  buttonBasics'>
                            <div className='signup-text'>{t('navbar.createAccount')}</div>
                        </Link>
                    </div>
                </div>

                {/* MOBILE */}
                <div className='lg:hidden flex flex-1 justify-end  '>
                    <img
                        src={toggle ? 'assets/ep-cross-outline.svg' : 'assets/Icon-menu.svg'}
                        alt='menu'
                        className='w-[28px] h-[20px] object-contain z-50 cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } bg-black-gradient absolute top-0 right-0  w-full rounded-b-xl sidebar bg-white pt-20 z-20 `}>
                        <div className='flex justify-end items-start flex-1 flex-col '>
                            <div className='logo-container-mobile'>
                                <div className='nav-item-mobile-container'>
                                    <div onClick={() => setOpenService(!openService)} className='nav-item-mobile'>
                                        <div className='nav-item-text'>{t('navbar.services')}</div>
                                        <svg
                                            width='11'
                                            height='7'
                                            viewBox='0 0 11 7'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M0.700049 1.3762C0.700049 1.5903 0.773689 1.77095 0.92097 1.91814L4.89084 5.92578C5.0716 6.11312 5.26574 6.2001 5.50005 6.2001C5.73436 6.2001 5.9352 6.11312 6.10925 5.93248L10.0791 1.91814C10.2264 1.77095 10.3 1.5903 10.3 1.3762C10.3 0.948007 9.95863 0.600098 9.53017 0.600098C9.31595 0.600098 9.12181 0.687075 8.96114 0.840958L5.49335 4.36019L2.03227 0.840958C1.87829 0.687075 1.68415 0.600097 1.46992 0.600097C1.04147 0.600097 0.700049 0.948006 0.700049 1.3762Z'
                                                fill='#3D4550'
                                                className='icon-svg'
                                            />
                                        </svg>
                                    </div>
                                    {openService && (
                                        <div className='submenu '>
                                            <OverlayService />
                                        </div>
                                    )}
                                </div>

                                <div className='nav-link '>
                                    <Link to='/rates' className='nav-item-text'>
                                        {t('navbar.rates')}
                                    </Link>
                                </div>

                                <div className='nav-link'>
                                    <Link to='/tracking' className='nav-item-text'>
                                        {t('navbar.trackShipment')}
                                    </Link>
                                </div>

                                <div className='nav-link'>
                                    <Link to='/contact' className='nav-item-text'>
                                        {t('navbar.contact')}
                                    </Link>
                                </div>

                                <div className='nav-buttons-mobile'>
                                    <Link to='#' className='login-button'>
                                        <div className='login-text'>{t('navbar.login')}</div>
                                    </Link>

                                    <Link to='#' className='signup-button  buttonBasics'>
                                        <div className='signup-text'>{t('navbar.createAccount')}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
