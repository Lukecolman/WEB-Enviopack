import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
// import "./App.css";
import './assets/main.scss'

import React from "react";
import {Navbar, Hero, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA, Footer, } from "./components";
import OverlayService from "./components/Home/OverlayService";

import CardCarousel from "./components/Home/CardCarousel";
import Carousel from '/src/components/Home/Carousel.jsx';


const App = () => {
  return (
    <>
    <div >
        <Navbar/>
    </div>

    <div className="">

        <Hero/> 
        <Beneficios/>
        <Servicios/>
        <Ecosistema/>
        <KPI/>
        <Testimonials/>
        <CTA/>
        <Footer/>
    </div>
      {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO
      - PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}

    
    </>
  );
};

export default App;
