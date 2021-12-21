<template>
    <div>
        <div class="form-group">
            <router-link to="/zone" class="btn btn-dark">Назад</router-link>
        </div>
        <h3>Зона</h3>
        <b-form @submit.prevent="saveForm()">
            <b-form-group>
                <b-form-group label="Груз" label-for="commodityVendorCode">
                    <b-select id="commodityVendorCode" v-model="zone.commodityVendorCode">
                        <option v-for="commodity in commodities" :key="commodity.vendorCode" :value="commodity.vendorCode"
                                id="commodityVendorCode">{{commodity.name}}
                        </option>
                    </b-select>
                </b-form-group>
                <b-form-group label="Количество" label-for="amount">
                    <b-form-input v-model="zone.amount" id="amount"></b-form-input>
                </b-form-group>
                <b-form-group label="Ряд" label-for="row">
                    <b-form-input v-model="zone.row" id="row"></b-form-input>
                </b-form-group>
                <b-form-group label="Столбец" label-for="column">
                    <b-form-input v-model="zone.column" id="column"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="dark">Добавить</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "v-edit",
        data: function () {
            return {
                zone: {
                    amount: '',
                    row: '',
                    commodityVendorCode: '',
                    column: '',
                },
                commodities: [],
            }
        },
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.zone_id = id;
            axios.get('http://localhost:8080/api/zone/' + id)
                .then(function (resp) {
                    app.zone = resp.data;
                })
                .catch(function () {
                    alert("Не удалось загрузить зону")
                });
            axios.get('http://localhost:8080/api/commodity/all')
                .then(function (resp) {
                    app.commodities = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить товар");
                });
        },
        methods: {
            saveForm() {
                let app = this;
                let newZone = app.zone;
                axios.put('http://localhost:8080/api/zone/' + app.zone_id, newZone)
                    .then(function () {
                        app.$router.push('/zone');
                    })
                    .catch(function () {
                        alert("Не удалось изменить зону");
                    });
            }
        },
    }
</script>

<style scoped>

</style>