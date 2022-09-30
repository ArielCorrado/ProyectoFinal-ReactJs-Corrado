import React from 'react';
import { useState, useEffect } from 'react';
import consultarProductosEnBDD from '../funciones/consultarProductosEnBDD';

const ItemListContainer = () => {
    
    const [productosAMostrar, setProductosAMostrar] = useState ([]);   

    useEffect(() => {
    
        consultarProductosEnBDD().then((data) => setProductosAMostrar(data));
        
    }, []);

    
    return (
        <>
            {productosAMostrar}
        </>
    );
}


export default ItemListContainer;


