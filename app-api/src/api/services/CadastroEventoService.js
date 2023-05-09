
//const CadastroEventoRepository = require("../repositories/CadastroEventoRepository");

module.exports = {
    getCadastroEventoPorNome: async function (CadastroEventoNome){
        const data = await CadastroEventoRepository.find(CadastroEventoNome)
        return data;
    },

    postNewCadastroEvento: async function (evento){
        let model = new CadastroEventoRepository();
        // const data = await CadastroEsportesRepository.create(evento);
        const data = await model.create(evento);
        //colocar no banco
        if(data) return {status: "esporte cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o esporte"}
    },
    
    deleteCadastroEventoPorNome: async function(CadastroEventoNome) {
        const status = await CadastroEventoRepository.remove(CadastroEventoNome);
        if(status) return {status: "Evento removido com sucesso."}
        else return {status: "Evento não encontrado."}
    }
}