import React from 'react';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';


const ItemListContainer = () => {
    
    const [productosAMostrar, setProductosAMostrar] = useState ([]);   

    useEffect(() => {

        const consultarProductosEnBDD = async () => {
            const resp = await fetch("../json/productos.json")
            const todosLosProductosArray = await resp.json();
            const todosLosProductosJSX = todosLosProductosArray.map((producto) =>

                <CardProducto elemento = {producto} />
              
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


