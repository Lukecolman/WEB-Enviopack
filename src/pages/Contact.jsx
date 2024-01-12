import React, { useEffect } from 'react';
import { ContactForm } from '../components';

const Contact = () => {

    // FUNCIONES
    const scrollToTop = () => {
        window.scrollTo({ top: 0 , behavior: 'instant' })
      }
      useEffect(() => {
        scrollToTop()
      },[])


    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default Contact;
