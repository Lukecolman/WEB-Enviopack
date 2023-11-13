import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [openService, setOpenService] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className='navbar-inner'>
        <div className='logo-container'>
          <div className='logo'>
            <img src='./src/assets/imagotipo_enviopack.png' alt='Logotipo de Enviopack' />
          </div>
          <div className='logo-container'>
            <div className='relative'>
              <div
                onClick={() => setOpenService(!openService)}
                className='nav-item'>
                <div className="nav-item-text">
                  {t('navbar.services')}
                </div>
                <img src='./src/assets/arrow.png' alt='Flecha' />
              </div>
              {openService && (
                <div className='submenu'>
                  {/* Aquí puedes poner los servicios o traducciones específicas */}
                  {t('navbar.serviceOptions')}
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
