import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className='cta-container'>
      <div className="cta-title">
        {t('cta.createFreeAccount')}
      </div>
      <div className='cta-button-container'>
        <div className='buttonSm'>
          <span>{t('cta.getStarted')}</span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
