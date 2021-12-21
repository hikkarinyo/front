<template>
    <div>
        <div class="form-group">
            <router-link to="/waybill" class="btn btn-dark">Назад</router-link>
        </div>
        <h3>Накладная</h3>
        <b-form @submit.prevent="saveForm()">
            <b-form-group>
                <b-form-group label="Тип накладной" label-for="type">
                    <b-form-input v-model="waybill.type" id="type"></b-form-input>
                </b-form-group>
                <b-form-group label="Контрагент" label-for="counterpartyId">
                    <b-select id="counterpartyId" v-model="waybill.counterpartyId">
                        <option v-for="counterparty in counterparties" :key="counterparty.id" :value="counterparty.id"
                                id="counterpartyId">{{counterparty.name}}
                        </option>
                    </b-select>
                </b-form-group>
                <b-form-group label="Дата" label-for="createdAt">
                    <input type="datetime-local" v-model="waybill.createdAt" id="createdAt">
                </b-form-group>
            </b-form-group>
            <b-row>
                <b-form-group v-for="(commodity, name) in waybill.commodities" :key="name">
                    <b-col>
                        <b-form-group label="Груз" label-for="venodorCode">
                            <b-select id="venodorCode" aria-label="Выберите груз" v-model="commodity.vendorCode">
                                <option v-for="commodity in commodities" :key="commodity.vendorCode"
                                        :value="commodity.vendorCode" id="vendorCOde">{{commodity.name}}
                                </option>
                            </b-select>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="Количество" label-for="amount">
                            <b-form-input v-model="commodity.amount" id="amount"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group>
                            <b-button @click="deleteCommodities(index)" variant="dark">-</b-button>
                        </b-form-group>
                    </b-col>
                </b-form-group>
            </b-row>
            <b-form-group>
                <b-button @click="addCommodities()" variant="dark">+</b-button>
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
                waybill: {
                    type: '',
                    counterpartyId: '',
                    commodities:
                        [{
                            vendorCode: '',
                            amount: ''
                        }],
                    createdAt: '',
                },
                counterparties: [],
                commodities: [],

            }
        },
        methods: {
            saveForm() {
                let app = this;
                let newWaybill = app.waybill;
                axios.post('http://localhost:8080/api/waybill/', newWaybill)
                    .then(function () {
                        app.$router.push({path: '/waybill'});
                    })
                    .catch(function () {
                        alert("Не удалось добавить накладную!");
                    });
            },
            addCommodities() {
                this.waybill.commodities.push({vendorCode: '', amount: ''})
            },
            deleteCommodities: function (index) {
                this.waybill.commodities.splice(index, 1);
            }

        },
        mounted() {
            let app = this;
            axios.get('http://localhost:8080/api/counterparty/all')
                .then(function (resp) {
                    app.counterparties = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить товар");
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
    }
</script>
<style>
</style>