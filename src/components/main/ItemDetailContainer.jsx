import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { leerProducto } from '../../utils/firebase';
import CardProductoDetail from './CardProductoDetail';
import { error } from '../../utils/funcionesUtiles';

const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const [producto, setProducto] = useState ([]);

    useEffect(() => {
        
        leerProducto(id).then((prod) => {
            prod[1] ? setProducto(<CardProductoDetail producto={prod}/>) : error (`El Producto no Existe`);
        });
                
    },[id]);

    return (
        <>  
            <div className="main__container flex">
                {producto}
            </div>
        </>
    );
}

export default ItemDetailContainer;
