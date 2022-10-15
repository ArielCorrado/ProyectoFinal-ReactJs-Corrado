import React from 'react';

const CardProductoCarrito = ({producto}) => {
    return (
        <div className="cardProducto_carrito" key={producto.id}>
            <div className="contImg_detalle">
                <img className="imgProducto_detalle" src={`${producto.imgScr}`} alt="" />
                <p className="stock_detalle">Stock: {producto.stock} unidades</p>
            </div>
            <div className="contDetalle_producto_carrito flex">
                <div className='descProducto_detalle'>{producto.describir}</div>
            </div>
            <div className="flex column contCant_carrito">
                <div className='cantidadTxt flex'>Cantidad</div>
                <div className="cantidad"><button className="botonMasMenos flex">-</button> <div className="inputCantidad flex"> {producto.cantidad} </div> <button className="botonMasMenos flex">+</button></div>
            </div>
            <div className='precioProducto_carrito'>${producto.precio * producto.cantidad}</div>
        </div>
    );
}

export default CardProductoCarrito;
