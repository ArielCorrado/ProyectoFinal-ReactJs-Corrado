import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    
    const {carritoCant} = useContext (CarritoContext);
    
    return (
        <div className="contCarrito">
            <Link to={"/cart"}>   
                {carritoCant > 0 ? <div className='iconoCarrito_cantidad flex'> {carritoCant} </div> : <></>}     
                <img className="iconoCarrito" src="../images/icono_carrito.png" alt="" /> 
            </Link>
        </div>
    );
}

export default CartWidget;
