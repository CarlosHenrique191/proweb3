<template>
    <div>
        <h1> Cadastro de Evento Esportivo </h1>
        <form action="Script_do_Formulario.php" method="post" @submit="NovoEvento">
            <!-- ESPORTE -->
            <fieldset>
                <legend>Selecione o esporte</legend>
                <table cellspacing="10">
                    <tr>
                        <td>
                            <label for="esporte">Esporte:</label>
                        </td>
                        <td align="left">
                            <select name="esporte">
                                <option value= 1 >Futebol</option>
                                <option value= 2 >Basquete</option>
                                <option value= 3 >Volei</option>
                                <option value= 4 >Handebol</option>
                                <option value= 5 >Futsal</option>
                                <option value= 5 >ESports</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <br />
            <!-- DADOS DOS LOCAIS -->
            <fieldset>
                <legend>Dados do Evento</legend>
                <table cellspacing="10">
                    <tr>
                        <td>
                            <label for="nome">Time 1: </label>
                        </td>
                        <td align="left">
                            <select name="Time1">
                                <option value= 1 >Time A</option>
                                <option value= 2 >Time B</option>
                                <option value= 3 >Time C</option>
                                <option value= 4 >Time D</option>
                                <option value= 5 >Time E</option>
                                <option value= 6 >Time F</option>
                            </select>
                        </td>
                        <td>
                            <label for="nome">Time 2: </label>
                        </td>
                        <td align="left">
                            <select name="Time2">
                                <option value= 1 >Time A</option>
                                <option value= 2 >Time B</option>
                                <option value= 3 >Time C</option>
                                <option value= 4 >Time D</option>
                                <option value= 5 >Time E</option>
                                <option value= 6 >Time F</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="data">Data:</label>
                        </td>
                        <td align="left">
                            <input type="date" name="data">
                        </td>
                        <td>
                            <label for="hora">Hora:</label>
                        </td>
                        <td align="left">
                            <input type="text" name="hora" size="4">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="local">Local: </label>
                        </td>
                        <td align="left">
                            <select name="Local">
                                <option value= 1 >Local A</option>
                                <option value= 2 >Local B</option>
                                <option value= 3 >Local C</option>
                                <option value= 4 >Local D</option>
                                <option value= 5 >Local E</option>
                                <option value= 6 >Local F</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="arbitragem">Arbitragem: </label>
                        </td>
                        <td align="left">
                            <select name="Arbitragem">
                                <option value= 1 >Arbitragem A</option>
                                <option value= 2 >Arbitragem B</option>
                                <option value= 3 >Arbitragem C</option>
                                <option value= 4 >Arbitragem D</option>
                                <option value= 5 >Arbitragem E</option>
                                <option value= 6 >Arbitragem F</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="imprensa">Imprensa: </label>
                        </td>
                        <td align="left">
                            <select name="Imprensa">
                                <option value= 1 >Imprensa A</option>
                                <option value= 2 >Imprensa B</option>
                                <option value= 3 >Imprensa C</option>
                                <option value= 4 >Imprensa D</option>
                                <option value= 5 >Imprensa E</option>
                                <option value= 6 >Imprensa F</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <br />
            <input type="submit" value="Cadastrar">
            <input type="reset" value="Limpar">
        </form>
    </div>
</template>

<script>
export default {
    name: "CadastroEvento",
    data: function () {
        return {
            novoEvento: {
                nome: "campeonato de verao",
                imprinsa: "...",
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