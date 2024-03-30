import  jwt from "jsonwebtoken";
import { Usuario } from "../model/user";


const validarToken = async(req, res, next) => {
    const token = req.header;

    if(!token){
        return res.status(401).send({
            msg: "No se envio ningun token"
        })
    }


    try{
        const {uid} = jwt.verify(token, process.env.TOKENFIRM);

        req.idUsuario = uid;
    
        const usuario = await Usuario.findById(uid);

        if(!usuario || usuario.estatus === false){
            return res.status(401).send({
                msg: "No existe el usuario"
            })
        }

        req.usuario = usuario;
        next();

     
    }catch(e){
        return res.status(500).send({
            msg: e
        })
    }
    
}