import React from 'react';

const Filtro = ({ordenarPorPrecio}) => {
    return (
        <div className='cont__filtro flex'>
            <div className='filtro_precio'>
                <p className='filtro_precio_titulo'>Ordenar por:</p>
                <select className='form-select' onChange={(e) => ordenarPorPrecio(e.target.value)}>
                    <option>Precio Ascendente</option>
                    <option>Precio Descendente</option>
                </select>
            </div>
        </div>
    );
}

export default Filtro;
