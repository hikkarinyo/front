<template>
    <div>
<!--        <div class="form-group">
            <router-link to="/" class="btn btn-dark">Назад</router-link>
        </div>

        <div class="panel panel-default">
            <h3 class="panel-heading">Регистрация товара</h3>
            <div class="panel-body">
                <form @submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Артикул</label>
                            <input type="text" v-model="commodity.vendorCode" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Наименование товара</label>
                            <input type="text" v-model="commodity.name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-dark">Добавить</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>-->
        <template>
            <div>
                <div class="form-group">
                    <router-link to="/" class="btn btn-dark">Назад</router-link>
                </div>
                <h3>Регистрация товара</h3>
                <b-form @submit.prevent="saveForm()">
                    <b-form-group >
                        <b-form-group label="Артикул" label-for="name">
                            <b-form-input v-model="commodity.vendorCode" :state="validationCode" id="name"></b-form-input>
                            <b-form-invalid-feedback :state="validationCode">
                                Пожалуйста, введите артикул не менее 1 символов.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="validationCode">
                                Введите не менее 1 символов.
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-form-group>
                    <b-form-group >
                        <b-form-group label="Наименование товара" label-for="name">
                            <b-form-input v-model="commodity.name" :state="validation" id="name"></b-form-input>
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
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "v-create",
        data: function () {
            return {
                commodity: {
                    vendorCode: '',
                    name: '',
                }
            }
        },
        methods: {
            saveForm() {
                let app = this;
                let newCommodity = app.commodity;
                axios.post('http://localhost:8080/api/commodity/', newCommodity)
                    .then(function () {
                        app.$router.push({path: '/'});
                    })
                    .catch(function () {
                        alert("Не удалось добавить товар");
                    });
            }
        },
        computed: {
            validation() {
                return this.commodity.name.length >= 2
            },
            validationCode() {
                return this.commodity.vendorCode.length >= 1
            }
        }

    }
</script>
<style >
</style>