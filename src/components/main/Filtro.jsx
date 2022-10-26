import React from 'react';
import { useState, useEffect } from 'react';


const Filtro = ({productos, ordenarPorPrecio, productosFiltrados}) => {
 
    const [cambio, setCambio] = useState(false);

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


    const aplicarFiltro = (e) => {
        productosFiltrados = productos.filter((prod) => prod[1][e.target.parentNode.id.toLowerCase().replace(/\s+/g, "")] === e.target.previousSibling.innerHTML);
        ordenarPorPrecio(productosFiltrados, "Precio Ascendente");
    }
   

    useEffect(() => {
                
        if (productos.length !== 0) {

            const opcionesFiltro = productos[0][1].opcionesBusqueda;
            const opcionesYSubOpciones = [];

            for (let opcion of opcionesFiltro) {

                opcionesYSubOpciones.push(opcion);
                opcionesYSubOpciones.push(buscarSubOpciones(opcion.toLowerCase().replace(/\s+/g, "")))   //Pasamos a minuscula y eliminamos espacios en blanco
            }

            const opcionesYSubOpcionesJSX = [];
            let opc = "";

            for (let op of opcionesYSubOpciones) {

                if (typeof (op) === "string") {
                    opcionesYSubOpcionesJSX.push(<h5 className='filtro_opciones' key={op}>{op}</h5>);
                    opc = op;
                } else {
                    for (let o of op) {
                        opcionesYSubOpcionesJSX.push(
                            <div className='flex' key={o} id={opc}>
                                <p className='filtro_subopciones'>{o}</p>
                                <input type="checkbox" onChange={(e) => { 
                                    aplicarFiltro(e);
                                    setCambio(!cambio);
                                }}/>
                            </div>
                        );
                    }
                }
            }
            setListaFiltro(opcionesYSubOpcionesJSX);
        }
    }, [productos, cambio]);
        

    

    return (
        <>
            {listaFiltro}     
        </>
    );
}

export default Filtro;
