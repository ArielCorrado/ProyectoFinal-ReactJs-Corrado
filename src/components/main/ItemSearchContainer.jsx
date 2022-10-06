import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';  
import Spinner from '../spinner/Spinner';
import Swal from 'sweetalert2';

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
                setTimeout(() =>
                    Swal.fire({
                        icon: 'error',
                        title: 'No se encontraron productos',
                        showConfirmButton: false,
                        allowEnterKey: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false,      
                        html:
                        '<a href="/"><b>Volver</b></a>' 
                    }), 1500)     
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
