
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const OverlayService = () => {
    const { t } = useTranslation();
    
    const menuItems = [
        {
            orden: 1,
            type: 'texto',
            title: t('overlayService.Fullpack.title'),
            tag: {
                text: t('overlayService.Fullpack.text'),
                color: '',
            },
            description: t('overlayService.Fullpack.description'),
            url: '/fullpack',
            icon: 'assets/icons/fullpack-icon.svg',
        },
        {
            orden: 2,
            type: 'texto',
            title: t('overlayService.Collection.title'),
            tag: {
                text: t('overlayService.Collection.text'),
                color: '',
            },
            description: t('overlayService.Collection.description'),
            url: '/collect',
            icon: 'assets/icons/collect-Icon.svg',
        },
        {
            orden: 3,
            type: 'texto',
            title: t('overlayService.BranchDispatch.title'),
            tag: {
                text: t('overlayService.BranchDispatch.text'),
                color: '',
            },
            description: t('overlayService.BranchDispatch.description'),
            url: '/dispatch',
            icon: 'assets/icons/dispatch-icon.svg',
        },
        {
            orden: 4,
            type: 'texto',
            title: t('overlayService.SameDay.title'),
            tag: {
                text: t('overlayService.SameDay.text'),
                color: 'text-emerald-700 bg-emerald-50',
            },
            description: t('overlayService.SameDay.description'),
            url: '#',
            icon: 'assets/icons/sameDay-icon.svg',
        },
        // Puedes agregar más elementos según sea necesario
    ];

    const logisticPartners = [
        {
            bgColor: 'bg-red-700',
            image: 'assets/carriersLogos/partners/Andreani.svg',
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
            image: 'assets/carriersLogos/partners/Urbano.svg',
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
            image: 'assets/carriersLogos/partners/D.svg',
            alt: 'D',
        },
        {
            bgColor: 'bg-blue-600',
            image: 'assets/carriersLogos/partners/Chazki.svg',
            alt: 'Chazki',
        },
        {
            bgColor: 'bg-teal-500',
            image: 'assets/carriersLogos/partners/HOP.svg',
            alt: 'Hop',
        },
        {
            bgColor: 'bg-blue-900',
            image: 'assets/carriersLogos/partners/Cruz del Sur.svg',
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
        <div className='overlay-service'>
            <div className='overlay-service-menu'>
                {elementosOrdenados.map((elemento, index) => (
                    <div key={index} className='overlay-service-item-container'>
                        {elemento.type === 'texto' && (
                            <Link to={elemento.url} >
                                <div className='overlay-service-item'>
                                    <div className='overlay-service-icon'>
                                        <img src={elemento.icon} alt='' />
                                    </div>
                                    <div className='overlay-service-details'>
                                        <div className="overlay-service-title">
                                            {elemento.title}
                                            {elemento.tag && (
                                                <span className={`overlay-service-tag ${elemento.tag.color}`}>
                                                    {elemento.tag.text}
                                                </span>
                                            )}
                                        </div>
                                        <div className='overlay-service-description'>
                                            {elemento.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <div className='overlay-service-partners'>
                <div className='overlay-service-logistic-title'>
                    <div className='overlay-service-logistic-icon'>
                        <img src='assets\icons\logisticPartners-icon.svg' alt='' />
                    </div>
                    <div className="overlay-service-title">
                        {t('overlayService.LogisticPartners.title')}
                    </div>
                </div>
                <div className='overlay-service-logistic-partners'>
                    {filas.map((fila, index) => (
                        <div key={index} className='overlay-service-logistic-row'>
                            {fila.map((partner, subIndex) => (
                                <div key={subIndex} className={`overlay-service-logistic-item ${partner.bgColor}`}>
                                    <img src={partner.image} alt={partner.alt} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <Link to='/carriers'>
                    <div className='overlay-service-link'>
                        {t('overlayService.LogisticPartners.link')}
                        <img src='src\assets\icons\ep-forward-arrow-outline.svg' className='overlay-service-forward-icon' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default OverlayService;



// NEW VERSION

// return (
//     <div className='overlay-service'>
//         <div className='overlay-service-menu'>
//             {elementosOrdenados.map((elemento, index) => (
//                 <div key={index} className='overlay-service-item'>
//                     {elemento.type === 'texto' && (
//                         <a href={elemento.url} target='_blank' rel='noopener noreferrer' className='overlay-service-item-link'>
//                             <div className='overlay-service-item-content'>
//                                 <div className='overlay-service-icon'>
//                                     <img src={elemento.icon} alt='' />
//                                 </div>
//                                 <div className='overlay-service-details'>
//                                     <div className='overlay-service-title'>
//                                         {elemento.title}
//                                         {elemento.tag && (
//                                             <span className={`overlay-service-tag ${elemento.tag.color}`}>
//                                                 {elemento.tag.text}
//                                             </span>
//                                         )}
//                                     </div>
//                                     <div className='overlay-service-description'>{elemento.description}</div>
//                                 </div>
//                             </div>
//                         </a>
//                     )}
//                 </div>
//             ))}
//         </div>

//         <div className='overlay-service-partners'>
//             <div className='overlay-service-logistic-title'>
//                 <div className='overlay-service-logistic-icon'>
//                     <img src='assets/icons/logisticPartners-icon.svg' alt='' />
//                 </div>
//                 <div className='overlay-service-title'>
//                     {t('overlayService.LogisticPartners.title')}
//                 </div>
//             </div>
//             <div className='overlay-service-logistic-partners'>
//                 {filas.map((fila, index) => (
//                     <div key={index} className='overlay-service-logistic-row'>
//                         {fila.map((partner, subIndex) => (
//                             <div key={subIndex} className={`overlay-service-logistic-item ${partner.bgColor}`}>
//                                 <img src={partner.image} alt={partner.alt} />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <a href='#' target='_blank' rel='noopener noreferrer' className='overlay-service-link'>
//                 <div className='overlay-service-logistic-title'>
//                     {t('overlayService.LogisticPartners.link')}
//                     <img src='src/assets/icons/ep-forward-arrow-outline.svg' className='overlay-service-forward-icon' />
//                 </div>
//             </a>
//         </div>
//     </div>
// );
// };

// export default OverlayService;



// OLD VERSION

// return (
//     <div className='max-w-[683px] min-h-[464px] px-10 py-6 rounded-3xl shadow justify-center items-start gap-9 flex flex-col md:inline-flex sm:flex-row bg-white '>
//         <div className='w-[283px] flex-col justify-start items-start inline-flex '>
//             {elementosOrdenados.map((elemento, index) => (
//                 <div key={index} className='self-stretch py-3 first:pt-0 justify-start items-start gap-4 inline-flex '>
//                     {elemento.type === 'texto' && (
//                         <a href={elemento.url} target='_blank' rel='noopener noreferrer'>
//                             <div className='self-stretch p-3  justify-start items-start gap-4 inline-flex rounded-lg  hover:bg-ep-25'>
//                                 <div className='w-6 h-6 relative '>
//                                     <img src={elemento.icon} alt='' />
//                                 </div>
//                                 <div className='grow shrink basis-0 flex-col justify-start items-start  inline-flex'>
//                                     <div className="text-gray-700 text-base font-bold font-['DM Sans'] leading-normal ">
//                                         {elemento.title}
//                                         {elemento.tag && (
//                                             <span
//                                                 className={`px-2.5 py-0.5  rounded-xl ml-2 ${elemento.tag.color} text-xs font-medium font-['SF Pro Text'] leading-tight`}>
//                                                 {elemento.tag.text}
//                                             </span>
//                                         )}
//                                     </div>
//                                     <div
//                                         className={`self-stretch text-gray-700 text-sm font-normal font-['DM Sans'] leading-tight tracking-tight`}>
//                                         {elemento.description}
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     )}
//                 </div>
//             ))}
//         </div>

//         <div className='pt-3 flex-col justify-start items-start gap-3 inline-flex '>
//             <div className='justify-start items-center gap-4 inline-flex'>
//                 <div className='h-6 flex-col justify-center items-center gap-2.5 inline-flex'>
//                     <img src='assets\icons\logisticPartners-icon.svg' alt='' />
//                 </div>
//                 <div className="text-gray-700 text-base font-bold font-['DM Sans'] leading-normal">
//                 {t('overlayService.LogisticPartners.title')}
//                 </div>
//             </div>
//             <div className='px-12 py-7 bg-ep-25 rounded-3xl flex-col justify-start items-start gap-5 flex'>
//                 {filas.map((fila, index) => (
//                     <div key={index} className='flex justify-between items-center gap-x-7 gap-y-6'>
//                         {fila.map((partner, subIndex) => (
//                             <div
//                                 key={subIndex}
//                                 className={`w-9 h-9 p-1.5 ${partner.bgColor} rounded-[9px] justify-center items-center gap-2.5 flex`}>
//                                 <img src={partner.image} alt={partner.alt} />
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <a href='#' target='_blank' rel='noopener noreferrer'>
//                 <div className='justify-start items-center gap-2.5 inline-flex'>
//                     <div className="text-sky-500 text-base font-medium font-['DM Sans'] leading-normal">
//                     {t('overlayService.LogisticPartners.link')}
//                     </div>

//                     <img src='src\assets\icons\ep-forward-arrow-outline.svg' className='w-4 h-4 relative' />
//                 </div>
//             </a>
//         </div>
//     </div>
// );
// };

// export default OverlayService;