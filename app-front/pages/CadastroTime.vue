<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoTime">
                <h1><em>Cadastro de Time</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoTime.esporte" :options="esporte" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados do time</em></h4>
                <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoTime.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Tecnico:" label-for="tecnico-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoTime.tecnico" :options="tecnico" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
    let esportes, totalRows;
    try {
      const response = await $axios.$get('CadastroEsportes');
      esportes = response;
      totalRows = esportes.length;
    } catch (ex) {
      console.log(ex);
    }
    return { esportes, totalRows }
    },
    
    name: "CadastroTime",
    data: function () {
        return {
            novoTime: {
                esporte: "",
                nome: "",
                tecnico: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoTime: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoTime));
            this.$axios
                .$post("CadastroTime", this.novoTime)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-time');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo time');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-time');
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

