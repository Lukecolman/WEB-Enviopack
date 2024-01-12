import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { TrackingDetails } from '../components';
import { carriersIcons } from '../constants';

const Tracking = () => {
    const [estado, setEstado] = useState('mainScreen'); // Agrega estado para controlar las vistas
    const [loading, setLoading] = useState(false); // Agrega estado para controlar el loader
    const [selectedCourier] = useState(carriersIcons[2]); //Envia el carrier elegido a al componente TrackingDetails

    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: {
            trackingNumber: '',
        },
        onSubmit: (values) => {
            // Simulación de carga de datos (
            setLoading(true);
            setTimeout(() => {
                // Lógica para determinar si mostrar la página de detalles o de error
                const mostrarDetalles = true;
                setEstado(mostrarDetalles ? 'details' : 'error');
                setLoading(false);
            }, 3000); // Simulación de 3 segundos de carga
        },
    });

    const onChangeEstado = (newEstado) => {
        console.log('Cambiando estado a:', newEstado);
        setEstado(newEstado);
    };

    return (
        <div>
            <section className='sectionCenter'>
                {estado === 'mainScreen' && (
                    // Vista de carátula
                    <div className='tracking-container'>
                        <div className='tracking-header-container'>
                            <div className='tracking-header-title'>{t('trackingPage.mainScreen.title')}</div>
                            <div className='tracking-header-content'>{t('trackingPage.mainScreen.description')}</div>
                            <img src='assets/icons/arrowTracking.svg' className='tracking-header-img' />
                        </div>
                        <form className='tracking-form' onSubmit={formik.handleSubmit}>
                            <label>{t('trackingPage.mainScreen.form.label')}</label>
                            <input
                                id='trackingNumber'
                                name='trackingNumber'
                                type='text'
                                minLength={5}
                                onChange={formik.handleChange}
                                value={formik.values.trackingNumber}
                                placeholder={t('trackingPage.mainScreen.form.placeholder')}
                            />
                            <div className='tracking-button-container'>
                                <button disabled={!formik.dirty} className='tracking-button' type='submit'>
                                    {loading ? (
                                        <img src='assets/spinnerWhite.svg' className='w-5 animate-spin' />
                                    ) : (
                                        <span>{t('trackingPage.mainScreen.form.button')}</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* ERROR */}
                {estado === 'error' && (
                    // Vista de error
                    <div className='tracking-error-section'>
                        <div className='tracking-error-container'>
                            <div className='tracking-header-error'>
                                <img src='assets/icons/tracking-error-icon.svg' alt='error' />
                                <div className='error-title'>{t('trackingPage.errorScreen.title')}</div>
                                <div className='error-content'>{t('trackingPage.errorScreen.description')}</div>
                            </div>
                            <button className='tracking-button' onClick={() => setEstado('mainScreen')}>
                                {t('trackingPage.errorScreen.button')}
                            </button>
                        </div>
                    </div>
                )}

                {/* TRACKING DETAILS */}
                {estado === 'details' && (
                    <TrackingDetails
                        selectedCourier={selectedCourier}
                        onChangeEstado={(newEstado) => setEstado(newEstado)}
                        trackingNumber={formik.values.trackingNumber}
                    />
                )}
            </section>
        </div>
    );
};

export default Tracking;
