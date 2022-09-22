import React from 'react';

const CartProducto = () => {
    return (
        <div className="cartProducto flex">
            <img className="imgProducto" src="./images/productos/pv7.jpeg" alt="" />
            <div className='descProducto' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, optio?</div>
            <button className='botonProducto'>Agregar al Carrito</button>
            <div className='precioProducto'>$254000</div>
        </div>
    );
}

export default CartProducto;


