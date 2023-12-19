import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
// import "./App.css";
import './assets/main.scss';

import React from 'react';
import { Navbar, Hero, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA, Footer } from './components';

import Header from './components/Colecta/Header';
import SubBeneficios from './components/Colecta/SubBeneficios';
import Steps from './components/Colecta/Steps';
import Carousel from './components/Home/Carousel';
import CTAPages from './components/Colecta/CTAPages';


import { beneficiosColectaIcon } from './constants';

import { beneficiosColectaText } from './lang/es_AR.json';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();
    const fillColor = '#38B3F8';
    const visibleItems = [0, 2];

    return (
        <>
            <Navbar />

            {/* 
    <div className="">

        <Hero/> 
        <Beneficios/>
        <Servicios/>
        <Ecosistema/>
        <KPI/>
        <Testimonials/>
        <CTA/>
    </div> */}

            {/* COLECTA */}
            <div>
                <Header />
                {/* <Servicios/> */}
                {/* <Beneficios/> */}

                <SubBeneficios
                    sectionTitle='Beneficios'
                    itemsIcon={beneficiosColectaIcon}
                    itemsText={beneficiosColectaText}
                />
                <Steps />
                
                {/* <Servicios /> */}

                <section className='sectionCenter servicios-section-light '>
                    <div className='servicios-container '>
                        <div className='section-header'>
                            <span>{t('servicios.conoce')}</span>
                            <h2>{t('servicios.ourServices')}</h2>
                        </div>

                        <div className='servicios-cards-container pages-servicios'>
                            <Carousel visibleItems={visibleItems} fillColor={fillColor} />
                        </div>
                    </div>
                </section>

                <CTAPages />
            </div>
            {/* <CTA /> */}
            {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}
            <Footer />
        </>
    );
};

export default App;
