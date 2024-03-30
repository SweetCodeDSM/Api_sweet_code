import { Router } from "express";
import { generarReporte } from "../controller/reportController.js";

const reportRoutes = Router();

reportRoutes.get("/",generarReporte);


export {reportRoutes};