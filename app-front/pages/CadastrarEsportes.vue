<template>
    <div id="default-body">
        <b-card bg-variant="light">
            <b-form @submit="doCadastro">
                <b-form-group
                label-cols-lg="3"
                label="Cadastro de Esporte"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
                >
                <b-form-group
                    label="Nome:"
                    label-for="nome-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Descrição:"
                    label-for="desc-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    description="Descreva sucintamente o esporte que deseja adicionar."
                >
                    <b-form-input id="desc-input"></b-form-input>
                </b-form-group>
                </b-form-group>
                <b-button type="submit">Cadastrar Esporte</b-button>
            </b-form>
        </b-card>
        
    </div>
</template>

<script>

</script>

<style>
#default-body {
    max-width: 800px;
    margin: auto;
    margin-top: 200px;
}

.cadastro{
    
}
</style>

