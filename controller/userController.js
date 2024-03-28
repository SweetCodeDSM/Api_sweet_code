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


export {traerUsuario}