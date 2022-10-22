import React from 'react';

const Form = ({toggleForm}) => {
    return (
        <>
        {document.body.style.overflow = "hidden"}
        <div className='cont_formulario flex' id="contFormulario" onClick={(e) => toggleForm(e)} style={{top:window.pageYOffset+"px"}}>
            <form id="formulario" className="flex form">
                <h1 className="formulario_titulo">Complete con sus datos para continuar:</h1>
                <input id="formNombre" className="input" type="text" name="nombre" placeholder="Nombre" />
                <input id="formNombre" className="input" type="text" name="apellido" placeholder="Apellido" />
                <input id="formMail" className="input" type="email" name="email" placeholder="E-Mail" />
                <input id="formMail" className="input" type="tel" name="Telefono" placeholder="Teléfono" />
                <button className="input formulario_boton flex" type="submit" name="enviar">CONFIRMAR COMPRA</button>
            </form>
        </div>
        </>
    );
}

export default Form;
