import { Router } from "express";
import { modificarUsuario, registrarUsuario, traerUsuario } from "../controller/userController.js";
import { validarCorreo } from "../middlewares/userMiddleware.js";
import { validarCampos } from "../middlewares/validarCampos.js";
import { validarToken } from "../middlewares/validarToken.js";
import { body, param } from "express-validator";
import { validarId } from "../middlewares/validarId.js";

const userRouter = Router();

userRouter.get("/",traerUsuario);

userRouter.post("/",[
    validarToken,
    body('nombre').notEmpty(),
    body('apellidoP').notEmpty(),
    body('apellidoM').notEmpty(),
    body('email').notEmpty(),
    body('email').isEmail(),
    body('password').notEmpty(),
    validarCorreo,
    validarCampos], registrarUsuario);


userRouter.put("/:id",[
    validarToken,
    param('id').isMongoId(),
    validarCampos,
    validarId
],modificarUsuario)
export {userRouter}