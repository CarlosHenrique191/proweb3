class CadastroEsportes {
    constructor(esporteDados) {
        console.log(esporteDados);
        this.esporte = esporteDados.nome ;
        this.esporte = esporteDados.descricao;
    }
}

module.exports = CadastroEsportes;