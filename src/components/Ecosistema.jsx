import React from 'react';
import { useTranslation } from 'react-i18next';

const Ecosistema = () => {
  const { t } = useTranslation();

  return (
    <section className='sectionCenter'>
      <div className='ecosistema-container'>
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

          <button className='buttonSm'>
            <span>{t('ecosistema.connect')}</span>
          </button>
        </div>

        <div className='ecosistema-image-container'>
          <img src='./src/assets/logos.png' alt={t('ecosistema.logosAltText')} />
        </div>
      </div>
    </section>
  );
};

export default Ecosistema;
