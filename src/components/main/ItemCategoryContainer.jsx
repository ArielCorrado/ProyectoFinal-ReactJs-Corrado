import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';
import { leerBDD } from '../../utils/firebase';
import { error } from '../../utils/funcionesUtiles';
import Filtro from './Filtro';

let BDDOrdenada = [];
const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([]);

    useEffect(() => {
        
        leerBDD().then((BDD) => {
            
            const BDDFiltrada = BDD.filter((prod) => prod[1].categoria.toLowerCase() === categoria.toLocaleLowerCase());
            const BDDFiltradaJsx = BDDFiltrada.map((prod) => <CardProducto producto={prod} key={prod[0]}/>)
            BDDFiltradaJsx.length !== 0 ? setProductosPorCategoria(BDDFiltradaJsx) : error ("Categoria No Válida");
            BDDOrdenada = BDDFiltrada;
            ordenarPorPrecio("Precio Ascendente");
        })
       
    }, [categoria]);

    
    const ordenarPorPrecio = (op) => {
             
        (op === "Precio Ascendente") ? BDDOrdenada.sort((a,b) =>  a[1].precio - b[1].precio) : BDDOrdenada.sort((a,b) =>   b[1].precio - a[1].precio);
        const BDDOrdenadaJsx = BDDOrdenada.map((prod) => <CardProducto producto={prod} key={prod[0]}/>);
        setProductosPorCategoria(BDDOrdenadaJsx);
    }


    return (
        <>
            <div className='main__container__categorias'>
                <Filtro ordenarPorPrecio={ordenarPorPrecio}/>
                <div className='cont_productos_categoria'>
                    {productosPorCategoria}
                </div>
            </div>
        </>    
    );
}

export default ItemCategoryContainer;
