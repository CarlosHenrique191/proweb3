<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoEvento">
                <h1><em>Cadastro de Eventos</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.esporte" :options="esporte" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados do evento</em></h4>
                <b-form-group label="Time A:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.timeA" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Time B:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.timeB" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Data:" label-for="data-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoEvento.data" id="data-input" :type="date"></b-form-input>
                </b-form-group>
                <b-form-group label="Hora:" label-for="hora-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoEvento.hora" id="hora-input" :type="time"></b-form-input>
                </b-form-group>
                <b-form-group label="Local:" label-for="local-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.local" :options="local" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Arbitragem:" label-for="arbitragem-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.arbitragem" :options="arbitragem" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Imprensa:" label-for="imprensa-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.imprensa" :options="local" size="sm" class="mt-3"></b-form-select>
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
    
    name: "CadastroEvento",
    data: function () {
        return {
            novoEvento: {
                esporte: "",
                timeA: "",
                timeB: "",
                data: "",
                hora: "",
                local: "",
                arbitragem: "",
                imprensa: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
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
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo evento');
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

