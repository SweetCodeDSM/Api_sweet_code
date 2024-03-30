import { Router } from "express";
import { registrarUsuario, traerUsuario } from "../controller/userController.js";
import { validarCorreo } from "../middlewares/userMiddleware.js";
import { validarCampos } from "../middlewares/validarCampos.js";
import { getInformacion } from "../controller/bankController.js";
import { validarToken } from "../middlewares/validarToken.js";

const bankRouter = Router();

bankRouter.get("/",[
    validarToken,
    validarCampos
],getInformacion);



export {bankRouter}