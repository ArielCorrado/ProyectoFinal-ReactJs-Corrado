import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';  

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
                
            if (productosEnJSX.length !== 0) {
                setProductosPorBusqueda (productosEnJSX);
            } else {
                setProductosPorBusqueda (
                    <div className='contVolver'>
                        <h1 className='textoVolver'>No Se Encontraron Productos</h1>
                        <button className='botonProducto' onClick={() => window.history.back() }>Volver</button>
                    </div>
                )
            } 
        })
        
    }, [searchKeys]);
 
    return (
        <>
            <div className="main__container flex">
                {productosPorBusqueda}
            </div>
        </>
    );
}

export default ItemSearchContainer;
