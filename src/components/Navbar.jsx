import React, { useState } from 'react';

const Navbar = () => {
    const [openService, setOpenSubItem] = useState(false);

    return (
        <nav className='navbar-container'>
            <div className='navbar-inner'>
                <div className='logo-container'>
                    <div className='logo'>
                        <img src='./src/assets/imagotipo_enviopack.png' alt='Logotipo de Enviopack' />
                    </div>
                    <div className='logo-container'>
                        <div className='relative'>
                            <div
                                onClick={() => setOpenSubItem(!openService)}
                                className='nav-item'>
                                <div className="nav-item-text">
                                    Servicios
                                </div>
                                <img src='./src/assets/arrow.png' alt='Flecha' />
                            </div>
                            {openService && (
                                <div className='submenu'>
                                    Acá ponemos los servicios
                                </div>
                            )}
                        </div>
                        <div className='nav-link'>
                            <div className="nav-item-text">
                                Tarifas
                            </div>
                        </div>
                        <div className='nav-link'>
                            <div className="nav-item-text">
                                Seguí tu envío
                            </div>
                        </div>
                        <div className='nav-link'>
                            <div className="nav-item-text">
                                Contacto
                            </div>
                        </div>
                    </div>
                </div>
                <div className='logo-container'>
                    <div className='login-button'>
                        <div className="login-text">
                            Iniciar sesión
                        </div>
                    </div>
                    <button className='signup-button  buttonBasics'>
                        <div className="signup-text">
                            Crear cuenta
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
