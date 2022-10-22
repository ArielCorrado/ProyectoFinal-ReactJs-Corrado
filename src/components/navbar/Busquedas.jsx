import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const Busquedas = () => {
     
    const navigate = useNavigate();

    function linkear (e) {
        e.preventDefault();                                                   //Evitamos el submit ya que recarga la página 
        const keysBusqueda = e.target.firstChild.value.trim();                //trim() elimina espacios en blanco adelante y atras de un string
        
        if (keysBusqueda !== "") {
            navigate(`/search/${keysBusqueda}`);
        }    
    }
       
    return (
        <>
        <div className="contBusquedas">
            <Logo />
            <div className='flex'>
                <form className="contBusquedaIcono flex" onSubmit={linkear}>
                    <input className="campoBusquedas" type="search" placeholder="Buscar Producto" />
                    <button className="botonBusquedas" type='submit'>Buscar</button>
                </form>    
                <CartWidget />
            </div>
        </div>

        </>
    );
}

export default Busquedas;
