import React from 'react';
import { TrackingDetailsItems } from '../../components';

const TrackingDetails = ({ selectedCourier, onChangeEstado }) => {

    return (
        <section className='trackingDetails-section'>
            <div className='trackingDetails-container'>
                {/* HEADER */}
                <div className='trackingDetails-header'>
                    <img className='trackingDetails-truckIcon' src='./assets/icons/truckIcon.svg' alt='' />
                    <div className='trackingDetails-title'>
                        <p>Detalle del envío</p>
                        <span>EP43323432a</span>
                    </div>
                    <div className='trackingDetails-carrier-container'>
                        El correo que realizará la entrega es
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
                        status='El envío ha sido entregado exitosamente'
                        disabled={true}
                    />
                    <TrackingDetailsItems
                        date='29 de Mayo'
                        time='11:26 hs'
                        status='El correo ya tiene tu paquete'
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='29 de Mayo'
                        time='11:26 hs'
                        status='El envío fue retirado por el correo'
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='24 de Mayo'
                        time='17:29 hs'
                        status='El envío está listo para ser despachado'
                        disabled={false}
                    />
                    <TrackingDetailsItems
                        date='24 de Mayo'
                        time='17:16 hs'
                        status='El envío está en el depósito del vendedor'
                        disabled={false}
                    />
                </div>

                {/* BOTON */}
                <button className='tracking-button' onClick={() => onChangeEstado('mainScreen')}>
                    Volver a la búsqueda
                </button>
            </div>
        </section>
    );
};

export default TrackingDetails;
