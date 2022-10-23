import React from 'react';
import { error } from '../../utils/funcionesUtiles';

const Error404 = () => {

    error ("Ruta No Válida");

    return (
        <div className="main__container flex"></div>
    );
}

export default Error404;
