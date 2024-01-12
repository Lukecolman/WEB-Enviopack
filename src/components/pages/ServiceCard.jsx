// ServiceCard.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const ServiceCard = ({ serviceIcon, serviceIconBg, serviceCarrier, duration, price, sourceBranch, destinationAddress, serviceDetails, enviopackInformation }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const { t } = useTranslation();
  const [arrowRotation, setArrowRotation] = useState(0); 


  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
    setArrowRotation(prevRotation => prevRotation + 180);
  };

  const handleContratar = () => {
    // Lógica para contratar
    console.log('Contratar servicio');

  };
    return (
    <div className='calculatorService-card-container'>
      {/* INFO DEL SERVICIO */}
      <div className='service-info-container'>
        <div className='service-carrier-info'>
          <div className={`${serviceIconBg} carrier-info-imgContainer`}>
            <img alt='Icono de la empresa' src={serviceIcon} />
          </div>
          <span>{serviceCarrier}</span>
        </div>

        <div className='service-duration-container'>
          <div className='service-duration-info '>
            <div className=" duration ">{duration}</div>
            <span>
              {t("ratesPage.serviceCards.cardInfo.days")}
            </span>
          </div>
        </div>

        <div className='service-price-container'>

            <div className="service-price-info">
                <span>$</span>
                {price}
            </div>
          <span className="service-iva">
            {t("ratesPage.serviceCards.cardInfo.tax")}
          </span>
        </div>

        <div className='service-branch-container '>
          <div className='service-branch-address-info'>
            <div className="service-branch-address-label ">
              {t("ratesPage.serviceCards.cardInfo.branch")}
            </div>
            <div className='service-branch-address-data'>
              <img src="assets/icons/calculatorFromBranchIcon.svg" alt="branch" />
              <span>
                {sourceBranch}
              </span>
            </div>
          </div>
        </div>

        <div className='service-address-container'>
          <div className='service-branch-address-info'>
            <div className="service-branch-address-label ">
              {t("ratesPage.serviceCards.cardInfo.address")}
            </div>
            <div className='service-branch-address-data'>
              <img src="assets/icons/calculatorAdressIcon.svg" alt="adress" />
              <span>
                {destinationAddress}
              </span>
            </div>
          </div>
        </div>
      </div>

       {/* SEPARADOR */}
       <div className='calculatorService-separator'/>


{/* DETALLE */}
<div className='calculatorService-details-container'>
  <div className=' details-buttons-container'>
  <div
      onClick={toggleDetails}
      className='details-button'>
      <span>
        {detailsVisible ? t("ratesPage.serviceCards.cardInfo.details.hide") : t("ratesPage.serviceCards.cardInfo.details.display")}
      </span>
      <img
              src='assets/icons/calculatorArrowDetails.svg'
              style={{ transform: `rotate(${arrowRotation}deg)` }}
              alt='Icono de detalles'
            />
    </div>
    <div
      onClick={handleContratar}
      className='contract-button'>
        {t("ratesPage.serviceCards.cardInfo.pickService")}
    </div>
  </div>

        {detailsVisible && (
          <div className='calculatorService-details-content'>
            {/* Detalles de servicio */}
            <div className='service-details-info serviceDetails-label'>
              <div className="service-details-label ">
              {t("ratesPage.serviceCards.cardInfo.details.detailsTitle")}
              </div>
              <span className="service-detail-text"
              dangerouslySetInnerHTML={{ __html: serviceDetails }}
              >
              </span>
            </div>

            {/* Información Envíopack */}
            <div className='service-details-info'>
              <div className="service-details-label">
              {t("ratesPage.serviceCards.cardInfo.details.information")}
              </div>
              <span className="service-detail-text">
                {enviopackInformation}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
