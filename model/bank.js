    import { Schema, model } from "mongoose";
    import { Transaccion } from "./transaction.js";



    const Bank = Schema({
        numeroTarjeta: {
            type: String,
            required: [true, 'nombre obligatorio']
        },
        saldo: {
            type: Number,
            required: [true, 'saldo']
        },
        ingresos: {
            type: Number,
            required: [true, 'ingresos requeridos']
        },
        egresos: {
            type: Number,
            required: [true, 'egresos requeridos']
        },
        movimientos: {
            type: []
        }

    })

    const Banco = model('Banco', Bank);

    export {Banco}