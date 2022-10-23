import React from 'react';

const Error404 = () => {

    Swal.fire({
        title: 'Ops!',
        text: `Ruta no válida`,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'VOLVER'
    })  
    .then((result) => {
        if (result.isConfirmed) {
            window.history.back();
        }
    })

    return (
        <>
            <div className="main__container flex">
                <div className='contTotalCarrito flex'>
                    <h2 className='textoTotal_carrito'>Ruta no Válida</h2>
                </div>
            </div>
        </>
    );
}

export default Error404;
