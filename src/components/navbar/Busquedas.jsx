import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Busquedas = () => {
    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className="contBusquedaIcono flex">
                <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                <Link to={`/search/amd`}><button className="botonBusquedas" type="submit">Buscar</button></Link>
                <CartWidget />
            </div>    
        </div>
    );
}

export default Busquedas;
