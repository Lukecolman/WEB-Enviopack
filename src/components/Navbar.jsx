import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import {OverlayService} from "./Home/OverlayService";
import OverlayService from './Home/OverlayService';


const Navbar = () => {
  const { t } = useTranslation();
  const [openService, setOpenService] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className='navbar-inner'>
        <div className='logo-container'>
          <div className='logo'>
            <img src='/WEB-Enviopack/assets/imagotipo_enviopack.png' alt='Logotipo de Enviopack' />
          </div>
          <div className='logo-container'>
            <div className='relative'>
            <div
  onClick={() => setOpenService(!openService)}
  className='nav-item'
>
  <div className="nav-item-text">
    {t('navbar.services')}
  </div>
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.700049 1.3762C0.700049 1.5903 0.773689 1.77095 0.92097 1.91814L4.89084 5.92578C5.0716 6.11312 5.26574 6.2001 5.50005 6.2001C5.73436 6.2001 5.9352 6.11312 6.10925 5.93248L10.0791 1.91814C10.2264 1.77095 10.3 1.5903 10.3 1.3762C10.3 0.948007 9.95863 0.600098 9.53017 0.600098C9.31595 0.600098 9.12181 0.687075 8.96114 0.840958L5.49335 4.36019L2.03227 0.840958C1.87829 0.687075 1.68415 0.600097 1.46992 0.600097C1.04147 0.600097 0.700049 0.948006 0.700049 1.3762Z" fill="#3D4550"  className='icon-svg'/>
  </svg>

              </div>
              {openService && (
                <div className='submenu'>
                  <OverlayService/>

                </div>
              )}
            </div>
            <div className='nav-link'>
              <div className="nav-item-text">
                {t('navbar.rates')}
              </div>
            </div>
            <div className='nav-link'>
              <div className="nav-item-text">
                {t('navbar.trackShipment')}
              </div>
            </div>
            <div className='nav-link'>
              <div className="nav-item-text">
                {t('navbar.contact')}
              </div>
            </div>
          </div>
        </div>
        <div className='logo-container'>
          <div className='login-button'>
            <div className="login-text">
              {t('navbar.login')}
            </div>
          </div>
          <button className='signup-button  buttonBasics'>
            <div className="signup-text">
              {t('navbar.createAccount')}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
