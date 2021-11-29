<template>
    <div>
        <div class="form-group">
            <router-link to="/counterparty" class="btn btn-dark">Назад</router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Контрагент</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{{ counterparty.name }}</td>
                <td>
                    <router-link class="btn btn-outline-dark"
                                 :to="{name: 'edit_counterparty', params: {id: counterparty.id}}">
                        <img src="../../assets/icons/pencil-fill.svg" alt="eye-fill">
                    </router-link>
                    <a class="btn btn-outline-dark link"
                       v-on:click="deleteEntry(counterparty.id)">
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
                counterparty: [],
                fields: [
                    {
                        key: 'index',
                        label: '#'
                    },
                    {
                        key: 'name',
                        label: 'Контрагент'
                    },
                    {
                        key: 'action',
                        label: 'Действия'
                    }
                ],
            }
        },
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            axios.get('http://localhost:8080/api/counterparty/' + id)
                .then(function (resp) {
                    app.counterparty = resp.data;
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
                    axios.delete('http://localhost:8080/api/counterparty/' + id)
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