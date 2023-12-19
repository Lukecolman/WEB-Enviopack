// import React from 'react'

// const Steps = () => {
//   return (
//     <>    
    
//     <div className="bg-red-200 w-full h-[874.17px] px-6 py-[60px] flex-col justify-start items-center gap-8 inline-flex">
//     <div className="self-stretch h-[60px] flex-col justify-start items-center gap-4 flex">
//         <div className="text-sky-950 text-xs font-bold font-['DM Sans']">🏷️ PASO A PASO</div>
//         <div className="w-[312px] text-center text-sky-950 text-[22px] font-semibold font-['Outfit']">¿Cómo funciona Colecta?</div>
//     </div>
//     <div className="self-stretch h-[662.17px] flex-col justify-start items-center gap-12 flex">
//         <div className="self-stretch h-[98px] flex-col justify-start items-center gap-3 flex">
//             <div className="w-[50px] h-[50px] justify-center items-center gap-2.5 inline-flex">
//                 <div className="w-[39px] h-10 relative" />
//             </div>
//             <div className="w-[280px] text-center text-sky-950 text-xs font-normal font-['DM Sans'] leading-[18px]">Solicitá este servicio en la sección Configuración de tu cuenta</div>
//         </div>
//         <div className="self-stretch h-[98px] flex-col justify-start items-center gap-3 flex">
//             <div className="w-[50px] h-[50px] justify-center items-center gap-2.5 inline-flex">
//                 <div className="w-10 h-10 relative" />
//             </div>
//             <div className="w-[280px] text-center text-sky-950 text-xs font-normal font-['DM Sans'] leading-[18px]">Prepará tus paquetes y nos avisas para que los retiremos</div>
//         </div>
//         <div className="self-stretch h-[98px] flex-col justify-start items-center gap-3 flex">
//             <div className="w-[50px] h-[50px] justify-center items-center gap-2.5 inline-flex">
//                 <div className="w-[45px] h-[46px] relative" />
//             </div>
//             <div className="w-[280px] text-center text-sky-950 text-xs font-normal font-['DM Sans'] leading-[18px]">Enviamos un vehículo acorde a la cantidad y tamaño de tus envíos</div>
//         </div>
//         <div className="self-stretch h-[98px] flex-col justify-start items-center gap-3 flex">
//             <div className="w-[50px] h-[50px] relative" />
//             <div className="w-[280px] text-center text-sky-950 text-xs font-normal font-['DM Sans'] leading-[18px]">Entregamos en 24/48 hs o coordinamos con el correo para envíos nacionales</div>
//         </div>
//         <div className="self-stretch h-[78.17px] flex-col justify-start items-center gap-3 flex">
//         <div className="w-[50px] h-[50px] relative" />
//             <div className="w-[280px] text-center text-sky-950 text-xs font-normal font-['DM Sans'] leading-[18px]">Tenés seguimiento constante tanto vos como tu cliente</div>
//         </div>
//     </div>
// </div>

// </>

//   )
// }

// export default Steps



import React from 'react'

const Steps = () => {

    const steps = [
        { iconClass: 'w-[39px] h-10', description: 'Solicitá el alta del servicio en la sección Configuración de tu cuenta', icon: 'assets/icons/steps-servicio.svg'  },
        { iconClass: 'w-10 h-10', description: 'Prepará tus paquetes y nos avisas para que los retiremos', icon: 'assets/icons/steps-paquetes.svg' },
        { iconClass: 'w-[45px] h-[46px]', description: 'Enviamos un vehículo acorde a la cantidad y tamaño de tus envíos', icon: 'assets/icons/steps-vehiculo.svg'  },
        { iconClass: 'w-10 h-10', description: 'Entregamos en 24/48 hs o coordinamos con el correo para envíos nacionales', icon: 'assets/icons/steps-tiempo.svg'  },
        { iconClass: 'w-[45px] h-[46px]', description: 'Tenés seguimiento constante tanto vos como tu cliente', icon: 'assets/icons/steps-seguimiento.svg'  },
      ];

  return (
    <>    
    <section className="steps-section ">
    <div className="steps-container ">
      <div className="section-header items-center">
        <span className="">🏷️ PASO A PASO</span>
        <h2 className="">¿Cómo funciona Colecta?</h2>
      </div>
      <div className="steps-content">
        {steps.map((step, index) => (
          <div key={index} className="steps-item">
            
             <img src={step.icon} alt="" />
            <span className="">
              {step.description}
            </span>
          </div>
        ))}
      </div>
    </div>
    </section>
</>

  )
}

export default Steps