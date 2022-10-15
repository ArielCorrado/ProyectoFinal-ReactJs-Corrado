import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CardProductoCarrito = ({producto}) => {

    const {masMenosUnoCarrito} = useContext(CarritoContext);

    const [cantidadProducto, setCantidadProducto] = useState(producto.cantidad)

    const masMenosCarrito = (id, op) => {
        if ( (op === "+" && cantidadProducto < producto.stock) || (op === "-" && cantidadProducto > 1)) {      // Solo podemos elegir una cantidad entera mayor a cero y menor o igual al stock
            masMenosUnoCarrito (id, op);
            op === "+" ? setCantidadProducto (cantidadProducto + 1) : setCantidadProducto (cantidadProducto - 1);
        }    
    }
    
    return (
        <div className="cardProducto_carrito" key={producto.id}>
            <div className="contImg_carrito">
                <img className="imgProducto_carrito" src={`${producto.imgScr}`} alt="" />
                <p className="stock_carrito">Stock: {producto.stock} unidades</p>
            </div>
            <div className="contDetalle_producto_carrito flex">
                <div className='descProducto_detalle'>{producto.describir}</div>
            </div>
            <div className="flex column contCant_carrito">
                <div className='cantidadTxt flex'>Cantidad</div>
                <div className="cantidad">
                    <button className="botonMasMenos flex" onClick={() => masMenosCarrito(producto.id, "-")}>-</button> 
                    <div className="inputCantidad flex"> {cantidadProducto} </div> 
                    <button className="botonMasMenos flex" onClick={() => masMenosCarrito(producto.id, "+")}>+</button>
                </div>
            </div>
            <div className='contVaciar flex column'>
                <p className='textoVaciar'>Eliminar</p>
                <img src="../images/vaciar2.png" className='iconoVaciar' alt="" />
            </div>
            <div className='precioProducto_carrito'>${producto.precio * cantidadProducto}</div>
        </div>
    );
}

export default CardProductoCarrito;
