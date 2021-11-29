<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-dark">Назад</router-link>
        </div>
        <h3>Регистрация контрагента</h3>
        <b-form @submit.prevent="saveForm()">
            <b-form-group>
                <b-form-group label="Наименование контрагента" label-for="name">
                    <b-form-input v-model="counterparty.name" :state="validation" id="name"></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        Пожалуйста, введите наименование товара не менее 2 символов.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                        Введите не менее 2 символов.
                    </b-form-valid-feedback>
                </b-form-group>
            </b-form-group>
            <b-button type="submit" variant="dark">Добавить</b-button>
        </b-form>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name: "v-create",
        data: function () {
            return {
                counterparty: {
                    name: '',
                }
            }
        },
        methods: {
            saveForm() {
                let app = this;
                let newСounterparty = app.counterparty;
                axios.post('http://localhost:8080/api/counterparty/', newСounterparty)
                    .then(function () {
                        app.$router.push({path: '/counterparty'});
                    })
                    .catch(function () {
                        alert("Не удалось добавить товар");
                    });
            }
        },
        computed: {
            validation() {
                return this.counterparty.name.length >= 2
            },
        }

    }
</script>
<style>
</style>