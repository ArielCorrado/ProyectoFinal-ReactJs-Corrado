import React from 'react';

const Busquedas = () => {
    return (
        <form className="busquedas flex">
            <input className="campoBusquedas" type="search" placeholder="Buscar Componentes" />
            <button className="botonBusquedas" type="submit">Buscar</button>
        </form>
    );
}

export default Busquedas;
