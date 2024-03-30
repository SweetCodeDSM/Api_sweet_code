import { Usuario } from "../model/user.js";

const validarId = async(req, res, next ) => {

    const {id} = req.params;

    try{

        const usuario = await Usuario.findById(id);

        if(!usuario){
            return res.status(401).send({
                msg: "El usuario no existe"
            });
        }
        next();

    }catch(e){
        return res.status(500).send({
            msg: e
        })
    }

}

export {validarId}