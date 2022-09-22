import React from 'react';
import Dropdown from "./Dropdown";
import Categorias from "./Categorias";
import Busquedas from './Busquedas';
import Logo from './Logo';

/*CartWidget está dentro del componente Busquedas*/

const Navbar = () => {
    return (
        <div className="contNav">
            <Logo />
            <Busquedas />           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarColor02">
                        <ul className="navbar-nav text-center">
                            <Categorias />
                            <Dropdown />
                        </ul>
                    </div>
                </div>
            </nav>
       </div> 
    );
}

export default Navbar;
