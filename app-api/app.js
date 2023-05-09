const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const CadastroEsportesRotas = require("./src/api/routes/CadastroEsportes");
const CadastroEventoRotas = require("./src/api/routes/CadastroEvento");
const CalendarioRotas = require("./src/api/routes/Calendario");
const app = express();

    //Configuração dos middlewares
    app.use(cors());
    app.use(bodyParser.json());

    //Configuração das rotas da API
    
    app.use("/api", CadastroEsportesRotas);

    app.use("/api", CadastroEventoRotas);

    app.use("/api", CalendarioRotas);



    /*app.get("/", (req, res) =>{
        res.send("Express server");
        res.end();
    });*/

    //Exporta o aplicativo express configurado
    module.exports = app;