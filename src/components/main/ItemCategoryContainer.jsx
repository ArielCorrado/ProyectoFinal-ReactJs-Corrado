import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';
import { leerBDD } from '../../utils/firebase';

const ItemCategoryContainer = () => {

    const {categoria} = useParams();

    const [productosPorCategoria, setProductosPorCategoria] = useState ([])

    useEffect(() => {
        
        leerBDD().then((BDD) => {
            
            const BDDFiltrada = BDD.filter((prod) => prod[1].categoria.toLowerCase() === categoria.toLocaleLowerCase())
            const BDDFiltradaJsx = BDDFiltrada.map((prod) => <CardProducto producto={prod} key={prod[0]}/>)
            setProductosPorCategoria(BDDFiltradaJsx);
        })
       
    }, [categoria]);

    return (
        <div className="main__container flex">
            {productosPorCategoria}
        </div>
    );
}

export default ItemCategoryContainer;
