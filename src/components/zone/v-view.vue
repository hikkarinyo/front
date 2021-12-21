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
                        <th>Количество</th>
                        <th>Ряд</th>
                        <th>Столбец</th>
                        <th>Товары</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{ zones.amount }}</td>
                        <td>{{ zones.row }}</td>
                        <td>{{ zones.column }}</td>
                        <td>
                            <div>
                                <p>{{zones.commodity.vendorCode}} </p>
                                <p>{{zones.commodity.name}} </p>
                            </div>
                        </td>
                        <td>
                            <router-link class="btn btn-outline-dark"
                                         :to="{name: 'edit_zone', params: {id: zones.id}}">
                                <img src="../../assets/icons/pencil-fill.svg" alt="pencil-fill">
                            </router-link>
                            <a class="btn btn-outline-dark" v-on:click="deleteEntry(zones.id, index)">
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
        name: "v-view",
        data: function () {
            return {
                zones: [],
            }
        },
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            axios.get('http://localhost:8080/api/zone/' + id)
                .then(function (resp) {
                    app.zones = resp.data;
                    console.log(resp.data);
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить зону");
                });
        },
        methods: {
            deleteEntry(id) {
                if (confirm("Вы действительно хотите удалить зону?")) {
                    let app = this;
                    axios.delete('http://localhost:8080/api/zone/' + id)
                        .then(function () {
                            app.$router.push('/zone');
                        })
                        .catch(function () {
                            alert("Не удалось удалить зону.");
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>