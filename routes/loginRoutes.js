import { Router } from "express";
import { iniciarSesion } from "../controller/loginController.js";

const loginRouter = Router();

loginRouter.post("/", iniciarSesion);


export {loginRouter}