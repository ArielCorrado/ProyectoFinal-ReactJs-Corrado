import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useRef } from 'react';

const Busquedas = () => {
     
    const searchForm = useRef()
    
    function linkear (e) {

        e.preventDefault();    
        const keysBusqueda = e.target.firstChild.value.trim();                //trim() elimina espacios en blanco adelante y atras de un string
        
        if (keysBusqueda !== "") {
            searchForm.current.action = `/search/${keysBusqueda}`;
            e.target.submit();
        }    
    }
       
    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className='flex'>
                <form action={""} method="get" className="contBusquedaIcono flex" onSubmit={linkear} ref={searchForm}>
                    <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                    <button className="botonBusquedas" type="submit">Buscar</button>
                </form>    
                <CartWidget />
            </div>
        </div>
    );
}

export default Busquedas;
