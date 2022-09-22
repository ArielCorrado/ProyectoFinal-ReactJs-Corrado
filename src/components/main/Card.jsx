import React from 'react';

const Card = (props) => {
    return (
        <div className="cartProducto flex">
            <img className="imgProducto" src={`./images/productos/${props.imgScr}`} alt="" />
            <div className='descProducto'>{props.descripcion}</div>
            <button className='botonProducto'>Agregar al Carrito</button>
            <div className='precioProducto'>${props.precio}</div>
        </div>
    );
}

export default Card;
