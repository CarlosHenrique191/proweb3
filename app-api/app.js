const express = require("express");
    const cors = require("cors");
    const CadastroEsportesRotas = require("./src/api/routes/CadastroEsportes");
    const CadastroEventoRotas = require("./src/api/routes/CadastroEvento");
    const CalendarioRotas = require("./src/api/routes/Calendario");
    const app = express();

    //Configuração dos middlewares
    app.use(cors());

    app.use("/api", CadastroEsportesRotas);

    app.use("/api", CadastroEventoRotas);

    app.use("/api", CalendarioRotas);


    //Configuração das rotas da API
    app.get("/", (req, res) =>{
        res.send("Express server");
        res.end();
    });

    //Exporta o aplicativo express configurado
    module.exports = app;