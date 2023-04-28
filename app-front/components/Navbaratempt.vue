<template>
    <div id="divNavbar">
        <b-navbar type="dark" variant="dark" fixed="top" >
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav >
                    <b-nav-item href="/Home"><img src="../static/Logo.png" /></b-nav-item>
                    <b-nav-item href="/CadastroEsportes">Cadastrar Esportes</b-nav-item>
                    <b-nav-item href="/CadastroLocais">Registrar Local</b-nav-item>
                    <b-nav-item href="/CadastroEventos">Registrar Evento</b-nav-item>
                    <b-nav-item href="/Calendario">Calendario</b-nav-item>
                    
                    
                    <!-- Navbar dropdowns 
                    <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    </b-nav-item-dropdown>
                    -->
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/Login">Login</b-nav-item>
                    <b-nav-item href="/Registrar">Registrar-se</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
#divNavbar {
    font-size: 15pt;
}
</style>