import bcryptjs from 'bcryptjs';
import { Usuario } from "../model/user.js";
import { generateToken } from '../helpers/tokenGenerator.js';



const iniciarSesion = async(req, res) => {

    try{

        const {email, password} = req.body;

        const usuario = await Usuario.findOne({email: email});
        
        if(!usuario){
            return res.status(401).send({
                msg: "El usuario no existe"
            })
        }

        if(usuario.estatus === false){
            return res.status(401).send({
                msg: "El usuario no existe"
            })
        }

        const contrasenia = bcryptjs.compareSync(password, usuario.password);

        if(!contrasenia){
            return res.status(401).send({
                msg: "Contraseña incorrecta"
            })
        }

        const token = await generateToken(usuario._id);

        return res.send({
            token
        })




    }catch(e){
        res.status(500).send({
            e
        })
    }


}

export {iniciarSesion}