import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';

const Busquedas = () => {
    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className="contBusquedaIcono flex">
                <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                <button className="botonBusquedas" type="submit">Buscar</button>
                <CartWidget />
            </div>    
        </div>
    );
}

export default Busquedas;
