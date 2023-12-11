// import React, { useState, useEffect } from 'react';

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(goToNext, 5000);  // Cambia el intervalo según tus necesidades
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {items.map((item, index) => (
//           <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
//             <img src={item.img} alt={item.title} />
//             <h3>{item.title}</h3>
//           </div>
//         ))}
//       </div>
//       <div className="carousel-controls">
//         <button onClick={goToPrevious}>Anterior</button>
//         <div className="carousel-dots">
//           {items.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={index === currentIndex ? 'dot active' : 'dot'}
//             />
//           ))}
//         </div>
//         <button onClick={goToNext}>Siguiente</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { useTranslation } from 'react-i18next';


// const handleDragStart = (e) => e.preventDefault();


// const responsive = {
//   0: { items: 1 },
//   568: { items: 2,   },
//   1024: { items: 3 },
// };

// const items = [
//   <img src="https://dummyimage.com/600x400/000/4953de" onDragStart={handleDragStart} role="presentation" />,
//   <img src="https://dummyimage.com/600x400/000/4951de" onDragStart={handleDragStart} role="presentation" />,
//   <img src="https://dummyimage.com/600x400/000/4153de" onDragStart={handleDragStart} role="presentation" />,
// ];

// const Carousel = () => {


//   return (
//     <AliceCarousel  items={items}
//     responsive={responsive}
//     mouseTracking
//     controlsStrategy="alternate" />
//   );
// }

// export default Carousel;

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { serviciosItems, customArrowButton} from '../../constants';
import { useTranslation } from 'react-i18next';



const Carousel = () => {
  // Definir el número de tarjetas a mostrar en diferentes tamaños de pantalla
  const responsive = {
    0: { items: 1 }, // 1 tarjeta en mobile
    919: { items: 2,
      itemsFit: 'contain '}, // 2 tarjetas en tablet
    1380: { items: 3, 
      itemsFit: 'undefined '}, // 3 tarjetas en desktop
  };

  const { t } = useTranslation();

  const customPrevButton = (
    <div className="custom-arrow">
      <img src={customArrowButton[0].left} alt="" />
    </div>
  );

  const customNextButton = (
    <div className="custom-arrow">
      <img src={customArrowButton[0].right} alt="Right Arrow" />
    </div>
  );



  // Puedes ajustar según sea necesario o mantener mouseTracking si lo necesitas
  return (
    <AliceCarousel className="bg-violet-200 flex justify-between content-between"
      mouseTracking 
      swipeExtraPadding={0}
      renderPrevButton={() => customPrevButton}    
      renderNextButton={() => customNextButton}

      items={serviciosItems.map((servicio, index) => (
        <div className='servicios-card' key={index}>
          <img className='servicios-image' src={servicio.image} alt={t('servicios.serviceImageAlt')} />
          <div className='servicios-info'>
            <div className="servicios-title">
              {t(`servicios.serviciosItems.${index}.title`)}
            </div>
            <div className="servicios-content">
              {t(`servicios.serviciosItems.${index}.content`)}
            </div>
          </div>
          <div className='servicios-link-container'>
            <a
              href={servicio.url}
              className="servicios-link">
              {t('servicios.learnMore')}
            </a>
          </div>
        </div>
      ))}
      responsive={responsive}  
    />
  );
}

export default Carousel;
