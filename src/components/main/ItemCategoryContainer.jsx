import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([])

    useEffect(() => {
        fetch ("../json/productos.json")
        .then ((resp) => resp.json())
        .then ((data) => {
            const productosEnArray = data.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase());
                        
            const productosEnJSX = productosEnArray.map((producto) =>
                <div className="cartProducto flex">
                    <img className="imgProducto" src={`${producto.imgScr}`} alt="" />
                    <div className='descProducto'>{producto.describir}</div>
                    <Link to={`/item/${producto.id}`}> <button className='botonProducto'>Ver Detalles</button> </Link>
                    <div className='precioProducto'>${producto.precio}</div>
                </div>
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
