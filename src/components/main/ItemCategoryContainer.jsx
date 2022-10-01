import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';

const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([])

    useEffect(() => {
        fetch ("../json/productos.json")
        .then ((resp) => resp.json())
        .then ((data) => {
            const productosEnArray = data.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase());
                        
            const productosEnJSX = productosEnArray.map((producto) =>
            
                <CardProducto elemento = {producto} />
            )  

            setProductosPorCategoria (productosEnJSX);
        
        })
    }, [categoria]);

    return (
        <div className="main__container flex">
            {productosPorCategoria}
        </div>
    );
}

export default ItemCategoryContainer;
