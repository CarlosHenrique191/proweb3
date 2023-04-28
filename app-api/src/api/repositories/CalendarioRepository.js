const database = require("./database/database");
const Calendario = require("./database/model/Calendario");
const CalendarioSeed = require("./database/seed/CalendarioSeed");

module.exports = class CalendarioRepository{
    constructor(){
        CalendarioSeed(database);
        this.database = database;
    }
    async create(calendario){
        const newItem = new Calendario(calendario);
        database.addData(newData);
        return newData;
    }
    async find(calendario){
        return database.AcharPorData(calendario);
    }
    async remove(calendarioData){
        return database.deletePorData(calendarioData);
    }
    async all(){
        return database.getAllItems();
    }
}
