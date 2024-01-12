import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { carrierSimpleIcons } from '../../constants';

const Calculator = () => {
    const { t } = useTranslation();

    const [sourceNumber, setSourceNumber] = useState('');
    const [destinationNumber, setDestinationNumber] = useState('');
    const [lengthMeasurement, setLengthMeasurement] = useState('');
    const [heightMeasurement, setHeightMeasurement] = useState('');
    const [widthMeasurement, setWidthMeasurement] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchError, setSearchError] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleDetails = () => {
        setDetailsVisible(!detailsVisible);
    };

    const handleContratar = () => {
        console.log('Contratar servicio');
    };

    const [sortArrowRotated, setSortArrowRotated] = useState(false);

    const handleSort = (criteria) => {
        console.log(`Ordenar por ${criteria}`);
    };

    const handleSearch = () => {
        // Lógica para la búsqueda

        // Realizar acciones adicionales al hacer clic en el botón
        setLoading(true);

        // Simulación de una llamada a la API
        setTimeout(() => {
            setLoading(false);
            // Mostrar tarjetas
            setDetailsVisible(true);
            setSearchError(false);
        }, 2000); // Simulación de carga

        // Simulación de un error
        setSearchError(false);
    };

    //Precio aforado
    const [chargeableWeight, setChargeableWeight] = useState(5);
    useEffect(() => {
        // Realiza el cálculo y actualiza el estado del peso aforado
        const calculatedWeight = (lengthMeasurement * heightMeasurement * widthMeasurement) / 4000;
        setChargeableWeight(calculatedWeight);
    }, [lengthMeasurement, heightMeasurement, widthMeasurement]);

    const serviceData = [
        {
            serviceIcon: carrierSimpleIcons[11].img,
            serviceCarrier: carrierSimpleIcons[11].name,
            serviceIconBg: 'bg-[#643995]',
            duration: '4',
            price: '1.220',
            sourceBranch: '14 SEPTIEMBRE',
            destinationAddress: '18 SEPTIEMBRE',
            serviceDetails:
                'Entrega estimada entre 2 a 3 días <br /> Depósito en un punto Drop Off <br /> Entrega en punto Drop Off <br /> Información Envíopack',
            enviopackInformation:
                'Seguimiento del envío a través de la web en tiempo real. Atención al cliente vía web disponible de lunes a viernes de 9 a 20 horas. El tiempo de tránsito se calcula considerando exclusivamente días hábiles. Consultar consejos de embalaje. Comprueba la lista de artículos prohibidos.',
        },

        {
            serviceIcon: carrierSimpleIcons[1].img,
            serviceCarrier: carrierSimpleIcons[1].name,
            serviceIconBg: 'bg-red-600',
            duration: '3',
            price: '1.220',
            sourceBranch: '14 SEPTIEMBRE',
            destinationAddress: '18 SEPTIEMBRE',
            serviceDetails: '',
            enviopackInformation: '',
        },
        {
            serviceIcon: carrierSimpleIcons[12].img,
            serviceCarrier: carrierSimpleIcons[12].name,
            serviceIconBg: 'bg-gradient-to-tl from-cyan-600 to-blue-800',
            duration: '2',
            price: '1.220',
            sourceBranch: '14 SEPTIEMBRE',
            destinationAddress: '18 SEPTIEMBRE',
            serviceDetails: '',
            enviopackInformation: '',
        },
        {
            serviceIcon: carrierSimpleIcons[7].img,
            serviceCarrier: carrierSimpleIcons[7].name,
            serviceIconBg: 'bg-teal-500',
            duration: '5',
            price: '1.220',
            sourceBranch: '14 SEPTIEMBRE',
            destinationAddress: '18 SEPTIEMBRE',
            serviceDetails: '',
            enviopackInformation: '',
        },
    ];

    const formik = useFormik({
        initialValues: {
            sourceNumber: '',
            destinationNumber: '',
            lengthMeasurement: '',
            heightMeasurement: '',
            widthMeasurement: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        onSubmit: (values) => {
            console.log(values);
            handleSearch();
        },
    });

    return (
        <section className='calculator-section'>
            <form onSubmit={formik.handleSubmit} className='calculator-container'>
                <div className='calculator-header-container'>
                    <h3 className='calculator-header-title'>{t('ratesPage.calculator.header.title')}</h3>
                    <p className='calculator-header-text'>{t('ratesPage.calculator.header.text')}</p>
                </div>

                <div className='calculator-postalCode-container'>
                    <label className='calculator-input-label'>{t('ratesPage.calculator.form.origin.label')}</label>
                    <input
                        //se aplica Tel ya que permite usar maxLength
                        type='tel'
                        pattern='[0-9]{4}'
                        className='calculator-input'
                        value={sourceNumber}
                        onChange={(e) => setSourceNumber(e.target.value)}
                        maxLength={4}
                        placeholder={t('ratesPage.calculator.form.origin.span')}
                        required
                    />
                </div>

                <div className='calculator-postalCode-container'>
                    <label className='calculator-input-label'>{t('ratesPage.calculator.form.destination.label')}</label>
                    <input
                        //se aplica Tel ya que permite usar maxLength
                        type='tel'
                        pattern='[0-9]{4}'
                        maxLength={4}
                        className='calculator-input'
                        name='sourceNumber'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sourceNumber}
                        placeholder={t('ratesPage.calculator.form.destination.span')}
                        required
                    />
                </div>

                <div className='grid grid-cols-3 gap-3'>
                    <div className='calculator-measuredPrice-container'>
                        <label className='calculator-input-label'>{t('ratesPage.calculator.form.length.label')}</label>
                        <input
                            type='number'
                            className='calculator-measuredPrice-input'
                            value={lengthMeasurement}
                            pattern='[0-9]'
                            required
                            onChange={(e) => setLengthMeasurement(e.target.value)}
                        />
                        <span className='calculator-measuredPrice-input-span'>
                            {t('ratesPage.calculator.form.measuredPriceSpan')}
                        </span>
                    </div>

                    <div className='calculator-measuredPrice-container'>
                        <label className='calculator-input-label'>{t('ratesPage.calculator.form.height.label')}</label>
                        <input
                            type='number'
                            className='calculator-measuredPrice-input'
                            value={heightMeasurement}
                            pattern='[0-9]'
                            required
                            onChange={(e) => setHeightMeasurement(e.target.value)}
                        />
                        <span className='calculator-measuredPrice-input-span'>
                            {t('ratesPage.calculator.form.measuredPriceSpan')}
                        </span>
                    </div>

                    <div className='calculator-measuredPrice-container'>
                        <label className='calculator-input-label'>{t('ratesPage.calculator.form.width.label')}</label>
                        <input
                            type='number'
                            className='calculator-measuredPrice-input pr-9'
                            value={widthMeasurement}
                            pattern='[0-9]'
                            required
                            onChange={(e) => setWidthMeasurement(e.target.value)}
                        />
                        <span className='calculator-measuredPrice-input-span'>
                            {t('ratesPage.calculator.form.measuredPriceSpan')}
                        </span>
                    </div>
                </div>

                <div className='measuredPrice-container'>
                    <div className='measuredPrice-label'>
                        {t('ratesPage.calculator.form.chargeableWeight.label')}
                        <div className='tooltip'>
                            <img className='tooltip-img' src='assets/info-Icon.svg' alt='info' />
                            <div className='tooltip-text'>
                                <div className='tooltip-point' />
                                <span>{t('ratesPage.calculator.form.chargeableWeight.tooltip')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='measuredPrice-total'>
                        {chargeableWeight % 1 !== 0
                            ? chargeableWeight.toFixed(2)
                            : parseFloat(chargeableWeight).toFixed(0)}{' '}
                        kg
                    </div>
                </div>

                <button type='submit' className='calculator-button' onClick={handleSearch}>
                    {t('ratesPage.calculator.form.searchButton')}
                </button>
            </form>

            {/* CONTAINER DE TARJETAS */}
            <div className='calculator-serviceCardContainer'>
                {/* Carátula */}
                {!loading && !detailsVisible && !searchError && (
                    <div className='calculator-main-container '>
                        <div className='calculator-defaultStatus-container'>
                            <img
                                src='assets/calculatorMainIcon.svg'
                                alt='Main Icon'
                                className='calculator-defaultStatus-icon'
                            />
                            <div className=' calculator-defaultStatus-title  '>
                                {t('ratesPage.calculator.mainScreen.title')}
                            </div>
                            <div className='calculator-defaultStatus-content'>
                                {t('ratesPage.calculator.mainScreen.content')}
                            </div>
                        </div>
                    </div>
                )}

                {/* Loader */}
                {loading && !detailsVisible && !searchError && (
                    <div className='calculator-main-container'>
                        <img src='assets/SpinnerBlue.svg' alt='Spinner' className='calculator-spinner' />
                    </div>
                )}

                {/* Tarjetas */}
                {detailsVisible && !searchError && (
                    <>
                        {/* Ordenar por */}
                        <div className='calculator-orderDropdown'>
                            <div onClick={toggleDropdown} className='calculator-orderDropdown-toggle'>
                                <span>{t('ratesPage.serviceCards.dropdownOrder.order')}</span>
                                <img
                                    className={`rotate-${dropdownOpen ? '180' : '0'}`}
                                    src='assets/icons/calculatorOrderArrow.svg'
                                />
                            </div>

                            {dropdownOpen && (
                                <div className='calculator-dropdownOpen'>
                                    <span onClick={() => handleSort('economico')}>
                                        {t('ratesPage.serviceCards.dropdownOrder.economic')}
                                    </span>
                                    <span onClick={() => handleSort('rapido')}>
                                        {t('ratesPage.serviceCards.dropdownOrder.fastest')}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Tarjetas de servicio */}
                        {serviceData.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                toggleDetails={toggleDetails}
                                handleContratar={handleContratar}
                            />
                        ))}
                    </>
                )}

                {/* Mensaje de error de búsqueda */}
                {searchError && (
                    <div className='calculator-main-container'>
                        <div className='calculator-errorStatus'>
                            <img src='assets/calculatorErrorIcon.svg' alt='Error Icon' />
                            <div className='calculator-errorStatus-title'>
                                {t('ratesPage.calculator.errorScreen.title')}
                            </div>
                            <div className='calculator-errorStatus-content'>
                                {t('ratesPage.calculator.errorScreen.content')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Calculator;
