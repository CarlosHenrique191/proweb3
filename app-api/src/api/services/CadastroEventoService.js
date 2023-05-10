
const {CadastroEvento} = require("../../database/models");

module.exports = {
    getCadastroEventoPorNome: async function (CadastroEventoNome){
        const data = await CadastroEvento.findOne({ where: { nome: CadastroEventoNome }})
        return data;
    },

    postNewCadastroEvento: async function (evento){
        const data = await CadastroEvento.create(evento);
        //colocar no banco
        if(data) return {status: "esporte cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o esporte"}
    },
    
    deleteCadastroEventoPorNome: async function(CadastroEventoNome) {
        const status = await CadastroEvento.destroy(CadastroEventoNome);
        if(status) return {status: "Evento removido com sucesso."}
        else return {status: "Evento não encontrado."}
    }
}