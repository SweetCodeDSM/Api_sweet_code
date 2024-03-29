import { Schema, model } from "mongoose";



const Bank = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre obligatorio']
    },
    saldo: {
        type: Number,
        required: [true, 'saldo']
    },
    movimientos: {
        type: [Movimientos]
    }
})

const Banco = model('Banco', Bank);

export {Banco}