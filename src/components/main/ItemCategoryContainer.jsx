import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';
import { leerBDD } from '../../utils/firebase';
import { error } from '../../utils/funcionesUtiles';
import Filtro from './Filtro';


const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([]);

    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
        
        leerBDD().then((BDD) => {
            
            const BDDFiltrada = BDD.filter((prod) => prod[1].categoria.toLowerCase() === categoria.toLocaleLowerCase());
            const BDDFiltradaJSX = BDDFiltrada.map((prod) => <CardProducto producto={prod} key={prod[0]}/>)
            BDDFiltradaJSX.length !== 0 ? setProductosPorCategoria(BDDFiltradaJSX) : error ("Categoria No Válida");
            
            ordenarPorPrecio(BDDFiltrada, "Precio Ascendente");
            setProductos(BDDFiltrada);
        })
       
    }, [categoria]);
    
    
    const ordenarPorPrecio = (productos, op) => {
             
        (op === "Precio Ascendente") ? productos.sort((a,b) =>  a[1].precio - b[1].precio) : productos.sort((a,b) =>   b[1].precio - a[1].precio);
        const ProductosJsx = productos.map((prod) => <CardProducto producto={prod} key={prod[0]}/>);
        setProductosPorCategoria(ProductosJsx);
    }
   
    
    return (
        <>
            <div className='main__container__categorias'>

                <div className='cont__filtro flex column'>
                    <div className='filtro_precio'>
                        <p className='filtro_precio_titulo'>Ordenar por:</p>
                        <select className='form-select' onChange={(e) => ordenarPorPrecio(productos, e.target.value)}>
                            <option>Precio Ascendente</option>
                            <option>Precio Descendente</option>
                        </select>
                    </div>
                    <div>
                        <Filtro productos={productos}/>
                    </div>
                </div>

                <div className='cont_productos_categoria'>
                    {productosPorCategoria}
                </div>

            </div>
        </>    
    );
}

export default ItemCategoryContainer;
