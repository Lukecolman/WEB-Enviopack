import { useState } from "react";
// import reactLogo from './assets/react.svg'
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import {Navbar, Hero, Operadores, ConoceOperar, ConoceServicios, NuestroEcosistema, KPI, Testimonials, CTA, Footer,} from "./components";
import CardCarousel from "./components/Home/CardCarousel";

const App = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>

    <div className="bg-slate-400 ml-auto mr-auto">
        <Hero/>
        <Operadores/>
        <ConoceOperar/>
        <ConoceServicios/>
        <NuestroEcosistema/>
        <KPI/>
        <Testimonials/>
        <CTA/>
        <Footer/>
        <CardCarousel/>
    </div>
      {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO
      - PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}

     

      {/* 
<div className="w-[1513px] h-[1482px] relative">
    <div className="left-[592.07px] top-[1246px] absolute text-sky-950 text-lg font-normal font-['DM Sans'] leading-relaxed">📦 Nuestra red de operadores logísticos</div>
    <div className="w-[1512px] px-20 left-[1px] top-[1326px] absolute justify-start items-center gap-[100px] inline-flex">
        <div className="w-[107px] h-[22px] pr-[0.81px] justify-center items-center gap-[4.81px] flex">
            <div className="w-[21.92px] h-[22px] relative flex-col justify-start items-start flex" />
        </div>
        <img className="w-[97px] h-[15px]" src="https://via.placeholder.com/97x15" />
        <div className="w-[89.33px] h-[19.02px] relative">
            <div className="w-[80.35px] h-[6.84px] left-[4.70px] top-[12.18px] absolute" />
        </div>
        <div className="w-[69.55px] h-[15.02px] relative">
        </div>
        <div className="w-[80.37px] h-[32.05px] relative">
            <div className="w-[80.35px] h-[6.84px] left-0 top-[25.22px] absolute" />
        </div>
        <div className="w-[42.74px] h-[23.51px] relative flex-col justify-start items-start inline-flex">
            <div className="w-[42.74px] h-[25.98px] opacity-0" />
        </div>
        <img className="w-[52px] h-[23px]" src="https://via.placeholder.com/52x23" />
        <img className="w-[82px] h-[17px]" src="https://via.placeholder.com/82x17" />
        <div className="w-[38.70px] h-[17.05px] relative flex-col justify-start items-start inline-flex">
            <div className="w-[38.69px] h-[17.05px] relative">
                <div className="w-[11.25px] h-[11.19px] left-[16.87px] top-[4.80px] absolute bg-white rounded-full" />
            </div>
        </div>
        <img className="w-[110px] h-[23px]" src="https://via.placeholder.com/110x23" />
    </div>
    <div className="left-[290.63px] top-[157.28px] absolute flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-[848px] text-center text-gray-700 text-[64px] font-bold font-['DM Sans'] leading-[74px]">La solución tecnológica<br/>para optimizar tu logística e-commerce</div>
        <div className="w-[709.14px] text-center text-gray-700 text-xl font-normal font-['DM Sans'] leading-loose">IA para organizar todos tus envíos, darles seguimiento en tiempo real<br/>y conocer tu rendimiento.</div>
        <div className="px-7 py-4 bg-blue-500 rounded-[40px] justify-center items-center gap-2 inline-flex">
            <div className="text-white text-lg font-medium font-['DM Sans'] leading-7">Creá tu cuenta gratis</div>
        </div>
        <img className="w-[932.87px] h-[542.98px]" src="https://via.placeholder.com/933x543" />
    </div>
</div> */}

      {/* 

<div className="w-[1512px] h-[784.17px] p-[124px] bg-neutral-50 flex-col justify-start items-center gap-20 inline-flex">
    <div className="self-stretch h-[106.17px] flex-col justify-start items-start gap-6 flex">
        <div className="w-[110px] h-[23px] text-sky-950 text-sm font-bold font-['DM Sans'] leading-[18px]">💡 CONOCÉ</div>
        <div className="w-[575px] h-[59.17px] text-sky-950 text-[40px] font-semibold font-['Outfit'] leading-[52px] ">Por qué operar con Envíopack</div>
    </div>
    <div className="flex-col justify-start items-start gap-[62px] flex">
        <div className="w-[1264px] justify-between items-center inline-flex">
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] p-3 left-0 top-0 absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                    </div>
                    <div className="w-[27.45px] h-[24.17px] left-[14.12px] top-[16px] absolute" />
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Entregas en el día</div>
                <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Enviá en el día a tus compradores<br/>en grandes ciudades.</div>
            </div>
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] p-3 left-0 top-0 absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                    </div>
                    <div className="w-[26px] h-[26px] left-[14.12px] top-[14px] absolute">
                        <div className="w-0.5 h-0.5 left-[20px] top-[18px] absolute bg-sky-100 rounded-full" />
                    </div>
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Cobertura en todo el país</div>
                <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Contamos con la mayor red<br/>de operadores logísticos.</div>
            </div>
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] left-0 top-0 absolute bg-sky-100 rounded-[27.50px]">
                        <div className="left-[12px] top-[12px] absolute justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                        <div className="w-7 h-7 left-[12.13px] top-[13px] absolute" />
                    </div>
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Rápida integración</div>
                <div className="text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Conectá tus canales de venta online<br/>de manera simple y ágil.</div>
            </div>
        </div>
        <div className="w-[1264px] justify-between items-center inline-flex">
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] p-3 left-0 top-0 absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                    </div>
                    <div className="w-6 h-6 left-[15.12px] top-[15px] absolute" />
                    <div className="w-2.5 h-2.5 left-[32.12px] top-[30px] absolute" />
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Personalizá tus envíos</div>
                <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Establecé tarifas y reglas<br/>para tus envíos.</div>
            </div>
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] p-3 left-0 top-0 absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                    </div>
                    <div className="w-[27.45px] h-[24.17px] left-[14.12px] top-[16px] absolute" />
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Solución logística propia</div>
                <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Rayo Entregas, nuestra solución<br/>de útlima milla. </div>
            </div>
            <div className="px-20 pt-12 pb-8 bg-white rounded shadow flex-col justify-start items-center gap-1 inline-flex">
                <div className="w-[55px] h-[55px] relative">
                    <div className="w-[55px] h-[55px] p-3 left-0 top-0 absolute bg-sky-100 rounded-[27.50px] justify-center items-center inline-flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="w-[31px] h-[31px] relative" />
                        </div>
                    </div>
                    <div className="w-[26px] h-[26px] left-[14.12px] top-[14px] absolute" />
                </div>
                <div className="text-center text-sky-950 text-lg font-bold font-['DM Sans'] leading-normal">Plataforma inteligente</div>
                <div className="w-[226px] text-center text-sky-950 text-sm font-normal font-['DM Sans'] leading-[18px]">Inteligencia Artificial para optimizar operaciones y procesos.</div>
            </div>
        </div>
    </div>
</div> */}
    </>
  );
};

export default App;
