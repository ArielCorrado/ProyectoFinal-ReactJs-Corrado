const error = (mensaje) => {
    Swal.fire({
        title: 'Ops!',
        text: mensaje,
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'VOLVER',
        allowOutsideClick: false,
        allowEscapeKey: false,
        scrollbarPadding: false
    })  
    .then((result) => {
        if (result.isConfirmed) {
            window.history.back();
        }
    })
}

export {error};