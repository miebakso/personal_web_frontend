import { createRouter, createWebHistory } from 'vue-router'

// import CategoryCreatePage from '../components/data/category/CategoryCreatePage.vue'


// import TransactionCreatePage from '../components/data/transaction/TransactionCreatePage.vue'

import CategoryIndex from '../components/page/category/CategoryIndex.vue'
import CategoryCreate from '../components/page/category/CategoryCreate.vue'
import CategoryView from '../components/page/category/CategoryView.vue'
import CategoryEdit from '../components/page/category/CategoryEdit.vue'

import TransactionIndex from '../components/page/transaction/TransactionIndex.vue'
import TransactionCreate from '../components/page/transaction/TransactionCreate.vue'
import TransactionView from '../components/page/transaction/TransactionView.vue'
import TransactionEdit from '../components/page/transaction/TransactionEdit.vue'


// import DataView from '../components/data/DataView.vue'
// import TablePage from '../components/data/TablePage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/category', name: 'category', component: CategoryIndex },
        { path: '/category/create', name: 'category.create', component: CategoryCreate },
        { path: '/category/:id', name: 'category.view', component: CategoryView },
        { path: '/category/:id/update', name: 'category.update', component: CategoryEdit },

        { path: '/transaction', name: 'transaction', component: TransactionIndex },
        // { path: '/transaction/create', name: 'transaction.create', component: TransactionCreate },
        { path: '/transaction/:id', name: 'transaction.view', component: TransactionView },
        { path: '/transaction/:id/update', name: 'transaction.update', component: TransactionEdit },
        
        // { path: '/transaction', component: TablePage }
    ]
})


