import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const arrayFiltro = [];
const Filtro = ({productos, ordenarPorPrecio, productosFiltrados}) => {
 
    const {categoria} = useParams();
    const {filterKeys} = useParams();
    const navigate = useNavigate();
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


    const setearArray = (e) => {
        if (e.target.checked) {
            const obj = { "op" : e.target.parentNode.id.toLowerCase().replace(/\s+/g, "") , "sop" : e.target.previousSibling.innerHTML};
            arrayFiltro.push(obj);
        } else {
            const index = arrayFiltro.findIndex((elemento) => elemento.op === e.target.parentNode.id.toLowerCase().replace(/\s+/g, ""));
            arrayFiltro.splice(index, 1); 
        }
    }


    const cargarArray = () => {

        const urlarray = [];
        for (const el of arrayFiltro) {
            urlarray.push(el.op.concat("=",el.sop));
        }

        let url = "";
        for (const el of urlarray) {
            url = url + "&" + el;
        }

        url = url.slice(1);
        navigate (`/category/${categoria}/${url}`);
    }


    useEffect(() => {
     
        /***********************************lEEMOS LA URL Y LA PASAMOS LAS KEYS A UNA ARRAY ***********************************************/

        if (filterKeys && arrayFiltro.length === 0) {
            const keys1 = filterKeys.split("&");
            for (const key of keys1) {
                const keys2 = key.split("=");
                arrayFiltro.push({ "op":keys2[0], "sop":keys2[1] });
            }
            
        }

        /******************************************** Aplicamos el filtro **********************************************************************/
    
        productosFiltrados = productos;

        for (let opcion of arrayFiltro) {                                                           //Filtramos por cada elemento en "arrayFiltro"
            productosFiltrados = productosFiltrados.filter((prod) => prod[1][opcion.op] === opcion.sop);
        }
    
        ordenarPorPrecio(productosFiltrados, "Precio Ascendente");
 
        /*****************************************************************************************************************************************/

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

                                    <input 
                                        type="checkbox" 
                                        checked = {
                                            arrayFiltro.some((opt) => opt.op === opc.toLowerCase().replace(/\s+/g, "")) 
                                        }
                                        onChange={(e) => { 
                                            setearArray(e);
                                            cargarArray();
                                        }}
                                    /> 
                                }
                            </div>
                        );
                    }
                }
            }
            setListaFiltro(opcionesYSubOpcionesJSX);
        }
    }, [filterKeys, productos]);
    

    return (
        <>
            {listaFiltro}     
        </>
    );
}


export default Filtro;
