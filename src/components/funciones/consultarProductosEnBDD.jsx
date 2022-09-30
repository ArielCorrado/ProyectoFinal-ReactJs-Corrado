const consultarProductosEnBDD = async () => {
    const resp = await fetch("./json/productos.json")
    const todosLosProductosArray = await resp.json();
    const todosLosProductosJSX = todosLosProductosArray.map((producto) =>

        <div className="cartProducto flex">
            <img className="imgProducto" src={`${producto.imgScr}`} alt="" />
            <div className='descProducto'>{producto.describir}</div>
            <button className='botonProducto'>Agregar al Carrito</button>
            <div className='precioProducto'>${producto.precio}</div>
        </div>

    )

    return todosLosProductosJSX;
}


export default consultarProductosEnBDD;