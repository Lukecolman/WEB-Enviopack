import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
// import "./App.css";
import './assets/main.scss'

import React from "react";
import {Navbar, Hero, Operadores, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA, Footer,} from "./components";
import CardCarousel from "./components/Home/CardCarousel";


const App = () => {
  return (
    <>
    <div >
        <Navbar/>
    </div>

    <div className="bg-slate-400 ml-auto mr-auto">
        <Hero/> 
        <Operadores/>
        <Beneficios/>
        <Servicios/>
        <Ecosistema/>
        <KPI/>
        {/* <section className="h-[600px] w-[100%] bg-red-950 flex justify-center items-center">
            <div className="w-[60px] h-[60px] bg-red-600 "></div>
        </section> */}
        <Testimonials/>
        {/* <CardCarousel/> */}
        <CTA/>
        <Footer/>
    </div>
      {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO
      - PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}

    
    </>
  );
};

export default App;
