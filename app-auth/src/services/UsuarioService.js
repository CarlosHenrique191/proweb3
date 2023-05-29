require('dotenv').config();
// This will help us connect to the database
const dbo = require('../db/conn');
const {ObjectId} = require("mongodb");
const collName = 'usuarios';

module.exports = {
    async create(matchUser, callbackAtlasResponse) {
        const dbConnect = dbo.getDb();

        await dbConnect
            .collection(collName)
            .insertOne(matchUser, callbackAtlasResponse);
    },

    async deletadoPorUsuarioNome(req, res, next) {

    },

    async update(req, res, next) {

    },

    async getUsuarioPorId(usuarioId){
        const dbConnect = dbo.getDb();
        return await dbConnect
            .collection(collName)
            .findOne(
                {
                    // Quando buscar por Id, é importante encapusalar o Id dentro de um objeto ObjectId
                    // ver mais em https://www.mongodb.com/docs/manual/reference/method/ObjectId/ 
                    _id: ObjectId(usuarioId)
                }
            );
    },

    async getPorUsuarioNome(username) {
        const dbConnect = dbo.getDb();

        return await dbConnect
            .collection(collName)
            .findOne(
                // {
                //     $where: () => {
                //         return this.username == username 
                //     }
                // }
                {
                    username:username
                }
                // projection configura quais campos irão ser retornados pelo MongDB
                // , {
                // projection: {
                //     _id: 1,
                //     username: 1,
                //     pwd: 1,
                // }
            );
    },
}