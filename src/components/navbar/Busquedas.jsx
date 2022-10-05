import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useState } from 'react';

const Busquedas = () => {

    const [link, setLink] = useState ("");

    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className='flex'>
                <form action={`/search/${link}`} method="get" className="contBusquedaIcono flex" onSubmit={(e) => setLink(e.target.firstChild.value)}>
                    <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                    <button className="botonBusquedas" type="submit">Buscar</button>
                </form>    
                <CartWidget />
            </div>
        </div>
    );
}

export default Busquedas;
