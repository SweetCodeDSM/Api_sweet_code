import { Schema } from "mongoose";


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
    }
});


export {transaction}