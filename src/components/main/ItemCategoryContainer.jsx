import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';
import { leerBDD } from '../../utils/firebase';
import { error } from '../../utils/funcionesUtiles';

const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([])

    useEffect(() => {
        
        leerBDD().then((BDD) => {
            
            const BDDFiltrada = BDD.filter((prod) => prod[1].categoria.toLowerCase() === categoria.toLocaleLowerCase())
            const BDDFiltradaJsx = BDDFiltrada.map((prod) => <CardProducto producto={prod} key={prod[0]}/>)
            BDDFiltradaJsx.length !== 0 ? setProductosPorCategoria(BDDFiltradaJsx) : error ("Categoria No Válida");
           
        })
       
    }, [categoria]);

    return (
        <div className="main__container flex">
            {productosPorCategoria}
        </div>
    );
}

export default ItemCategoryContainer;
