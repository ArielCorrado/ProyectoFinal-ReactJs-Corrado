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
            <div className="cartProducto_detalle">
                <img className="imgProducto_detalle" src={`${producto.imgScr}`} alt="" />
                <div className="contDetalle_producto flex">
                    <div className='descProducto_detalle'>{producto.describir}</div>
                    <div className='precioProducto_detalle'>${producto.precio}</div>
                </div>    
                <button className='botonProducto botonProducto_detalle'>Agregar al Carrito<img src="../images/icono_carrito.png" className="imgCarritoEnBoton" alt=""/></button>
                <button className='botonProducto botonProducto_detalle boton_c'>Comprar Ahora</button>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
