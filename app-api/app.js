const express = require("express");
    const cors = require("cors");
    const CadastroEsportesRotas = require("./src/api/routes/CadastroEsportes");
    const app = express();

    //Configuração dos middlewares
    app.use(cors());

    app.use("/api", CadastroEsportesRotas);

    //Configuração das rotas da API
    app.get("/", (req, res) =>{
        res.send("Express server");
        res.end();
    });

    //Exporta o aplicativo express configurado
    module.exports = app;