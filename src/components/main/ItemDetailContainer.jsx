import React, { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { leerProducto } from '../../utils/firebase';
import CardProductoDetail from './CardProductoDetail';

const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const [producto, setProducto] = useState ([]);

    useEffect(() => {

        leerProducto(id).then((prod) => setProducto(<CardProductoDetail producto={prod}/>) )
        
    },[id]);

    return (
        <>  
            {producto}
        </>
    );
}

export default ItemDetailContainer;
