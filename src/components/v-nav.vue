<template>
    <nav id="v-nav" class="navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div class="container">
            <router-link to="/" class="navbar-brand">Система складского учета</router-link>
            <div class="collapse navbar-collapse">
                <ul  class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/commodity" class="nav-link">Товары на складе</router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link to="#" class="nav-link">Зоны</router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link to="/counterparty" class="nav-link">Контерагенты</router-link>
                    </li>
                    <li  class="nav-item">
                        <router-link to="/waybill" class="nav-link">Накладная</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "v-nav"
    }
</script>

<style>

</style>