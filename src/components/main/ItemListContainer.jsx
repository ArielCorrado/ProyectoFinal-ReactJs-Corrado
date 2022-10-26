import React from 'react';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';
import Carousel from '../carousel/Carousel';
import { leerBDD } from '../../utils/firebase';
import Spinner from './Spinner';
  
const ItemListContainer = () => {
    
    const [productosAMostrar, setProductosAMostrar] = useState ([<Spinner/>]);   

    useEffect(() => {

        leerBDD().then((BDDEnArray) => {

            const todosLosProductosJSX = BDDEnArray.map((prod) => <CardProducto producto={prod} key={prod[0]}/>);
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


