<script setup>
import BaseTemplate from '../BaseTemplate.vue'
import PannelButton from '../../top-pannel/PannelButton.vue'
import Transaction from '../../transaction/Transaction.vue'
import { onMounted, ref } from 'vue'
import { router } from '../../../router/route.js'
import axios from 'axios'
import moment from 'moment'

const id = ref(router.currentRoute._value.params.id)
const transaction =  ref({})

const fetchTransactionById = async () => {
    await axios.get('http://127.0.0.1:8000/transactions/'+id.value)
    .then(response => {
        const trans_obj = {
            'id': response.data.id,
            'date': moment(response.data.date).format('YYYY-MM-DD'),
            'category': response.data.category.name,
            'description': response.data.description,
            'total': response.data.total,
            'notes': response.data.notes
        }
        transaction.value = trans_obj
    })
    .catch(error => {
        console.log(error)
    })
}

const deleteTransaction = async () => {
    await axios.delete('http://127.0.0.1:8000/transactions/'+id.value)
    .then(response => {
        router.push({name: 'transaction'})
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
                <PannelButton name="Edit" name_route="transaction.update" btn_css="btn btn-warning" />
                <PannelButton name="Delete" @click="deleteTransaction" btn_css="btn btn-danger" />
            </div>
        </template>
        <template #content>
            <Transaction :transaction='transaction'  />
        </template>
    </BaseTemplate>
</template>

<style scoped>

</style>