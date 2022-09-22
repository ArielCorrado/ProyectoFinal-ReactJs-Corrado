import React from 'react';
import CartWidget from './CartWidget';

const Busquedas = () => {
    return (
        <div className="busquedas flex">
            <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
            <button className="botonBusquedas" type="submit">Buscar</button>
            <CartWidget />
        </div>
    );
}

export default Busquedas;
