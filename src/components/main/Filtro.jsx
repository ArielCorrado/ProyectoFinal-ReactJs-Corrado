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
        if (e.target.checked) {
            const index = arrayFiltro.findIndex((elemento) => elemento.op === e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""))   //Si elegimos "Marca" : "Intel" verificamos si "Marca"
                                                                                                                                          // está en el array de filtro  
            if (index !== -1) {
                arrayFiltro.splice(index, 1);                                                      //Si está borramos y pusheamos la nueva opción. Sinó solo pusheamos                             
            } 

            arrayFiltro.push({"op":e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""), 
                            "sop":e.target.previousSibling.innerHTML
            }); 

            productosFiltrados = productos;

            for (let opcion of arrayFiltro) {                                                           //Filtramos po cada elemento en "arrayFiltro"
                
                productosFiltrados = productosFiltrados.filter((prod) => prod[1][opcion.op] === opcion.sop);
            }
                              
        }  else  { 

            const index = arrayFiltro.findIndex((elemento) => elemento.op === e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""));

            arrayFiltro.splice(index, 1); 

            if( arrayFiltro.length !== 0) {        

                    productosFiltrados = productos;

                for (let opcion of arrayFiltro) {                                                           //Filtramos por cada elemento en "arrayFiltro"
                    productosFiltrados = productosFiltrados.filter((prod) => prod[1][opcion.op] === opcion.sop);
                }
            } else {                                                    //Si arrayFiltro.legth === 0 es porque no hay ningún filtro a plicado entonces mostramos toda la categoria
                productosFiltrados = productos;
            }    
        } 
        ordenarPorPrecio(productosFiltrados, "Precio Ascendente");
    }
   

    useEffect(() => {
                
        if (productosFiltrados.length !== 0) {              //Este código recarga el filtro según los productos que quedaron filtrados

            const opcionesFiltro = productosFiltrados[0][1].opcionesBusqueda;
            const opcionesYSubOpciones = [];

            for (let opcion of opcionesFiltro) {

                opcionesYSubOpciones.push(opcion);
                opcionesYSubOpciones.push(buscarSubOpciones(opcion.toLowerCase().replace(/\s+/g, "")))   //Pasamos a minuscula y eliminamos espacios en blanco
            }

            const opcionesYSubOpcionesJSX = [];
            let opc = "";

            for (let op of opcionesYSubOpciones) {

                if (typeof (op) === "string") {             //Si op e un string es porque es una opción. Por ejemplo:  "Marca"
                    opcionesYSubOpcionesJSX.push(<h5 className='filtro_opciones' key={op}>{op}</h5>);
                    opc = op;
                } else {

                    for (let o of op) {                     //Si op es tipo object es porque se trata de un array de subopciones. Por ejemplo: ["Intel", "Amd"]
                        opcionesYSubOpcionesJSX.push(
                            <div className='flex' key={o} id={opc}>
                                <p className='filtro_subopciones'>{o}</p>
                                
                                {                       
                                    ( op.length === 1 && !arrayFiltro.some((opt) => opt.op === opc.toLowerCase().replace(/\s+/g, "")) ) ?  

                                    <></> :

                                    <input type="checkbox" onChange={(e) => { 
                                            aplicarFiltro(e);
                                            setCambio(!cambio);
                                    }}/> 
                                }

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
