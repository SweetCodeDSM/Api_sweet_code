import { Router } from "express";
import { registrarUsuario, traerUsuario } from "../controller/userController.js";
import { validarCorreo } from "../middlewares/userMiddleware.js";
import { validarCampos } from "../middlewares/validarCampos.js";

const userRouter = Router();

userRouter.get("/",traerUsuario);

userRouter.post("/",[
    validarCorreo], registrarUsuario);


export {userRouter}