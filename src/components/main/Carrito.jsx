import React, { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CardProductoCarrito from './CardProductoCarrito';


const Carrito = () => {
    
    const {carrito} = useContext (CarritoContext);
    const [productosEnCarrito, setProductosEnCarrito] = useState ([]);
    
    useEffect(() => {

       fetch ("../json/productos.json")
        .then ((resp) => resp.json())
        .then ((data) => {

                const productosEnArray = [];

                for (let producto of carrito) {
                    const productoPorId = data.find((prod) => prod.id === producto.id);
                        productoPorId.cantidad = producto.cantidad;
                    productosEnArray.push(productoPorId);
                }    

                const productosEnJSX = productosEnArray.map ((prod) => <CardProductoCarrito producto = {prod} />)
            
                setProductosEnCarrito(productosEnJSX);

            }
        )

    }, []);
 

    return (
        <div className="main__container__carrito flex">
            {productosEnCarrito}
        </div>
    );
     
    return (
        <div className="main__container flex">
            <h1 style={{color:"black"}}>Tu Carrito está Vacío</h1>
        </div>
    );
}

export default Carrito;
