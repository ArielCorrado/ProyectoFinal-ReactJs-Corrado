import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="contCarrito">
           <Link to={"/cart"}><img className="iconoCarrito" src="../images/icono_carrito.png" alt="" /></Link>
        </div>
    );
}

export default CartWidget;
