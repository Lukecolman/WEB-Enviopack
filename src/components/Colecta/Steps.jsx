import React from 'react';
import { useTranslation } from 'react-i18next';

const Steps = ({ icons, description }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="steps-section ">
        <div className="steps-container ">
          <div className="section-header items-center">
            <span>
            {t(description.stepsHeader.subtitle)}
              </span>
            <h2>
              {t(description.stepsHeader.title)}
            </h2>
          </div>
          <div className="steps-content">
            {icons.map((step, index) => (
              <div key={index} className="steps-item">
                <img src={step.icon} alt={step.alt} />
                <span className="">
                {t(description.steps[index].description)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
