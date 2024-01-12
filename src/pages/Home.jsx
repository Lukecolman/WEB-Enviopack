import React, { useEffect } from 'react';
import { Hero, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA } from '../components';

function Home() {

    // FUNCIONES
    const scrollToTop = () => {
        window.scrollTo({ top: 0 , behavior: 'instant' })
      }
      useEffect(() => {
        scrollToTop()
      },[])

    return (
        <>
            <div>
                <Hero />
                <Beneficios />
                <Servicios />
                <Ecosistema />
                <KPI />
                <Testimonials />
                <CTA />
            </div>
        </>
    );
}

export default Home;
