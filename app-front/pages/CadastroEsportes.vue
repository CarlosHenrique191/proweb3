<template>
    <div id="default-body">
        <b-card bg-variant="light">
            <b-form @submit="NovoEsporte">
                <b-form-group label-cols-lg="3" label="Cadastro de Esporte" label-size="lg"
                    label-class="font-weight-bold pt-0" class="mb-0">
                    <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="3" label-align-sm="right">
                        <b-form-input v-model="novoEsportes.nome" id="nome-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Descrição:" label-for="desc-input" label-cols-sm="3" label-align-sm="right"
                        description="Descreva sucintamente o esporte que deseja adicionar.">
                        <b-form-input v-model="novoEsportes.descricao" id="desc-input"></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-button type="submit">Cadastrar Esporte</b-button>
            </b-form>
        </b-card>

    </div>
</template>

<script>
//Login do Video 
//Nao funcionou... eu acho..
export default {
    /*
    async asyncData({ $axios }) {
        let items, totalRows;
        try {
        const response = await $axios.$get('patrimonio');
        items = response;
        totalRows = items.length;
        } catch (ex) {
        console.log(ex);
        }
        return { items, totalRows }
    },
    */
    name: "CadastroEsportes",
    data: function () {
        return {
            novoEsportes: {
                nome: "volei",
                descricao: "Composto por 6 jogadores em cada time..."
            }
        };
    },
    //Exemplo do professor // Não entendi essa parte :(
    // async asyncData({ $axios }) {
    //     let items, totalRows;
    //     try {
    //         // não era para ser uma url ?
    //         const response = await $axios.$get('esporte');
    //         items = response;
    //         totalRows = items.length;
    //     } catch (ex) {
            // console.log(ex);
    //     }
    //     return { items, totalRows }
    // },
    methods: {
        NovoEsporte: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoEsporte));
            this.$axios
                .$post("CadastroEsportes", this.novoEsporte)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-esporte');
                    this.show = false;
                    this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo esporte');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-esporte');
                    this.show = false;
                });
        },
    }
}

</script>

<style>
#default-body {
    max-width: 550px;
    margin: auto;
    margin-top: 100px;
}
</style>

