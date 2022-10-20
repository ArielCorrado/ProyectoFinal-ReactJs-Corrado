import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';  
import { leerBDD } from '../../utils/firebase';

const ItemSearchContainer = () => {

    const {searchKeys} = useParams();
        
    const [productosPorBusqueda, setProductosPorBusqueda] = useState ([]);

    useEffect(() => {
        
        leerBDD().then((BDD) => {

            const BDDFiltrada = BDD.filter((prod) => prod[1].describir.toLowerCase().includes(searchKeys.toLowerCase()));
            const BDDFiltradaJsx = BDDFiltrada.map((prod) => <CardProducto producto={prod}/>);

            if (BDDFiltradaJsx.length !== 0) {
                setProductosPorBusqueda(BDDFiltradaJsx);
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
