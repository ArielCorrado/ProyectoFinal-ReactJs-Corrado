import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    
    const {carritoCant} = useContext (CarritoContext);

    return (
        <Link to={"/cart"}>
            <div className="contCarrito">
                <div className='iconoCarrito_cantidad flex'>  {carritoCant}  </div>
                <img className="iconoCarrito" src="../images/icono_carrito.png" alt="" />
            </div>
        </Link>
    );
}

export default CartWidget;
