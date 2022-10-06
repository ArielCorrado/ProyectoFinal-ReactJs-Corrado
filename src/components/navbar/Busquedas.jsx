import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useState } from 'react';

const Busquedas = () => {
     
    const [link, setLink] = useState ("");
    
    function linkear (e) {

        e.preventDefault();    
        const keysBusqueda = e.target.firstChild.value;
        
        if (keysBusqueda !== "") {
            setLink(keysBusqueda);
            console.log(keysBusqueda);
            setTimeout(() => e.target.submit(), 10);
        }    
    }
       
    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className='flex'>
                <form action={`/search/${link}`} method="get" className="contBusquedaIcono flex" onSubmit={linkear}>
                    <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                    <button className="botonBusquedas" type="submit">Buscar</button>
                </form>    
                <CartWidget />
            </div>
        </div>
    );
}

export default Busquedas;
