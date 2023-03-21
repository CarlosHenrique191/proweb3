<template>
    <div>
        <div id="navbar">
            <div class="navbar-links">
                <nuxt-link to="/CadastrarEsportes">Cadastrar Esportes</nuxt-link>
                <nuxt-link to="/Home">Home</nuxt-link>
                <v-spacer />
                <div>
                    <nuxt-link to="/Login">Login</nuxt-link>
                    <nuxt-link to="/Registration">Register</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#navbar {
    height: 60px;
    width: 100%;
    background-color: #333;
}

#navbar .navbar-links {
    margin:auto;
}

#navbar a {
    color: white;
    text-decoration: none;
    margin-right: 15px;
}

</style>