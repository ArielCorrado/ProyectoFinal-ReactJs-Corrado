import React from 'react';
import { useState, useEffect } from 'react';

const arrayFiltro = [];
const Filtro = ({productos, ordenarPorPrecio, productosFiltrados}) => {
 
    const [cambio, setCambio] = useState(false);

    const [listaFiltro, setListaFiltro] = useState(<></>)
                   
    const buscarSubOpciones = (opcion) => {

        const subOpciones = [];
        subOpciones.push(productosFiltrados[0][1][opcion]);
              
        for (let prod of productosFiltrados) {
            if (!(subOpciones.some((subOp) => subOp === prod[1][opcion]))) {
                subOpciones.push(prod[1][opcion])
            }
        }
        return subOpciones;
    }


    const aplicarFiltro = (e) => {
        const index = arrayFiltro.findIndex((elemento) => elemento.op === e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""))   //Si elegimos "Marca" : "Intel" verificamos si "Marca"
                                                                                                                                      // está en el array de filtro  
        if (index !== -1) {
            arrayFiltro.splice(index, 1);                                                      //Si está borramos y pusheamos la nueva opción. Sinó solo pusheamos                             
        } 
        arrayFiltro.push({"op":e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""), 
                          "sop":e.target.previousSibling.innerHTML
        }); 

        for (let opcion of arrayFiltro) {                                                           //Filtramos po cada elemento en "arrayFiltro"
            productosFiltrados = productos.filter((prod) => prod[1][opcion.op] === opcion.sop);
        }
                       
        // productosFiltrados = productosFiltrados.filter((prod) => prod[1][e.target.parentNode.id.toLowerCase().replace(/\s+/g, "")] === e.target.previousSibling.innerHTML);
        ordenarPorPrecio(productosFiltrados, "Precio Ascendente");
    }
   

    useEffect(() => {
                
        if (productosFiltrados.length !== 0) {

            const opcionesFiltro = productosFiltrados[0][1].opcionesBusqueda;
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
    }, [productosFiltrados, cambio]);
        

    

    return (
        <>
            {listaFiltro}     
        </>
    );
}

export default Filtro;
