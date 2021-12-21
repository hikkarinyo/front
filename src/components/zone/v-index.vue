<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'create_zone'}" class="btn btn-dark">Добавить зону</router-link>
        </div>
        <div class="panel panel-default">
            <h3>Зоны</h3>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Количество</th>
                        <th>Ряд</th>
                        <th>Столбец</th>
                        <th>Товары</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(zone, index) in zones" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ zone.amount }}</td>
                        <td>{{ zone.row }}</td>
                        <td>{{ zone.column }}</td>
                        <td>
                            <div v-for="(com,index) in zone.commodity" :key="index">
                               <p>{{com}} </p>
                            </div>
                        </td>
                        <td>
                            <router-link class="btn btn-outline-dark"
                                         :to="{name: 'view_zone', params: {id: zone.id}}">
                                <img src="../../assets/icons/eye-fill.svg" alt="eye-fill">
                            </router-link>
                            <router-link class="btn btn-outline-dark"
                                         :to="{name: 'edit_zone', params: {id: zone.id}}">
                                <img src="../../assets/icons/pencil-fill.svg" alt="pencil-fill">
                            </router-link>
                            <a class="btn btn-outline-dark" v-on:click="deleteEntry(zone.id, index)">
                                <img src="../../assets/icons/trash-fill.svg" alt="trash-fill">
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "v-index",
        data: function () {
            return {
                zones: {},
            }
        },
        mounted() {
            let app = this;
            axios.get('http://localhost:8080/api/zone/all')
                .then(function (resp) {
                    app.zones = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить зоны");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Вы действительно хотите удалить его?")) {
                    let app = this;
                    axios.delete('http://localhost:8080/api/zone/' + id)
                        .then(function () {
                            app.zones.splice(index, 1);
                        })
                        .catch(function () {
                            alert("Не удалось удалить зону.");
                        });
                }
            },
        },
    }
</script>

<style>

</style>