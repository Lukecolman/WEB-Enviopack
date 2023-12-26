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

            {/* TRABAJARLO ACA, LUEGO COMPONENTIZARLO PASAR LO DEL HOME A -> HOME Y DE AHI HACER COMPONENTES  */}
        </>
    );
}

export default Home;
