import React from 'react';
import { Link } from 'react-router-dom';

const CardProducto = ({elemento}) => {
    return (
        <div className="cardProducto flex" key={elemento[0]}>
            <img className="imgProducto" src={elemento[1].imgScr} alt="" />
            <div className='descProducto'>{elemento[1].describir}</div>
            <Link to={`/item/${elemento[0]}`}> <button className='botonProducto'>Ver Detalles</button> </Link>
            <div className='precioProducto'>${elemento[1].precio}</div>
        </div>
    );
}

export default CardProducto;
