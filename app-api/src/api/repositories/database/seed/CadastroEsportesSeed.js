const CadastroEsportes = require("../model/CadastroEsportes");

module.exports = (database) => {
    database.addEsporte(
        new CadastroEsportes(
            {
                nome: "Futebol",
                descricao: "Testes",
            }
        )
    )
}