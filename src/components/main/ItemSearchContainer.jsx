import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';  
import Spinner from '../spinner/Spinner';


const ItemSearchContainer = () => {

    const {searchKeys} = useParams();
        
    const [productosPorBusqueda, setProductosPorBusqueda] = useState ([]);

    useEffect(() => {
        
        fetch ("../json/productos.json")
        .then ((resp) => resp.json())
        .then ((data) => {
            
            const productosEnArray = data.filter((prod) => prod.describir.toLowerCase().includes(searchKeys.toLowerCase()));
            const productosEnJSX = productosEnArray.map((producto) => 
                    
                <CardProducto elemento = {producto} />
            )
            setProductosPorBusqueda (productosEnJSX);
        })

    }, [searchKeys]);

    return (
        <>
            <Spinner />
            <div className="main__container flex">
                {productosPorBusqueda}
            </div>
        </>
    );
}

export default ItemSearchContainer;
