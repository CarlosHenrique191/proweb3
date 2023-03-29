const database = require("./database/database");
const CadastroEsportes = require("./database/model/CadastroEsportes");
const CadastroEsportesSeed = require("./database/seed/CadastroEsportesSeed");

module.exports = class CadastroEsportesRepository{
    constructor(){
        CadastroEsportesSeed(database);
        this.database = database;
    }
    async create(cadastroEsportes){
        const newItem = new CadastroEsportes(cadastroEsportes);
        database.addEsporte(newEsporte);
        return newEsporte;
    }
    async find(cadastroEsportes){
        return database.AcharPorNome(cadastroEsportes);
    }
    async remove(cadastroEsportesNome){
        return database.deletePorNome(cadastroEsportesNome);
    }
    // que isso?
    async all(){
        return database.getAllItems();
    }
}
