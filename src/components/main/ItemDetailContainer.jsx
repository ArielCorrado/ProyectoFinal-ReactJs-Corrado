import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [producto, setProducto] = useState ({});

    useEffect(() => {
        fetch ("../json/productos.json")
        .then ((resp) => resp.json())
        .then ((data) => { 
            const productoPorId = data.find((prod) => prod.id === id);
            setProducto (productoPorId);
        });
    },[id]);
      
    return (
        <div className="main__container flex">
            <div className="cartProducto flex">
                <img className="imgProducto" src={`${producto.imgScr}`} alt="" />
                <div className='descProducto'>{producto.describir}</div>
                <button className='botonProducto'>Agregar al Carrito</button>
                <div className='precioProducto'>${producto.precio}</div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
