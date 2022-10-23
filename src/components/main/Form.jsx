import React from 'react';
import { useRef, useContext} from 'react';
import Swal from 'sweetalert2';
import { CarritoContext } from '../../context/CarritoContext';
import { crearOrdeDeCompra } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Form = ({toggleForm}) => {
    
    const {carritoTotal, vaciarCarrito} = useContext (CarritoContext);
    const formulario = useRef();
    const navigate = useNavigate();

    const subirOrden = (e) => {
        e.preventDefault();

        const formDatos = new FormData (formulario.current);
        const datos = Object.fromEntries(formDatos);
        datos.total = carritoTotal;
        
        if (datos.nombre !="" && datos.apellido !="" && datos.dni !="" && datos.direccion !="" && datos.email !="" && datos.telefono!="") {  
            crearOrdeDeCompra(datos).then((data) => {
                vaciarCarrito();
                navigate("/");
                document.body.style.overflow = "visible";
                const ordenId = data.id
                Swal.fire({
                    title: 'Gracias por Elegirnos!',
                    text: `Tu orden de compra es la Nº: ${ordenId}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    scrollbarPadding: false
                })
            });
        }else {
            Swal.fire({
                title: 'Faltan ingresar datos',
                text: `Vuelva a intentar`,
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            })
        }    
    }     

    return (
        <>
            {document.body.style.overflow = "hidden"}
            <div className='cont_formulario flex' id="contFormulario" onClick={(e) => toggleForm(e)} style={{top:window.pageYOffset+"px"}}>
                <form id="formulario" className="flex form" ref={formulario} onSubmit={(e) => subirOrden(e)}>
                    <h1 className="formulario_titulo">Complete con sus datos para continuar:</h1>
                    <input id="formNombre" className="input" type="text" name="nombre" placeholder="Nombre"/>
                    <input id="formNombre" className="input" type="text" name="apellido" placeholder="Apellido" />
                    <input id="formNombre" className="input" type="text" name="dni" placeholder="DNI" />
                    <input id="formNombre" className="input" type="text" name="direccion" placeholder="Dirección" />
                    <input id="formMail" className="input" type="email" name="email" placeholder="E-Mail" />
                    <input id="formMail" className="input" type="tel" name="telefono" placeholder="Teléfono" />
                    <button className="input formulario_boton flex" type="submit" name="enviar">CONFIRMAR COMPRA</button>
                </form>
            </div>
        </>
    );
}

export default Form;
