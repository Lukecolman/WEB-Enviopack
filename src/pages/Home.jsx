import React from 'react';
import { Hero, Beneficios, Servicios, Ecosistema, KPI, Testimonials, CTA } from '../components';

function Home() {
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
