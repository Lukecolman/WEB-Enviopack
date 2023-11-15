// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const KpiGallery = () => {
//     const { t } = useTranslation();

//     const imagenesItems = [
//         {
//             orden: 1,
//             tipo: 'image',
//             className: 'col-span-1 row-span-1 bg-indigo-600 rounded-xl shadow flex overflow-hidden',
//             src: 'src/assets/distribucion-08.jpg',
//             alt: 'distribucion',
//         },
//         {
//             orden: 2,
//             tipo: 'image',
//             className: 'col-span-2 row-span-2 bg-indigo-600 rounded-xl shadow flex overflow-hidden',
//             src: 'src/assets/distribucion-02.jpg',
//             alt: 'distribucion',
//         },
//         {
//             orden: 4,
//             tipo: 'image',
//             className: 'col-span-1 row-span-1 bg-indigo-600 rounded-xl  flex overflow-hidden shadow',
//             src: 'src/assets/distribucion-04.jpg',
//             alt: 'distribucion',
//         },
//         {
//             orden: 5,
//             tipo: 'image',
//             className: 'col-span-2 row-span-1 bg-indigo-600 rounded-xl shadow flex overflow-hidden',
//             src: 'src/assets/seller-03.jpg',
//             alt: 'seller',
//         },       
//         {
//             orden: 8,
//             tipo: 'image',
//             className: 'col-span-1 row-span-1 bg-indigo-600 rounded-xl shadow flex overflow-hidden',
//             src: 'src/assets/fulfillment-03.jpg',
//             alt: 'fulfillment',
//         },
        
//         // ... (otros elementos de imagen)
//     ];

//     const kpiItems = [
//         {
//             orden: 3,
//             tipo: 'text',
//             className: 'col-span-1 row-span-1 bg-blue-300 rounded-xl shadow',
//             title: t("kpi.countries.title"), // Reemplaza con tu traducción t("kpi.countries.title"),
//             number: t("kpi.countries.number"), // Reemplaza con tu traducción t("kpi.countries.number"),
//         },
//         {
//             orden: 6,
//             tipo: 'text',
//             className: 'col-span-1 row-span-1 bg-blue-300 rounded-xl shadow',
//             title: t("kpi.operators.title"),
//             number: t("kpi.operators.number"),
//         },
//         {
//             orden: 7,
//             tipo: 'text',
//             className: 'col-span-2 row-span-1 bg-blue-300 rounded-xl shadow',
//             title: t("kpi.activeUsers.title"),
//             number: t("kpi.activeUsers.number"),
//         },
//         {
//             orden: 9,
//             tipo: 'text',
//             className: 'col-span-1 row-span-1 bg-blue-300 rounded-xl shadow',
//             title: t("kpi.shipmentsPerMinute.title"),
//             number: t("kpi.shipmentsPerMinute.number"),
//         },
//         // ... (otros elementos de texto)
//     ];

//     // Combina y ordena los elementos
//     const todosLosElementos = [...imagenesItems, ...kpiItems].sort((a, b) => a.orden - b.orden);

//     return (
//         <div className='grid grid-cols-7 grid-rows-2 gap-4 w-[1132px] h-[416px] relative bg-green-100 '>
//             {todosLosElementos.map((elemento, index) => (
//                 <div key={index} className={elemento.className}>
//                     {elemento.tipo === 'image' && (
//                         <img className='object-cover w-full h-full' src={elemento.src} alt={elemento.alt} />
//                     )}
//                     {elemento.tipo === 'text' && (
//                         <div className='p-4 flex flex-col justify-between h-[100%]'>
//                             <div className="text-slate-700 text-base font-medium font-inter leading-[18px]">
//                                 {elemento.title}
//                             </div>
//                             <div className="text-slate-700 text-[56px] font-semibold font-inter leading-[45px]">
//                                 {elemento.number}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default KpiGallery;


import React from 'react';
import { useTranslation } from 'react-i18next';
import { kpiImages } from '../../constants';


const KpiGallery = () => {
    const { t } = useTranslation();

    const kpiTexts = [
        {
            orden: 3,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.countries.title"),
            number: t("kpi.countries.number"),
        },
        {
            orden: 6,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.operators.title"),
            number: t("kpi.operators.number"),
        },
        {
            orden: 7,
            tipo: 'text',
            className: 'kpi-text kpi-box-wide',
            title: t("kpi.activeUsers.title"),
            number: t("kpi.activeUsers.number"),
        },
        {
            orden: 9,
            tipo: 'text',
            className: 'kpi-text',
            title: t("kpi.shipmentsPerMinute.title"),
            number: t("kpi.shipmentsPerMinute.number"),
        },
        // ... (otros elementos de texto)
    ];

    const kpiGalleryElements = [...kpiImages, ...kpiTexts].sort((a, b) => a.orden - b.orden);

    return (
        <div className='kpi-grid'>
            {kpiGalleryElements.map((elemento, index) => (
                <div key={index} className={elemento.className}>
                    {elemento.tipo === 'image' && (
                        <img src={elemento.src} alt={elemento.alt} />
                    )}
                    {elemento.tipo === 'text' && (
                        <div className='kpi-content'>
                            <div className="kpi-text-title">
                                {elemento.title}
                            </div>
                            <div className="kpi-text-number">
                                {elemento.number}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default KpiGallery;
