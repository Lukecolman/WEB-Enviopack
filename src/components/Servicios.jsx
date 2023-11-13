import React from 'react';
import { useTranslation } from 'react-i18next';
import { serviciosItems } from '../constants';

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <>
      {t('servicios.title')}
      <section className='sectionCenter bg-blue-100'>
        <div className='servicios-container'>
          <div className='section-header'>
            <span>{t('servicios.conoce')}</span>
            <h2>{t('servicios.ourServices')}</h2>
          </div>

          <div className='servicios-cards-container'>
  {serviciosItems.map((servicio, index) => (
    <div className='servicios-card' key={index}>
      <img className='servicios-image' src={servicio.image} alt={t('servicios.serviceImageAlt')} />
      <div className='servicios-info'>
        <div className="servicios-title">
          {t(`servicios.serviciosItems.${index}.title`)}
        </div>
        <div className="servicios-content">
          {t(`servicios.serviciosItems.${index}.content`)}
        </div>
      </div>
      <div className='servicios-link-container'>
        <a
          href={servicio.url}
          className="servicios-link">
          {t('servicios.learnMore')}
        </a>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </>
  );
};

export default Servicios;
