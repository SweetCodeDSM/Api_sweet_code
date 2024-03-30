import bcryptjs from 'bcryptjs';
import { Usuario } from "../model/user.js";

const traerUsuario = async(req, res) => {

    try{
        
       const usuarios = await Usuario.find({estatus: true});

        return res.send({
            usuarios
        })
        


    }catch(e){
        return res.status(500).send({
            error: e
        })
    }


}


const registrarUsuario = async(req, res) => {

    try{

        const {nombre, apellidoP, apellidoM, email, password} = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const contrasenia = bcryptjs.hashSync(password, salt);
        const usuario = await new Usuario({nombre, apellidoP, apellidoM, email, password: contrasenia});
        await usuario.save();

        return res.send({
            usuario
        })
        



    }catch(e){
        return res.status(500).send({
            e
        })
    }

}


const modificarUsuario = async(req, res) => {
    const {id} = req.params;
    const {estatus, email,...resto} = req.body;

    if(resto.password){
        const salt = bcryptjs.genSaltSync(10);
        const contrasenia = bcryptjs.hashSync(resto.password, salt)
        resto.password = contrasenia;
    }

    try{

        const usuario = await Usuario.findByIdAndUpdate(id, resto);
        res.send({
            msg: "all gud"
        })

    }catch(e){
        return res.status(500).send({
            msg: e
        })
    }

}

export {traerUsuario, registrarUsuario, modificarUsuario}