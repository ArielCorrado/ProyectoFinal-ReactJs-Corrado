import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Busquedas = () => {
     
    const navigate = useNavigate();
    
    function linkear (e) {

        const keysBusqueda = e.target.previousSibling.value.trim();                //trim() elimina espacios en blanco adelante y atras de un string
        
        if (keysBusqueda !== "") {
            navigate(`/search/${keysBusqueda}`);
        }    
    }
       
    return (
        <div className="contBusquedas flex">
            <Logo />
            <div className='flex'>
                <div className="contBusquedaIcono flex">
                    <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                    <button className="botonBusquedas" onClick={linkear}>Buscar</button>
                </div>    
                <CartWidget />
            </div>
        </div>
    );
}

export default Busquedas;
