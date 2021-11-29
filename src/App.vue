<template>
    <div id="app">
        <v-nav></v-nav>
        <div class="auth-wrapper">
            <div class="auth-inner">
                <keep-alive><router-view></router-view></keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import vNav from './components/v-nav.vue';

    export default {
        name: 'App',
        components: {
            vNav,
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

    * {
        box-sizing: border-box;
    }

    body {
        background: #1C8EF9;
        min-height: 100vh;
        display: flex;
        font-weight: 400;
        font-family: 'Fira Sans', sans-serif;
    }

    h2, h3, h4, h5, h6, label, span {
        font-weight: 500;
        font-family: 'Fira Sans', sans-serif;
    }

    body, html, #app, .auth-wrapper {
        width: 100%;
        height: 100%;
    }

    #app {
        text-align: center;
    }

    .auth-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
    }

    .auth-inner {

        margin: auto;
        background: white;
        box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
    }

    .auth-wrapper{
        border-color: #167bff;
        box-shadow: none;
    }

    .auth-wrapper h3 {
        text-align: center;
        margin: 0;
        line-height: 1;
        padding-bottom: 20px;
    }
</style>
