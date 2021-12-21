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
        name: "v-create",
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
        methods: {
            saveForm() {
                let app = this;
                let newZone = app.zone;
                axios.post('http://localhost:8080/api/zone/', newZone)
                    .then(function () {
                        app.$router.push({path: '/zone'});
                    })
                    .catch(function () {
                        alert("Не удалось добавить зону!");
                    });
            },
        },
        mounted() {
            let app = this;
            axios.get('http://localhost:8080/api/commodity/all')
                .then(function (resp) {
                    app.commodities = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить товар");
                });
        },
    }
</script>
