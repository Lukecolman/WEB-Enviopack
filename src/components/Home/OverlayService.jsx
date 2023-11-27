import React from 'react';

const OverlayService = () => {
    const menuItems = [
        {
            orden: 1,
            tipo: 'texto',
            title: 'Fullpack',
            tag: {
                text: '',
                color: '',
            },
            description: 'Nos ocupamos de toda la cadena logística de tu negocio.',
            url: 'https://tu-enlace-fullpack.com', // Agrega la URL correspondiente
            icon: 'assets/icons/fullpack-icon.svg', // Agrega el ícono correspondiente
        },
        {
            orden: 2,
            tipo: 'texto',
            title: 'Colecta',
            tag: {
                text: '',
                color: '',
            },
            description: 'Retiramos paquetes de tu depósito y los distribuimos.',
            url: 'https://tu-enlace-colecta.com', // Agrega la URL correspondiente
            icon: 'assets/icons/collect-Icon.svg', // Agrega el ícono correspondiente
        },
        {
            orden: 3,
            tipo: 'texto',
            title: 'Despacho en sucursal',
            tag: {
                text: '',
                color: '',
            },
            description: 'Despachá desde la sucursal de correo más cercana.',
            url: 'https://tu-enlace-despacho.com', // Agrega la URL correspondiente
            icon: 'assets/icons/dispatch-icon.svg', // Agrega el ícono correspondiente
        },
        {
            orden: 4,
            tipo: 'texto',
            title: 'Same Day',
            tag: {
                text: '¡Próximamente!',
                color: 'text-emerald-700 bg-emerald-50',

            },
            description: 'Hacé tus envíos en el día, en grandes ciudades del país.',
            url: 'https://tu-enlace-same-day.com', // Agrega la URL correspondiente
            icon: 'assets/icons/sameDay-icon.svg', // Agrega el ícono correspondiente
        },
        // Puedes agregar más elementos según sea necesario
    ];

    const logisticPartners = [
        {
            bgColor: 'bg-red-700',
            image: "assets/carriersLogos/partners/Andreani.svg",
            alt: 'Andreani',
        },
        {
            bgColor: 'bg-gradient-to-tl from-cyan-600 to-blue-800',
            image: 'assets/carriersLogos/partners/Rayo entregas.svg',
            alt: 'Rayo Entregas',

        },
        {
            bgColor: 'bg-purple-800',
            image: 'assets/carriersLogos/partners/oca.svg',
            alt: 'Oca',
        },
        {
            bgColor: 'bg-blue-800',
            image: 'assets/carriersLogos/partners/smart-post.svg',
            alt: 'Smart Post',
        },
        {
            bgColor: 'bg-red-600',
            image: 'assets/carriersLogos/partners/Almafuerte.svg',
            alt: 'Almafuerte',
        },
        {
            bgColor: 'bg-gradient-to-b from-cyan-500 to-blue-600',
            image: 'assets/carriersLogos/partners/moova.svg',
            alt: 'Moova',
        },
        {
            bgColor: 'bg-red-600',
            image: "assets/carriersLogos/partners/Urbano.svg",
            alt: 'Urbano',
        },
        {
            bgColor: 'bg-fuchsia-800',
            image: 'assets/carriersLogos/partners/CCCargas.svg',
            alt: 'CCCargas',
        },
        {
            bgColor: 'bg-sky-800',
            image: 'assets/carriersLogos/partners/Integral Pack.svg',
            alt: 'Integral Pack',
        },
        {
            bgColor: 'bg-orange-600',
            image: 'assets/carriersLogos/partners/lionxpress.svg',
            alt: 'Lionxpress',
        },
        {
            bgColor: 'bg-red-600',
            image: "assets/carriersLogos/partners/D.svg",
            alt: 'D',
        },
        {
            bgColor: 'bg-blue-600',
            image: "assets/carriersLogos/partners/Chazki.svg",
            alt: 'Chazki',
        },
        {
            bgColor: 'bg-teal-500',
            image: 'assets/carriersLogos/partners/hop.svg',
            alt: 'Hop',
        },
        {
            bgColor: 'bg-blue-900',
            image: "assets/carriersLogos/partners/Cruz del Sur.svg",
            alt: 'Cruz del Sur',
        },
        {
            bgColor: 'bg-red-600',
            image: 'assets/carriersLogos/partners/fast-track.svg',
            alt: 'Fast Track',
        },
    ];

    // Ordena los elementos
    const elementosOrdenados = menuItems.sort((a, b) => a.orden - b.orden);
 
    const filas = Array.from({ length: Math.ceil(logisticPartners.length / 3) }, (v, i) =>
    logisticPartners.slice(i * 3, i * 3 + 3)
  );

    return (
        <div className='max-w-[683px] min-h-[464px] px-10 py-6 rounded-3xl shadow justify-center items-start gap-9 inline-flex bg-white'>
            <div className='w-[283px] flex-col justify-start items-start inline-flex '>
                {elementosOrdenados.map((elemento, index) => (
                    <div key={index} className='self-stretch py-3  justify-start items-start gap-4 inline-flex '>
                        {elemento.tipo === 'texto' && (
                            <a
                                href={elemento.url}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <div className='self-stretch p-3  justify-start items-start gap-4 inline-flex rounded-lg  hover:bg-ep-25'>
                                    <div className='w-6 h-6 relative '><img src={elemento.icon} alt="" /></div>
                                    <div className='grow shrink basis-0 flex-col justify-start items-start  inline-flex'>
                                        <div className="text-gray-700 text-base font-bold font-['DM Sans'] leading-normal ">
                                            {elemento.title}
                                            {elemento.tag && (
                                                <span
                                                    className={`px-2.5 py-0.5  rounded-xl ml-2 ${elemento.tag.color} text-xs font-medium font-['SF Pro Text'] leading-tight`}>
                                                    {elemento.tag.text}
                                                </span>
                                            )}
                                        </div>
                                        <div
                                            className={`self-stretch text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight tracking-tight`}>
                                            {elemento.description}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                ))}
            </div>


<div className='pt-3 flex-col justify-start items-start gap-3 inline-flex '>
      <div className='justify-start items-center gap-4 inline-flex'>
        <div className='h-6 flex-col justify-center items-center gap-2.5 inline-flex'><img src="src\assets\icons\logisticPartners-icon.svg" alt="" /></div>
        <div className="text-gray-700 text-base font-bold font-['DM Sans'] leading-normal">
          Partners logísticos
        </div>
      </div>
      <div className='px-12 py-7 bg-ep-25 rounded-3xl flex-col justify-start items-start gap-6 flex'>
        {filas.map((fila, index) => (
          <div key={index} className="flex justify-between items-center gap-6">
            {fila.map((partner, subIndex) => (
              <div key={subIndex} className={`w-9 h-9 p-1.5 ${partner.bgColor} rounded-[9px] justify-center items-center gap-2.5 flex`}>
                <img src={partner.image} alt={partner.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <a href="#" target='_blank' rel='noopener noreferrer'>
      <div className='justify-start items-center gap-2.5 inline-flex'>
        <div className="text-sky-500 text-base font-medium font-['DM Sans'] leading-normal">
          Conocer más
        </div>


        <img src='src\assets\icons\ep-forward-arrow-outline.svg' className='w-4 h-4 relative' />

      </div>
      </a>
    </div>


        </div>
    );
};

export default OverlayService;
