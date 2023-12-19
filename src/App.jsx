import { useState } from 'react';
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
// import "./App.css";
import './assets/main.scss';

import React from 'react';
import { Navbar, Hero, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA, Footer } from './components';


const App = () => {


    return (
        <>
            <Navbar />

            
    <div className="">

        <Hero/> 
        <Beneficios/>
        <Servicios/>
        <Ecosistema/>
        <KPI/>
        <Testimonials/>
        <CTA/>
    </div>


            {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}
            <Footer />
        </>
    );
};

export default App;
