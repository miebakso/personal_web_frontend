<script setup>
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import TransactionForm from '../../transaction/TransactionForm.vue'

import {ref, onMounted} from 'vue'
import { router } from '../../../router/route.js'

import axios from 'axios'
import moment from 'moment'



const id = ref(router.currentRoute._value.params.id)
const transaction =  ref({})

async function updateTransaction(transaction) {
    console.log('UPDATE TRANSACTION')
    console.log(transaction)
}

const fetchTransactionById = async () => {
    await axios.get('http://127.0.0.1:8000/transactions/'+id.value)
    .then(response => {
        const trans_obj = {
            'date': new Date(response.data.date),
            'category_id': response.data.category.id,
            'description': response.data.description,
            'total': response.data.total,
            'notes': response.data.notes
        }
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxasdasdas')
        console.log(trans_obj.date)
        transaction.value = trans_obj
    })
    .catch(error => {
        console.log(error)
    })
}

onMounted(async () => {
  await fetchTransactionById()
})

</script>

<template>
    <BaseTemplate>
        <template #pannel>
            <div class="btn-group" role="group" aria-label="Edit/Delete buttons">
                <PannelButton name="Edit" name_route="category.update" btn_css="btn btn-warning" />
                <PannelButton name="Delete" name_route="category.delete" btn_css="btn btn-danger" />
            </div>
        </template>
        <template #content>
            <TransactionForm mode="Update"  @submitForm="updateTransaction" :transaction="transaction"/>
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>