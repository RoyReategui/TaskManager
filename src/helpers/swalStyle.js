import Swal from 'sweetalert2'
import { TYPE_ALERTS } from './typeAlerts'

export const swalStyle = (typeAlert) => {
    return Swal.mixin({
        customClass: {
            confirmButton: `${typeAlert === TYPE_ALERTS.ERROR ? 'bg-red-300 text-red-700  hover:bg-red-400 hover:text-red-800' : 'text-purple-700 text-purple-700  hover:bg-purple-400 hover:text-purple-800'} py-2 px-4 rounded-md font-semibold`,
            cancelButton: 'bg-red-300 text-red-600 py-2 px-4 rounded-md font-semibold hover:bg-purple-400 hover:text-purple-800'
        },
        buttonsStyling: false
    })
}

export const myAlert = (title, text, typeAlert) => (
    swalStyle(typeAlert).fire({
        icon: typeAlert,
        title: `<h3 class=" ${typeAlert === TYPE_ALERTS.ERROR ? 'text-red-700' : 'text-purple-700'} ">${title}</h3>`,
        html: `<p  class=" ${typeAlert === TYPE_ALERTS.ERROR ? 'text-red-700' : 'text-purple-700'}">${text}</p>`
    })
)
