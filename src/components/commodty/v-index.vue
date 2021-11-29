<template>
    <div>


            <div class="form-group">
                <router-link :to="{name: 'create_commodity'}" class="btn btn-dark">Добавить товар</router-link>
            </div>
            <div class="panel panel-default">
                <h3>Товары на складе</h3>
                <div class="panel-body">
                    <b-form-group>
                        <b-input-group size="sm">
                            <b-form-input
                                    id="filter-input"
                                    v-model="filter"
                                    type="search"
                                    placeholder="Введите для поиска"
                            ></b-form-input>

                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''" >Очистить</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                    <b-table id="my-table"
                             striped hover
                             :items="commodities"
                             :fields="fields"
                             :per-page="perPage"
                             :current-page="currentPage"
                    >
                        <template #cell(action)="data">
                            <router-link class="btn btn-outline-dark"
                                         :to="{name: 'view_commodity', params: {id:data.item.vendorCode}}">
                                <img src="../../assets/icons/eye-fill.svg" alt="eye-fill">
                            </router-link>
                            <router-link class="btn btn-outline-dark"
                                         :to="{name: 'edit_commodity', params: {id:data.item.vendorCode}}">
                                <img src="../../assets/icons/pencil-fill.svg" alt="pencil-fill">
                            </router-link>
                            <a class="btn btn-outline-dark" v-on:click="deleteEntry(data.item.vendorCode, data.index)">
                                <img src="../../assets/icons/trash-fill.svg" alt="trash-fill">
                            </a>
                        </template>
                    </b-table>
                    <div class="pagination">
                        <b-pagination
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                aria-controls="my-table"
                        ></b-pagination>
                    </div>

                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "v-index",
        data: function () {
            return {
                filter: null,
                commodities: [],
                fields: [
                    {
                        key: 'vendorCode',
                        label: 'Артикул'
                    },
                    {
                        key: 'name',
                        label: 'Наименование товара'
                    },
                    {
                        key: 'action',
                        label: 'Действия'
                    }
                ],
                perPage: 5,
                currentPage: 1,
            }
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
        methods: {
            deleteEntry(id, index) {
                if (confirm("Вы действительно хотите удалить его?")) {
                    let app = this;
                    axios.delete('http://localhost:8080/api/commodity/' + id)
                        .then(function () {
                            app.commodities.splice(index, 1);
                        })
                        .catch(function () {
                            alert("Не удалось удалить товар.");
                        });
                }
            },
        },
        computed: {
            rows() {
                return this.commodities.length
            },

        }
    }
</script>

<style>
    .pagination {
        display: flex;
        justify-content: end;
    }
</style>