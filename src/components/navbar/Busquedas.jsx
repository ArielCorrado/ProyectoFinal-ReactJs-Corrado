import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../spinner/Spinner';

const Busquedas = () => {
     
    const navigate = useNavigate();

    const [onOff, setOnOff] = useState(false);
    
    function linkear (e) {
        e.preventDefault();                                                   //Evitamos el submit ya que recarga la página 
        const keysBusqueda = e.target.firstChild.value.trim();                //trim() elimina espacios en blanco adelante y atras de un string
        
        if (keysBusqueda !== "") {
            setOnOff(true);             //Lanzo spinner
            setTimeout(() => {          //En 1500ms lo oculto
                setOnOff(false)
            }, 1500);
            navigate(`/search/${keysBusqueda}`);
        }    
    }
       
    return (
        <>
        {onOff && <Spinner/>}
        <div className="contBusquedas flex">
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
