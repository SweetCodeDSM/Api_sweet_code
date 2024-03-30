import  jwt from "jsonwebtoken";
import { Usuario } from "../model/user.js";


const validarToken = async(req, res, next) => {

    const token = req.header('token');

    if(!token){
        return res.status(401).send({
            msg: "No se envio ningun token"
        })
    }


    try{
        const {idUsuario} = jwt.verify(token, process.env.TOKENFIRM);

        req.id = idUsuario;
        
        const usuarioValidado = await Usuario.findById(idUsuario);

        if(!usuarioValidado){
            return res.status(401).send({
                msg: "No existe el usuario"
            })
        }

        if(usuarioValidado.estatus == false){
            return res.status(401).send({
                msg: "No existe el usuario"
            })
        }

        req.usuario = usuarioValidado;
        next();

     
    }catch(e){
        return res.status(500).send({
            msg: "Token no valido"
        })
    }
    
}

export {validarToken}