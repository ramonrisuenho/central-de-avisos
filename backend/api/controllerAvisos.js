import avisosDAO from "../dao/avisosDAO.js";

export default class ControllerAvisos {
    static async apiGETAvisos (req, res, next) {
        const { avisosList, totalAvisos } = await avisosDAO.getAvisos();
        let response = {
            avisosList: avisosList,
            totalAvisos: totalAvisos
        }
        res.json(response);
    }
    // Adicionando Avisos ao Banco de Dados
    static async apiPOSTAvisos (req, res, next) {
        try {
            const num = req.body.num;
            const aviso = req.body.aviso;
            const previsao = req.body.previsao;
            const resolvido = req.body.resolvido;


            const dia = new Date();
            var utc_offset = dia.getTimezoneOffset();
            dia.setMinutes(dia.getMinutes() + utc_offset);

            const AvisosResponse = await avisosDAO.addAviso(
                num,
                aviso,
                previsao,
                resolvido,
                dia,
            )

            res.json({ status: "Success on Adding Aviso" })

        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }

    // Atualizando Avisos no Banco de Dados
    static async apiPUTAvisos (req, res, next) {
        try {
            const avisoId = req.body.avisoId;
            const aviso = req.body.aviso;
            const previsao = req.body.previsao;
            const resolvido = req.body.resolvido;
            const dia = new Date();

            const AvisosResponse = await avisosDAO.updateAviso(
                avisoId,
                aviso,
                previsao,
                resolvido,
                dia,
            )

            res.json({ status: "Success on Updating Aviso" })

        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
    // Deletando Avisos no Banco de Dados
    static async apiDELETEAvisos (req, res, next) {
        try {
            const avisoId = req.body.avisoId;
            console.log(avisoId);

            const AvisosResponse = await avisosDAO.deleteAviso(
                avisoId,
            )

            res.json({ status: "Success on Deleting Aviso" })

        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}