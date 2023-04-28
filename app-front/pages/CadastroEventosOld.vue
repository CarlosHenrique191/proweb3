<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoEvento">
                <b-form-group label-cols-lg="3" label="Cadastro de Evento" label-size="lg"
                    label-class="font-weight-bold pt-0" class="mb-0">
                    <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="3" label-align-sm="right">
                        <b-form-input v-model="novoEvento.nome" id="nome-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Descrição:" label-for="desc-input" label-cols-sm="3" label-align-sm="right"
                        description="Descreva sucintamente o evento que deseja adicionar.">
                        <b-form-input v-model="novoEvento.descricao" id="desc-input"></b-form-input>
                    </b-form-group>
                    <b-form-select v-model="novoEvento.local" :options="exemploLocal" size="sm" class="mt-3"></b-form-select>
                    <div class="mt-3">Local selecionado: <strong>{{ novoEvento.local }}</strong></div>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "CadastroEvento",
    data: function () {
        return {
            novoEvento: {
                nome: "campeonato de verao",
                descricao: "...",
                local: null
            },
            exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoEvento: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoEvento));
            this.$axios
                .$post("CadastroEvento", this.novoEvento)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-evento');
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
    max-width: 650px;
    margin: auto;
    margin-top: 100px;
}
</style>

