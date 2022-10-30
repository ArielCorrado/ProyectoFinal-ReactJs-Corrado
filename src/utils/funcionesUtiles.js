import Swal from "sweetalert2";

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

const mensaje = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'HOME',
        allowOutsideClick: false,
        allowEscapeKey: false,
        scrollbarPadding: false
    })  
    .then((result) => {
        if (result.isConfirmed) {
            location.href="/";
        }
    })
}


export {error, mensaje};