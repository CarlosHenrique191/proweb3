const CadastroEsportes = require("./model/CadastroEsportes");

class Banco {
    constructor() {
        this.esporte = []
    }
    addEsportes(novoEsporte) {
        if(novoEsporte instanceof CadastroEsportes){
            this.items.push(novoEsporte)
        }else{
            throw Error("DB: Objeto não é do tipo de Esporte")
        }
    }

    //não entendi isso
    AcharPorNome(nome) {
          return this.esporte.filter(esporte => esporte.nome === nome)[0];
    }

    deletePorNome(cadastroEsportes) {
        let nome = this.nomes.splice(this.nomes.acharNome(nome => cadastroEsportes.nome === cadastroEsportes), 1);
        return item;
    }
}

let banco = new Banco();

module.exports = banco;