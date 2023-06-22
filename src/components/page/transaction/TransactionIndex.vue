<script setup>
// Libraries
import axios from 'axios'
import { ref, onMounted } from 'vue'
import moment from 'moment'

// Components
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import DataTable from '../../table/DataTable.vue'

// Static Data, Category col and header names
import { TRANSACTION_COLUMNS, COLUMN_NAMES } from './enum.js'


const transactions = ref([])

// Fetch all the Transactions 
const fetchTransactions = async() => {
    axios.get('http://127.0.0.1:8000/transactions/')
    .then(response => {
        const formatedTransactions = response.data.map(data => ({
           ...data, 'category_name': data.category.name, 'date': moment(data.date).format('YYYY-MM-DD') 
        }))
        transactions.value = formatedTransactions
    })
    .catch(error => {
        console.log(error)
    })
}

onMounted(async () => {
  await fetchTransactions()
})
</script>

<template>
    <BaseTemplate>
        <template #pannel>
            <PannelButton name="Create" name_route="transaction.create" btn_css="btn btn-success" />
        </template>
        <template #content>
            <DataTable name_route="transaction.view" :table_headers="TRANSACTION_COLUMNS" :col_names="COLUMN_NAMES" :rows_data="transactions"  />
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>