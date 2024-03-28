import { Schema, model } from "mongoose";


const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'nombre requerido']
    },
    apellidoP: {
        type: String,
        required: [true, 'Apellido paterno requerido']
    },
    apellidoM : {
        type: String,
        required: [true, 'Apellido materno requerido']
    }, 
    email: {
        type: String,
        required: [true, 'Correo necesario']
    },
    password: {
        type: String,
        required: [true, 'Contraseña necesaria']
    },
    estatus : {
        type: Boolean,
        default: true
    }

})

const Usuario = model('Usuario', UsuarioSchema);

export {Usuario}