
const CadastroEsportesRepository = require("../repositories/CadastroEsportesRepository");

module.exports = {
    /*getAllItemPatrimonio: async function (){
        const data = await CadastroEsportesRepository.all();
        return data;
    },*/

    getCadastroEsportesPorNome: async function (CadastroEsportesNome){
        const data = await CadastroEsportesRepository.find(CadastroEsportesNome)
        return data;
    },

    postNewCadastroEsportes: async function (esporte){
        const data = await CadastroEsportesRepository.create(esporte);
        if(data) return {status: "esporte cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o esporte"}
    },
    
    deleteCadastroEsportesPorNome: async function(CadastroEsportesNome) {
        const status = await CadastroEsportesNomeRepository.remove(CadastroEsportesNome);
        if(status) return {status: "Esporte removido com sucesso."}
        else return {status: "Esporte não encontrado."}
    }
}