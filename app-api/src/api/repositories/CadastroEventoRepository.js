const database = require("./database/database");
const CadastroEvento = require("./database/model/CadastroEsportes");
const CadastroEventoSeed = require("./database/seed/CadastroEventoSeed");

module.exports = class CadastroEventoRepository{
    constructor(){
        CadastroEventoSeed(database);
        this.database = database;
    }
    async create(cadastroEvento){
        const newItem = new CadastroEvento(cadastroEvento);
        database.addEvento(newEvento);
        return newEvento;
    }
    async find(cadastroEvento){
        return database.AcharPorNome(cadastroEvento);
    }
    async remove(cadastroEventoNome){
        return database.deletePorNome(cadastroEventoNome);
    }
    async all(){
        return database.getAllItems();
    }
}
