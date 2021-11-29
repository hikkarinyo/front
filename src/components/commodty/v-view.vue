<template>
    <div>
        <div class="form-group">
            <router-link to="/commodity" class="btn btn-dark">Назад</router-link>
        </div>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">Артикул</th>
                <th scope="col">Наименование товара</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ commodities.vendorCode }}</td>
                <td>{{ commodities.name }}</td>
                <td>
                    <router-link class="btn btn-outline-dark"
                                 :to="{name: 'edit_commodity', params: {id: commodities.vendorCode}}">
                        <img src="../../assets/icons/pencil-fill.svg" alt="eye-fill">
                    </router-link>
                    <a class="btn btn-outline-dark link"
                       v-on:click="deleteEntry(commodities.vendorCode)">
                        <img src="../../assets/icons/trash-fill.svg" alt="eye-fill">
                    </a>
                </td>
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
                commodities: [],
            }
        },
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            axios.get('http://localhost:8080/api/commodity/' + id)
                .then(function (resp) {
                    app.commodities = resp.data;
                    console.log(resp.data);
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Не удалось загрузить товар");
                });
        },
        methods: {
            deleteEntry(id) {
                if (confirm("Вы действительно хотите удалить его?")) {
                    let app = this;
                    axios.delete('http://localhost:8080/api/commodity/' + id)
                        .then(function () {
                            app.$router.push('/');
                        })
                        .catch(function () {
                            alert("Не удалось удалить товар.");
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>