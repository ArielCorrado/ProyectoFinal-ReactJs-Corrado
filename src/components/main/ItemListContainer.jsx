import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"


const ItemListContainer = () => {
    
    const [productosAMostrar, setProductosAMostrar] = useState ([]);   

    useEffect(() => {

        const consultarProductosEnBDD = async () => {
            const resp = await fetch("../json/productos.json")
            const todosLosProductosArray = await resp.json();
            const todosLosProductosJSX = todosLosProductosArray.map((producto) =>
        
                <div className="cartProducto flex">
                    <img className="imgProducto" src={`${producto.imgScr}`} alt="" />
                    <div className='descProducto'>{producto.describir}</div>
                    <Link to={`/item/${producto.id}`}> <button className='botonProducto'>Ver Detalles</button> </Link>
                    <div className='precioProducto'>${producto.precio}</div>
                </div>
        
            )
        
            return todosLosProductosJSX;
        }
            
        consultarProductosEnBDD().then((data) => setProductosAMostrar(data));
        
    }, []);
    
    return (
        <div className="main__container flex">
            {productosAMostrar}
        </div>
    );
}


export default ItemListContainer;


