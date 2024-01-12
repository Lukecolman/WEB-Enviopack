import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const Ecosistema = () => {
  const { t } = useTranslation();

  return (
    <section className='sectionCenter ecosistema-section'>
      <div className='ecosistema-container '>
        <div className='ecosistema-content'>
          <div className='ecosistema-header'>
            <span className='ecosistema-text'>{t('ecosistema.ourEcosystem')}</span>
            <h1 className='ecosistema-title'>
              {t('ecosistema.integrationsWith')}
              <br />
              <span className='ecosistema-highlight'>{t('ecosistema.ecommerceAndMarketplaces')}</span>
            </h1>
            <div className='ecosistema-description'>
              {t('ecosistema.connectOnlineChannels')}
            </div>
          </div>

          <Link to="/integrations" className='buttonSm'>
            <span>{t('ecosistema.connect')}</span>
          </Link>
        </div>

        <div className='ecosistema-image-container'>
          <img src='assets/logos.png' alt={t('ecosistema.logosAltText')} />
        </div>
      </div>
    </section>
  );
};

export default Ecosistema;
