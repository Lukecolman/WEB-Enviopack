// Beneficios.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { beneficiosItems } from '../constants';

const Beneficios = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='sectionCenter beneficios-section'>
        <div className='beneficios-container'>
          <div className='beneficios-inner'>
            <div className='beneficios-content'>
              <div className='section-header dark-text'>
                <span>{t('conoce')}</span>
                <h2>{t('porQueOperar')}</h2>
              </div>

              <div className='beneficios-title-container'>
                <div className='beneficios-cards-container'>
                  {beneficiosItems.map((beneficio, index) => (
                    <div className='beneficios-card' key={index}>
                      <div className='beneficios-icon-container'>
                        <div className='beneficios-icon-background'>
                          <div className='beneficios-icon'>
                            <div className='beneficios-icon-img'>
                              <img src={beneficio.icon} alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="beneficios-title">{t(`beneficiosItems.${index}.title`)}</div>
                      <div className="beneficios-content-text">
                        {t(`beneficiosItems.${index}.content`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beneficios;
