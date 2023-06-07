import React from 'react';
import Swal from 'sweetalert2';
export const Alert = ({ message, messageConfirmed }) => {

    Swal.fire({
        title: '¿Estás seguro?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Se ha realizado correctamente',
                messageConfirmed,
                'success'
            )
        }
    })
}

export const MessageSuccess = (message) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}