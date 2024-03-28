import { Router } from "express";
import { traerUsuario } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/", traerUsuario)


export {userRouter}