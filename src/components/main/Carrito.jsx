import React, { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CardProductoCarrito from './CardProductoCarrito';
import { leerBDD } from '../../utils/firebase';


const Carrito = () => {
    
    const {carrito} = useContext (CarritoContext);
    const [productosEnCarrito, setProductosEnCarrito] = useState ([]);
        
    useEffect(() => {

        const productosCarrito = [];

        leerBDD().then((BDDEnArray) => {

            for (let producto of carrito) {

                const productoEnCarrito = BDDEnArray.find((prod) => prod[0] === producto.id);
                productoEnCarrito[1].cantidad = producto.cantidad;          //Agregamos en el producto una campo "cantidad" con la cantidad leida en el carrito
                productosCarrito.push(productoEnCarrito);

            }

            const productosEnCarritoJsx = productosCarrito.map((prod) => <CardProductoCarrito producto = {prod} key={prod[0]}/>)

            setProductosEnCarrito (productosEnCarritoJsx);

        })

    }, [carrito.length]);                   //Si cambia carrito.length es porque eliminamos un producto del carrito                        
 
    if (carrito.length > 0) {
        return (
            <div className="main__container__carrito flex">
                {productosEnCarrito}
            </div>
        );
    } else {
        return (
            <div className="main__container flex">
                <h1 style={{color:"#404040"}}>Tu Carrito está Vacío</h1>
            </div>
        );
    }
}

export default Carrito;
