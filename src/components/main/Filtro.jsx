import React from 'react';
import { useState, useEffect } from 'react';


 
const Filtro = ({productos}) => {

    const [listaFiltro, setListaFiltro] = useState(<></>)
        
    const buscarSubOpciones = (opcion) => {

        const subOpciones = [];
        subOpciones.push(productos[0][1][opcion]);
              
        for (let prod of productos) {
            if (!(subOpciones.some((subOp) => subOp === prod[1][opcion]))) {
                subOpciones.push(prod[1][opcion])
            }
        }
        return subOpciones;
    }


    useEffect(() => {

        if (productos.length > 0) {

            const opcionesFiltro = productos[0][1].opcionesBusqueda;
            const opcionesYSubOpciones = [];

            for (let opcion of opcionesFiltro) {

                opcionesYSubOpciones.push(opcion);
                opcionesYSubOpciones.push(buscarSubOpciones(opcion.toLowerCase().replace(/\s+/g, "")))   //Pasamos a minuscula y eliminamos espacios en blanco
            }

            
            const opcionesYSubOpcionesJSX =  [];
            for (let op of opcionesYSubOpciones) {

                if (typeof(op) === "string") {
                    opcionesYSubOpcionesJSX.push(<h5 className='filtro_opciones' key={op}>{op}</h5>);
                } else {
                    for (let o of op) {
                        opcionesYSubOpcionesJSX.push(
                            <div className='flex' key={o}>
                                <p className='filtro_subopciones'>{o}</p>
                                <input type="checkbox"/>
                            </div>
                        );
                    }
                }

            }
            
            setListaFiltro (opcionesYSubOpcionesJSX);
               
            
        }

    }, [productos.length]);
   

    return (
        <>
            {listaFiltro}     
        </>
    );
}

export default Filtro;
