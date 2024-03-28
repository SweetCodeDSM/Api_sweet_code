import bcryptjs from 'bcryptjs';
import { Usuario } from "../model/user.js"

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
        const usuario = new Usuario({nombre, apellidoP, apellidoM, email, contrasenia});
        usuario.save();

        return res.send({
            usuario
        })
        



    }catch(e){
        return res.status(500).send({
            e
        })
    }

}

export {traerUsuario, registrarUsuario}