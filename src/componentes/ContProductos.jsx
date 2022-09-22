import React from 'react';
import CartProducto from './CartProducto';

const ContProductos = () => {
    return (
        <div className='flex'>
            <CartProducto 
            imgScr = "pv7.jpeg"
            descripcion = "Placa de video Gainward GeForce RTX 3090 Phantom + 24gb DDR6"
            precio = "259600"
            />
        </div>
    );
}

export default ContProductos;

