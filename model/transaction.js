import { Schema, model } from "mongoose";


const transaction = Schema({
    
    tienda: { 
    type: String,
    required: [true, 'tienda requerida']
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion requerida']
    },
    fecha: {
        type: Date,
        required: [true, 'fecha requerida']
    },
    monto: {
        type: Number,
        required: [true, 'Monto requerido']
    }
});

const Transaccion = model('Transaccion', transaction);

export {Transaccion}