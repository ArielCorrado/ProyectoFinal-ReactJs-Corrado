import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
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
                
            if (productosEnJSX.length !== 0) {
                setProductosPorBusqueda (productosEnJSX);
            } else {
                setProductosPorBusqueda (
                    <div>
                        <h1 style={{color:"#404040"}}>No Se Encontraron Productos</h1>
                        <Link to={"/"} style={{textAlign:"center", color:"rgb(176, 64, 199)"}}><h2>Volver</h2></Link>
                    </div>
                )
            } 
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
