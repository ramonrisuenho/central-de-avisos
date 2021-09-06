import express from "express";
import ControllerAvisos from "./controllerAvisos.js";
//Definindo o Router
const router = express.Router();

//Definindo as rotas
router.route("/").get(ControllerAvisos.apiGETAvisos); // Lendo os Avisos no Banco de Dados
router.route("/").post(ControllerAvisos.apiPOSTAvisos);// Adicionando Avisos ao Banco de Dados
router.route("/").put(ControllerAvisos.apiPUTAvisos);// Atualizando Avisos no Banco de Dados
router.route("/").delete(ControllerAvisos.apiDELETEAvisos);// Deletando Avisos no Banco de Dados

//Exportando o Módulo
export default router;