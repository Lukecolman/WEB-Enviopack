import React from 'react';
import { useFormik } from 'formik';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const { t } = useTranslation();

    const companyTypes = [
        t('contactPage.companyType.option1'),
        t('contactPage.companyType.option2'),
        t('contactPage.companyType.option3'),
        t('contactPage.companyType.option4'),
    ];

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            companyType: '',
            estimatedShipments: '',
            message: '',
            acceptTerms: false,
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const options = [
        { value: 'option1', label: t('contactPage.estimatedShipments.option1') },
        { value: 'option2', label: t('contactPage.estimatedShipments.option2') },
        // Añadir más opciones según sea necesario
    ];

    return (
        <>
            <section className='contactForm-section'>
                <img className='contactForm-bgCircle' src='assets/circle-small.png' alt='circle' />
                <div className='contactForm-container'>
                    <div className='contactForm-header'>
                        <h2>{t('contactPage.header.title')}</h2>
                        <p>{t('contactPage.header.description')}</p>
                    </div>

                    <form className='contactForm' onSubmit={formik.handleSubmit}>
                        {/* NOMBRE */}
                        <div className='input-container input-container-flex'>
                            <label htmlFor='nombre'>{t('contactPage.name')}*</label>
                            <input
                                id='Nombre'
                                name='name'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.nombre}
                                placeholder={t('contactPage.name')}
                            />
                        </div>

                        {/* APELLIDO */}
                        <div className='input-container input-container-flex'>
                            <label htmlFor='lastName'>{t('contactPage.lastName')}*</label>
                            <input
                                id='lastName'
                                name='lastName'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.apellido}
                                placeholder={t('contactPage.lastName')}
                            />
                        </div>

                        {/* EMAIL */}
                        <div className='input-container input-container-flex'>
                            <label htmlFor='email'>{t('contactPage.email')}*</label>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder={t('contactPage.email')}
                            />
                        </div>

                        {/* TELEFONO */}

                        <div className=' input-container input-container-flex'>
                            <label htmlFor='phoneNumber'>{t('contactPage.phone.label')}*</label>
                            <input
                                type='tel'
                                id='phoneNumber'
                                name='phoneNumber'
                                pattern='[0-9]{10,}'
                                required
                                onChange={formik.handleChange}
                                placeholder={t('contactPage.phone.placeholder')}
                            />
                        </div>

                        {/* NOMBRE DE EMPRESA */}
                        <div className='input-container'>
                            <label htmlFor='companyName'>{t('contactPage.companyName')}*</label>
                            <input
                                id='companyName'
                                name='companyName'
                                type='text'
                                onChange={formik.handleChange}
                                value={formik.values.companyName}
                                placeholder={t('contactPage.companyName')}
                            />
                        </div>

                        {/* TIPO DE EMPRESA*/}
                        <div className='input-container input-container-flex'>
                            <label htmlFor='enviosEstimados'>{t('contactPage.companyType.label')}*</label>
                            <div className='radio-container'>
                                {companyTypes.map((type) => (
                                    <label key={type} className='radio-label'>
                                        <input
                                            className='radio-input'
                                            type='radio'
                                            id={type.toLowerCase()}
                                            name='companyType'
                                            value={type}
                                            checked={formik.values.companyType === type}
                                            onChange={formik.handleChange}
                                        />
                                        <span>{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* ENVIOS ESTIMADOS */}
                        <div className='input-container input-container-flex'>
                            <label htmlFor='estimatedShipments'>{t('contactPage.estimatedShipments.label')}*</label>
                            <select
                                id='estimatedShipments'
                                name='estimatedShipments'
                                onChange={formik.handleChange}
                                value={formik.values.estimatedShipments}>
                                <option value='' label={t('contactPage.estimatedShipments.placeholder')} />
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* MENSAJE */}
                        <div className='input-container'>
                            <label htmlFor='message'>{t('contactPage.message.label')}*</label>
                            <textarea
                                id='message'
                                name='message'
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                placeholder={t('contactPage.message.placeholder')}
                            />
                        </div>

                        {/* TERMINOS */}
                        <div className='terminos-container'>
                            <input
                                id='acceptTerms'
                                name='acceptTerms'
                                type='checkbox'
                                className=''
                                onChange={formik.handleChange}
                                checked={formik.values.acceptTerms}
                            />
                            <label htmlFor='acceptTerms'>
                                <Trans
                                    i18nKey='contactPage.acceptTerms'
                                    components={{ Link1: <Link to='/#' />, Link2: <Link to='/#' /> }}
                                />
                            </label>
                        </div>

                        {/* BUTTON */}
                        <button className='form-button' type='submit'>
                            {t('contactPage.sendButton')}
                        </button>
                    </form>
                </div>
                <div className='contactForm-img-container'>
                    <img src='assets/BNBA1h-NgdY.jpg' alt='' srcset='' />
                </div>
            </section>
        </>
    );
};

export default ContactForm;
