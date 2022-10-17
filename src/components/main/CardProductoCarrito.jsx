import React, { useState, useContext, useEffect } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CardProductoCarrito = ({producto}) => {

    const {masMenosUnoCarrito, eliminarDelCarrito, carrito} = useContext(CarritoContext);

    const [inc, setInc] = useState(0);

    useEffect(() => {               //Al eliminar un producto de carrito este se recarga con los productos restantes, inc vuelve a ser 0
       setInc(0);
    }, [carrito.length]);
   
    const masMenosCarrito = (id, op) => {                                                                                        //Validación de cantidad de poductos elegidos.
        if ( (op === "+" && (producto.cantidad + inc) < producto.stock) || (op === "-" && (producto.cantidad + inc) > 1)) {      //Solo podemos elegir una cantidad entera mayor a cero y menor o igual al stock
            masMenosUnoCarrito (id, op);
            op === "+" ? setInc (inc + 1) : setInc (inc - 1);
        }    
    }
        
    return (
        <div className="cardProducto_carrito" key={producto.id}>
            <div className="contImg_carrito">
                <img className="imgProducto_carrito" src={`${producto.imgScr}`} alt="" />
                <p className="stock_carrito">Stock: {producto.stock} unidades</p>
            </div>
            <div className="contDetalle_producto_carrito flex">
                <div className='descProducto_detalle_carrito'>{producto.describir}</div>
            </div>
            <div className="flex column contCant_carrito">
                <div className='cantidadTxt flex'>Cantidad</div>
                <div className="cantidad">
                    <button className="botonMasMenos flex" onClick={() => masMenosCarrito(producto.id, "-")}>-</button> 
                    <div className="inputCantidad flex"> {producto.cantidad + inc} </div>   
                    <button className="botonMasMenos flex" onClick={() => masMenosCarrito(producto.id, "+")}>+</button>
                </div>
            </div>
            <div to={"/cart"} className='contVaciar flex column' onClick={() => eliminarDelCarrito(producto.id)}>      
                <p className='textoVaciar'>Eliminar</p>
                <img src="../images/vaciar2.png" className='iconoVaciar' alt="" />
            </div>
            <div className='precioProducto_carrito'>${producto.precio * (producto.cantidad + inc)}</div>
        </div>
    );
}

export default CardProductoCarrito;
