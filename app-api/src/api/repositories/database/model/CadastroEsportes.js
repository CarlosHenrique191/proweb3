class CadastroEsportes {
    constructor(esporteDados) {
        console.log(esporteDados);
        this.nome = esporteDados.nome ;
        this.descricao = esporteDados.descricao;
    }
}

module.exports = CadastroEsportes;