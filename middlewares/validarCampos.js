
import { validationResult } from "express-validator";

const validarCampos = (req, res, next) => {
    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(401).send({
            errores
        })
    }

    next();
}


export {validarCampos}