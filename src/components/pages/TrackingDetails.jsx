import React from 'react';
import { useTranslation } from 'react-i18next';
import { TrackingDetailsItems } from '../../components';

const TrackingDetails = ({ selectedCourier, trackingNumber, onChangeEstado }) => {
    const { t } = useTranslation();

    return (
        <section className='trackingDetails-section'>
            <div className='trackingDetails-container'>
                {/* HEADER */}
                <div className='trackingDetails-header'>
                    <img className='trackingDetails-truckIcon' src='./assets/icons/truckIcon.svg' alt='' />
                    <div className='trackingDetails-title'>
                        <p>{t('trackingPage.trackingDetails.header.title')}</p>
                        <span>{trackingNumber}</span>
                    </div>
                    <div className='trackingDetails-carrier-container'>
                        {t('trackingPage.trackingDetails.header.carrier')}
                        <div className='trackingDetails-carrier'>
                            <img src={selectedCourier.img} alt={selectedCourier.name} className='' />
                            <span className=''>{selectedCourier.name}</span>
                        </div>
                    </div>
                </div>

                {/* DETAILS */}
                <div className='trackingDetails-details-container'>
                    <TrackingDetailsItems
                        date='23 de Septiembre'
                        time='12:42 hs'
                        status={t('trackingPage.trackingDetails.shipmentDeliveredSuccessfully')}
                        disabled={true}
                    />
                    <TrackingDetailsItems
                        date='29 de Mayo'
                        time='11:26 hs'
                        status={t('trackingPage.trackingDetails.courierHasYourPackage')}
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='29 de Mayo'
                        time='11:26 hs'
                        status={t('trackingPage.trackingDetails.shipmentRetiredByCourier')}
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='24 de Mayo'
                        time='17:29 hs'
                        status={t('trackingPage.trackingDetails.shipmentReadyForDispatch')}
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='24 de Mayo'
                        time='17:16 hs'
                        status={t('trackingPage.trackingDetails.shipmentInSellerDepot')}
                        disabled={false}
                    />
                </div>

                {/* BOTON */}
                <button className='tracking-button' onClick={() => onChangeEstado('mainScreen')}>
                    {t('trackingPage.trackingDetails.button')}
                </button>
            </div>
        </section>
    );
};

export default TrackingDetails;
