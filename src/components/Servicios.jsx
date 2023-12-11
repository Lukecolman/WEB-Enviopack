import React from 'react';
import { useTranslation } from 'react-i18next';
import { serviciosItems } from '../constants';
import Carousel from '/src/components/Home/Carousel.jsx';


const Servicios = () => {
  const { t } = useTranslation();

  return (
    <> 
      <section className='sectionCenter servicios-section '>
        <div className='servicios-container '>
          <div className='section-header white-text'>
            <span>{t('servicios.conoce')}</span>
            <h2>{t('servicios.ourServices')}</h2>
          </div>

          {/* <div className='servicios-cards-container bg bg-red-500'>
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
</div> */}

<div className='servicios-cards-container '>
<Carousel/>

  </div>
  {/* <Carousel/> */}

        </div>

      </section>
    </>
  );
};

export default Servicios;