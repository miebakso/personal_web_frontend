import { createRouter, createWebHistory } from 'vue-router'
import CategoryMainPage from '../components/data/category/CategoryMainPage.vue'
import CategoryCreatePage from '../components/data/category/CategoryCreatePage.vue'
import TransactionMainPage from '../components/data/category/CategoryMainPage.vue'
import TransactionCreatePage from '../components/data/category/CategoryMainPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/data/category', name: 'category', component: CategoryMainPage },
        { path: '/data/category/create', name: 'categoryCreate', component: CategoryCreatePage },
        { path: '/data/transaction', name: 'transaction', component: TransactionMainPage },
        { path: '/data/transaction', name: 'transactionCreate', component: TransactionCreatePage },
        { path: '/transaction', component: CategoryMainPage }
    ]
})


