import React, { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CardProductoCarrito from './CardProductoCarrito';
import { leerBDD } from '../../utils/firebase';

const Carrito = () => {
    
    const {carrito, carritoTotal, setearCarritoTotal} = useContext (CarritoContext);
    const [productosEnCarrito, setProductosEnCarrito] = useState ([]);
        
    
    useEffect(() => {

        const productosCarrito = [];
        
        leerBDD().then((BDDEnArray) => {

            for (let producto of carrito) {

                const productoEnCarrito = BDDEnArray.find((prod) => prod[0] === producto.id);
                productoEnCarrito[1].cantidad = producto.cantidad;          //Agregamos en el producto una campo "cantidad" con la cantidad leida en el carrito
                productosCarrito.push(productoEnCarrito);
            }

            const sumaTotalCarrito = productosCarrito.reduce((ac, prod) => ac + (prod[1].cantidad * prod[1].precio), 0);
                     
            const productosEnCarritoJsx = productosCarrito.map((prod) => <CardProductoCarrito producto = {prod} suma={sumaTotalCarrito} key={prod[0]}/>);

            setProductosEnCarrito (productosEnCarritoJsx);
                         
            setearCarritoTotal(sumaTotalCarrito, true);
        })

    }, [carrito.length]);                   //Si cambia carrito.length es porque eliminamos un producto del carrito   
       
    
    if (carrito.length > 0) {
        return (
            <div className="main__container__carrito flex">
                {productosEnCarrito}
                <div className='flex contTotalCarrito'>
                    <div className='textoTotal_carrito'>Total: &nbsp;</div>
                    <div className='precioTotal_carrito'>${carritoTotal}</div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="main__container flex">
                <div className='contTotalCarrito flex'>
                    <h2 className='textoTotal_carrito'>Tu Carrito está Vacío</h2>
                </div>
            </div>
        );
    }
}

export default Carrito;
