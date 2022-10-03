import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Spinner from '../spinner/Spinner';

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
      
   
    const [cantidad, setCantidad] = useState (1);

    const masMenos = (op) => {
        if (cantidad < stock && op === "+") {
            setCantidad (cantidad + 1);
        }
        if (cantidad > 1 && op === "-") {
            setCantidad (cantidad - 1)
        }
    }

    const stock = 10;
    
    return (
        <>
            <Spinner />
            <div className="main__container flex">
                <div className="cartProducto_detalle" key={producto.id}>
                    <div className="contImg_detalle">
                        <img className="imgProducto_detalle" src={`${producto.imgScr}`} alt="" />
                        <p className="stock_detalle">Stock: {stock}</p>
                    </div>
                    <div className="contDetalle_producto flex">
                        <div className='descProducto_detalle'>{producto.describir}</div>
                        <div className='precioProducto_detalle'>${producto.precio}</div>
                    </div>
                    <div className="flex column contCant">
                        <div className='cantidadTxt flex'>Cantidad</div>    
                        <div className="cantidad"><button className="botonMasMenos flex" onClick={() => masMenos("-")}>-</button> <div className="inputCantidad flex"> {cantidad} </div> <button className="botonMasMenos flex" onClick={() => masMenos("+")}>+</button></div>
                    </div>    
                    <button className='botonProducto botonProducto_detalle'>Agregar al Carrito<img src="../images/icono_carrito.png" className="imgCarritoEnBoton" alt=""/></button>
                    <button className='botonProducto botonProducto_detalle boton_c'>Comprar Ahora</button>
                </div>
            </div>
        </>
    );
}

export default ItemDetailContainer;
