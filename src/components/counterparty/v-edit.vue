<template>
    <div>
        <div class="form-group">
            <router-link to="/counterparty" class="btn btn-dark">Назад</router-link>
        </div>
        <h3>Редактирование контрагента</h3>
        <b-form @submit.prevent="saveForm()">
            <b-form-group >
                <b-form-group label="Наименование контрагента" label-for="name">
                    <b-form-input v-model="counterparty.name" :state="validation" id="name"></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        Пожалуйста, введите наименование контрагента.
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                        Введите не менее 2 символов.
                    </b-form-valid-feedback>
                </b-form-group>
            </b-form-group>
            <b-button type="submit" variant="dark">Изменить</b-button>
        </b-form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "v-edit",
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.counterparty_id = id;
            axios.get('http://localhost:8080/api/counterparty/' + id)
                .then(function (resp) {
                    app.counterparty = resp.data;
                })
                .catch(function () {
                    alert("Не удалось загрузить товар")
                });
        },
        data: function () {
            return {
                counterparty: {
                    name: '',
                },
            }
        },
        methods: {
            saveForm() {
                let app = this;
                let newCounterparty = app.counterparty;
                axios.put('http://localhost:8080/api/counterparty/' + app.counterparty_id, newCounterparty)
                    .then(function () {
                        app.$router.push('/counterparty');
                    })
                    .catch(function () {
                        alert("Не удалось изменить товар");
                    });
            }
        },
        computed: {
            validation() {
                return this.counterparty.name.length > 2
            }
        }
    }
</script>

<style>
</style>