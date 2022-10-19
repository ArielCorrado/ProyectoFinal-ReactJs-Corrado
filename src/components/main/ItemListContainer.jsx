import React from 'react';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';
import Carousel from '../carousel/Carousel';
import { leerBDD } from '../../utils/firebase';
  
const ItemListContainer = () => {
    
    const [productosAMostrar, setProductosAMostrar] = useState ([]);   

    useEffect(() => {

        leerBDD().then((BDDEnArray) => {

            const todosLosProductosJSX = BDDEnArray.map((producto) => <CardProducto elemento = {producto}/> )
            setProductosAMostrar(todosLosProductosJSX);

        })
        
    }, []);
    
    return (
        <>
            <Carousel />
            <div className="main__container flex">
                {productosAMostrar}
            </div>
        </>    
    );
}


export default ItemListContainer;


