import { Usuario } from "../model/user.js"

const validarCorreo = async(req, res, next) => {

    const {email} = req.body;

    const usuario = await Usuario.findOne({email});


    if(usuario){
        return res.status(401).send({
            msg: "Correo ya registrado",
            usuario
        })
    }
    next();
}

export {validarCorreo}