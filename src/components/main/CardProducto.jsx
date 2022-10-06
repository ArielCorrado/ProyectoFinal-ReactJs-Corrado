import React from 'react';
import { Link } from 'react-router-dom';

const CardProducto = ({elemento}) => {
    return (
        <div className="cardProducto flex" key={elemento.id}>
            <img className="imgProducto" src={elemento.imgScr} alt="" />
            <div className='descProducto'>{elemento.describir}</div>
            <Link to={`/item/${elemento.id}`}> <button className='botonProducto'>Ver Detalles</button> </Link>
            <div className='precioProducto'>${elemento.precio}</div>
        </div>
    );
}

export default CardProducto;
