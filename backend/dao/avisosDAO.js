import { ObjectID } from "bson";
import { response } from "express";
import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let registro;

export default class avisosDAO {
    static async injectDB(conn){
        if (registro) {
            return;
        }
        try {
            registro =  await conn.db(process.env.AVISOS_NS).collection("avisos_db");
        } catch (err) {
            console.error(`Unable to establish a connection handle for avisosDAO: ${err}`);
        }
    }

    static async getAvisos() {
        let cursor;
        try {
            cursor = await registro.find();
            const avisosList = await cursor.toArray();
            const totalAvisos = await registro.countDocuments();
            return { avisosList, totalAvisos }
        } catch (err) {
            console.error(`Unable to issue find command. ERROR: ${err}`);
            return { avisosList: [], totalAvisos: 0}
        }  
    }


    //Definindo como um aviso será armazenado no Banco de Dados
    static async addAviso(num, aviso, previsao, resolvido, dia) {
        try {
            const avisoDocument = {
                num: num,
                aviso: aviso,
                previsao: previsao,
                resolvido: resolvido,
                dia: dia,
            }

            return await registro.insertOne(avisoDocument);
            
        } catch (err) {
            console.error(`Unable to add Aviso. ERROR: ${err}`);
            return { error: err };
        }
    }

    //Atualizando um aviso já registrado no Banco de Dados
    static async updateAviso(avisoId, aviso, previsao, resolvido, dia) {
        try {
            const updateResponse = await registro.updateOne(
                { _id: ObjectId(avisoId) },
                { $set: { aviso: aviso, previsao: previsao, resolvido: resolvido, dia: dia } },
            )

            return updateResponse;
            
        } catch (err) {
            console.error(`Unable to update Aviso. ERROR: ${err}`);
            return { error: err };
        }
    }
    

    //Deletando um aviso registrado no Banco de Dados
    static async deleteAviso(avisoId) {
        try {
            const deleteResponse = await registro.deleteOne(
                { _id: ObjectId(avisoId) }
            )

            return deleteResponse;
            
        } catch (err) {
            console.error(`Unable to delete Aviso. ERROR: ${err}`);
            return { error: err };
        }
    }
}
