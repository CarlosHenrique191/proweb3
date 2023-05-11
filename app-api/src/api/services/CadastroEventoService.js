
const {CadastroEvento} = require("../../database/models");

module.exports = {
    getCadastroEventoPorId: async function (CadastroEventoId){
        const data = await CadastroEvento.findOne({ where: { id: CadastroEventoId }})
        return data;
    },

    postNewCadastroEvento: async function (evento){
        const data = await CadastroEvento.create(evento);
        //colocar no banco
        if(data) return {status: "Evento cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar um evento"}
    },
    
    deleteCadastroEventoPorId: async function(CadastroEventoId) {
        const status = await CadastroEvento.destroy(CadastroEventoId);
        if(status) return {status: "Evento removido com sucesso."}
        else return {status: "Evento não encontrado."}
    }
}