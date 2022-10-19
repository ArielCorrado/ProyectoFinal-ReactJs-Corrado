import React from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext, useState } from 'react';

const CardProductoDetail = ({producto}) => {

    const {agregarAlCarrito} = useContext (CarritoContext);

    const [cantidad, setCantidad] = useState (1);

    const masMenos = (op) => {
        if (cantidad < producto[1].stock && op === "+") {
            setCantidad (cantidad + 1);
        }
        if (cantidad > 1 && op === "-") {
            setCantidad (cantidad - 1)
        }
    }

    return (
        <div className="main__container flex" key={producto[0]}>
            <div className="cartProducto_detalle">
                <div className="contImg_detalle">
                    <img className="imgProducto_detalle" src={producto[1].imgScr} alt="" />
                    <p className="stock_detalle">Stock: {producto[1].stock} unidades</p>
                </div>
                <div className="contDetalle_producto flex">
                    <div className='descProducto_detalle'>{producto[1].describir}</div>
                    <div className='precioProducto_detalle'>${producto[1].precio}</div>
                </div>
                <div className="flex column contCant">
                    <div className='cantidadTxt flex'>Cantidad</div>
                    <div className="cantidad"><button className="botonMasMenos flex" onClick={() => masMenos("-")}>-</button> <div className="inputCantidad flex"> {cantidad} </div> <button className="botonMasMenos flex" onClick={() => masMenos("+")}>+</button></div>
                </div>
                <button className='botonProducto botonProducto_detalle' onClick={() => agregarAlCarrito(producto[0], cantidad)}>Agregar al Carrito<img src="../images/icono_carrito.png" className="imgCarritoEnBoton" alt="" /></button>
                <Link to={"/cart"} className="contBotonComprar flex"> <button className='botonProducto botonProducto_detalle boton_c'>Comprar Ahora</button> </Link>
            </div>
        </div> 
    );
}

export default CardProductoDetail;
