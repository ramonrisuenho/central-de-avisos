import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import avisosDAO from "./dao/avisosDAO.js";

//Definindo as configurações de ambiente do projeto
dotenv.config();

//Definindo o Cliente do Banco de Dados
const MongoClient = mongodb.MongoClient;

//Definindo a porta do Banco de Dados (variável PORT definida no .env)
const port = process.env.PORT || 8000
//Conectando ao Banco de Dados
MongoClient.connect(
    process.env.AVISOS_DB_URI
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    await avisosDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});