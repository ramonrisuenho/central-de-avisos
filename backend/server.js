import express from "express";
import cors from "cors";
import avisosRoutes from "./api/avisosRoutes.js";

//Inicializando o servidor como um Express app
const app = express();
//Definindo o Middleware do app para ser o CORS
app.use(cors());
//Definindo que o app possa receber JSON no body da requisição
app.use(express.json());
//Definindo as rotas padrões para a utilização do app
app.use("/api/v1/controle-avisos", avisosRoutes);
//Definindo uma wildcard para qualquer rota não reconhecida pelo servidor
app.use("*", (req, res) => res.statu(400).json({error: "not found"}));


//Exportando o app como um módulo que possa ser importado
export default app;