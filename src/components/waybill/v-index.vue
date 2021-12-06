<template>
    <div>
        <div class="form-group">
            <router-link to="/create_waybill" class="btn btn-dark">Создать</router-link>
        </div>

        <table  class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Тип</th>
                <th>К/a</th>
                <th>Грузы</th>
                <th>Дата</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(waybill, index) in waybills" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ waybill.type }}</td>
                <td>{{ waybill.counterparty }}</td>
                <td>
                    <div v-for="(commodity, name) in waybill.commodities" :key="name">
                        <p>Наименование: {{commodity.name}} </p>
                        <p> Количество: {{commodity.amount}} </p>
                    </div>

                </td>
                <td>{{ waybill.createdAt }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "v-view",
        data: function () {
            return {
                waybills: {},
            }
        },
        mounted() {
            let app = this;
            axios.get('http://localhost:8080/api/waybill/all')
                .then(function (resp) {
                    app.waybills = resp.data;
                    console.log(resp.data);
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить!");
                });
        },
        methods: {},
    }
</script>

<style scoped>

</style>