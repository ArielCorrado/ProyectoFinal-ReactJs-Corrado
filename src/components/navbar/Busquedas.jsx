import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Busquedas = () => {
     
    const navigate = useNavigate();

    function linkear (e) {
        e.preventDefault();                                                   //Evitamos el submit ya que recarga la página 
        const keysBusqueda = e.target.firstChild.value.trim();                //trim() elimina espacios en blanco adelante y atras de un string
        
        if (keysBusqueda !== "") {
            navigate(`/search/${keysBusqueda}`);
        } else {
            Swal.fire({
                width: 400,
                icon: 'warning',
                title: 'Ingrese Un Valor',
                showConfirmButton: false,
                timer: 1000,
                scrollbarPadding: true
            })
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
