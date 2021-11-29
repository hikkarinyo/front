import Vue from 'vue'
import Router from 'vue-router'
import vCreateCommodity from '../components/commodty/v-create.vue'
import vEditCommodity from '../components/commodty/v-edit.vue'
import vIndexCommodity from '../components/commodty/v-index.vue'
import vViewCommodity from '../components/commodty/v-view.vue'
import vIndexCounterparty from '../components/counterparty/v-index.vue'
import vCreatCounterparty from '../components/counterparty/v-create.vue'
import vViewCounterparty from '../components/counterparty/v-view.vue'
import vEditCounterparty from '../components/counterparty/v-edit.vue'
import vMenu from '../components/v-menu.vue'
Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'menu',
            component: vMenu,
            props: true,
        },
        {
            path: '/commodity',
            name: 'commodity',
            component: vIndexCommodity,
            props: true,
        },
        {
            path: '/create_commodity',
            name: 'create_commodity',
            component: vCreateCommodity,
        },
        {
            path: '/edit_commodity/:id',
            name: 'edit_commodity',
            component: vEditCommodity,
            props: true
        },
        {
            path: '/commodity/:id',
            name: 'view_commodity',
            component: vViewCommodity,
            props: true
        },
        {
            path: '/counterparty',
            name: 'counterparty',
            component: vIndexCounterparty,
            props: true,
        },
        {
            path: '/create_counterparty',
            name: 'create_counterparty',
            component: vCreatCounterparty,
        },
        {
            path: '/edit_counterparty/:id',
            name: 'edit_counterparty',
            component: vEditCounterparty,
            props: true
        },
        {
            path: '/counterparty/:id',
            name: 'view_counterparty',
            component: vViewCounterparty,
            props: true
        },
    ]
})
