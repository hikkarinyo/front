<template>
    <div>
        <div class="form-group">
            <router-link to="/commodity" class="btn btn-dark">Назад</router-link>
        </div>
        <h3>Редактирование товара</h3>
        <b-form @submit.prevent="saveForm()">
            <b-form-group >
                <b-form-group label="Наименование товара" label-for="name">
                    <b-form-input v-model="commodity.name" :state="validation" id="name"></b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        Пожалуйста, введите наименование товара.
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
            app.vendorCode = id;
            axios.get('http://localhost:8080/api/commodity/' + id)
                .then(function (resp) {
                    app.commodity = resp.data;
                })
                .catch(function () {
                    alert("Не удалось загрузить товар")
                });
        },
        data: function () {
            return {
                vendorCode: null,
                commodity: {
                    name: '',
                },
            }
        },
        methods: {
            saveForm() {
                let app = this;
                let newCommodity = app.commodity;
                axios.put('http://localhost:8080/api/commodity/' + app.vendorCode, newCommodity)
                    .then(function () {
                        app.$router.push('/commodity');

                    })
                    .catch(function () {
                        alert("Не удалось изменить товар");
                    });
            }
        },
        computed: {
            validation() {
                return this.commodity.name.length > 2
            }
        }
    }
</script>

<style>
</style>