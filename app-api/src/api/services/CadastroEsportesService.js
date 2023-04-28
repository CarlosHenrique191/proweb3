
const CadastroEsportesRepository = require("../repositories/CadastroEsportesRepository");

module.exports = {
    getCadastroEsportesPorNome: async function (CadastroEsportesNome){
        const data = await CadastroEsportesRepository.find(CadastroEsportesNome)
        return data;
    },

    postNewCadastroEsportes: async function (esporte){
        let model = new CadastroEsportesRepository();
        // const data = await CadastroEsportesRepository.create(esporte);
        const data = await model.create(esporte);
        //colocar no banco
        if(data) return {status: "esporte cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o esporte"}
    },
    
    deleteCadastroEsportesPorNome: async function(CadastroEsportesNome) {
        const status = await CadastroEsportesRepository.remove(CadastroEsportesNome);
        if(status) return {status: "Esporte removido com sucesso."}
        else return {status: "Esporte não encontrado."}
    }
}