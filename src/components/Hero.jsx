import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('hero.herobanner')}</div>
      <div className='hero-container'>
        <div className="hero-title font-['DM Sans']" 
        dangerouslySetInnerHTML={{ __html: t('hero.solutionTechnology') }}
        />
        <div
          className="hero-subtitle font-['DM Sans']"
          dangerouslySetInnerHTML={{ __html: t('hero.iaOrganizeShipments') }}
        />
        <button className='hero-button buttonBasics'>
          <span className="hero-button-text">
            {t('hero.createFreeAccount')}
          </span>
        </button>
        <img className='hero-image' src='./src/assets/hero.png' alt={t('hero.herobanner')} />
      </div>
    </>
  );
};

export default Hero;
